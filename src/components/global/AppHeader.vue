/* eslint-disable */
<template>
  <div class="header">
    <div class="container">
      <ul>
      <router-link to="/calc-price" tag="li">
          <a>CalcPrice</a>
        </router-link>

        <router-link to="/colors" tag="li">
          <a>ChangeColors</a>
        </router-link>
        
        <router-link to="/" tag="li" exact>
          <a>Home</a>
        </router-link>

        <router-link to="/con-to-slug" tag="li" exact>
          <a>ConvertToSlug</a>
        </router-link>

        <router-link to="/tabs" tag="li" exact>
          <a>CreateTabs</a>
        </router-link>

        <router-link to="/gred-generator" tag="li" exact>
          <a>GrediantGenerator</a>
        </router-link>

        <router-link to="/repo-axios" tag="li" exact>
          <a>RepositoriesAxios</a>
        </router-link>

        <router-link to="/sh-pass" tag="li" exact>
          <a>ShowHidePass</a>
        </router-link>

        <router-link to="/todo-list" tag="li" exact>
          <a>ToDoList</a>
        </router-link>

        <router-link to="/tog-class" tag="li" exact>
          <a>ToggleClassAllMethods</a>
        </router-link>

        <router-link to="/valid-form" tag="li" exact>
          <a>ValidationForm</a>
        </router-link>
        
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "AppHeader",
};
</script>

<style lang="scss" scoped>
.header {
  background-color: #333;
  overflow: hidden;
  color: #fff;
  .logo {
    font-size: 20px;
    padding: 20px;
    float: left;
    width: 200px;
    color: #fff;
  }
}

ul {
  width: calc(100% - 200px);
  margin: 0;
  li {
    float: right;
    padding: 20px;
    color: #fff;
    text-decoration: none;
    display: inline-block;
    font-size: 18px;
  }
  a {
    color: #fff;
    text-decoration: none;
  }
}
</style>
