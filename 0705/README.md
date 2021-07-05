# 深入了解组件

<https://cn.vuejs.org/v2/guide/components-registration.html>

___

## 1. 组件注册

1. 组件名
`使用 kebab-case`
`使用 PascalCase`
2. 全局注册
在注册之后可以用在任何新创建的 Vue 根实例 (new Vue) 的模板中。

      Vue.component('my-component-name', {
        // ... 选项 ...
      })

*缺点：全局注册所有的组件，意味着即使已经不再使用该组件，它也仍然会被包含在最终的构建结果中。早晨用户下载的JS无谓的增加*
3. 局部注册
    - 使用普通的JS对象来定义组件
    - 在`components`选项中定义组件

          // step 1
          var ComponentA = { /* ... */ }
          var ComponentB = { /* ... */ }
          var ComponentC = { /* ... */ }

          // step 2
          new Vue({
            el: '#app',
            components: {
              'component-a': ComponentA,
              'component-b': ComponentB
            }
          })
*注: 局部注册的组件在其子组件中不可用。*

## 2. prop

1. 静态传递prop
2. 动态传递prop
3. 单向数据流：所有的 prop 都使得其父子 prop 之间形成了一个单向下行绑定：父级 prop 的更新会向下流动到子组件中，但是反过来则不行。这样会防止从子组件意外变更父级组件的状态。

## 3. 自定义事件

1. `v-model` 一个组件上的 `v-model` 默认会利用名为 `value` 的 `prop` 和名为 `input` 的事件，但是像单选框、复选框等类型的输入控件可能会将 `value` attribute 用于不同的目的。
2. 将原生事件绑定到组件：使用 `v-on` 的 `.native` 修饰符。
3. `.sync` 修饰符，双向绑定*注意带有 .sync 修饰符的 v-bind 不能和表达式一起使用 (例如 v-bind:title.sync=”doc.title + ‘!’” 是无效的)。*

## 4. 插槽

1. 编译作用域：*父级模板里的所有内容都是在父级作用域中编译的；子模板里的所有内容都是在子作用域中编译的。*
2. 后备内容：

      // 1. 父组件调用内容的后面会紧跟Submit
      <slot>Submit</slot>
      // 2. 父组件调用后，父组件的内容直接取代
      <slot></slot>

3. 分类1：具名插槽 `name` `v-slot`

      // 1. 创建插槽
      <header>
      <slot name="header"></slot>
      </header>
      // 2. 填充插槽 v-slot
      <template v-slot:header>
      <h1>Here might be a page title</h1>
      </template>

*一个不带 name 的 \<slot> 出口会带有隐含的名字“default”。*
4. 分类2：作用域插槽
绑定在 \<slot> 元素上的 attribute 被称为`插槽 prop`。
5. 解构插槽prop
作用域插槽的内部工作原理是将你的插槽内容包裹在一个拥有单个参数的函数里。意味着 v-slot 的值实际上可以是任何能够作为函数定义中的参数的 JavaScript 表达式。
6. 动态插槽名
7. 具名插槽的缩写 `#` `v-slot:header` == `#header`

## 5. 动态组件&异步组件

- 动态组件使用`keep-alive`
- 异步组件：Vue 允许以一个工厂函数的方式定义你的组件，这个工厂函数会异步解析你的组件定义。Vue 只有在这个组件需要被渲染的时候才会触发该工厂函数，且会把结果缓存起来供未来重渲染。

## 6. 处理边界情况

1. 访问根实例：通过 `$root` property 进行访问
2. 访问父级组件实例：`$parent` property 可以用来从一个子组件访问父组件的实例。
3. 访问子组件实例或子元素：`ref` attribute为子组件赋予一个ID引用。

      // 1. 赋予ID引用
      <base-input ref="usernameInput"></base-input>
      // 2. 使用`this.$refs.usernameInput `来访问 `<base-input>`实例

4. 依赖注入：`$parent` property 无法很好的扩展到更深层级的嵌套组件上。用到了良心实例选项：
    `provide`:指定想要提供给后代组件的数据/方法。
    `inject`:接收指定的我们想要添加在这个实例上的 property
5. 程序化的事件侦听器
    通过 `$on(eventName, eventHandler)` 侦听一个事件
    通过 `$once(eventName, eventHandler)` 一次性侦听一个事件
    通过 `$off(eventName, eventHandler)` 停止侦听一个事件
6. 模板定义的替代品
    内联模板：`inline-template` 

## 7. 可复用性

1. 混入:分发 Vue 组件中的可复用功能
2. 选项合并：当组件和混入对象含有同名选项时，这些选项将以恰当的方式进行“合并”。
*例如：*数据对象在内部会进行递归合并，并在发生冲突时以**组件数据**优先。

## 8. 自定义指令

1. **钩子函数**
    一个指令定义对象可以提供如下几个钩子函数 (均为可选)：
    - bind：只调用一次，指令第一次绑定到元素时调用。在这里可以进行一次性的初始化设置。
    - inserted：被绑定元素插入父节点时调用 (仅保证父节点存在，但不一定已被插入文档中)。
    - update：所在组件的 VNode 更新时调用，但是可能发生在其子 VNode 更新之前。指令的值可能发生了改变，也可能没有。
    - componentUpdated：指令所在组件的 VNode 及其子 VNode 全部更新后调用。
    - unbind：只调用一次，指令与元素解绑时调用。

## 9. 渲染函数&JSX

通过 `this.$slots` 访问静态插槽的内容，每个插槽都是一个 VNode 数组

## 10. 插件

1. 插件通常用来为 Vue 添加全局功能。插件的功能范围没有严格的限制——一般有下面几种：

- 添加全局方法或者 property。如：vue-custom-element
- 添加全局资源：指令/过滤器/过渡等。如 vue-touch
- 通过全局混入来添加一些组件选项。如 vue-router
- 添加 Vue 实例方法，通过把它们添加到 Vue.prototype 上实现。
- 一个库，提供自己的 API，同时提供上面提到的一个或多个功能。如 vue-router

2. 使用插件 `Vue.use()`
需要在你调用 `new Vue()` 启动应用之前完成