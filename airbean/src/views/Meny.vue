<template>
  <div class="background ">
    <header>
      <img
        src="@/assets/graphics/navicon.svg"
        class="nav-btn"
        @click="$store.dispatch('showNav')"
      />
      <button class="cart-btn" @click="$store.dispatch('showModal')">
        <span class="cart-items"> {{ $store.state.cart.length }}</span>
      </button>
    </header>
    <CartModal v-if="$store.state.showModal"></CartModal>

    <h1>Meny</h1>
    <p v-if="loading">Loading</p>
    <MenyItem
      v-else
      v-for="item in menuItems"
      :key="item.id"
      :item="item"
      @click="$store.dispatch('addToCart', item.id)"
    ></MenyItem>
    <footer></footer>
  </div>
</template>

<script>
import MenyItem from "../components/MenyItem";
import CartModal from "../components/CartModal";

export default {
  components: { MenyItem, CartModal },
  computed: {
    menuItems() {
      return this.$store.state.menuItems[0];
    },
  },

  data() {
    return {
      loading: true,
    };
  },

  async mounted() {
    await this.$store.dispatch("getMenuItems");
    this.loading = false;
  },
};
</script>

<style>
.background {
  margin: 0;
  background-color: #f3e3e3;
  height: 100vh;
  margin-bottom: 0;
  display: grid;
}

h1 {
  font-size: 40px;
  padding: 0;
  margin: 0;
  text-align: center;
}
h1,
p {
  margin-bottom: 0;
  padding-bottom: 0;
}
header {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin: 0;
  padding: 0;
}
.cart-btn {
  font-family: Arial, Helvetica, sans-serif;
  margin: 20px 15px;

  width: 65px;
  height: 65px;
  border-radius: 50%;
  font-size: 50px;
  font-weight: 400;
  padding: 5px;
  color: white;
  border: none;

  background-color: #2c2c24;
  text-align: center;
  vertical-align: middle;
  background-image: url("../assets/graphics/bag.svg");
  background-repeat: no-repeat;
  background-position: center;
  background-size: 30px;
  position: relative;
}
.cart-items {
  position: absolute;

  background-color: rgb(197, 83, 83);
  border-radius: 50%;
  height: 32px;
  width: 32px;
  top: -8px;
  padding-top: 3px;
  right: -8px;
  font-size: 26px;
  text-align: center;
  vertical-align: middle;
}
.nav-btn {
  font-family: Arial, Helvetica, sans-serif;
  margin: 20px 10px;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  font-size: 40px;
  font-weight: 400;
  padding: 5px;
  color: #2c2c24;
  border: none;

  background-color: #fdfdfd;
  text-align: center;
  vertical-align: middle;
}
</style>
