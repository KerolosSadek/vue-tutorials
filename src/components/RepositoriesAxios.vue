<template>
  <div class="container">
  <h2>Enter Your Github Acc Name</h2>
    <input type="text" v-model="username">
    <button @click="getRepos">Get Repos</button>
    <div v-for="repo in repos" :key="repo.name">
      <h4> {{ repo.name }} </h4>
      
      <h4>Html Url => </h4>
      <p> {{repo.html_url}} </p>

      <h4>Descreption => </h4>
      <p> {{repo.description}} </p>
      --------------------------------------------
    </div>
  </div>
  
</template>

<script>

export default {
  name: "CalculatePriceAPI",
  data: function(){
    return{
      username: null,
      repos: null
    }
  },
  methods:{
    getRepos: function(){
      /*
        1- Get Data From Api
        2- Return Response
        3- catch The Erorr
      */
      const axios = require('axios');
      return axios
      .get(`https://api.github.com/users/${this.username}/repos`)
      .then(response =>{
        this.repos = response.data;
      })
      .catch(error =>{
        console.log(error);
      });
  
    }
  }
}

</script>