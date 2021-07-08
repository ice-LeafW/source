<template>
  <div class="HistoryBtn">
      <p>{{ count }}.&nbsp;</p>
      <button @click="btnClick">Go to game #{{ count }}</button>
    </div>
</template>

<script>
export default {
    name:'HistoryBtn',
    props:{
        count:Number,
    },
    methods:{
    btnClick:function(){
        // console.log(this.count);
      this.$emit('onBtnClick');
    }
  }
}
</script>

<style scoped>
.HistoryBtn{
    display: flex;
    height: 24px;
    margin: 4px 0;
    font-size: 0;
}
p{
     display: inline-block;
    margin-left: 40px;
    font-size: 16px;
}
button{
    background-color: #efefef;
    border: 2px solid #000;
    height: 24px;
    line-height: 20px;
    font-size: 16px;
    margin-top: 8px;
}
</style>