# 0526
___

## 1.脚本调用——`async`和`defer`

```javscript
<script  async src="jquery.js"></script>
<script  asynnc src="index.js"></script>
```

**async**   异步，可以解决调用顺序问题，告知浏览器在遇到`<script>`元素时不要中断后续HTML内容的加载,而是直接下载然后运行。

***注意点***：
1.只能用于外部脚本；
2.直接下载然后运行，导致脚本的运行次序无法控制；
3.使用情况，当脚本无需等待页面解析，且无依赖独立运行时；

```javscript
<script  defer src="jquery.js"></script>
<script  defer src="index.js"></script>
```

**defer**   脚本将按照在页面中出现的顺序加载和运行

***使用情况***
当脚本需要等待页面解析，且依赖于其他脚本，调用这些脚本时应使用`defer`，将关联的脚本按所需顺序置于HTML中。
