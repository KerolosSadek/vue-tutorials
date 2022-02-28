<template>
  <div class="container">
    <button :class="{ selected : isSelected }" @click="isSelected = !isSelected">First Method</button>
    <button @click="Toggle">Second Method</button>
    <button @click="toggleAdvanced($event , 'selected')">Third Method</button>
  </div>
</template>
<script>
export default {
  name: "ToggleClassAllMethods",
  data: function(){
    return{
      isSelected : false,
    }
  },
  methods:{
    Toggle(event){
      event.target.classList.toggle("selected");
    },
    toggleAdvanced(event , className){
      event.target.classList.toggle(className);
    }
  }
}
</script>

<style lang="scss" scoped>
.container button{
      height: 48px;
      border-color: transparent;
      padding: 5px 10px;
      background-color: #831212;
      color: #fff;
      cursor: pointer;
      margin: 10px;
      
}
.container button:focus{
      outline: none;
    }
.container button.selected{
  background-color: rgb(32, 105, 105);
  border-color: aqua;
}
</style>