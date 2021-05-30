# 0530

## ES6

<https://es6.ruanyifeng.com/>

### 2. 变量的解构赋值

___
**解构：** ES6 允许按照一定模式，从数组和对象中提取值，对变量进行赋值，这被称为解构（Destructuring）。

- Array
    解构不成功，变量的值=undefined

        let [a, b, c] = [1, 2, 3];  // 可以从数组中提取值，按照对应位置，对变量赋值。

  - 解构赋值允许指定默认值。默认值可以引用解构赋值的其他变量，但该变量必须已经声明。

        let [x, y = 'b'] = ['a']; // x='a', y='b'
        let [x, y = 'b'] = ['a', undefined]; // x='a', y='b'
        let [x = 1, y = x] = [];     // x=1; y=1
        let [x = 1, y = x] = [2];    // x=2; y=2
        let [x = 1, y = x] = [1, 2]; // x=1; y=2

- Object
    属性基本相同
    **Object与Array解构的区别:** 
    数组的元素是按次序排列的，变量的取值由它的位置决定;
    而对象的属性没有次序，变量必须与属性同名，才能取到正确的值。

            let { bar, foo } = { foo: 'aaa', bar: 'bbb' };
            foo // "aaa"
            bar // "bbb"

            let { baz } = { foo: 'aaa', bar: 'bbb' };
            baz // undefined
            // 变量名与属性名不一致时：
            let { foo: baz } = { foo: 'aaa', bar: 'bbb' };
            baz // "aaa"

    **注意点：**

    1. 如果要将一个已经声明的变量用于解构赋值，必须非常写法。

            let x;
            ({x} = {x: 1});

    2. 解构赋值允许等号左边的模式之中，不放置任何变量名。因此，可以写出非常古怪的赋值表达式。

    3. 由于数组本质是特殊的对象，因此可以对数组进行对象属性的解构。

            let arr = [1, 2, 3];
            let {0 : first, [arr.length - 1] : last} = arr;
            first // 1
            last // 3

- String
    字符串解构赋值时，字符串被转换成了一个类似数组的对象。

            const [a, b] = 'hi';
            a // "h"
            b // "i"
            // length属性解构赋值
            let {length : len} = 'hello';
            len // 5

- Number  boolean
    解构赋值时，如果等号右边是数值和布尔值，则会先转为对象。
    解构赋值的规则是，只要等号右边的值不是对象或数组，就先将其转为对象。
    由于undefined和null无法转为对象，所以对它们进行解构赋值，都会报错。

        let {toString: s} = 123;
        s === Number.prototype.toString // true

- function 函数
    写法不同，结果也会不同

        function move({x, y} = { x: 0, y: 0 }) {
            return [x, y];
        }
        move({x: 3, y: 8}); // [3, 8]
        move({x: 3}); // [3, undefined]
        move({}); // [undefined, undefined]
        move(); // [0, 0]

**用途：**

1. 交换变量值
2. 从函数返回多个值
3. 函数参数的定义
4. 提取JSON数据
5. 遍历`Map`解构
6. 函数参数的默认值
7. 输入模块的指定方法

### 3. 字符串的扩展

___

- 字符的Unicode表示法
    1. 采用\uxxxx形式表示一个字符，其中xxxx表示字符的 Unicode 码点。
    2. 字符范围：`\u0000` ~ `\uFFFF`
    3. 超出范围的字符，使用两个双字节表示，故此码点需要放入大括号内

            "\uD842\uDFB7"     // "𠮷"
            "\u20BB7"   // " 7"  等价于 \u20BB+7
            "\u{20BB7}"     // "𠮷"  正确结果

    **注意点：**
        字符的六种表示方法

            '\z' === 'z'  // true
            '\172' === 'z' // true
            '\x7A' === 'z' // true
            '\u007A' === 'z' // true
            '\u{7A}' === 'z' // true

- 字符串的遍历器接口
    1. 使用for...of遍历字符串。
    2. 可识别大于0xFFFF的码点
- 模板字符串
    插入变量时，变量名、变量表达式、调用函数需写在`${}`中

        $('#result').append(`
            There are <b>${basket.count}</b> items
            in your basket, <em>${basket.onSale}</em>
            are on sale!
        `);
