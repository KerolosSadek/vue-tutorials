<template>
  <div class="container">
  <div class="grad-box" :style="{ backgroundImage: 'linear-gradient( '+direction+' , '+ colorOne +' , '+ colorTwo +' )' }">Gradient Preview</div>
    <form action="">
      <div class="form-group">
        <label for="">Direction</label>
        <input type="text" v-model="direction" />
      </div>
      <div class="form-group">
      <div class="separator"></div>
        <label for="">Color Stop One</label>
        <input type="text" v-model="colorOne" />
      </div>
      <div class="separator"></div>
      <div class="form-group">
        <label for="">Color Stop Two</label>
        <input type="text" v-model="colorTwo" />
      </div>
    </form>
    <div class="result">
      <span>Css Code:</span> background-image: linear-gradient({{direction}}}, {{colorOne}}} , {{colorTwo}}} );

    </div>
    <div class="syntax">
      <span>Syntax:</span> background-image: linear-gradient(direction, color-stop1, color-stop2, ...);

    </div>
  </div>
</template>
<script>
export default {
  name: "GradientGenerator",
  data: function(){
    return{
      direction : "to right",
      colorOne : "#FF0000",
      colorTwo : "#FFFF00",
    }
  }
}
</script>