<template>
  <div class="container">
    <form action="">
      <input type="text" placeholder="Type Your Post Tittle" v-model="input">
      <button @click.prevent="convertToSlug">Convert To Slug</button>
    </form>
    <div class="slug-resault">
      https://Kerolos.org/<span>{{output}} </span>
    </div>
  </div>
</template>
<script>
export default {
  name: "ConvertToSlug",
  data: function(){
    return{
      input: "",
      output: "",
    }
  },
  methods:{
    convertToSlug(){
      //Cache The Variable
      var slugText = this.input;

      //[1]Convert To LowerCase
      slugText = slugText.toLowerCase();

      //[2]Replace White Space With Dashes
      slugText = slugText.replace(/\s+/g , '-');
      //[3] Replace Ampersand With (And)
      slugText = slugText.replace(/&/g , "-and-");

      //Add The Resault To Output
      this.output = slugText  
    }
  }
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