<template>
  <div class="container">
    <div class="product">
      <h3>Product Tittle</h3>
      <p>Product Description</p>
      <span class="price">Price: {{ price }}</span>
      <span class="amount-tittle">Amount:</span>
      <input type="range" min="1" max="40" step="1" v-model="amount" />
      <div class="total-price">
        <span class="amount">Amount: {{ amount }}</span>
        <span class="total">Total $ {{ totalPrice }}</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "CalculatePrice",
  data: function () {
    return {
      amount: 1,
      price: 50,
    };
  },
  computed: {
    totalPrice() {
      return this.amount * this.price;
    },
  },
};
</script>
