<template>
    <div class="logo">
        <calculate-price></calculate-price>
    </div>
</template>
<script>
import CalculatePrice from '../components/CalculatePrice.vue';
export default {
    name: "CalcPrice",
    components: { 
      CalculatePrice ,
    },
};
</script>
