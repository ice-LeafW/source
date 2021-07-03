# 组件之间通信

-父子组件之间通信
-非父子组价之间通信（兄弟组件、隔代关系组件等） 

## 1. `props` / `$emit`

1. 父组件向子组件传值 `props`
例：hello_world/src/App.vue  父组件 增加 articles 数组
   hello_world/src/components/HelloWorld.vue  子组件  增加\<h2> 展示来自父组件的 articles 数组
2. 子组件向父组件传值 `$emit`
`$emit`绑定一个自定义事件, 当这个语句被执行时, 就会将参数arg传递给父组件,父组件通过v-on监听并接收参数。 通过一个例子，说明子组件如何向父组件传递数据。
在上个例子的基础上, 点击页面渲染出来的ariticle的item, 父组件中显示在数组中的下标
例：hello_world/src/App.vue  父组件 增加p标签显示数组下标，增加onEmitIndex(idx)方法
   hello_world/src/components/HelloWorld.vue  子组件  增加click事件emitIndex(index)方法

## 4. `ref` / `refs`

`ref`：如果在普通的 DOM 元素上使用，引用指向的就是 DOM 元素；如果用在子组件上，引用就指向组件实例，可以通过实例直接调用组件的方法或访问数据

例：hello_world/src/App.vue  父组件
   hello_world/src/components/HelloWorld.vue  子组件

## 5. `eventBus`

称为事件总线，在vue中可以使用它来作为沟通桥梁的概念, 就像是所有组件共用相同的事件中心，可以向该中心注册发送事件或接收事件， 所以组件都可以通知其他组件。
*注：eventBus当项目较大,就容易造成难以维护的灾难*

1. 初始化
创建一个事件总线并导出

            import Vue from 'vue'
            export const EventBus = new Vue()

2. 发送事件
3. 接收事件
4. 移除事件监听者

## 6.Vuex

Vuex 是一个专为 Vue.js 应用程序开发的状态管理模式。它采用集中式存储管理应用的所有组件的状态，并以相应的规则保证状态以一种可预测的方式发生变化.
Vuex 解决了多个视图依赖于同一状态和来自不同视图的行为需要变更同一状态的问题，将开发者的精力聚焦于数据的更新而不是数据在组件之间的传递上

`state`：用于数据的存储，是store中的唯一数据源
`getters`：如vue中的计算属性一样，基于state数据的二次包装，常用于数据的筛选和多个数据的相关性计算
`mutations`：类似函数，改变state数据的唯一途径，且不能用于处理异步事件
`actions`：类似于mutation，用于提交mutation来改变状态，而不直接变更状态，可以包含任意异步操作
`modules`：类似于命名空间，用于项目中将各个模块的状态分开定义和操作，便于维护

