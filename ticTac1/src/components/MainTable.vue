<template>
  <div class="main">
    <div class="mainTable">
    <TableCell v-for="(item,index) in value" :key="index" :innerValue="item" @onAddValue="onAddValue(index)"/>
    </div>
    <div class="btnList">
       <div class="status"> {{ status }}</div><br>
        <HistoryBtn v-for="item in historyItems" :key="item.step" :count="item.step" @onBtnClick="onBtnClick(item.step)"/>
    </div>
   
  </div>
</template>
<script>
import TableCell from'./TableCell.vue';
import HistoryBtn from './HistoryBtn.vue'

export default {
  name: 'MainTable',
  components:{
    TableCell,HistoryBtn
  },
  data:function(){
    return{
       status:'Next player: X',   // 上方显示player
       value:['','','','','','','','',''],   // 棋盘状态
       hasWinner:false,   // winner标识
       count:0,
       historyItems:[
         {step:0 , player:'',position:-1}
       ]
    }  
  },
  methods:{
    // 添加棋子，转换玩家
    onAddValue(index){
      // 1.添加前需要检测棋盘状态，此处是否已有棋子
      // 2.下完棋判断是否有winner
      if(this.value[index] || this.hasWinner){
         alert('已有胜者！！！或此处已有棋子');
      }else{
        // 1. status 变换
          let temp = this.count % 2;
          this.status = temp ? 'Next player: X' : 'Next player: O';
          this.value[index] = temp ? 'O' : 'X';
        // 2. historyItems 添加历史记录
          this.count++;
          this.historyItems.push({step:this.count , player: this.value[index] ,position:index });
      }
      if(this.checkWinner(index,this.value[index],this.value)){
          this.status = 'Winner: '+this.value[index];
          this.hasWinner = true;
      }
    },
   
     // 判断胜者
    checkWinner(x,str,value){
      let colIndex = []; // 用来存储该元素所在列的所有坐标
      let rowIndex = []; // 用来存储该元素所在行的所有坐标
      for (let i = 0; i < 3; i++) {
        colIndex.push(x % 3 + 3 * i);
        rowIndex.push(parseInt(x / 3) * 3 + i);
      }
      return ((value[colIndex[0]] === str && value[colIndex[1]] === str && value[colIndex[2]] === str) 
      || (value[rowIndex[0]] === str && value[rowIndex[1]] === str && value[rowIndex[2]] === str) 
      || ((value[4] === str) && ((value[0] === str && value[8] === str) || (value[2] === str && value[6] === str))));

    },

    // btnList点击事件
    onBtnClick(index){
       // 1.复原棋盘
        for(let i=index+1 ; i<this.historyItems.length;i++){
          this.value[this.historyItems[i].position] = '';
        }

        // 2. 清除大于index的历史记录,删除大于index的按钮
        let arrDelLength = this.historyItems.length - index;
        this.historyItems.splice(index+1,arrDelLength);

        // 3. 修改statue的值
        this.hasWinner = false;
        this.count = index;
        let maxLength = this.historyItems.length;
        // console.log(maxLength);
        this.status = this.historyItems[maxLength-1].player === 'X' ? 'Next player: O' : 'Next player: X';
    },
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.main{
  display: flex;
}
.mainTable {
    display: flex;
    width: 213px;
    height: 213px;
    margin-top: 20px ;
    justify-content: space-between;
    flex-wrap: wrap;
    border-left: 1px solid #000;
    border-top: 1px solid #000;
    /* font-size: 0; */
    margin-right: 20px;
}

.status {
  margin: 20px 0 0 40px;
  font-size: 24px;
  vertical-align: top;
}

</style>
