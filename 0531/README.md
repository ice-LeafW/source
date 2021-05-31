# 0531

## ES6

<https://es6.ruanyifeng.com/>

### 5. 字符串的新增方法

___

- 实例方法 **includes() startsWith() endsWith()**
    **`includes()`**：返回布尔值，表示是否找到了参数字符串。
    **`startsWith()`**：返回布尔值，表示参数字符串是否在原字符串的头部。
    **`endsWith()`**：返回布尔值，表示参数字符串是否在原字符串的尾部。
- **repeat()**
    返回一个新字符串，表示将原字符串重复n次，小数则取整
- **padStart() padEnd()**
    **`padStart(maxLength, addStr)`**：头部补全,二参默认空格
    **`padEnd(maxLength, addStr)`**：尾部补全，同上
- **trim() trimStart() trimEnd()**
    消除空格，*返回新字符串*

### 7.数值的扩展

___

- 进制
    二进制：`0b`、`oB`
    十六进制：`0o`、`0O`
    转十进制：`Number(0b1111)`
- **Number.isFinite()   Number.isNaN()**
   **`Number.isFinite()`**：检查数值有限，即非Infinity
- **Number.parseInt(), Number.parseFloat()**
- **Number.isInteger()**
- Math对象扩展
  - **Math.trunc**方法用于去除一个数的小数部分，返回整数部分。
  - **Math.sign**方法用来判断一个数到底是正数、负数、还是零。对于非数值，会先将其转换为数值。
  - **Math.expm1(x)** 返回 ex - 1，即Math.exp(x) - 1。
  - **Math.log1p(x)** 方法返回1 + x的自然对数，即Math.log(1 + x)。如果x小于-1，返回NaN
  - **Math.log10(x)** 返回以 10 为底的x的对数。如果x小于 0，则返回 NaN。
  - **(\**)** 指数运算符,例如 2**3

### 8.函数扩展

___

- 函数参数
  - 参数变量是默认声明的，所以不能用let或const再次声明。
  - 参数默认值可以与解构赋值的默认值，结合起来使用
- rest参数
  （形式为...变量名），用于获取函数的多余参数，rest 参数搭配的变量是一个数组，该变量将多余的参数放入数组中。
- 严格模式
  - 规定只要函数参数使用了默认值、解构赋值、或者扩展运算符，那么函数内部就不能显式设定为严格模式，否则会报错。
  - 函数内部的严格模式，同时适用于函数体和函数参数。
- 尾调用，尾递归
  指某个函数的最后一步是调用另一个函数（或自身）。

### 9.函数的扩展

___

- 扩展运算符
  - 扩展运算符（spread）是三个点（...）。它好比 rest 参数的逆运算，将一个**数组**转为**用逗号分隔的参数序列**。
  - 主要用于函数调用。
  - 替代函数的apply方法。
  - 应用：
    1. 复制数组同`cancat`——**深拷贝**
    2. 合并数组
    3. 与解构赋值结合
    4. 将字符串转为真正的数组
    5. 任何定义了遍历器（Iterator）接口的对象（参阅 Iterator 一章），都可以用扩展运算符转为真正的数组。
    6. Map 和 Set 结构，Generator 函数

### 10. 对象的扩展

___

- 属性的可枚举性
  描述对象的enumerable属性，称为“可枚举性”，如果该属性为false，就表示某些操作会忽略当前属性。
  - `Object.getOwnPropertyDescriptor`方法可以获取该属性的描述对象
  - 有四个操作会忽略enumerable为false的属性。
    - for...in循环：只遍历对象自身的和继承的可枚举的属性。
    - Object.keys()：返回对象自身的所有可枚举的属性的键名。
    - JSON.stringify()：只串行化对象自身的可枚举的属性。
    - Object.assign()： 忽略enumerable为false的属性，只拷贝对象自身的可枚举的属性。
- 遍历
  - （1）**for...in**
    for...in循环遍历对象自身的和继承的可枚举属性（不含 Symbol 属性）。
  - （2）**Object.keys(obj)**
    Object.keys返回一个数组，包括对象自身的（不含继承的）所有可枚举属性（不含 Symbol 属性）的键名。
  - （3）**Object.getOwnPropertyNames(obj)**
    Object.getOwnPropertyNames返回一个数组，包含对象自身的所有属性（不含 Symbol 属性，但是包括不可枚举属性）的键名。
  - （4）**Object.getOwnPropertySymbols(obj)**
    Object.getOwnPropertySymbols返回一个数组，包含对象自身的所有 Symbol 属性的键名。
  - （5）**Reflect.ownKeys(obj)**
    Reflect.ownKeys返回一个数组，包含对象自身的（不含继承的）所有键名，不管键名是 Symbol 或字符串，也不管是否可枚举。
- **super**属性，指向当前对象的原型对象。
  
### 11. 对象的新增方法

___

- **Object.is()** 同值相等
- **Object.assign()** 方法用于对象的合并，将源对象（source）的所有可枚举属性，复制到目标对象（target）。
  - 语法:`Object.assign(target, source1, source2);`
  - 注意点
    - 浅拷贝
    - 同名属性替换
    - 可处理数组
  - 应用
    - 为对象增加属性
    - 为对象增加方法
    - 克隆对象
    - 合并多个对象
    - 为属性指定默认值

- **Object.getOwnPropertyDescriptors()** 方法，返回指定对象所有自身属性（非继承属性）的描述对象。
- **\_\_proto\_\_** 属性（前后各两个下划线），用来读取或设置当前对象的原型对象（prototype）。
- **Object.setPrototypeOf** 方法的作用与__proto__相同，用来设置一个对象的原型对象（prototype），返回参数对象本身。
- **Object.setPrototypeOf** 方法与**Object.setPrototypeOf** 方法配套，用于读取一个对象的原型对象

### 16. Promise 对象

___

- 含义
  Promise 是异步编程的一种解决方案。所谓Promise，简单说就是一个容器，里面保存着某个未来才会结束的事件（通常是一个异步操作）的结果。从语法上说，Promise 是一个对象，从它可以获取异步操作的消息。Promise 提供统一的 API，各种异步操作都可以用同样的方法进行处理。
  - 特点
    - （1）对象的状态不受外界影响
    - （2）一旦状态改变，就不会再变，任何时候都可以得到这个结果
- 基本用法
  
        const promise = new Promise(function(resolve, reject) {
            // ... some code
         if (/* 异步操作成功 */){
            resolve(value);
         } else {
           reject(error);
          }
        });

- **Promise.prototype.then()**
  - then方法是定义在原型对象Promise.prototype上的。它的作用是为 Promise 实例添加状态改变时的回调函数。
  - 返回值：一个新的Promise实例
- **Promise.prototype.catch()** 方法是`.then(null, rejection)`或`.then(undefined, rejection)`的别名，用于指定发生错误时的回调函数。
- **Promise.prototype.finally()** 方法用于指定不管 Promise 对象最后状态如何，都会执行的操作。
- **Promise.all()**,**Promise.race()** 方法用于将多个 Promise 实例，包装成一个新的 Promise 实例。
- **Promise.allSettled()**,**Promise.any()** 方法接受一组 Promise 实例作为参数，包装成一个新的 Promise 实例

### 21. Class的基本语法

___

类的方法内部如果含有this，它默认指向类的实例。

### 22.Class的继承

___
