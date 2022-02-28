<template>
  <div class="container">
        <form  action="">
          <input :type="fieldType" placeholder="Type·Your·Pass">
          <button @click.prevent="switchField">Hide/Show Pass</button>
        </form>
      </div>
</template>
<script>
export default {
  name: "ShowHidePass",
  data: function(){
    return{
    fieldType: "password"
    }
  },
  methods:{
    switchField(){
      this.fieldType = this.fieldType === 'password' ? 'text' : 'password'
    }
  },

}
</script>
<style lang="scss" scoped>
.container form{
  margin: 20px auto;
    input{
      padding: 0 15px;
      height: 46px;
      background-color: #efefef;
      border: 1px solid #ccc;
}
    input:focus{
      outline: none;
}
    button{
      height: 48px;
      border-color: transparent;
      padding: 5px 10px;
      background-color: #2196f3;
      color: #fff;
      cursor: pointer;
}
    button:focus{
      outline: none;
}
}
</style>