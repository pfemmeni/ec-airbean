<template>
  <div class="modal ">
    <h1>Din beställning</h1>
    <OrderItem v-for="item in cart" :key="item.id" :item="item"></OrderItem>
  </div>
</template>

<script>
import OrderItem from "../components/OrderItem";
export default {
  components: { OrderItem },
  computed: {
    cart() {
      return this.$store.state.cart;
    },
  },
};
</script>

<style>
.modal {
  background-color: #fdfffd;
  position: fixed;
  width: 22rem;
  top: 9.5%;
  bottom: auto;
  left: 25.7%;
  right: 27%;
  padding: 10px;
  border-radius: 5%;
  padding-bottom: 30px;
  opacity: 1;
}
</style>
