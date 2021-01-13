<template>
  <div class="my">
    <LogInModal v-if="!$store.state.loggedIn"> </LogInModal>
    <header>
      <img
        src="@/assets/graphics/navicon.svg"
        class="x-btn"
        @click="$store.dispatch('showNav')"
      />
    </header>
    <div>
      <img class="user-pic" src="../assets/graphics/default-user-image.png" />
      <h2 class="username">{{ $store.state.loginInfo.name }}</h2>
      <p class="useremail">{{ $store.state.loginInfo.email }}</p>
    </div>
    <p class="orderhistorik">Orderhistorik</p>
    <Orders
      v-for="order in $store.state.orderInformation"
      :key="order.orderNumber"
      :order="order"
    >
    </Orders>
    <div class="his-total">
      <p>Totalt spenderat</p>
      <p>{{ $store.state.sumOfAllOrders }} kr</p>
    </div>
  </div>
</template>

<script>
import Orders from "../components/Orders";
import LogInModal from "../components/LogInModal";
export default {
  components: { Orders, LogInModal },
};
</script>

<style>
.my {
  font-family: Cambria, Cochin, Georgia, Times, "Times New Roman", serif;
  height: 100vh;
  width: 100%;
  margin-top: 0;
  margin-bottom: 0;
  background-image: url("../assets/graphics/graphics-header.svg");
  background-repeat: no-repeat;
  background-size: 100%;
  background-color: #2c2c24;
  color: #fafafafb;
}
.user-pic {
  width: 150px;
  border-radius: 50%;
  margin-top: 10%;
  margin-left: 30%;
  margin-right: auto;
}
.username {
  font-size: 35px;
  text-align: center;
  margin: 10px;
}
.useremail {
  margin-top: 5px;
  font-size: 18px;
  text-align: center;
  margin-bottom: 80px;
}
.orderhistorik {
  font-size: 25px;
  margin: 10px;
  padding-bottom: 10px;
}
.his-total {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin: 10px;
  margin-top: 0;
  border-top: 2px solid #aaa;
}
</style>
<!-- v-for="order in $store.state.orderInformation"
      :key="order.orderNumber"
      :order="order" -->
