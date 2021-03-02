# AntDesignPro中台项目迁移Typescript，并接入Eslint+Prettier代码格式化

# 前言

在一家小公司实习了一段时间，接手的项目代码格式及规范化不可描述，为了保证项目的可维护性，决定接入`Typescript`，同时采用`Eslint`和`Prettier`进行代码规范化，为下一步的`CodeReview`。

Typescript 是强类型语言，接入 Typescript 一开始会有很大的痛点，但是过了一阵子就可以享受到 Typescript 带来的好处，bug 减少了，代码易读了，也可维护了，好处网上一大把就不累赘了。

常用的代码格式化工具主要有`ESlint`、`TSLint`、`StandardJS`。TS 官方已经决定弃用`TSLint`，全面拥抱 ESLint。因此在技术选型方面将采用`ESlint`。

`Eslint`的主要功能包含代码格式的校验，代码质量的校验，JS 规范，如用`===`而不是`==`判断相等、用驼峰命名变量而不是用下划线。而 `Prettier` 是美丽的意思,只是代码格式的校验（并格式化代码），不会对代码质量进行校验，如单行代码长度、tab 长度、空格、逗号表达式等问题。

# 一、迁移 Typescript

## 1.1 安装 Typescript

推荐使用全局安装，可以在其他项目中也使用 TS。

```javascript
npm install -g typescript
```

## 1.2 安装声明文件

所需的 `react`, `react-dom` 的声明文件, 以及 加载 TS 的`ts-loader`

```javascript
npm install --save-dev @types/react @types/react-dom ts-loader
```

## 1.3 配置 tsconfig.json

在使用`Typescript`时需要根据实际项目的需要进行相关规则的配置，具体配置根据项目而异、可参考官网，具体看这里[TS 官网](https://www.tslang.cn/docs/handbook/tsconfig-json.html)。我的配置项如下所示：

```json
{
	"compilerOptions": {
		"allowSyntheticDefaultImports": true,
		"noUnusedParameters": true,
		"outDir": "build/dist",
		"baseUrl": ".",
		"strict": true,
		"noImplicitAny": true,
		"removeComments": true,
		"preserveConstEnums": true,
		"sourceMap": true,
		"forceConsistentCasingInFileNames": true,
		"strictPropertyInitialization": true,
		"experimentalDecorators": true,
		"noImplicitReturns": true,
		"moduleResolution": "node",
		"strictNullChecks": true,
		"esModuleInterop": true,
		"noUnusedLocals": true,
		"importHelpers": true,
		"noImplicitThis": false,
		"suppressImplicitAnyIndexErrors": false,
		"skipLibCheck": true,
		"noResolve": false,
		"module": "es2015",
		"allowJs": true,
		"target": "es5",
		"jsx": "react",
		"lib": ["es5", "es2015", "dom", "es7", "es2018"],
		"paths": {
			"@/*": ["./src/*"]
		}
	},
	"exclude": [
		"node_modules",
		"build",
		"scripts",
		"acceptance-tests",
		"webpack",
		"jest",
		"src/setupTests.ts",
		"tslint:latest",
		"tslint-config-prettier"
	]
}
```

# 二、接入 ESLint、Prettier

针对`JS`项目迁移到`TS`的项目，主要有两种选择`ESLint`和`TSLint`。`TSLint`仅针对`TS`代码，因此如果采用`TSLint`规范`TS`代码，`JS`代码需要采用其他工具。而`ESLint`不仅能规范`js`代码，通过配置解析器，也能规范`TS`代码。此外由于性能问题，`TypeScript` 官方决定全面采用`ESLint`。因此本项目采用`ESLint`配合`Prettier`规范化`TS`和`JS`代码。

## 2.1 接入 ESLint

### 2.1.1 安装 ESLint 依赖

```javascript
npm i eslint @typescript-eslint/parser @typescript-eslint/eslint-plugin --save-dev
```

-   `eslint`: ESLint 的核心代码

-   `@typescript-eslint/parser`：ESLint 的解析器，用于解析 Typescript 文件，从而检查和规范 Typescript 代码

-   `@typescript-eslint/eslint-plugin`：这是一个 ESLint 插件，包含了各类定义好的检测 Typescript 代码的规范

安装好依赖后，需要在项目根目录中的.eslintrc.js 中配置，包括解析器、继承的代码规范、插件和环境:

```javascript
module.exports = {
	parser: '@typescript-eslint/parser', //定义ESLint的解析器
	extends: ['plugin:@typescript-eslint/recommended'], //定义文件继承的子规范
	plugins: ['@typescript-eslint'], //定义了该eslint文件所依赖的插件
	env: {
		//指定代码的运行环境
		browser: true,
		node: true,
	},
};
```

## 2.2 规范 React

项目是以依赖于 React 的 AntDesignPro 为基础，因此需要安装规范 React 代码的 Eslint 插件。

### 2.2.1 安装依赖

```javascript
npm i eslint-plugin-react --save-dev
```

### 2.2.2 配置 Eslint 规范

然后修改`.eslintrc.js` 的配置，如下所示：

```javascript
module.exports = {
   parser:  '@typescript-eslint/parser',
   extends: [
    'plugin:react/recommended',
    'plugin:@typescript-eslint/recommended'
   ],//使用推荐的React代码检测规范
   plugins: ['@typescript-eslint'],
   env:{
       browser: true,
       node: true,
   },
   settings: {//自动发现React的版本，从而进行规范react代码
       "react": {
           "pragma": "React",
           "version": "detect"
       }
   },
   parserOptions: {//指定ESLint可以解析JSX语法
       "ecmaVersion": 2019,
       "sourceType": 'module',
       "ecmaFeatures":{
           jsx:true
       }
   }
   rules: {
   //在Rules中可以自定义你的React代码编码规范。
   }
}
```

## 2.3 接入 Prettier

### 2.3.1 安装依赖

```javascript
npm install prettier eslint-plugin-prettier -g
```

-   `prettier`：prettier 插件的核心代码

-   `eslint-plugin-prettier`：将 prettier 作为 ESLint 规范来使用

> 注意老版本可能还需要安装eslint-config-prettier，但是新版本不需要，不然会报错，因此，在.eslintrc.js中的extends不需要继承prettier/@typescript-eslint，下面被注释了

可以参考[github的issue](https://github.com/prettier/eslint-config-prettier/issues/178)

### 2.3.2 配置规则

在项目的根目录下创建.prettierrc.js 文件并配置 prettier 代码检查规则

```javascript
module.exports = {
	//最大长度80个字符
	printWidth: 80,
	//行末分号
	semi: false,
	//单引号
	singleQuote: true,
	//尽可能使用尾随逗号（包括函数参数）
	trailingComma: 'all',
	//在对象文字中打印括号之间的空格。
	bracketSpacing: true,
	// > 标签放在最后一行的末尾，而不是单独放在下一行
	jsxBracketSameLine: false,
	//箭头圆括号
	arrowParens: 'avoid',
	//在文件顶部插入一个特殊的 @format 标记，指定文件格式需要被格式化。
	insertPragma: false,
	//缩进
	tabWidth: 4,
	//使用tab还是空格
	useTabs: false,
};
```

### 2.3.3 结合 Prettier 配置 Eslint

修改.eslintrc.js 文件，引入 prettier
最终配置为：

```javascript
module.exports = {
    parser: '@typescript-eslint/parser',
    extends: [
        'plugin:react/recommended',
        'plugin:@typescript-eslint/eslint-recommended',
        // 'prettier/@typescript-eslint',
        'plugin:prettier/recommended',
    ],
    // plugins: ['@typescript-eslint', 'react'],
    env: {
        browser: true,
        node: true,
        es6: true,
    },
    rules: {
        // 强制使用单引号
        quotes: ['error', 'single'],
        // 要求或禁止使用分号而不是 ASI
        semi: ['error', 'never'],
        // 双峰驼命名格式
        camelcase: 0,
        // 必须使用全等
        eqeqeq: 2,
        // 禁止尤达条件
        yoda: [2, 'never'],
        // 禁用严格模式，禁止在任何地方出现 'use strict'
        strict: [2, 'never'],
        // 禁止不必要的bool转换
        'no-extra-boolean-cast': 2,
        // 禁止不必要的嵌套块
        'no-lone-blocks': 2,
        // 禁止使用++，--
        'no-plusplus': 0,
        // 禁止使用__proto__属性
        'no-proto': 2,
        // 不能比较自身
        'no-self-compare': 2,
        // 不能有未定义的变量
        'no-undef': 2,
        // 不能有无法执行的代码
        'no-unreachable': 2,
        // 禁止无用的表达式
        'no-unused-expressions': 2,
        'no-debugger': process.env.NODE_ENV === 'production' ? 2 : 0,
        // 禁止使用alert
        'no-alert': 2,
        // 禁止使用arguments.caller或arguments.callee
        'no-caller': 1,
        // 禁止行内备注
        'no-inline-comments': 2,
        // 禁止重复的函数声明
        'no-func-assign': 2,
        // 禁止使用eval,
        'no-eval': 2,
        // 块语句中的内容不能为空
        'no-empty': 2,
        // 禁止修改const声明的变量
        'no-const-assign': 2,
        // 禁止使用var
        'no-var': 2,
        // 空行最多不能超过2行
        'no-multiple-empty-lines': [1, { max: 2 }],
        // 禁止不必要的分号
        'no-extra-semi': 'error',
        // 是否允许非空数组里面有多余的空格
        'array-bracket-spacing': [2, 'never'],
        // 强制使用一致的换行风格
        'linebreak-style': ['error', 'unix'],
        // if while function 后面的{必须与if在同一行，java风格。
        'brace-style': [2, '1tbs', { allowSingleLine: true }],
        // 数组和对象键值对最后一个逗号， never参数：不能带末尾的逗号, always参数：必须带末尾的逗号，
        'comma-dangle': 0,
        // 控制逗号前后的空格
        'comma-spacing': [2, { before: false, after: true }],
        // 以方括号取对象属性时，[ 后面和 ] 前面是否需要空格, 可选参数 never, always
        'computed-property-spacing': [2, 'never'],
        // 禁止比较时使用NaN，只能用isNaN()
        'use-isnan': 2,
        // switch语句最后必须有default
        'default-case': 2,
        // 变量声明后是否需要空一行
        'newline-after-var': 2,
        // 嵌套块深度最多四层
        'max-depth': [2, 4],
        // 函数最多只能有4个参数
        'max-params': [2, 4],
        // 如果if语句里面有return,后面不能跟else语句，禁止出现 if (cond) { return a } else { return b }，应该写为 if (cond) { return a } return b
        'no-else-return': 2,
        // 禁止对null使用==或!=运算符
        'no-eq-null': 2,
        // 禁止使用__iterator__ 属性
        'no-iterator': 2,
        // 禁止混用tab和空格
        'no-mixed-spaces-and-tabs': [2, false],
        // 禁止使用new Function
        'no-new-func': 1,
        // 禁止使用new Object()
        'no-new-object': 2,
        // 不能比较自身
        'no-self-compare': 2,
        // 不能有声明后未被使用的变量或参数
        'no-unused-vars': [2, { vars: 'all', args: 'after-used' }],
        // 未定义前不能使用
        'no-use-before-define': 0,
        // 无效的类型判断
        'valid-typeof': 2,
        // 立即执行函数表达式的小括号风格
        'wrap-iife': [2, 'inside'],
        // 注释的斜线和星号后要加空格
        'spaced-comment': [
            2,
            'always',
            {
                block: {
                    exceptions: ['*'],
                    balanced: true,
                },
            },
        ],
        // new, delete, typeof, void, yield 等表达式前后必须有空格，-, +, --, ++, !, !! 等表达式前后不许有空格
        'space-unary-ops': [
            2,
            {
                words: true,
                nonwords: false,
            },
        ],
        // 必须使用解构 ...args 来代替 arguments
        'prefer-rest-params': 2,
        // this 的别名规则，只允许 self 或 that
        'consistent-this': [2, 'self', 'that'],
        // if 后必须包含 { ，单行 if 除外
        curly: [2, 'multi-line', 'consistent'],
        // for 循环不得因方向错误造成死循环
        'for-direction': 2,
        // getter 必须有返回值，允许返回 undefined
        'getter-return': [2, { allowImplicit: true }],
        // 关键字前后必须有空格
        'keyword-spacing': 2,
        // new关键字后类名应首字母大写
        'new-cap': [
            2,
            {
                // 允许大写开头的函数直接执行
                capIsNew: false,
            },
        ],
        // 禁止将 await 写在循环里
        'no-await-in-loop': 2,
        // class定义的类名不得与其它变量重名
        'no-class-assign': 2,
        // 函数参数禁止重名
        'no-dupe-args': 2,
        // 禁止 switch 中出现相同的 case
        'no-duplicate-case': 2,
        // 禁止重复 import
        'no-duplicate-imports': 2,
        // 禁止空的 function,包含注释的情况下允许
        'no-empty-function': 0,
        // 禁止解构中出现空 {} 或 []
        'no-empty-pattern': 2,
        // catch 定义的参数禁止赋值
        'no-ex-assign': 2,
        // 禁止扩展原生对象
        'no-extend-native': [2, { exceptions: ['Array', 'Object'] }],
        // 禁止额外的括号，仅针对函数体
        'no-extra-parens': [2, 'functions'],
        // 不允许使用 2. 或 .5 来表示数字，需要用 2、2.0、0.5 的格式
        'no-floating-decimal': 2,
        // 禁止对函数声明重新赋值
        'no-func-assign': 2,
        // 禁止在 setTimeout 和 setInterval 中传入字符串，因会触发隐式 eval
        'no-implied-eval': 2,
        // 禁止连等赋值
        'no-multi-assign': 2,
        '@typescript-eslint/explicit-function-return-type': [
            'off',
            {
                allowExpressions: true,
                allowTypedFunctionExpressions: true,
            },
        ],
        // 特殊情况可将类型显示设置为any
        '@typescript-eslint/no-explicit-any': 0,
        // 允许接口命名以I开头
        '@typescript-eslint/interface-name-prefix': 0,
        // antd中引用style需要用require
        '@typescript-eslint/no-var-requires': 0,
        // mapStateToProps在之前就用到(typeof推断类型)
        '@typescript-eslint/no-use-before-define': 0,
        // 驼峰命名格式
        '@typescript-eslint/camelcase': 0,
        // 给函数默认值可以为空
        '@typescript-eslint/no-empty-function': 0,
        // 一个莫名其妙的Bug
        'react/display-name': 0,
        'react/no-find-dom-node': 0,
        // 允许用！断言不为空
        '@typescript-eslint/no-non-null-assertion': 0,
    },
    settings: {
        // 自动发现React的版本，从而进行规范react代码
        react: {
            pragma: 'React',
            version: 'detect',
        },
    },
    parserOptions: {
        // 指定ESLint可以解析JSX语法
        ecmaVersion: 2019,
        sourceType: 'module',
        ecmaFeatures: {
            jsx: true,
        },
    },
}

```

-   `prettier/@typescript-eslint`：使得@typescript-eslint 中的样式规范失效，遵循 prettier 中的样式规范。

-   `plugin:prettier/recommended`：使用 prettier 中的样式规范，且如果使得 ESLint 会检测 prettier 的格式问题，同样将格式问题以 error 的形式抛出。

## 2.4 在 VSCode 中集成 ESLint 配置

当在项目中有了如上配置，其他开发人员需要在自己的 VSCode 中进行 ESLint 和 Prettier 插件的安装配置。VScode 的 ESLint 和 Prettier 会读取项目的配置文件，从而达到对代码的检查。踩坑如下：

-   需要注意的是如果是通过工作机进行远程工作的，一定要记得`远程的VScode安装插件`才生效，本地安装并没用。
-   同时在团队协作过程中，插件的版本有可能不同，如稳定版本和非稳定版本对于 eslint 规则的解析不同，因此团队直接尽可能`安装相同版本的插件`.

### 2.4.1 配置 setting

prettier 和 eslint 可以在保存时自动检查并自动格式化一部分问题，在 settings.json 文件中修改其配置文件如下：

```javascript
{
    "eslint.enable": true, //是否开启vscode的eslint
    "eslint.options": { //指定vscode的eslint所处理的文件的后缀
        "extensions": [
            ".js",
            ".vue",
            ".ts",
            ".tsx"
        ]
    },
    "editor.formatOnSave": true,
    "editor.codeActionsOnSave": {
        "source.fixAll.eslint": true
    },
    "eslint.validate": [ //确定校验准则
        "javascript",
        "javascriptreact",
        {
            "language": "html",
            "autoFix": true
        },
        {
            "language": "vue",
            "autoFix": true
        },
        {
            "language": "typescript",
            "autoFix": true
        },
        {
            "language": "typescriptreact",
            "autoFix": true
        }
    ]
}
```

## 2.5 husky 规范工作流

在项目迁移和规范化的过程中，我们不可能一次性将所有已经存在的代码迁移到 `TS`，因此在实际过程中我们是采用 `JS` 和 `TS` 混合开发，在实际做业务需求过程中将改动的文件迁移成 `TS`，对尚未碰见的代码不做改动，保证项目的正常运行。同样，对 `Eslint` 的格式化也是主要集中在新开发的页面。在开发的过程中，为了保证团队所有成员都能严格执行 `Eslint` 规范，采用 `husky` 构建工作流，`eslint` 将检查做了修改，存在 `stage` 阶段尚未 `commit` 阶段的代码，在 `commit` 前进行校验，校验无误即通过，否则不通过。

### 2.5.1 安装依赖

```javascript
    npm install husky --save-dev
```

### 2.5.2 配置

在 package.json 的 script 中配置：

```json
 "scripts": {
   "lint": "npm run lint:js && npm run lint:style && npm run lint:prettier",
    "lint-staged": "lint-staged",
    "lint-staged:js": "eslint --ext .js,.jsx,.ts,.tsx ",
    "lint:fix": "eslint --fix --cache --ext .js,.jsx,.ts,.tsx --format=pretty ./src && npm run lint:style",
    "lint:js": "eslint --cache --ext .js,.jsx,.ts,.tsx --format=pretty ./src",
    "lint:prettier": "check-prettier lint",
    "lint:style": "stylelint --fix \"src/**/*.less\" --syntax less",
}
```

接着需要在 package.json 的 husky 中配置如下：

```json
 "husky": {
   "hooks": {
      "pre-commit": "npm run lint"
    }
},
```

在 `pre-commit` 这个 `hook` 也就是在提交之前进行 lint 的检测。

上述我们通过在 `husky` 的 `pre-comit` 这个 `hook` 中执行一个 `npm` 命令来做 `lint` 校验。其实一般情况，我们会定义一个 `lint-staged`，来在提交前检测代码的规范。使用 `lint-staged` 来规范代码的方式如下，我们修改 `package.json` 文件为：

```json
{
	"husky": {
		"hooks": {
			"pre-commit": "lint-staged"
		}
	},
	"lint-staged": {
		"**/*.{js,jsx,ts,tsx}": ["eslint --fix", "prettier --write", "git add ."]
	}
}
```

**注意**：这里有个`坑`需要注意，如果发现文件 `eslint` 还报错，居然还能提交成功，也就是 `husky` 没有生效，那么可以 cd 进入到`.git/hooks` 文件夹，查看一下有没有 `pre-commit` 文件（不是 `pre-commit.sample` 文件），如果没有，那么就是 **git** 版本的原因，需要升级到 **2.13.0**以上。

在本项目中采用 `cicd` 进行持续集成，因此也可以将 `eslint` 加入到 `ci` 中，在这里不在详细介绍。

# 总结

项目的 `Typescript` 迁移和 `Eslint+Prettier` 的代码格式化，目前已经上线几个月运行良好，至今项目已经迁移一半，基本无痛点，很爽。
![联系我](https://github.com/QianDingwei/QianDingwei.github.io/blob/master/assets/image/personal/qrcode.png?raw=true)
