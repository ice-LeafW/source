<template>
    <div id="main">
        <el-card>
            <div slot="header" class="head">
                <button class="down" @click="allChecked()" :allBtn="allBtn">
                    <i class="el-icon-arrow-down"></i>
                </button>
                <el-input
                 placeholder="What needs to be done?"
                 v-model="input"
                 @keyup.enter.native="submitTodo()"
                ></el-input>
            </div>
            <template v-if="allTodoList.length">
                <ul>
                    <li v-for="(item, index) in todoList" :key="index" class="text item">
                        <el-checkbox v-model="item.completed" class="check" :class="item.hidden ?'hiddenItem' : ''" @change="completedItem(index)"></el-checkbox>
                        <label @dblclick="editTodo(index)"  :class="[item.completed ? 'labelCompleted' : 'labelInit',item.hidden ?'hiddenItem' : '']">{{item.content}}</label>
                        <input type="text" v-model="item.content" class="editInput" :class="item.hidden ? 'displayInput' : 'hiddenItem'"  @blur="saveTodo(index)" @keyup.enter="saveTodo(index)" @keyup.esc="saveTodo(index)">
                        <el-button icon="el-icon-close" @click="deleteTodo(index)" :class="item.hidden ?'hiddenItem' : ''"></el-button>
                    </li>
                    
                </ul>
                <div class="footer">
                    <el-row>
                        <el-col :span="9" ><span><strong>{{leftItems}}</strong> items left</span></el-col>
                        <el-col :span="2"><el-button plain autofocus size="small" @click.stop="all()">All</el-button></el-col>
                        <el-col :span="3"><el-button plain size="small" @click.stop="active()">Active</el-button></el-col>
                        <el-col :span="4"><el-button plain size="small" @click.stop="completed()">Completed</el-button></el-col>
                        <el-col :span="6"><el-button plain size="small" v-if="displayClear()" @click.stop="clearCompleted()" >Clear completed</el-button></el-col>
                    </el-row>
                </div>
            </template>    
        </el-card>
    </div>
</template>

<script>
export default {
    name:'Main',
    data(){
        return{
            input:'',
            checked: true,
            allBtn: true,
            clear: false,
            allTodoList:[
                {content:'qwerr' , completed: false , hidden: false},
                {content:'werr' , completed: true, hidden: false},
                {content:'err' , completed: false, hidden: false},
            ],
            todoList:[]
        }
    },
    computed:{
        leftItems:function(){
            return this.allTodoList.filter(item => !item.completed).length;
        }
    },
    methods:{
        /**
         * 添加项目
         * 1. 回车添加项目，追加数据
         * 2. 不允许有非空数据
         * 3. 添加完成后清空输入框
         */
        submitTodo(){
            if(!this.input.length){
                return
            }else{
                this.allTodoList.push({
                content: this.input,
                completed: false,
                hidden:false
                });
                this.input = '';
            }
        },
        /**
         * 单项删除
         */
        deleteTodo(index){
            this.allTodoList.splice(index,1);
        },
        /**
         * 事件完成
         */
        completedItem(index){
            this.allTodoList[index].completed = !this.allTodoList[index].completed;
            this.checked = ! this.checked;
        },
        /**
         * 事件全部完成
        */
        allChecked(){
            this.allTodoList.forEach(item => item.completed = this.allBtn);
            this.allBtn = !this.allBtn;
        },
        /**
         * 显示Clear completed按钮
         * 1. 当存在已完成项目时，显示该按钮
        */
        displayClear(){
            for(let i=0; i<this.allTodoList.length; i++){
                if(this.allTodoList[i].completed){
                    this.clear = true;
                    return true;
                }
            }
            return false;
        },
        /**
         * clear completed按钮事件，删除已完成事件
        */
        clearCompleted(){
            let i=this.allTodoList.length;
            while(i--){
                if(this.allTodoList[i].completed){
                    this.allTodoList.splice(i,1);
                }
            }
        },
        /**
         * 修改项目
         */
        editTodo(index){
            this.allTodoList[index].hidden = true;
        },
        /**
         * 失去焦点或 enter 或 ecs，自动保存修改内容
         */
        saveTodo(index){
            if(!this.allTodoList[index].content.length){
                this.deleteTodo(index);
            }else{
                this.allTodoList[index].hidden = false;
            }
        },
        /**
         * 三类点击事件，更新显示的列表
         */
        all(){
            this.todoList = this.allTodoList;
        },
        active(){
            this.todoList = this.allTodoList.filter(item => !item.completed);
        },
        completed(){
            this.todoList = this.allTodoList.filter(item => item.completed);
        }
    },
    /**
     * 页面载入，默认选择all按钮，执行all的click事件
     */
    mounted:function () {
        this.all();
    }
}
</script>

<style scoped>
 /deep/ .el-card__header{
    padding: 0px;
}
.el-input{
    display: inline-block !important;
    padding: 16px 16px 16px 0px;
    width: 480px;
    height: 33px;
    line-height: 33px;
    box-shadow: inset 0 -2px 1px rgb(0 0 0 / 3%);
    align-items: center;
}
 /deep/ .el-input__inner{
    border: none;
    font: 400 26px Arial !important;
}
.down{
    display: inline-block;
    width: 45px;
    font-size: 30px;
    font-weight: 600;
    margin: auto 2px;
    color: #e6e6e6;
    background-color: #fff;
    border: none;
}
/deep/ .head>.el-button__inner:hover{
    color: #e6e6e6 !important;
}
/deep/ .el-card__body{
    padding: 0;
}
ul{
    padding-left: 0;
}
ul > li{
    list-style-type: none;
    line-height: 59px;
}
.item {
    width: 554px;  
    height: 59px; 
    line-height: 59px;
    color: #4d4d4d;
    text-align: left;
    font: 400 24px Arial;
    border-bottom: 1px solid #e6e6e6;
    /* position: relative; */
}
.el-checkbox{
    margin: auto 16px;
}
 /deep/ .el-checkbox__inner {
    height: 30px;
    width: 30px;
	border: 2px solid  #d9d9d9;
    border-radius: 15px;
}
 /deep/ .el-checkbox__inner:hover{
     border: 2px solid  #d9d9d9;
 }
 /deep/ .el-checkbox__input.is-checked .el-checkbox__inner, .el-checkbox__input.is-indeterminate .el-checkbox__inner {
    background-color: #fff;
    border-color: #bddad5;
}
 /deep/.el-checkbox__inner::after {
    box-sizing: content-box;
    content: "";
    border: 3px solid #5dc2af;
    border-left: 0;
    border-top: 0;
    height: 17px;
    width: 8px;
    top: 0px;
    left: 6px;
    position: absolute;
    transform: rotate(45deg) scaleY(0);
    transition: transform .15s ease-in .05s;
    transform-origin: center;
}
 /deep/ .el-checkbox__input.is-focus .el-checkbox__inner{
     border-color: #bddad5;
 }

.labelInit{
    height: 58px;
    line-height: 58px;
    
}
.labelCompleted{
    height: 58px;
    line-height: 58px;
    color: #d9d9d9 !important;
    text-decoration: line-through;
    /* border:2px solid #777; */
    /* font-size: 12px; */
}
.item .el-button{
    float:right;
    margin: 15px 20px;
    padding: 0 !important;
    color: #af5b5e;
    font-weight: bold;
    font-size: 26px;
    border: none;
    display: none;
}
.hiddenItem{
    display: none;
}
.displayInput{
    display: block;
}
.item:hover .el-button{
    display: block;
    background-color: #fff;
}
.editInput{
    height: 52px;
    line-height: 52px;
    font-size: 24px;
    width: 80%;
    float: right;
}
.footer{
    height: 50px;
    line-height: 50px;
    font-size: 16px;
    background-color: #fff;
    color: #777;
    /* text-align: left; */
}
.el-row .el-col:first-child{
    text-align: left;
    padding-left: 14px;
}
.footer .el-row .el-button{
    padding: 6px 10px;
    border: none;
    color: #777;
}
.clearNoDisplay{
    visibility: hidden;
}
.clearDisplay{
    visibility: visible;
}
.el-row .el-button:hover,
.el-row .el-button:active,
.el-row .el-button:focus{
    border: 1px solid rgba(175, 47, 47, 0.2);
    background-color: #fff;
    color: #777;
} 
</style>