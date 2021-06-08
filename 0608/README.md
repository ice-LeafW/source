# vue

<https://cn.vuejs.org/v2/guide/index.html>

## 1. 基本内容

___

1. 简介
    - Vue 是一套用于构建用户界面的**渐进式**框架，可以**自底向上**逐层应用
    - Vue 的核心库只关注视图层

2. 优点
    - 体积小
    - 运行效率高（基于虚拟DOM进行预处理操作）
    - 双向数据绑定

3. 引入
    CDN 方式：

            <script src="https://cdn.jsdelivr.net/npm/vue@2.6.13/dist/vue.js"></script>

## 2. 基本操作

___

1. 声明式渲染
    - Vue.js 的核心是一个允许采用简洁的模板语法来声明式地将数据渲染进 DOM 的系统
    - 数据可以绑定到DOM文本或 attribute 或DOM结构
    - 在 Vue 插入/更新/移除元素时自动应用过渡效果。

            // HTML
            <div id="app">
              {{ message }}
            </div>
            // JS
            var app = new Vue({
              el: '#app',
              data: {
                message: 'Hello Vue!'
              }
            })

2. 条件与循环
    - **v-bing** 绑定事件
    - **v-if** 条件
    - **v-for** 循环，绑定数组数据来渲染项目
    - **v-on** 添加事件监听器
    - **v-module** 实现表单输入与应用状态之间的双向绑定
3. 组件化应用
    - 在 Vue 里，一个组件本质上是一个拥有预定义选项的一个 Vue 实例。
    - 类似于自定义元素

## 3. Vue 实例

___

1. 实例创建
    - 每个 Vue 应用都是通过用`Vue`函数创建一个新的 Vue 实例开始的;
    - 一个 Vue 应用由一个通过 new Vue 创建的根 Vue 实例，以及可选的嵌套的、可复用的组件树组成。
    - 所有的 Vue 组件都是 Vue 实例，并且接受相同的选项对象 (一些根实例特有的选项除外)。

2. 数据与方法 `demo.html`
    - 当一个 Vue 实例被创建时，它将 data 对象中的所有的 property 加入到 Vue 的响应式系统中。当这些 property 的值发生改变时，视图将会产生“响应”，即匹配更新为新的值。
    - 值得注意的是只有当实例被创建时就已经存在于 data 中的 property 才是响应式的
    - **注：** **`Object.freeze()`**，这会阻止修改现有的 property，也意味着响应系统无法再追踪变化。
    - vm.$watch('a',function(newVal,oldVal))

            var data = { a: 1 }
            var vm = new Vue({
              el: '#example',
              data: data
            })

            vm.$data === data // => true
            vm.$el === document.getElementById('example') // => true

            // $watch 是一个实例方法，用来检测变量的变化，可以记录变量改变前后的值
            vm.$watch('a', function (newValue, oldValue) {
              // 这个回调将在 `vm.a` 改变后调用
            })

3. 实例生命周期钩子（函数）  `cycle.html`
    - 给了用户在不同阶段添加自己代码的机会。
    - 生命周期钩子的 this 上下文指向调用它的 Vue 实例。
    - **注：** 不要在选项 property 或回调上使用箭头函数，会出错。
  