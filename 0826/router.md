# Vue Router

[router](https://router.vuejs.org/zh/installation.html)

[教学视频](https://vueschool.io/lessons/vue-router-dynamic-routes?friend=vuerouter)

## 1.动态路由分配

### 捕获所有路由

常规参数只会匹配被 `/` 分隔的 URL 片段中的字符。如果想匹配**任意路径**，我们可以使用通配符 (`*`)：

```js
{
  // 会匹配所有路径
  path: '*'
}
{
  // 会匹配以 `/user-` 开头的任意路径
  path: '/user-*'
}
```

### 404 Not found路由

当使用*通配符*路由时，请确保路由的顺序是正确的，也就是说含有*通配符*的路由应该放在最后。路由 `{ path: '*' }` 通常用于客户端 404 错误。

## 2.嵌套路由



`<router-view>`最顶层的出口，渲染最澳际路由匹配到的组件。同样地，一个被渲染组件同样可以包含自己的嵌套 `<router-view>`

*注意：*以`/`开头的嵌套路径会被当做根路径。

## 3.编程式的导航

### 创建 a 标签来定义导航链接的方式：

`<router-link>`

router的实例方法

### `router.push`

```js
router.push(location, onComplete?, onAbort?)
```

*注意：*在 Vue 实例内部，可通过 `$router`访问路由实例。故可以调用 `this.$router.push`

该方法的参数可以是一个字符串路径，或者一个描述地址的对象。

想要导航到不同的 URL，则使用 `router.push` 方法。这个方法会向 history 栈添加一个新的记录，所以，当用户点击浏览器后退按钮时，则回到之前的 URL。

点击 `<router-link :to="...">` 等同于调用 `router.push(...)`。

| 声明式                    | 编程式             |
| ------------------------- | ------------------ |
| `<router-link :to="...">` | `router.push(...)` |

### `router.replace`

```js
router.replace(location, onComplete?, onAbort?)
```

*与 `router.push` 的差别：*不会向history添加新纪录。而是跟它的方法名一样——替换当前的history记录。

| 声明式                            | 编程式                |
| --------------------------------- | --------------------- |
| `<router-link :to="..." replace>` | `router.replace(...)` |

### `router.go(n)`

这个方法的参数是一个整数，意思是在 history 记录中向前或者后退多少步，类似 `window.history.go(n)`。

## 4.路由组件传参



## 5.导航守卫

### 全局前置守卫 `router.beforeEach`

```js
const router = new VueRouter({ ... })

router.beforeEach((to, from, next) => {
  // ...
})
```

### 全局解析守卫 `router.beforeResolve`

和 `router.beforeEach` 类似，区别是在导航被确认之前，**同时在所有组件内守卫和异步路由组件被解析之后**，解析守卫就被调用。

### 全局后置钩子

这些钩子不会接受 `next` 函数也不会改变导航本身

### 路由独享的守卫

在路由配置上直接定义 `beforeEnter` 守卫：

```js
const router = new VueRouter({
  routes: [
    {
      path: '/foo',
      component: Foo,
      beforeEnter: (to, from, next) => {
        // ...
      }
    }
  ]
})
```

### 组件内的守卫

可以在路由组件内直接定义以下路由导航守卫：

- `beforeRouteEnter`
- `beforeRouteUpdate` (2.2 新增)
- `beforeRouteLeave`

### 完整的导航解析流程

1. 导航被触发。
2. 在失活的组件里调用 `beforeRouteLeave` 守卫。
3. 调用全局的 `beforeEach` 守卫。
4. 在重用的组件里调用 `beforeRouteUpdate` 守卫 (2.2+)。
5. 在路由配置里调用 `beforeEnter`。
6. 解析异步路由组件。
7. 在被激活的组件里调用 `beforeRouteEnter`。
8. 调用全局的 `beforeResolve` 守卫 (2.5+)。
9. 导航被确认。
10. 调用全局的 `afterEach` 钩子。
11. 触发 DOM 更新。
12. 调用 `beforeRouteEnter` 守卫中传给 `next` 的回调函数，创建好的组件实例会作为回调函数的参数传入。

## 6.路由元信息

定义路由的时候可以配置 `meta` 字段

`routes` 配置中的每个路由对象为 **路由记录**。路由记录可以是嵌套的，因此，当一个路由匹配成功后，他可能匹配多个路由记录

需要遍历 `$route.matched` 来检查路由记录中的 `meta` 字段。

## 7.路由懒加载

# History API

[history API](https://developer.mozilla.org/zh-CN/docs/Web/API/History_API)

## 基本使用

### 向后跳转 `history.back()`

与用户点击浏览器回退按钮的效果相同

### 向前跳转 `history.forward()`

点击浏览器前进按钮

### 指定跳转 `history.go(n)`

用 `go()` 方法载入到会话历史中的某一特定页面， 通过与当前页面相对位置来标志 (当前页面的相对位置标志为0)

### 长度属性 `history.length`

通过查看长度属性的值来确定的历史堆栈中页面的数量:

```
 let numberOfEntries = window.history.length;
```

## 添加和修改历史记录

[Working with the History API](https://developer.mozilla.org/zh-CN/docs/Web/API/History_API/Working_with_the_History_API)

### 添加`history.pushState()`

`history.pushState(状态对象，标题，url)`

```js
window.onpopstate = function(e) {
   alert(2);
}

let stateObj = {
    foo: "bar",
};

history.pushState(stateObj, "page 2", "bar.html");
```

### 修改`history.replaceState()`

### popstate事件

### 获取当前状态

页面加载时，或许会有个非null的状态对象。

你可以读取当前历史记录项的状态对象state，而不必等待`popstate` 事件， 只需要这样使用`history.state` 属性

