# 0602

## DOM

<https://www.w3school.com.cn/htmldom/index.asp>

### 1. DOM方法

___

1. 获取元素

    - **getElementById(id)** - 获取带有指定 id 的节点（元素）
    - **getElementsByTagName()** - 返回包含带有指定标签名称的所有元素的节点列表（集合/节点数组）。
    - **getElementsByClassName()** - 返回包含带有指定类名的所有元素的节点列表。

2. 节点的增删改查

    - **appendChild(node)** - 插入新的子节点（元素）作为父元素的最后一个元素
    - **insertBefore()** - 作为父元素的第一个元素进行添加
    - **removeChild(node)** - 删除子节点（元素）
    - **replaceChild()** - 替换子节点。
    - **createAttribute()**- 创建属性节点。
    - **createElement()**- 创建元素节点。
    - **createTextNode()**- 创建文本节点。
    - **getAttribute()** - 返回指定的属性值。

### 2. DOM属性

___

- **innerHTML** - 节点（元素）的文本值
- **nodeName** - 规定节点的名称（只读）
- **nodeValue** - 规定节点的值
- **nodeType** - 返回节点的类型（只读）
- **parentNode** - 节点（元素）的父节点
- **childNodes** - 节点（元素）的子节点
- **attributes** - 节点（元素）的属性节点

### 3. DOM修改

___

- 改变 HTML 内容
- 改变 CSS 样式
- 改变 HTML 属性
- 创建新的 HTML 元素
- 删除已有的 HTML 元素
- 改变事件（处理程序）

### 4. DOM事件

___

- 当用户点击鼠标时 `onclick` `onmousedown` `onmousesetup`
- 当网页已加载时 `onload` `onunload`
- 当图片已加载时 ``
- 当鼠标移动到元素上时 `onmouseover` `onmouseout`
- 当输入字段被改变时 `onchange`
- 当 HTML 表单被提交时
- 当用户触发按键时