# 0618

## 4.模板语法

demo_grammar.html

___

1. 插值
    **文本**
    绑定的数据对象msg property 会跟随指令发生改变，插值处的内容都会更新

    `v-once`指令，只能执行一次性地插值，但数据改变是，插值处的内容不会再更新

        <span>message:{{msg}}</span>

    **原始HTML**
    双大括号会将数据解释为普通文本，而不是HTML代码。为输出真正的HTML需要使用`v-html`指令

        <p>Using mustaches: {{ rawHtml }}</p>
        <p>Using v-html directive: <span v-html="rawHtml"></span></p>

      *注：* 不能使用 `v-html` 来复合局部模板，因为 Vue 不是基于字符串的模板引擎。反之，对于用户界面 (UI)，组件更适合作为可重用和可组合的基本单位。

    **特性**
    `v-bind`指令用于绑定属性

    **使用javascript表达式**
    值能是表达式，其余不支持，如：语句

        {{ number + 1 }}
        {{ ok ? 'YES' : 'NO' }}

2. 指令
    指令 (Directives) 是带有 v- 前缀的特殊 attribute。
    指令的职责是，当表达式的值改变时，将其产生的连带影响，响应式地作用于 DOM。
    **`v-if`** 指令将根据表达式的值的真假来插入/移除\<p>元素。

        <p v-if="seen">现在你看到我了</p>

    **参数**
    在指令名称之后以冒号表示
    `v-bind` 缩写 `:`指令可以用于响应式地更新 HTML attribute：

        <a v-bind:href="url">...</a>

    在这里 href 是参数，告知 v-bind 指令将该元素的 href attribute 与表达式 url 的值绑定。

    `v-on` 缩写 `@`指令，它用于监听 DOM 事件：

        <a v-on:click="doSomething">...</a>

    在这里参数是监听的事件名。
    **动态参数**
    **修饰符**
    `.`

## 5. 计算属性和侦听器

calculate.html

___

1. 计算属性 VS 侦听属性
    一种更通用的方式来观察和响应 Vue 实例上的数据变动：侦听属性。`watch`
2. 侦听器
    当需要在数据变化时执行异步或开销较大的操作时，侦听器是最有用的。

## 6. Class 与 Style 绑定

___

1. 绑定Class
    - 对象

          <div v-bind:class="{ active: isActive }"></div>

          // <div class="static active"></div>


          // 方式一：
          <div class="static" 
          v-bind:class="{ active: isActive, 'text-danger': hasError }"
          ></div>

          data: {
            isActive: true,
            hasError: false
          }


           // 方式二：
          <div v-bind:class="classObject"></div>

          data: {
            classObject: {
              active: true,
              'text-danger': false
            }
          }

          // 方式三：（重点）
          <div v-bind:class="classObject"></div>

          data: {
            isActive: true,
            error: null
          },
          computed: {
            classObject: function () {
              return {
                active: this.isActive && !this.         error,
                'text-danger': this.error && this.          error.type === 'fatal'
              }
            }
          }

    - 数组

          // <div class="active text-danger"></div>

          // 方式一：
          <div v-bind:class="[activeClass, errorClass]"></div>

          data: {
            activeClass: 'active',
            errorClass: 'text-danger'
          }

          // 方式二：
          <div v-bind:class="[isActive ? activeClass : '', errorClass]"></div>

          // 方式三：
          <div v-bind:class="[{ active: isActive }, errorClass]"></div>

    - 组件



2. 绑定Style
    - 对象

          <div v-bind:style="styleObject"></div>

          data: {
            styleObject: {
              color: 'red',
              fontSize: '13px'
            }
          }

    - 数组

          <div v-bind:style="[baseStyles, overridingStyles]"></div>

    - 自动添加前缀

    - 多重值

          <div :style="{ display: ['-webkit-box', '-ms-flexbox', 'flex'] }"></div>
