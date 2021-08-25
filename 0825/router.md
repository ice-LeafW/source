# Vue Router

[router](https://router.vuejs.org/zh/installation.html)

[教学视频](https://vueschool.io/lessons/vue-router-dynamic-routes?friend=vuerouter)

## 1. 嵌套路由



`<router-view>`最顶层的出口，渲染最澳际路由匹配到的组件。同样地，一个被渲染组件同样可以包含自己的嵌套 `<router-view>`

*注意：*以`/`开头的嵌套路径会被当做根路径。

## 2. 编程式的导航

### 创建 a 标签来定义导航链接的方式：

`<router-link>`

router的实例方法

### `router.push(location, onComplete?, onAbort?)`

*注意：*在 Vue 实例内部，可通过 `$router`访问路由实例。故可以调用 `this.$router.push`

该方法的参数可以是一个字符串路径，或者一个描述地址的对象。

想要导航到不同的 URL，则使用 `router.push` 方法。这个方法会向 history 栈添加一个新的记录，所以，当用户点击浏览器后退按钮时，则回到之前的 URL。

点击 `<router-link :to="...">` 等同于调用 `router.push(...)`。

| 声明式                    | 编程式             |
| ------------------------- | ------------------ |
| `<router-link :to="...">` | `router.push(...)` |

### `router.replace(location, onComplete?, onAbort?)`

*与 `router.push` 的差别：*不会向history添加新纪录。而是跟它的方法名一样——替换当前的history记录。

| 声明式                            | 编程式                |
| --------------------------------- | --------------------- |
| `<router-link :to="..." replace>` | `router.replace(...)` |

### `router.go(n)`

这个方法的参数是一个整数，意思是在 history 记录中向前或者后退多少步，类似 `window.history.go(n)`。