<template>
  <div class="history">
    <div class="ord-dec">
      <p>{{ order.orderNumber }}</p>
      <p>total ordersumma</p>
    </div>
    <div class="ord-dec">
      <p>{{ order.date }}</p>
      <p>{{ order.total }} kr</p>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    order: Object,
  },
};
</script>

<style>
.history {
  margin: 10px;
  margin-bottom: 0;
  height: 20px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding-bottom: 50px;
  border-bottom: 1px solid #aaa;
}
.ord-dec {
  font-size: 18px;
  display: flex;
  flex-direction: column;
  margin-left: 5px;
  margin-right: 5px;
}
.ord-dec p {
  margin: 3px;
}
</style>
