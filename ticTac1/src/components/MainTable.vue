<template>
  <div class="main">
    <div class="mainTable">
    <TableCell :innerValue="value[0]" @onAddValue="onAddValue(0)"/>
    <TableCell :innerValue="value[1]" @onAddValue="onAddValue(1)"/>
    <TableCell :innerValue="value[2]" @onAddValue="onAddValue(2)"/>
    <TableCell :innerValue="value[3]" @onAddValue="onAddValue(3)"/>
    <TableCell :innerValue="value[4]" @onAddValue="onAddValue(4)"/>
    <TableCell :innerValue="value[5]" @onAddValue="onAddValue(5)"/>
    <TableCell :innerValue="value[6]" @onAddValue="onAddValue(6)"/>
    <TableCell :innerValue="value[7]" @onAddValue="onAddValue(7)"/>
    <TableCell :innerValue="value[8]" @onAddValue="onAddValue(8)"/>
    </div>
    <div class="btnList">
       <div class="status"> {{ status }}</div><br>
        <HistoryBtn v-for="item in btnItems" :key="item.step" :count="item.step" @onBtnClick="onBtnClick(item.step)"/>
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
       isNextX:true,    // player转换
       isWinner:false,   // winner标识
       count:0,
       btnItems:[
         {step:0 , player:'',position:-1}
       ]
    }  
  },
  methods:{
    // 添加棋子，转换玩家
    onAddValue(index){
      // 1.添加前需要检测棋盘状态，此处是否已有棋子
      // 2.下完棋判断是否有winner
      if((!this.value[index]) && (!this.isWinner)){ // 已有winner则不添加棋子
          if(this.isNextX){
            this.status = 'Next player: O'
            this.value[index] = 'X';
          }else{
            this.status = 'Next player: X'
            this.value[index] = 'O';
          }
          this.count++;
          this.btnItems.push({step:this.count , player: this.value[index] ,position:index });
        
          this.isNextX = !this.isNextX;
          // console.log(this.btnItems); 
      }else{
        alert('已有胜者！！！或此处已有棋子');
      }
       if(this.$options.methods.Winner(index,this.value[index],this.value)){
          this.status = 'Winner: '+this.value[index];
          this.isWinner = true;
        }
    },
   
     // 判断胜者
    Winner(x,str,value){
      let colIndex = []; // 用来存储该元素所在列的所有坐标
      let rowIndex = []; // 用来存储该元素所在行的所有坐标
      for (let i = 0; i < 3; i++) {
        colIndex.push(x % 3 + 3 * i);
        rowIndex.push(parseInt(x / 3) * 3 + i);
      }
      return ((value[colIndex[0]] === str && value[colIndex[1]] === str && value[colIndex[2]] === str) || (value[rowIndex[0]] === str && value[rowIndex[1]] === str && value[rowIndex[2]] === str) || ((value[4] === str) && ((value[0] === str && value[8] === str) || (value[2] === str && value[6] === str))));

    },

    // btnList点击事件
    onBtnClick(index){
       // 1.复原棋盘
        for(let i=index+1 ; i<this.btnItems.length;i++){
          this.value[this.btnItems[i].position] = '';
        }

        // 2. 清除大于index的历史记录,删除大于index的按钮
        let arrDelLength = this.btnItems.length - index;
        this.btnItems.splice(index+1,arrDelLength);

        // 3. 修改statue的值
        this.isWinner = false;
        this.count = index;
        let maxLength = this.btnItems.length;
          // console.log(maxLength);
         if(this.btnItems[maxLength-1].player === 'X'){
            this.status = 'Next player: O';
            this.isNextX = false;
         }else{
            this.status = 'Next player: X';
            this.isNextX = true;
         }
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
