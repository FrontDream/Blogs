# Vue项目接入Eslint与Prettier

# 简介

前端项目，主要有两种选择`ESLint`和`TSLint`。`TSLint`仅针对`TS`代码，因此如果采用`TSLint`规范`TS`代码，`JS`代码需要采用其他工具。而`ESLint`不仅能规范`js`代码，通过配置解析器，也能规范`TS`代码。此外由于性能问题，`TypeScript` 官方决定全面采用`ESLint`。

`Eslint`的主要功能包含代码格式的校验，代码质量的校验，`JS`规范，如用===而不是==判断相等、用驼峰命名变量而不是用下划线。而 `Prettier` 是美丽的意思,只是代码格式的校验（并格式化代码），不会对代码质量进行校验，如单行代码长度、tab 长度、空格、逗号表达式等问题。在实际项目中，`eslint`可以检测出代码问题，并标红，但是并不会自动格式化，需要手动格式化，接入`Prettier`并配置（需要分`webstorm`和`vscode`）可以进行自动化。但是需要考虑到的是，`prettier`和`eslint`的规则有可能冲突，因此需要考虑到当冲突时，需要解决冲突，以谁的标准为准，正常是以`prettier`为准。

# 起步

如果是新的项目，用`vue`官方的脚手架拉取项目时，在下面的步骤中选择`Eslint+Prettier`就好了，我们可以发现，官方也是集成了`Eslint+Prettier`的，因此还是比较靠谱的：

![官方](/Vue/Vue项目接入Eslint与Prettier/官方.png)

## 安装 Eslint 依赖

```javascript
npm i -D eslint babel-eslint eslint-plugin-vue @vue/cli-plugin-eslint
```

- `eslint`: `ESLint`的核心代码

- `babel-eslint`: `eslint` 与 `babel` 整合包

- `eslint-plugin-vue` `@vue/cli-plugin-eslint`: `eslint` 与 `vue` 整合包

当然如果已经安装过了，就可以不用安装了。

## 配置 Eslint

在项目的根目录下，新建`.eslintrc.js`文件，并将下面代码拷贝进去，具体规则看注释。或者看[StandardJS 官方](https://standardjs.com/rules-zhcn.html)

```javascript
// .eslintrc.js
module.exports = {
  root: true,
  parserOptions: {
    // 定义ESLint的解析器
    parser: "babel-eslint",
    sourceType: "module",
  },
  // 指定代码的运行环境
  env: {
    browser: true,
    node: true,
    es6: true,
  },
  extends: [
    //继承 vue 的标准特性
    "plugin:vue/essential",
    "eslint:recommended",
  ],
  // 自定义eslint规则，严格按照StandardJS
  rules: {
    "vue/max-attributes-per-line": [
      2,
      {
        singleline: 10,
        multiline: {
          max: 1,
          allowFirstLine: false,
        },
      },
    ],
    "vue/singleline-html-element-content-newline": "off",
    "vue/multiline-html-element-content-newline": "off",
    "vue/name-property-casing": ["error", "PascalCase"],
    "vue/no-v-html": "off",
    // 两个空格缩进
    indent: [
      2,
      2,
      {
        SwitchCase: 1,
      },
    ],
    // 单引号
    quotes: [
      2,
      "single",
      {
        avoidEscape: true,
        allowTemplateLiterals: true,
      },
    ],
    // 未使用的变量
    "no-unused-vars": [
      2,
      {
        vars: "all",
        args: "after-used",
      },
    ],
    // 关键字前后空格
    "keyword-spacing": [
      2,
      {
        before: true,
        after: true,
      },
    ],
    // function关键字和函数名后面的空格
    "space-before-function-paren": [2, "never"],
    // 除了null,其他用===而不是==
    eqeqeq: ["error", "always", { null: "ignore" }],
    // 字符串拼接操作符直接用空格
    "space-infix-ops": 2,
    // 逗号前面不用空格，逗号后面用空格
    "comma-spacing": [
      2,
      {
        before: false,
        after: true,
      },
    ],
    // else必须和反花括号一行
    "brace-style": [
      2,
      "1tbs",
      {
        allowSingleLine: true,
      },
    ],
    // 多行 if 语句的的括号不能省
    curly: [2, "multi-line"],
    // 使用浏览器全局变量时加上 window. 前缀
    "no-undef": 2,
    // 不允许有连续多行空行
    "no-multiple-empty-lines": [
      2,
      {
        max: 1,
      },
    ],
    // 换行符在运算符的位置
    "operator-linebreak": [
      2,
      "after",
      {
        overrides: {
          "?": "before",
          ":": "before",
        },
      },
    ],
    // 条件语句中赋值语句
    "no-cond-assign": 2,
    // 单行代码块两边加空格
    "block-spacing": [2, "always"],
    // 对属性名强制使用驼峰
    camelcase: [
      0,
      {
        properties: "always",
      },
    ],
    // 不允许有多余的行末逗号
    "comma-dangle": [2, "never"],
    // 始终将逗号置于行末
    "comma-style": [2, "last"],
    // 点号操作符须与属性需在同一行
    "dot-location": [2, "property"],
    // 函数调用时标识符与括号间不留间隔
    "func-call-spacing": ["error", "never"],
    // 键值对当中冒号与值之间要留空白
    "key-spacing": [
      2,
      {
        beforeColon: false,
        afterColon: true,
      },
    ],
    // 构造函数要以大写字母开头, 但调用大写字母开头的函数不一定需要new
    "new-cap": [
      2,
      {
        newIsCap: true,
        capIsNew: false,
      },
    ],
    // 无参的构造函数调用时要带上括号
    "new-parens": 2,
    // 对象中定义了存值器，一定要对应的定义取值器
    "accessor-pairs": 2,
    // 子类的构造器中一定要调用 super
    "constructor-super": 2,
    // 使用数组字面量而不是构造器
    "no-array-constructor": "error",
    // 避免使用 arguments.callee 和 arguments.caller
    "no-caller": 2,
    // 避免对类名重新赋值
    "no-class-assign": 2,
    // 避免修改使用 const 声明的变量
    "no-const-assign": 2,
    // 正则中不要使用控制符
    "no-control-regex": "error",
    // 不要对变量使用 delete 操作。
    "no-delete-var": 2,
    // 不要定义冗余的函数参数
    "no-dupe-args": 2,
    // 类中不要定义冗余的属性
    "no-dupe-class-members": 2,
    // 对象字面量中不要定义重复的属性
    "no-dupe-keys": 2,
    // switch 语句中不要定义重复的 case 分支
    "no-duplicate-case": 2,
    // 同一模块有多个导入时一次性写完
    "no-duplicate-imports": "error",
    // 正则中不要使用空字符
    "no-empty-character-class": 2,
    // 不要解构空值
    "no-empty-pattern": 2,
    //
    "no-eval": 2,
    "no-ex-assign": 2,
    "no-extend-native": 2,
    "no-extra-bind": 2,
    "no-extra-boolean-cast": 2,
    "no-extra-parens": [2, "functions"],
    "no-fallthrough": 2,
    "no-floating-decimal": 2,
    "no-func-assign": 2,
    "no-implied-eval": 2,
    "no-inner-declarations": [2, "functions"],
    "no-invalid-regexp": 2,
    "no-irregular-whitespace": 2,
    "no-iterator": 2,
    "no-label-var": 2,
    "no-labels": [
      2,
      {
        allowLoop: false,
        allowSwitch: false,
      },
    ],
    "no-lone-blocks": 2,
    "no-mixed-spaces-and-tabs": 2,
    "no-multi-spaces": 2,
    "no-multi-str": 2,
    "no-new-func": "error",
    "no-new-object": 2,
    "no-new-require": 2,
    "no-new-symbol": 2,
    "no-new-wrappers": 2,
    "no-obj-calls": 2,
    "no-octal": 2,
    "no-octal-escape": 2,
    "no-path-concat": 2,
    "no-proto": 2,
    "no-redeclare": 2,
    "no-regex-spaces": 2,
    "no-return-assign": [2, "except-parens"],
    "no-self-assign": 2,
    "no-self-compare": 2,
    "no-sequences": 2,
    "no-shadow-restricted-names": 2,
    "no-sparse-arrays": 2,
    "no-template-curly-in-string": "error",
    "no-this-before-super": 2,
    "no-throw-literal": 2,
    "no-trailing-spaces": 2,
    "no-undef-init": 2,
    "no-unmodified-loop-condition": 2,
    "no-unneeded-ternary": [
      2,
      {
        defaultAssignment: false,
      },
    ],
    "no-unreachable": 2,
    "no-unsafe-finally": 2,
    "no-unsafe-negation": "error",
    "no-useless-call": 2,
    "no-useless-computed-key": 2,
    "no-useless-escape": 0,
    "no-useless-rename": 2,
    "no-whitespace-before-property": 2,
    "no-with": 2,
    "padded-blocks": [2, "never"],
    "rest-spread-spacing": ["error", "never"],
    "semi-spacing": [
      2,
      {
        before: false,
        after: true,
      },
    ],
    "space-before-blocks": [2, "always"],
    "space-in-parens": [2, "never"],
    "space-unary-ops": [
      2,
      {
        words: true,
        nonwords: false,
      },
    ],
    "spaced-comment": [
      2,
      "always",
      {
        markers: [
          "global",
          "globals",
          "eslint",
          "eslint-disable",
          "*package",
          "!",
          ",",
        ],
      },
    ],
    "template-curly-spacing": [2, "never"],
    "use-isnan": 2,
    "valid-typeof": 2,
    "wrap-iife": [2, "any"],
    "yield-star-spacing": [2, "both"],
    yoda: [2, "never"],
    // 分号
    semi: [2, "never"],
    "no-unexpected-multiline": 2,
    "arrow-spacing": [
      2,
      {
        before: true,
        after: true,
      },
    ],
    "eol-last": 2,
    "generator-star-spacing": [
      2,
      {
        before: true,
        after: true,
      },
    ],
    "handle-callback-err": [2, "^(err|error)$"],
    "jsx-quotes": [2, "prefer-single"],
    "no-array-constructor": 2,
    "no-console": "off",
    "no-native-reassign": 2,
    "no-negated-in-lhs": 2,
    "no-shadow-restricted-names": 2,
    "no-spaced-func": 2,
    "no-useless-constructor": 2,
    "one-var": [
      2,
      {
        initialized: "never",
      },
    ],
    "prefer-const": 2,
    "no-debugger": process.env.NODE_ENV === "production" ? 2 : 0,
    "object-curly-spacing": [
      2,
      "always",
      {
        objectsInObjects: false,
      },
    ],
    "array-bracket-spacing": [2, "never"],
  },
  //当使用第三方的SDK时，eslint会报找不到，可以加入到globals，取消对这个的检查
  globals: {
    fengmap: true,
  },
};
```

如果有需要忽略的文件也可以在 `.eslintignore` 文件中进行配置:

```javascript
// .eslintignore
build/*.js
src/assets
public
dist
```

## 安装 prettier 依赖

`Prettier` 是一个代码格式化工具，但并非针对一种语言，对 `HTML/CSS/JavaScript/Vue/SCSS` 都有效果。可以通过配置文件在不同项目间统一代码格式化，以修正不同编辑器/`ID`E 之间格式化不同的问题。

安装依赖:

```javascript
npm i -D prettier eslint-plugin-prettier eslint-config-prettier prettier-eslint-cli
```

- `prettier`：`prettier`插件的核心代码

- `eslint-plugin-prettier`：将`prettier`作为`ESLint`规范来使用

- `eslint-config-prettier`：解决`ESLint`中的样式规范和`prettier`中样式规范的冲突，以`prettier`的样式规范为准，使`ESLint`中的样式规范自动失效

- `prettier-eslint-cli`:`prettier-eslint-cli` 允许你对多个文件用`prettier-eslint`进行格式化。

## Prettier 配置

在项目的根目录下创建`.prettierrc.js`文件并配置`prettier`代码检查规则:

```javascript
// .prettierrc.js
module.exports = {
  // 最大长度80个字符
  printWidth: 80,
  // 行末分号
  semi: false,
  // 单引号
  singleQuote: true,
  // JSX双引号
  jsxSingleQuote: false,
  // 尽可能使用尾随逗号（包括函数参数）
  trailingComma: "none",
  // 在对象文字中打印括号之间的空格。
  bracketSpacing: true,
  // > 标签放在最后一行的末尾，而不是单独放在下一行
  jsxBracketSameLine: false,
  // 箭头圆括号
  arrowParens: "avoid",
  // 在文件顶部插入一个特殊的 @format 标记，指定文件格式需要被格式化。
  insertPragma: false,
  // 缩进
  tabWidth: 2,
  // 使用tab还是空格
  useTabs: false,
  // 行尾换行格式
  endOfLine: "auto",
  HTMLWhitespaceSensitivity: "ignore",
};
```

再更新一下`eslint`的配置，以处理`prettier`和`eslint`的冲突。

```javascript
// .eslintrc.js
module.exports = {
  // 其他配置。。。
  extends: [
    //继承 vue 的标准特性
    "plugin:vue/essential",
    "eslint:recommended",
    //避免与 prettier 冲突
    "plugin:prettier/recommended",
  ],
  // 其他配置不变。。。
};
```

# 开发工具配置

公司的开发工具可能有`Vscode`和`Webstorm`。因此这里分开配置，并自行找到对应的方案。

## VScode 配置

首先需要安装`Eslint`、`Prettier`、`Vetur`插件。如下图所示：
![插件下载](/Vue/Vue项目接入Eslint与Prettier/插件下载.png)
然后打开`setting`将下面的代码黏贴进去，这样在 VScode 中保存（ctrl+s）的时候就会进行自动格式化：

```javascript
{
  "eslint.enable": true,
  "eslint.options": {
    "extensions": [".js", ".vue", ".ts", ".tsx"]
  },
  "editor.formatOnSave": true,
  "editor.codeActionsOnSave": {
    "source.fixAll.eslint": true
  },
  "eslint.validate": [
    "vue",
    "html",
    "javascript",
    "typescript",
    "javascriptreact",
    "typescriptreact"
  ],
  "vetur.format.defaultFormatter.html": "prettier"
}
```

需要**注意**的是，在`vscode`中其实`Vetur`也有一套`Format`规则，因此会和`prettier`冲突。如何解决尼，如下图所示，打开`setting`将`Vetur`的规则改成`Prettier`就好了。

![Vetur与Prettier冲突](/Vue/Vue项目接入Eslint与Prettier/Vetur与Prettier冲突.png)

## Webstorm 配置

首先`WebStorm` 配置 `ESLint` 即时检查:

![webstorm配eslint即使检查](/Vue/Vue项目接入Eslint与Prettier/webstorm配eslint即使检查.png)

然后配置保存自动格式化：

打开`webstorm`设置`（file=>setting=>tools=>flie watchers）`，如下图所所示：

![webstorm第一步](/Vue/Vue项目接入Eslint与Prettier/webstorm第一步.png)

![webstorm第二步](/Vue/Vue项目接入Eslint与Prettier/webstorm第二步.png)

正常情况下 prettier 路径不用改，除非特殊情况。然后一路 ok=>apply 即可。

# 其他

在项目迁移和规范化的过程中，我们不可能一次性将所有已经存在的代码都格式化成符合`Eslint`和`Prettier`规范的代码，因此在实际过程中我们是采用混合开发，也就是在实际做业务需求过程中将改动的文件格式化成符合规范的代码，对尚未碰见的代码不做改动，保证项目的正常运行。在开发的过程中，为了保证团队所有成员都能严格执行 `Eslint` 规范，采用 `husky` 构建工作流，`eslint` 将检查做了修改，存在 `stage` 阶段尚未 `commit` 阶段的代码，在 `commit` 前进行校验，校验无误即通过，否则不通过。当然这不是必须的，因此以下内容可根据需要进行阅读。

## 安装依赖

```javascript
npm install husky lint-staged --save-dev
```

- `husky`: 在项目中添加`git`钩子，在 `git` 各个生命周期（姑且这样称呼吧）中执行一些自定义操作。我们这里主要是用在 `git`提交之前执行 `linter` 操作，不通过则提交无效。

- `lint-staged`: 简而言之，就是只针对 `git` 提交的文件进行一些操作，而非整个项目的所有文件。我们这里主要是用在 `git` 提交之前进行 `linter` 时只针对提交的文件，以进行渐进式的重构。

```javascript
// .huskyrc.js
module.exports = {
  hooks: {
    // git commit 前的钩子
    "pre-commit": "lint-staged",
    "post-commit": "git update-index --again",
  },
};
```

```javascript
// lint-staged.config.js
module.exports = {
  "src/**/*.{js,vue}": ["eslint --fix", "git add"],
  "src/**/*.{vue,html,css,scss,sass}": ["stylelint --fix", "git add"],
  "src/**/*.{js,vue,html,css,scss,sass}": [
    "prettier-eslint --write",
    "git add",
  ],
};
```

# 总结

基本上，这些工具初次配置起来还是非常麻烦的，但这是一件一劳永逸的事情，所以还是值得花时间去做的。

![](https://github.com/FrontDream/FrontDream.github.io/blob/master/assets/image/personal/qrcode.png?raw=true)

❤️ 爱心三连击

1.看到这里了就点个在看支持下吧，你的「在看」是我创作的动力。

2.关注公众号前端梦想家，「一起学前端」！

3.添加微信【qdw1370336125】，拉你进技术交流群一起学习。
