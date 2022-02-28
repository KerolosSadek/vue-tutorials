<template>
  <div class="home">
    <ShowHidePass></ShowHidePass>
    <br />
    <convert-to-slug></convert-to-slug>
    <br />
    <change-colors></change-colors>
    <br />
    <calculate-price></calculate-price>
    <br />
    <RepositoriesAxios></RepositoriesAxios>
    <br />
    <validation-form></validation-form>
    <br />
    <to-do-list></to-do-list>
    <br />
    <grediant-generator></grediant-generator>
    <br />
    <toggle-class-all-methods></toggle-class-all-methods>
    <br />
    <create-tabs></create-tabs>
  </div>
</template>

<script>
import ShowHidePass from "@/components/ShowHidePass";
import ConvertToSlug from "@/components/ConvertToSlug";
import ChangeColors from "../components/ChangeColors.vue";
import CalculatePrice from "../components/CalculatePrice.vue";
import RepositoriesAxios from "../components/RepositoriesAxios.vue";
import ValidationForm from "../components/ValidationForm.vue";
import ToDoList from "../components/ToDoList.vue";
import GrediantGenerator from '@/components/GrediantGenerator.vue'
import ToggleClassAllMethods from '@/components/ToggleClassAllMethods.vue'
import CreateTabs from '../components/CreateTabs.vue';

export default {
  name: "Home",
  components: {
    ShowHidePass,
    ConvertToSlug,
    ChangeColors,
    CalculatePrice,
    RepositoriesAxios,
    ValidationForm,
    ToDoList,
    GrediantGenerator,
    ToggleClassAllMethods,
    CreateTabs,
  }
};
</script>
