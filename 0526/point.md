# 0526_JS

JavaScript第一步<https://developer.mozilla.org/zh-CN/docs/Learn/JavaScript/First_steps>

## 1.脚本调用——async和defer

___

        <script  async src="jquery.js"></script>
        <script  asynnc src="index.js"></script>

**async**   异步，可以解决调用顺序问题，告知浏览器在遇到`<script>`元素时不要中断后续HTML内容的加载,而是直接下载然后运行。

***注意点***：
1.只能用于外部脚本；
2.直接下载然后运行，导致脚本的运行次序无法控制；
3.使用情况，当脚本无需等待页面解析，且无依赖独立运行时；

        <script  defer src="jquery.js"></script>
        <script  defer src="index.js"></script>

**defer**   脚本将按照在页面中出现的顺序加载和运行

***使用情况***
当脚本需要等待页面解析，且依赖于其他脚本，调用这些脚本时应使用`defer`，将关联的脚本按所需顺序置于HTML中。

## 2.字符串

___

- 查找字符串    **indexOf()**

        str = 'my piana';
        str.indexOf('piana');  //返回3
        str.indexOf('your');  //返回-1

- 提取字符串
**slice(start[,end])** *注：* 可为负索引，不修改原String和Array
**substring(start[,end])**
**substr(start[,length])** *注：* 可为负索引
`问： String的slice方法和Array中的slice方法有设区别？`
 String.slice(start,end) 返回起止下标之间的字符；
 Array.slice(start,end) 返回起止下标之间的元素组成的数组，不修改原数组，返回一个子数组;

        str.slice(0,3);
        str.slice(2);

- 转换大小写
**toUpperCase()**
**toLowerCase()**

- 替换
**replace()** *注：* 只替换首个匹配；可使用正则表达式匹配字符
`问：全部替换应该怎么做`

        // 使用正则表达式 /g 全局搜索匹配
         let str = 'my test replaceAll my test.'
        let newStr = str.replace(/my/g,'your');
        console.log(str);
        console.log(newStr);

## 3.字符串与数组之间的转换

___

字符串 -> 数组  **split()**
数组 -> 字符串  **join()** **toString()**

        let myData = 'a,b,c,d,e,f';
        let myArray = myData.split(','); //["a","b", "c", "d", "e", "f"]
        let myyNewString = myArray.join('*');  //"a\*b\*c\*d\*e\*f"
        let str = ['dog','cat'];
        str.toString();    //"dog,cat"

## 4. 数组添加、删除项

___

**push()** **pop()**
数组末尾添加,返回数组长度
**unshift()** **shift()**
数组起始处添加，返回变动的元素

        let myArr = ['cat','dog'];
        myArr.push('dollar'); //['cat','dog','dollar']
        let nowLength = myArr.push('blue'); //4
        let removeItem = myArr.shift(); //'cat'

实例：

- number-guessing-game-start.html

- index.html
    style.css
    raw-text.txt
    main.js
