<template>
  <div class="TableCell" @click="addValue">{{ innerValue }}</div>
</template>

<script>
export default {
    name:'TableCell',
    props:{
        innerValue: String
    },
   
    methods:{
        addValue:function (){
            // console.log(this.innerValue);
            this.$emit('onAddValue');
            // this.innerValue='X';
            
        }
    }
}
</script>

<style scoped>
.TableCell{
    display: inline-block;
    width: 70px;
    height: 70px;
    border-right: 1px solid #000;
    border-bottom: 1px solid #000;
    font-weight:bold;
    font-size: 60px;
    line-height: 70px;
    text-align: center;
}
</style>