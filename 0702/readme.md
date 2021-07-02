# 0702

## 7. 条件渲染

___

1. **v-if**
    - v-if 指令用于条件性地渲染一块内容。这块内容只会在指令的表达式返回 truthy 值的时候被渲染。
    - 在\<template> 元素上使用v-if条件渲染分组：
        想切换多个元素，可以把一个 \<template> 元素当做不可见的包裹元素，并在上面使用 v-if。最终的渲染结果将不包含 \<template> 元素。

          <template v-if="ok">
            <h1>Title</h1>
            <p>Paragraph 1</p>
            <p>Paragraph 2</p>
          </template>

    - v-else

          <div v-if="Math.random() > 0.5">
            Now you see me
          </div>
          <div v-else>
            Now you don't
          </div>

    - v-else-if

          <div v-if="type === 'A'">
            A
          </div>
          <div v-else-if="type === 'B'">
            B
          </div>
          <div v-else-if="type === 'C'">
            C
          </div>
          <div v-else>
            Not A/B/C
          </div>

    - `key` 管理可复用元素
2. **v-show**
    - 用于根据条件展示元素的选项是 v-show 指令
    - 不同的是带有 v-show 的元素始终会被渲染并保留在 DOM 中。v-show 只是简单地切换元素的 CSS property display。
    - **注意，v-show 不支持 \<template> 元素，也不支持 v-else。**

3. **v-if 与v-show的异同**
v-if 是“真正”的条件渲染，因为它会确保在切换过程中条件块内的事件监听器和子组件适当地被销毁和重建。
v-if 也是惰性的：如果在初始渲染时条件为假，则什么也不做——直到条件第一次变为真时，才会开始渲染条件块。
相比之下，v-show 就简单得多——不管初始条件是什么，元素总是会被渲染，并且只是简单地基于 CSS 进行切换。
一般来说，v-if 有更高的切换开销，而 v-show 有更高的初始渲染开销。因此，如果需要非常频繁地切换，则使用 v-show 较好；如果在运行时条件很少改变，则使用 v-if 较好。

## 8. 列表渲染

___

1. **v-for**
    - 数组对应为一组元素 `item in items` `(item index) in items`,可选参数 index 当前项的索引
    - 对象 `value in object` `(value,name) in object` 属性值，可选参数 name 键名

## 9. 事件处理

___

1. **v-on**监听事件
    - 形式如 v-on：click = 方法名
    - v:on click = 方法名（参数）
2. 事件修饰符（可串联）
    - `.stop` 阻止事件继续传播
    - `.prevent` 不再重新加载页面，阻止事件的默认行为
    - `.capture` 使用的事件捕获模式
    - `.self` 元素自身触发时的处理函数
    - `.once` 只触发一次
    - `.passive` 触发默认行为
3. 按键修饰符
    - `keyup`

## 10. 表单输入绑定

___

1. 用法
    - `v-model`语法糖。它负责监听用户的输入事件以更新数据，并对一些极端场景进行一些特殊处理。
    - 用 `v-model` 指令在表单 \<input>、\<textarea> 及 \<select> 元素上创建双向数据绑定。它会根据控件类型自动选取正确的方法来更新元素。

          <input type="checkbox" id="jack" value="Jack" v-model="checkedNames">
          <label for="jack">Jack</label>
          <input type="checkbox" id="john" value="John" v-model="checkedNames">
          <label for="john">John</label>
          <input type="checkbox" id="mike" value="Mike" v-model="checkedNames">
          <label for="mike">Mike</label>
          <br>
          <span>Checked names: {{ checkedNames }}</span>
          new Vue({
            el: '...',
            data: {
              checkedNames: []
            }
          })

2. 修饰符
    - `.lazy` 懒加载，内容修改时更新
    - `.number` input转为数值型
    - `.trim` 过滤用户输入烦人首位空白字符

## 11.组件基础

___

1. 用法
    - 基本示例

          // 定义一个名为 button-counter 的新组件
          Vue.component('button-counter', {
            data: function () {
              return {
                count: 0
              }
            },
            template: '<button v-on:click="count++">You clicked me {{ count }} times.</button>'
          })

2. 组件复用
    - 组件可进行任意次数的复用，
    - 一个组件的 data 选项必须是一个函数，因此每个实例可以维护一份被返回对象的独立的拷贝，即新建组件之间彼此独立；否则各新建组件无法相互独立，而是相互联动
3. `prop`
    - 在组件上注册的一些自定义 attribute
4. 插槽分发内容`<slot>`
