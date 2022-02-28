<template>
  <div class="container">
    <ul class="tabs-choose">
      <li @click="activeTab = '1'" :class="[activeTab === '1' ? 'active' : '']">Tab One</li>
      <li @click="activeTab = '2'" :class="[activeTab === '2' ? 'active' : '']">Tab Two</li>
      <li @click="activeTab = '3'" :class="[activeTab === '3' ? 'active' : '']">Tab Three</li>
      <li @click="activeTab = '4'" :class="[activeTab === '4' ? 'active' : '']">Tab Four</li>
    </ul>
    <div class="tabs-content">
      <div class="content-one" v-if="activeTab === '1'">content one</div>
      <div class="content-Two" v-if="activeTab === '2'">content Two</div>
      <div class="content-Three" v-if="activeTab === '3'">content Three</div>
      <div class="content-Four" v-if="activeTab === '4'">content Four</div>
    </div>
  </div>
</template>
<script>
export default {
  name: "CreateTabs",
  data: function(){
    return{
      activeTab : "1"
    }
  }
}
</script>

<style lang="scss" scoped>
.container{
  margin: 20px auto;
  width: 1200px;
    .tabs-choose{
      margin-bottom: 0;
        li{
          display: inline-block;
          padding: 10px 20px;
          background-color: #eee;
          cursor: pointer;
          opacity: 0.5;
        }
        li.active{
              opacity: 1;
            }
    }
    .tabs-content{
      background-color: #eee;
      margin: 0 auto;
      padding: 20px;
    }
}
</style>