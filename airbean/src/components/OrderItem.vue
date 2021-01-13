<template>
  <div class="order-item">
    <div class="order-desc">
      <h2>{{ item.title }}</h2>
      <p>{{ item.price * item.amount }} kr</p>
    </div>
    <div class="amount">
      <img
        src="../assets/graphics/arrow-up.svg"
        @click="$store.dispatch('arrowUp', item.id)"
      />
      <p>{{ item.amount }}</p>
      <img
        src="../assets/graphics/arrow-down.svg"
        @click="$store.dispatch('arrowDown', item.id)"
      />
    </div>
  </div>
</template>

<script>
export default {
  props: {
    item: Object,
  },
};
</script>

<style>
.order-item {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin: 15px;
  margin-top: 0px;
  margin-bottom: 0px;

  align-content: center;
  padding-bottom: 0px;
  padding-top: 0px;
  border-bottom: 1px solid #aaa;
}
.order-desc h2 {
  padding: 0;
  margin-top: 5px;
  margin-bottom: 5px;
}
.amount img {
  margin: 0;
  padding: 0;
  width: 13px;
}
.amount {
  text-align: center;
  margin: 2px;
  margin-top: 7px;
}
.amount p {
  margin: 0;
  padding: 3px;
  font-size: 16px;
}
</style>
