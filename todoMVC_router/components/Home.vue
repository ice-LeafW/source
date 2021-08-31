<template> 
    <div class="home">
        <el-container>
            <el-header>
                <TodoHeader></TodoHeader>
            </el-header>
            <el-main>
                <TodoMain></TodoMain>
            </el-main>
            <el-footer>
                <p>Double-click tp edit a todo</p>
                <p>Created by Oscar Godson</p>
                <p>Refactored by Christoph Burgmer</p>
                <p>Part of TodoMVC</p>
            </el-footer>
        </el-container>

    </div>
    
</template> 
 
<script> 
import TodoHeader from './TodoHeader.vue'
import TodoMain from './TodoMain.vue'

export default { 
  name: 'Home', 
  components:{
      TodoHeader,
      TodoMain
      }
} 
</script> 
 
<!-- Add "scoped" attribute to limit CSS to this component only --> 
<style scoped> 
*{
    list-style-type: none;

}
.el-header{
    height: 160px ! important;
}
.el-main{
    width: 554px;
    margin: 0 auto;
    padding: 0;
    font-size: 0;
    box-shadow: 0px 0px 5px #777;
}
.el-footer{
    height: 78px !important;
    padding-top: 14px;
    margin-top: 50px;
    font: 10px 'Helvetica Neue', Helvetica, Arial, sans-serif;
    color: #bfbfbf;
    text-shadow: 0 1px 0 rgb(255 255 255 / 50%);
    text-align: center;
}
</style> 