# tictac1

<https://www.yuque.com/yss930819/lnr1h6/zhbdi6#32NOc>

## 项目需求

- 3*3的格子
- 两个player交替下子
- 先手X，后手O
- 直线，斜线三个相连即获胜
- 已下棋的位置不能再次放置棋子
- 九个格子填完，无获胜者，则平局
- 记录器具的历史记录
- 通过历史机会，复原某一步的棋盘
- 任意位置重新开始后棋局

### 1.初始化

- 创建vue项目
- 写样式

### 2.TableCell组件响应点击事件

- \<div class="TableCell" @click="addValue">{{innerValue}}</div>
- `addValue()`

### 3.交替下棋

- **Vue数据单向传递机制**
- 所以落子种类 innerValue 由 MainTable ——> TableCell
- 点击事件 `addValue` 通知 TableCell ——> MainTable

### 4.阻止用户在已有棋子的地方重复下棋

- MainTable组件中的 value数组用于保存棋盘的状态
- ‘’————表示此处没有棋子;'X'————表示此处为玩家X的棋子;'O'表示此处为玩家O的棋子
- 修改 MainTable 组件中的 `onAddValue` 函数,先进行!value[index]的判断，即value[index]==''

### 5.判断胜者并锁定棋盘

- MainTable组件中`winner()`
- 函数调用`this.$options.methods.Winner()`
- 增加全局布尔值`isWinner = false`,一旦出现胜者，则置为`true`,锁定棋盘

### 6.增加历史记录

- 历史记录数据结构对象数组 `btnItems`[{step:0 , player:'' , position: -1}]
- 动态添加按钮子组件 `HistoryBtn` v-for遍历

### 7.返回某一步

- `HistoryBtn` 增加点击事件  `btnClick`，传入 `MainTable`
- `MainTable` 点击事件 `onBtnClick`
- `onBtnClick` 
    1. 复原棋盘
    2. 清除大于index的历史记录,删除大于index的按钮
    3. 修改statue的值

## 优化

### 1. 组件 <TableCell/> 使用 v-for 进行列表渲染

### 2. 变量命名规范

### 3. 多层嵌套优化

### 4. 先处理 else 部分，先处理少的部分

### 5. 方法命名，一般动词开头