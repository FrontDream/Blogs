# React+Typescript最佳实践

## 前言

随便叨叨一句，TypeScript是一个JavaScript的类型化超集，可以编译成纯JavaScript，比如随便新建一个`index.ts`文件，随便来个函数，然后`cd`到该文件，执行`tsc index.ts `就可以编译成`js`文件了，当然前提是全局安装了`typescript`。
关于`typescript`的好处，网上一大把原因，这里不赘述，从我的开发经验看：

- `Typescript`是一门静态类型语言，可以在开发的过程中暴露出很多不经意的问题，从而减少bug，测试也更少骂娘了；
  
- 同时，因为在开发过程中涉及到很多类型的定义，因此`Typescript`项目具有很高的可维护性；

- 当然最重要的一点，`Typescript`具有很强的类型推断的能力，只要需求开发前把类型，接口定义好，那么你就可以一路回车，特别爽。当然我这里声明的是开发的过程同时写好`Typescript`，因为我见过很多为了写`Typescript`而写`Typescript`的，他们是先将功能实现，然后再来补`TS`的。

那下面我们就从实际项目中来看看怎么写好`Typescript`。

## 启动

- 如果你的项目原来是`JS`+`React`的，打算迁移到`Typescript`，那么我强烈建议你先移步，看我的另外一篇文章[AnDesignPro项目迁移TS并配合Eslint+Prettier代码格式化落地](https://juejin.cn/post/6844904067815178254)

- 如果你是从零开始搭建项目，那么执行以下命令就可以生成一份`React`+`Typescript`的项目了。然后再配置`eslint`+`prettier`代码格式化工具，配置过程，也可以参考上面的文章。

> create-react-app my-app --template typescript

## 最佳实践

### 组件定义

组件定义可以分为函数组件和类组件。

- 函数组件，是目前最流行的组件定义方式，有两种书写方式。

```typescript
import React from 'react';

// 函数声明式写法
function Heading({}:IProps): React.ReactNode {
  return <h1>My Website Heading</h1>;
}

// 函数扩展式写法
const OtherHeading: React.FC<IProps> = () => <h1>My Website Heading</h1>;
```

第一种写法：使用了函数声明式写法，注明了这个函数的返回值是 React.ReactNode 类型；

第二种写法：使用了函数表达式写法，返回一个函数而不是值或者表达式，所以注明这个函数的返回值是 React.FC 类型。

- 类组件

```typescript
interface StateProps { }

interface IProps { }

class Page extends React.Component<IProps, StateProps> {
    constructor(pops) {
        
    }
    
    componentDidMount(){
        
    }

    render() {
        return (
            <div>
                
            </div>
        );
    }
}
```

### Props

在 `TypeScript` 中，我们可以使用 `interface` 或者 `type` 关键字来将 `props` 声明成泛型。

- 首先介绍 **函数组件** 的写法

```typescript
import React from 'react';
import { connect } from "dva";
import { ThunkDispatch } from "redux-thunk";
import { AnyAction } from "redux";
// 项目的全局State类型
import { State } from '@/types';

// 从mapStateToProps中推导出从redux取出的类型，前提是state中已经声明了类型
type MapStateToProps = Readonly<ReturnType<typeof mapStateToProps>>

// 从mapDispatchToProps推导出异步方法的类型
type MapDispatchToProps = Readonly<ReturnType<typeof mapDispatchToProps>>

// 从默认值中推导出父组件传递给子组件的类型
type DefaultProps = Readonly<typeof defaultProps>

// 拼装成IProps
type IProps =DefaultProps & MapStateToProps & MapDispatchToProps

const defaultProps = {
    name: 'FrontDream',
    age: 18
}

const Content = ({
    // 解构你的props
    name,
    age
}: IProps) => {

    return (
        <div>

        </div>
    )
}
const mapStateToProps = (state: State) => {
    return {
        items: state.Info.items,
    }
}

const mapDispatchToProps = (dispatch: ThunkDispatch<any, any, AnyAction>) => ({
    fetchData: () => {
        dispatch({
            type: "receiptInfo/fetch",
        })
    },
})

// 设置组件默认值
Content.defaultProps = defaultProps

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Content)

```

- 然后介绍 **类组件** 的`IProps`

```typescript
import React from 'react';
import { connect } from "dva";
import { ThunkDispatch } from "redux-thunk";
import { AnyAction } from "redux";
// 项目的全局State类型
import { State } from '@/types';

// 父组件传递到该组件的默认值
const defaultProps = {
    name: 'FrontDream',
    age: 18
}

const initState = {
    content: ''
}

// 从mapStateToProps中推导出从redux取出的类型，前提是state中已经声明了类型
type MapStateToProps = Readonly<ReturnType<typeof mapStateToProps>>

// 从mapDispatchToProps推导出异步方法的类型
type MapDispatchToProps = Readonly<ReturnType<typeof mapDispatchToProps>>

// 从默认值中推导出父组件传递给子组件的类型
type DefaultProps = Readonly<typeof defaultProps>

// 拼装成IProps
type IProps = DefaultProps & MapStateToProps & MapDispatchToProps

// 从initState推导出组件的state类型
type StateProps = Readonly<typeof initState>

class Content extends React.Component<IProps, StateProps> {
    static readonly defaultProps: DefaultProps = defaultProps
    
    readonly state: StateProps = initState

    componentDidMount(){

    }

    render() {
        return (
            <div>

            </div>
        );
    }
}

const mapStateToProps = (state: State) => {
    return {
        items: state.Info.items,
    }
}

const mapDispatchToProps = (dispatch: ThunkDispatch<any, any, AnyAction>) => ({
    fetchData: () => {
        dispatch({
            type: "receiptInfo/fetch",
        })
    },
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Content)

```

其中 `IProps` 可以分成几个子集，根据实际使用场景，一般可以分为以下四类：

- `DefaultProps`，直接从父组件传递给当前组件的属性；

```typescript
type DefaultProps = Readonly<typeof defaultProps> // 从默认值中推导出父组件传递给子组件的类型
```

- `MapStateToProps`，通过 `connect` 到 `redux` 中的 `store` 获取的属性；

```typescript
type MapStateToProps = Readonly<ReturnType<typeof mapStateToProps>>  // 从mapStateToProps中推导出从redux取出的类型，前提是state中已经声明了类型
```


- `MapDispatchToProps`，通过 `connect` 从`mapDispatchToProps`获取到异步函数；

```typescript
type MapDispatchToProps = Readonly<ReturnType<typeof mapDispatchToProps>>  // 从mapDispatchToProps推导出异步方法的类型
```
- `RouteProps`，通过 `react-router-dom` 中的 `route` 路由传递的属性

多个 `props` 可以使用 `&` 符号连接起来，如上面的例子中。

> 需要注意的是，在上面的参数中，并没有考虑到`route`传递的参数，当需要考虑是会稍微复杂一点，以 **类组件** 为例：

```typescript
import React from 'react';
import { connect } from "dva";
import { ThunkDispatch } from "redux-thunk";
import { AnyAction, compose } from "redux";
import {withRouter, WithRouterProps} from 'react-router'
// 项目的全局State类型
import { State } from '@/types';

// 父组件传递到该组件的默认值
const defaultProps = {
    name: 'FrontDream',
    age: 18
}

const initState = {
    content: ''
}

// 从mapStateToProps中推导出从redux取出的类型，前提是state中已经声明了类型
type MapStateToProps = Readonly<ReturnType<typeof mapStateToProps>>

// 从mapDispatchToProps推导出异步方法的类型
type MapDispatchToProps = Readonly<ReturnType<typeof mapDispatchToProps>>

// 从默认值中推导出父组件传递给子组件的类型
type DefaultProps = Readonly<typeof defaultProps>

// 拼装成IProps
type IProps = DefaultProps & MapStateToProps & MapDispatchToProps & WithRouterProps

// 从initState推导出组件的state类型
type StateProps = Readonly<typeof initState>

class Content extends React.Component<IProps, StateProps> {
    static readonly defaultProps: DefaultProps = defaultProps

    readonly state: StateProps = initState

    componentDidMount(){

    }

    render() {
        return (
            <div>

            </div>
        );
    }
}

const mapStateToProps = (state: State) => {
    return {
        items: state.Info.items,
    }
}

const mapDispatchToProps = (dispatch: ThunkDispatch<any, any, AnyAction>) => ({
    fetchData: () => {
        dispatch({
            type: "receiptInfo/fetch",
        })
    },
})

export default compose<React.ComponentClass<DefaultProps>>(
    withRouter,
    connect(
        mapStateToProps,
        mapDispatchToProps
    )(Content)
)
```

仔细对比一下哦。

可能很多人现在就很好奇了，这怎么跟我平时写的不一样啊，我平时写`props`都是像下面这么写的，：

```typescript
// 从别人的最佳实践抄来的例子，我都好奇，这样的也能叫最佳实践？
type Props = {
  color?: string;
  name?: string
  children: React.ReactNode;
  onClick: ()  => void;
}
```

我敢说，这种写法叫傻瓜式`Typescript`，而不是聪明的`Typescript`!。 为啥这么说尼，让我一一道来，这样的问题所在。

1. 这样写没有为组件设置`defaultProps`，也没有设置初始`initstate`。程序最重要的就是容错性，当发生错误时，系统能不崩溃，有足够的健壮性，这才是好的系统，给组件的`props`和`state`设置默认值和初始值，提高了系统的健壮性和容错性。
2. 按照上面的傻瓜式写法，当系统需要增加新功能，或者新需求，添加了新的`props`或者`state`，需要修改两处地方，一处是`state`或`props`，一处是`state`或`props`所对应的`interface`。也就是说，我就想改个功能，却需要修改两处地方。反观，上上面推导式的`TS`写法，通过`ReturnType`和`typeof`结合推导出类型，则可以只写一处地方，而且，类型也更加精准！

你觉得尼？动手去试试？

把`props`搞定了，平时的开发也就搞定一大半了。

### Hooks中的使用

1. `useState`
- 字符串类型 
  
  使用 useState 时，TypeScript 可以自动推断类型，因此直接给个空字符串就行了
```typescript
    const [name, setName] = useState('');
```
- 对象
    
    需要初始化带有空值的 state，可以使用泛型来传递。
```typescript
    type User = {
        name: string;
        age: number;
    };
    const [user, setUser] = useState<User | null>(null);
    // 或者
    const [user, setUser] = useState({} as User);
```
- 数组

```typescript
    type User = {
        name: string;
        age: number;
    };
    const [user, setUser] = useState<Array<User>>([]);
    // 或者
    const [user, setUser] = useState([] as User[]);
```

2.`useEffect`

没有返回值，无需传递类型。

3.`useLayoutEffect`

没有返回值，无需传递类型。

4.`useRef`

`useRef` 传递非空初始值的时候可以推断类型，传入第一个泛型参数来定义`ref.current` 的类型。如下示例：

```typescript
// 存储div dom
const divRef = React.useRef<HTMLDivElement | null>(null);

// 存储button dom
const buttonRef = React.useRef<HTMLButtonElement | null>(null);

// 存储br dom
const brRef = React.useRef<HTMLBRElement | null>(null);

// 存储a dom
const linkRef = React.useRef<HTMLLinkElement | null>(null);

```

其他标签类似

5. `useCallback`
   
   无需传递类型，但是注意函数的入参需要定义类型，不然就推断为 any 了。
   
```typescript
    const part = 2;
    
    const res = useCallback((value: number) => value * part, [part]);
```

6.`useMemo`

`useMemo` 无需传递类型，根据函数的返回值就能推断出类型。

```typescript
const res = React.useMemo(() => {
  complexComputed(a, b)
}, [a, b])
```

7.`useContext`

首先在`createContext`的时候通过泛型定义需要向下传递的类型，以阿里的`antdesign`的`form`为例：

```typescript
import React from 'react';
import { WrappedFormUtils } from 'antd/es/form/Form';

export interface Cubicle extends Partial<any> { }

export interface IFormContext {
    form?: WrappedFormUtils;
    type?: string;
    changeCubicles?(data: Cubicle[]): void;
}

const FormContext = React.createContext<IFormContext>({});
```
在使用的时候就可以直接：

```typescript
    const { form, type } = useContext(FormContext);
```

8.`userReducer`

`useReducer` 接受两个参数：`reducer` 和 `initialState`，只需要对传入 `useReducer` 的 `reducer` 函数的入参 `state` 和 `action` 进行类型约束，就能够推断出类型。在使用 `useReducer` 或者 `redux` 的时候，需要配合使用联合类型。

以如下例子为例 [参考](https://juejin.cn/post/6884144754993397767#heading-7) 

```typescript
import React, { useReducer } from 'react';

const initialState = { count: 0 };

/** 联合类型，使用 | 连接 */
type ACTIONTYPE =
| { type: 'increment'; payload: number }
| { type: 'decrement'; payload: string }
| { type: 'reset'; payload: number };

function reducer(state: typeof initialState, action: ACTIONTYPE) {
    switch (action.type) {
        case 'increment':
            return { count: state.count + action.payload };
        case 'decrement':
            return { count: state.count - Number(action.payload) };
        case 'reset':
            return { count: action.payload };
        default:
            throw new Error();
    }
}

const Counter: React.FC = () => {
    const [state, dispatch] = useReducer(reducer, initialState);
    return (
        <>
            Count: {state.count}
            <button onClick={() => dispatch({ type: 'decrement', payload: '5' })}>-</button>
            <button onClick={() => dispatch({ type: 'increment', payload: 5 })}>+</button>
            <button onClick={() => dispatch({ type: 'reset', payload: 0 })}>reset</button>
        </>
    );
};

export default Counter;
```

### 事件处理

1. 表单事件`onChange`事件

```typescript
import React from 'react';

const Input: React.FC = () => {
    const [value, setValue] = React.useState('');
    
    const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setValue(e.target.value);
    };

    return <input value={value} onChange={onChange} />;
};

export default Input;

```


表单通常用于收集内部状态的信息。 它们主要用于登录和注册页面，因此提交的信息可以通过表单收集并发送到服务器进行处理。

`React.FormEvent` 通常用于元素的事件类型：

```typescript
class App extends React.Component<> {
    clickHandler = (e: React.FormEvent<HTMLButtonElement>) => {
        // ...
    }

    changeHandler = (e: React.FormEvent<HTMLInputElement>) => {
        // ...
    }

    render() {
        return (
            <div>
                <button onClick={this.clickHandler}>Click</button>
                <input type="text" onChange={this.changeHandler} />
            </div>
        )
    }
}

```

`clickHandler` 和 `changeHandler` 的事件参数 `e`都有`React.FormEvent` 类型。

我们可以省略使用`React.FormEvent`输入处理程序的参数，而改为输入处理程序的返回值。 这是通过使用：`React.ChangeEventHandler`：

```typescript
class App extends React.Component<> {
    clickHandler: React.FormEvent<HTMLButtonElement> = (e) => {
        // ...
    }

    changeHandler: React.FormEvent<HTMLInputElement> = (e) => {
        // ...
    }

    render() {
        return (
            <div>
                <button onClick={this.clickHandler}>Click</button>
                <input type="text" onChange={this.changeHandler} />
            </div>
        )
    }
}
```

2. `a`和`button`的点击事件

```typescript
import React from 'react';

const Button: React.FC = () => {
  const handleClick = (event: React.MouseEvent<HTMLAnchorElement | HTMLButtonElement>) => {
    
  };

  return (
    <div>
      <button onClick={handleClick}>click</button>
      <a href="" onClick={handleClick}>
        link
      </a>
    </div>
  );
};

export default Button;

```

3.`TextArea`

这是指文本区域元素的`React.ChangeEvent`，并且文本区域元素是`HTMLTextAreaElement`的实例。

泛型`T` 就是 `HTMLTextAreaElement`。事件即`React.ChangeEvent`.

4.`Select`

`select`同`textarea`，但是元素类型为`HTMLSelectElement`，事件为`React.ChangeEvent`.

5. `Form`

同理，类型为`HTMLFormElement`，事件为`React.ChangeEvent`.

6. `Video, Audio`

同理，类型为`HTMLVideoElement`和`HTMLAudioElement`,事件为`React.ChangeEvent`.

7.`React.SyntheticEvent`

这个类型是当你不关心类型时:

```typescript
class App extends React.Component<> {
    submitHandler = (e: React.SyntheticEvent) => {
        // ...
    }

    render() {
        return (
            <form onSubmit={this.submitHandler}>
                ...
            </form>
        )
    }
}
```

9. 其他事件

```typescript
ClipboardEvent<T = Element> 剪贴板事件对象
DragEvent<T = Element> 拖拽事件对象
ChangeEvent<T = Element>  Change 事件对象
KeyboardEvent<T = Element> 键盘事件对象
MouseEvent<T = Element> 鼠标事件对象
TouchEvent<T = Element>  触摸事件对象
WheelEvent<T = Element> 滚轮事件对象
AnimationEvent<T = Element> 动画事件对象
TransitionEvent<T = Element> 过渡事件对象
```

### Axios请求

`Axios`请求主要是通过定义一个全局的响应类型，并留出泛型，让用户自定义各个接口自己的类型，看看下面的例子，你就一目了然了：

```typescript
// 全局的后台返回的类型
interface ResponseData<T = any> {
  code: number
  result: T
  message: string
}

// 各个接口自己的返回类型
interface User {
  name: string
  age: number
}

function getUser<T>() {
  return axios<ResponseData<T>>('/extend/user')
    .then(res => res.data)
    .catch(err => console.error(err))
}


async function test() {
  const user = await getUser<User>()
  if (user) {
    console.log(user.result.name)
  }
}

test()
```

当然，如果你的异步请求工具，不是`Axios`那么也可以照猫画虎，也是定义全局的响应类型和业务接口的响应类型，并通过泛型传入。


![](https://github.com/FrontDream/FrontDream.github.io/blob/master/assets/image/personal/qrcode.png?raw=true)

❤️ 爱心三连击

1.看到这里了就点个在看支持下吧，你的「在看」是我创作的动力。

2.关注公众号前端梦想家，「一起学前端」！

3.添加微信【qdw1370336125】，拉你进技术交流群一起学习。
