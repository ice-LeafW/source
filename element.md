# element

<https://element.eleme.cn/#/zh-CN/component/installation>
<https://www.bilibili.com/video/BV1U54y127GB?p=10&spm_id_from=pageDriver>

## 1. 引入

`main.js`

`import ElementUI from 'element-ui';`
`import 'element-ui/lib/theme-chalk/index.css';`

`Vue.use(ElementUI);`

# Basic

## 2. Layout布局

1. 一行分割为24个栅格进行布局
`<el-row>` `<el-col>`
*CSS给定样式：.el-row*
2. 指定栅格数
`:span="5"`
3. `el-col`子元素有一层div，可以被`el-row :gutter="10"`设置间距
4. `type="flex"` 设置栏位的对齐方式，可以通过`justify`设置方向

## 3. Container布局容器

            <el-container>
                <el-header>header</el-header>
                <el-container>
                    <el-aside>aside</el-aside>
                    <el-main>mian</el-main>
                </el-container>
                <el-footer>footer</el-footer>
            </el-container>

CSS中可设置各部分的宽度、高度的最值

## 4. Basci组件规范

颜色
字体
边框

## 5. Icon图标 link文字

`<i class="el-icon-edit"></i>`
CSS指定样式，按照文字处理，可嵌套到按钮中

## 6. button按钮

`<el-button>`
`plain`属性，实现镂空效果
`disabled`属性，禁用
`round`椭圆
`circle`圆形,最好不要添加文本，文本会不太圆
`type="text"`纯文本按钮
`<el-button-group>`组合按钮
`:loading="true"`实现加载中效果
`size="mini"`尺寸medium small mini

# Form

## 7. Radio 和 CheckBox

`<el-radio>`单选，需要v-model进行双向绑定
`<el-radio-grop v-model="" @change="">`单选框组，便于双向绑定
`disabaled`禁用
`border`边框
`<el-radio-button>`
`size`

`<el-checkbox>`
`<el-checkbox-group v-modex="" :max>`指定最大、最凶勾选数量
`<el-checkbox-button>`

## 8. input输入框

`<el-input>`
`placehoder="初始内容"`输入框初始化内容
`clearable`清空按钮
`show-password`密码框
`maxlength=" " show-word-limit`输入限制
`prefix-icon="el-icon-saerch"`设置前缀内置图标
`slot="prefix" class="el-input__icon el-icon-date"`1前缀or后缀；3图标；2居中
`suffix-icon`数值后缀内置图标
`type="textarea" autosize`1转换为文本域；2自动收缩文本域大小
`<template>`实现复合型输入库：

        <el-input>
            <template slot="prepend">https://</template>
            <template slot="append">.com</template>
        </el-input>

`<el-autocomplete>`通过输入库激活或输入的方式匹配数据列表内的相关信息

## 9. inputnumber计数器

`<el-input-number>`
`:min=""` `:max=""`限制最值
`@chang=""`事件
`:step=""`步长
`:precision=""`小数点精度
`controls-position=" "`设置增减按钮的位置
`change /blur /focus`事件支持

## 10. select选择器

`<el-select placehoder="">`含默认值的选择框
`<el-option>`选项

## 11. Cascader级联选择器

## 12. Switch开关

`active-color` `inactive-color`设置开关的背景颜色
`active-text` `inactive-text`设置开关的文字描述

## 13. Slider滑块

## 14. TimePicker时间选择器

## 15. DateTimePicker日期时间选择器

## 16. Upload上传

## 17. Rate评分

## 18. ColorPicker颜色选择器

## 19. Transfer穿梭框

## 20. Form表单

# Data

## Table

## Tag

## Tree

## Progress

## Pagination

## Badge

## Avatar

## Skeleton

## Empty

## Descriptions

## Result

# Notice

## Alert

## loading

## Message

## MessageBox

## Notification

# Navigation

## NavMenu

## Tabs

## Breadcrumb

## PageHeader

## Dropdown

## Steps

# Others

## Dialog

## Tooltip

## Popover

## Popconfirm

## Card

## Carousel

## Collapse

## Timeline

## Divider

## Calender

## Image

## Backtop

## InfiniteScroll

## Drawer