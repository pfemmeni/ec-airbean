<template>
  <div>
    <div>
      <h2>{{ item.title }}</h2>
      <p>{{ item.price }}kr</p>
    </div>
    <div>
      <img
        src="../assets/graphics/arrow-up.svg"
        @click="$store.dispatch('arrowUp')"
      />
      <p>{{ count }}</p>
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

<style scoped></style>
