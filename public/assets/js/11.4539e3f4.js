(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{367:function(t,s,a){"use strict";a.r(s);var n=a(42),e=Object(n.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"用一道大厂面试题带你搞懂事件循环机制"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#用一道大厂面试题带你搞懂事件循环机制"}},[t._v("#")]),t._v(" 用一道大厂面试题带你搞懂事件循环机制")]),t._v(" "),a("h1",{attrs:{id:"本文涵盖"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#本文涵盖"}},[t._v("#")]),t._v(" 本文涵盖")]),t._v(" "),a("ul",[a("li",[a("p",[t._v("面试题的引入")])]),t._v(" "),a("li",[a("p",[t._v("对事件循环面试题执行顺序的一些疑问")])]),t._v(" "),a("li",[a("p",[t._v("通过面试题对微任务、事件循环、定时器等对深入理解")])]),t._v(" "),a("li",[a("p",[t._v("结论总结")])])]),t._v(" "),a("h1",{attrs:{id:"面试题"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#面试题"}},[t._v("#")]),t._v(" 面试题")]),t._v(" "),a("p",[t._v("面试题如下，大家可以先试着写一下输出结果，然后再看我下面的详细讲解，看看会不会有什么出入，如果把整个顺序弄清楚 "),a("code",[t._v("Node.js")]),t._v(" 的执行顺序应该就没问题了。")]),t._v(" "),a("div",{staticClass:"language-javascript line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("async")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("async1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  console"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"async1 start"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("await")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("async2")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  console"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"async1 end"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("async")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("async2")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  console"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"async2"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\nconsole"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"script start"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("setTimeout")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  console"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"setTimeout0"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("setTimeout")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  console"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"setTimeout3"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("3")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("setImmediate")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" console"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"setImmediate"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\nprocess"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("nextTick")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" console"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"nextTick"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("async1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Promise")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("resolve")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  console"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"promise1"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("resolve")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  console"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"promise2"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("then")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  console"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"promise3"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\nconsole"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"script end"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br"),a("span",{staticClass:"line-number"},[t._v("7")]),a("br"),a("span",{staticClass:"line-number"},[t._v("8")]),a("br"),a("span",{staticClass:"line-number"},[t._v("9")]),a("br"),a("span",{staticClass:"line-number"},[t._v("10")]),a("br"),a("span",{staticClass:"line-number"},[t._v("11")]),a("br"),a("span",{staticClass:"line-number"},[t._v("12")]),a("br"),a("span",{staticClass:"line-number"},[t._v("13")]),a("br"),a("span",{staticClass:"line-number"},[t._v("14")]),a("br"),a("span",{staticClass:"line-number"},[t._v("15")]),a("br"),a("span",{staticClass:"line-number"},[t._v("16")]),a("br"),a("span",{staticClass:"line-number"},[t._v("17")]),a("br"),a("span",{staticClass:"line-number"},[t._v("18")]),a("br"),a("span",{staticClass:"line-number"},[t._v("19")]),a("br"),a("span",{staticClass:"line-number"},[t._v("20")]),a("br"),a("span",{staticClass:"line-number"},[t._v("21")]),a("br"),a("span",{staticClass:"line-number"},[t._v("22")]),a("br"),a("span",{staticClass:"line-number"},[t._v("23")]),a("br"),a("span",{staticClass:"line-number"},[t._v("24")]),a("br"),a("span",{staticClass:"line-number"},[t._v("25")]),a("br"),a("span",{staticClass:"line-number"},[t._v("26")]),a("br"),a("span",{staticClass:"line-number"},[t._v("27")]),a("br"),a("span",{staticClass:"line-number"},[t._v("28")]),a("br"),a("span",{staticClass:"line-number"},[t._v("29")]),a("br"),a("span",{staticClass:"line-number"},[t._v("30")]),a("br"),a("span",{staticClass:"line-number"},[t._v("31")]),a("br"),a("span",{staticClass:"line-number"},[t._v("32")]),a("br"),a("span",{staticClass:"line-number"},[t._v("33")]),a("br"),a("span",{staticClass:"line-number"},[t._v("34")]),a("br"),a("span",{staticClass:"line-number"},[t._v("35")]),a("br")])]),a("p",[t._v("面试题正确的输出结果")]),t._v(" "),a("div",{staticClass:"language-javascript line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[t._v("script start\nasync1 start\nasync2\npromise1\npromise2\nscript end\nnextTick\nasync1 end\npromise3\nsetTimeout0\nsetImmediate\nsetTimeout3\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br"),a("span",{staticClass:"line-number"},[t._v("7")]),a("br"),a("span",{staticClass:"line-number"},[t._v("8")]),a("br"),a("span",{staticClass:"line-number"},[t._v("9")]),a("br"),a("span",{staticClass:"line-number"},[t._v("10")]),a("br"),a("span",{staticClass:"line-number"},[t._v("11")]),a("br"),a("span",{staticClass:"line-number"},[t._v("12")]),a("br")])]),a("h1",{attrs:{id:"提出问题"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#提出问题"}},[t._v("#")]),t._v(" 提出问题")]),t._v(" "),a("p",[t._v("在理解"),a("code",[t._v("node.js")]),t._v("的异步的时候有一些不懂的地方，使用"),a("code",[t._v("node.js")]),t._v("的开发者一定都知道它是单线程的，异步不阻塞且高并发的一门语言，但是"),a("strong",[t._v("node.js 在实现异步的时候，两个异步任务开启了，是就是谁快就谁先完成这么简单，还是说异步任务最后也会有一个先后执行顺序?对于一个单线程的的异步语言它是怎么实现高并发的呢?")])]),t._v(" "),a("p",[t._v("好接下来我们就带着这两个问题来真正的理解"),a("code",[t._v("node.js")]),t._v("中的异步（微任务与事件循环）。")]),t._v(" "),a("p",[a("code",[t._v("Node")]),t._v(" 的异步语法比浏览器更复杂，因为它可以跟内核对话，不得不搞了一个专门的库 "),a("code",[t._v("libuv")]),t._v(" 做这件事。这个库负责各种回调函数的执行时间，异步任务最后基于事件循环机制还是要回到主线程，一个个排队执行。")]),t._v(" "),a("h1",{attrs:{id:"详细讲解"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#详细讲解"}},[t._v("#")]),t._v(" 详细讲解")]),t._v(" "),a("h2",{attrs:{id:"_1-本轮循环与次轮循环"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-本轮循环与次轮循环"}},[t._v("#")]),t._v(" 1.本轮循环与次轮循环")]),t._v(" "),a("p",[t._v("异步任务可以分成两种。")]),t._v(" "),a("p",[t._v("追加在本轮循环的异步任务")]),t._v(" "),a("p",[t._v("追加在次轮循环的异步任务")]),t._v(" "),a("p",[t._v("所谓”循环”，指的是事件循环（"),a("code",[t._v("event loop")]),t._v("）。这是 "),a("code",[t._v("JavaScript")]),t._v(" 引擎处理异步任务的方式，后文会详细解释。这里只要理解，本轮循环一定早于次轮循环执行即可。")]),t._v(" "),a("p",[a("code",[t._v("Node")]),t._v(" 规定，"),a("code",[t._v("process.nextTick")]),t._v("和"),a("code",[t._v("Promise")]),t._v("的回调函数，追加在本轮循环，即同步任务一旦执行完成，就开始执行它们。而"),a("code",[t._v("setTimeout")]),t._v("、"),a("code",[t._v("setInterval")]),t._v("、"),a("code",[t._v("setImmediate")]),t._v("的回调函数，追加在次轮循环。")]),t._v(" "),a("h2",{attrs:{id:"_2-process-nexttick"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-process-nexttick"}},[t._v("#")]),t._v(" 2.process.nextTick()")]),t._v(" "),a("p",[t._v("1）"),a("code",[t._v("process.nextTick")]),t._v("不要因为有"),a("code",[t._v("next")]),t._v("就被好多小伙伴当作次轮循环。")]),t._v(" "),a("p",[t._v("2）"),a("code",[t._v("Node")]),t._v(" 执行完所有同步任务，接下来就会执行 "),a("code",[t._v("process.nextTick")]),t._v(" 的任务队列。")]),t._v(" "),a("p",[t._v("3）开发过程中如果想让异步任务尽可能快地执行，可以使用 "),a("code",[t._v("process.nextTick")]),t._v(" 来完成。")]),t._v(" "),a("h2",{attrs:{id:"_3-微任务-microtack"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-微任务-microtack"}},[t._v("#")]),t._v(" 3.微任务（microtack）")]),t._v(" "),a("p",[t._v("根据语言规格，"),a("code",[t._v("Promise")]),t._v(" 对象的回调函数，会进入异步任务里面的”微任务”（"),a("code",[t._v("microtask")]),t._v("）队列。")]),t._v(" "),a("p",[t._v("微任务队列追加在 "),a("code",[t._v("process.nextTick")]),t._v(" 队列的后面，也属于本轮循环。")]),t._v(" "),a("p",[t._v("根据语言规格，"),a("code",[t._v("Promise")]),t._v(" 对象的回调函数，会进入异步任务里面的”微任务”（"),a("code",[t._v("microtask")]),t._v("）队列。")]),t._v(" "),a("p",[t._v("微任务队列追加在"),a("code",[t._v("process.nextTick")]),t._v("队列的后面，也属于本轮循环。所以，下面的代码总是先输出 3，再输出 4。")]),t._v(" "),a("div",{staticClass:"language-javascript line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[t._v("process"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("nextTick")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" console"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("3")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nPromise"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("resolve")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("then")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" console"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("4")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br")])]),a("p",[t._v("// 输出结果 3，4")]),t._v(" "),a("div",{staticClass:"language-javascript line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[t._v("process"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("nextTick")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" console"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nPromise"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("resolve")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("then")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" console"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nprocess"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("nextTick")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" console"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("3")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nPromise"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("resolve")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("then")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" console"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("4")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br")])]),a("p",[t._v("// 输出结果 1，3，2，4")]),t._v(" "),a("p",[t._v("注意，只有前一个队列全部清空以后，才会执行下一个队列。两个队列的概念 "),a("code",[t._v("nextTickQueue")]),t._v(" 和微队列 "),a("code",[t._v("microTaskQueue")]),t._v("，也就是说开启异步任务也分为几种，像 "),a("code",[t._v("Promise")]),t._v(" 对象这种，开启之后直接进入微队列中，微队列内的就是那个任务快就那个先执行完，但是针对于队列与队列之间不同的任务，还是会有先后顺序，这个先后顺序是由队列决定的。")]),t._v(" "),a("h2",{attrs:{id:"_4-事件循环的阶段-idle-prepare-忽略了这个阶段"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_4-事件循环的阶段-idle-prepare-忽略了这个阶段"}},[t._v("#")]),t._v(" 4.事件循环的阶段（idle, prepare 忽略了这个阶段）")]),t._v(" "),a("p",[t._v("事件循环最阶段最详细的讲解（官网：https://nodejs.org/en/docs/guides/event-loop-timers-and-nexttick/#setimmediate-vs-settimeout）")]),t._v(" "),a("h3",{attrs:{id:"timers-阶段"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#timers-阶段"}},[t._v("#")]),t._v(" timers 阶段")]),t._v(" "),a("p",[t._v("次阶段包括"),a("code",[t._v("setTimeout()")]),t._v("和"),a("code",[t._v("setInterval()")])]),t._v(" "),a("h3",{attrs:{id:"io-callbacks"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#io-callbacks"}},[t._v("#")]),t._v(" IO callbacks")]),t._v(" "),a("p",[t._v("大部分的回调事件，普通的 caollback")]),t._v(" "),a("h3",{attrs:{id:"poll-阶段"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#poll-阶段"}},[t._v("#")]),t._v(" poll 阶段")]),t._v(" "),a("p",[t._v("网络连接，数据获取，读取文件等操作")]),t._v(" "),a("h3",{attrs:{id:"check-阶段"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#check-阶段"}},[t._v("#")]),t._v(" check 阶段")]),t._v(" "),a("p",[a("code",[t._v("setImmediate()")]),t._v("在这里调用回调")]),t._v(" "),a("h3",{attrs:{id:"close-阶段"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#close-阶段"}},[t._v("#")]),t._v(" close 阶段")]),t._v(" "),a("p",[t._v("一些关闭回调，例如"),a("code",[t._v("socket.on('close', ...)")])]),t._v(" "),a("ul",[a("li",[t._v("事件循环注意点")])]),t._v(" "),a("p",[t._v("1）"),a("code",[t._v("Node")]),t._v(" 开始执行脚本时，会先进行事件循环的初始化，但是这时事件循环还没有开始，会先 完成下面的事情。")]),t._v(" "),a("p",[t._v("同步任务\n发出异步请求\n规划定时器生效的时间\n执行"),a("code",[t._v("process.nextTick()")]),t._v("等等")]),t._v(" "),a("p",[t._v("最后，上面这些事情都干完了，事件循环就正式开始了。")]),t._v(" "),a("p",[t._v("2）事件循环同样运行在单线程环境下，高并发也是依靠事件循环，每产生一个事件，就会加入到该阶段对应的队列中，此时事件循环将该队列中的事件取出，准备执行之后的 "),a("code",[t._v("Callback")]),t._v("。")]),t._v(" "),a("p",[t._v("3）假设事件循环现在进入了某个阶段，即使这期间有其他队列中的事件就绪，也会先将当前队列的全部回调方法执行完毕后，再进入到下一个阶段。")]),t._v(" "),a("h2",{attrs:{id:"_5-事件循环中的-settimeout-与-setimmediate"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_5-事件循环中的-settimeout-与-setimmediate"}},[t._v("#")]),t._v(" 5.事件循环中的 setTimeOut 与 setImmediate")]),t._v(" "),a("p",[t._v("由于 "),a("code",[t._v("setTimeout")]),t._v(" 在 "),a("code",[t._v("timers")]),t._v(" 阶段执行，而 "),a("code",[t._v("setImmediate")]),t._v(" 在 "),a("code",[t._v("check")]),t._v("阶段执行。所以，"),a("code",[t._v("setTimeout")]),t._v(" 会早于 "),a("code",[t._v("setImmediate")]),t._v(" 完成。")]),t._v(" "),a("div",{staticClass:"language-javascript line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("setTimeout")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" console"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("setImmediate")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" console"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br")])]),a("p",[t._v("上面代码应该先输出 1，再输出 2，但是实际执行的时候，结果却是不确定，有时还会先输出 2，再输出 1。")]),t._v(" "),a("p",[t._v("这是因为 "),a("code",[t._v("setTimeout")]),t._v(" 的第二个参数默认为 0。但是实际上，"),a("code",[t._v("Node")]),t._v(" 做不到 0 毫秒，最少也需要 1 毫秒，根据官方文档，第二个参数的取值范围在 1 毫秒到 2147483647 毫秒之间。也就是说，"),a("code",[t._v("setTimeout(f, 0)")]),t._v("等同于"),a("code",[t._v("setTimeout(f, 1)")]),t._v("。")]),t._v(" "),a("p",[t._v("实际执行的时候，进入事件循环以后，有可能到了 1 毫秒，也可能还没到 1 毫秒，取决于系统当时的状况。如果没到 1 毫秒，那么 "),a("code",[t._v("timers")]),t._v(" 阶段就会跳过，进入 "),a("code",[t._v("check")]),t._v(" 阶段，先执行 "),a("code",[t._v("setImmediate")]),t._v(" 的回调函数。")]),t._v(" "),a("p",[t._v("但是，下面的代码一定是先输出 2，再输出 1。")]),t._v(" "),a("div",{staticClass:"language-javascript line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" fs "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("require")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"fs"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nfs"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("readFile")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"test.js"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("setTimeout")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" console"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("setImmediate")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" console"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br")])]),a("p",[t._v("上面代码会先进入 "),a("code",[t._v("I/O callbacks")]),t._v(" 阶段，然后是 "),a("code",[t._v("check")]),t._v(" 阶段，最后才是 "),a("code",[t._v("timers")]),t._v(" 阶段。因此，"),a("code",[t._v("setImmediate")]),t._v("才会早于"),a("code",[t._v("setTimeout")]),t._v("执行。")]),t._v(" "),a("h2",{attrs:{id:"_6-同步任务中-async-以及-promise-的一些误解"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_6-同步任务中-async-以及-promise-的一些误解"}},[t._v("#")]),t._v(" 6.同步任务中 async 以及 promise 的一些误解")]),t._v(" "),a("ul",[a("li",[t._v("问题 1:")])]),t._v(" "),a("p",[t._v("在面试题中，在同步任务的过程中，不知道大家有没有疑问，为什么不是执行完"),a("code",[t._v("async2")]),t._v("输出后执行"),a("code",[t._v("async1 end")]),t._v("输出，而是接着执行 "),a("code",[t._v("promise1")]),t._v("？")]),t._v(" "),a("p",[t._v("引用阮一峰老师书中一句话："),a("strong",[t._v("“ async 函数返回一个 Promise 对象，当函数执行的时候，一旦遇到 await 就会先返回，等到触发的异步操作完成，再接着执行函数体内后面的语句。”")])]),t._v(" "),a("p",[t._v("简单的说，先去执行后面的同步任务代码，执行完成后，也就是表达式中的 "),a("code",[t._v("Promise")]),t._v("解析完成后继续执行 "),a("code",[t._v("async")]),t._v(" 函数并返回解决结果。（其实还是本轮循环"),a("code",[t._v("promise")]),t._v("的问题，最后的"),a("code",[t._v("resolve")]),t._v("属于异步，位于本轮循环的末尾。）")]),t._v(" "),a("ul",[a("li",[t._v("问题 2:")])]),t._v(" "),a("p",[a("strong",[t._v("console.log('promise2')为什么也是在 resolve 之前执行？")])]),t._v(" "),a("p",[t._v("解答：注：此内容来源与阮一峰老师的"),a("code",[t._v("ES6")]),t._v("书籍，调用"),a("code",[t._v("resolve")]),t._v("或者"),a("code",[t._v("reject")]),t._v("并不会终结"),a("code",[t._v("promise")]),t._v("的参数函数的执行。因为立即"),a("code",[t._v("resolved")]),t._v("的"),a("code",[t._v("Promise")]),t._v("是本轮循环的末尾执行，同时总是晚于本轮循环的同步任务。正规的写法调用"),a("code",[t._v("resolve")]),t._v("或者"),a("code",[t._v("reject")]),t._v("以后，"),a("code",[t._v("Promise")]),t._v("的使命就完成了，后继操作应该放在"),a("code",[t._v("then")]),t._v("方法后面。所以最好在它的前面加上"),a("code",[t._v("return")]),t._v("语句，这样就不会出现意外")]),t._v(" "),a("div",{staticClass:"language-javascript line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Promise")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("resolve"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("reject")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("resolve")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//后面的语句不会执行")]),t._v("\n  console"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br")])]),a("ul",[a("li",[t._v("问题 3:")])]),t._v(" "),a("p",[a("strong",[t._v("promise3 和 script end 的执行顺序是否有疑问？")])]),t._v(" "),a("p",[t._v("解答：因为立即"),a("code",[t._v("resolved")]),t._v("的"),a("code",[t._v("Promise")]),t._v("是本轮循环的末尾执行，同时总是晚于本轮循环的同步任务。"),a("code",[t._v("Promise")]),t._v(" 是一个立即执行函数，但是他的成功（或失败："),a("code",[t._v("reject")]),t._v("）的回调函数 "),a("code",[t._v("resolve")]),t._v(" 却是一个异步执行的回调。当执行到 "),a("code",[t._v("resolve()")]),t._v(" 时，这个任务会被放入到回调队列中，等待调用栈有空闲时事件循环再来取走它。本轮循环中最后执行的。")]),t._v(" "),a("h1",{attrs:{id:"整体结论"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#整体结论"}},[t._v("#")]),t._v(" 整体结论")]),t._v(" "),a("p",[t._v("顺序的整体总结就是:\n同步任务-> 本轮循环->次轮循环")]),t._v(" "),a("h1",{attrs:{id:"附件-参考资料"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#附件-参考资料"}},[t._v("#")]),t._v(" 附件:参考资料")]),t._v(" "),a("p",[a("code",[t._v("node.js")]),t._v("官网：")]),t._v(" "),a("ul",[a("li",[a("p",[t._v("事件循环：https://nodejs.org/en/docs/guides/event-loop-timers-and-nexttick/#setimmediate-vs-settimeout")])]),t._v(" "),a("li",[a("p",[t._v("Timers：https://nodejs.org/dist/latest-v10.x/docs/api/timers.html")])])]),t._v(" "),a("p",[a("img",{attrs:{src:"https://github.com/FrontDream/FrontDream.github.io/blob/master/assets/image/personal/qrcode.png?raw=true",alt:""}})]),t._v(" "),a("p",[t._v("❤️ 爱心三连击 1.看到这里了就点个在看支持下吧，你的「在看」是我创作的动力。")]),t._v(" "),a("p",[t._v("2.关注公众号前端梦想家，「一起学前端」！")]),t._v(" "),a("p",[t._v("3.添加微信【qdw1370336125】，拉你进技术交流群一起学习。")]),t._v(" "),a("p",[t._v("在看点这里")])])}),[],!1,null,null,null);s.default=e.exports}}]);