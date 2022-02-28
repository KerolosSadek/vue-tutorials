<template>
    <div class="container" :style="{ '--mainColor': color }">
    <ul class="switch-colors">
      <li data-color="#b71540" @click="updateColors"></li>
      <li data-color="#0c2461" @click="updateColors"></li>
      <li data-color="#3c6382" @click="updateColors"></li>
      <li data-color="#079992" @click="updateColors"></li>
      <li data-color="#e58e26" @click="updateColors"></li>
    </ul>
    <div class="changes">
      <div>Change</div>
      <div>Change</div>
      <div>Change</div>
      <div>Change</div>
    </div>
    </div>
  
</template>
<script>
export default {
  name: "ChangeColors",
  data: function(){
    return {
      color: "#b71540"
    }
  },
  methods:{
    updateColors(event){
      this.color = event.target.getAttribute('data-color');
    }
  }
}
</script>
<style lang="scss" scoped>
.container{
  text-align: center;
  padding: 20px;
    .switch-colors{
      list-style: none;
      padding: 0;
      margin: 20px;
        li{
          width: 20px;
          height: 20px;
          margin-right: 10px;
          background-color: #ddd;
          display: inline-block;
          cursor: pointer;
        }
        li:first-child{
          background-color: #b71540;
        }
        li:nth-child(2){
          background-color: #0c2461;
        }
        li:nth-child(3){
          background-color: #3c6382;
        }
        li:nth-child(4){
          background-color: #079992;
        }
        li:last-child{
          background-color: #e58e26;
        }
    }
    .changes{
      overflow: hidden;
        div{
          background-color: var(--mainColor);
          color: #fff;
          padding: 20px 0;
          text-align: center;
          float: left;
          width: calc(97% / 4);
        }
        div:not(:last-of-type){
          margin-right: 1%;
        }
    }
}
</style>