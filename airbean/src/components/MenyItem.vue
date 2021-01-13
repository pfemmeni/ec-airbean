<template>
  <div class="menu-items">
    <img @click="$emit('click')" class="add" src="../assets/graphics/add.svg" />
    <div class="item">
      <p class="title">{{ item.title }}</p>
      <p>{{ item.desc }}</p>
    </div>

    <p class="title price">{{ item.price }}kr</p>
  </div>
</template>

<script>
export default {
  props: {
    item: Object,
  },
};
</script>

<style scoped>
.menu-items {
  display: flex;
  flex-direction: row;
  max-height: 40px;
  padding-bottom: 20px;
  padding-top: 20px;
  margin-top: 15px;
  margin-bottom: 15px;
  justify-content: space-evenly;
  align-items: center;
}
.add {
  width: 30px;
  height: 30px;
  background-color: black;
  border-radius: 50%;
  padding: 5px;
}
.item {
  display: flex;
  flex-direction: column;
  margin-bottom: 10px;
  padding-bottom: 10px;
  padding-top: 0px;
  justify-content: center;
  border-bottom: 1px solid #aaa;
}
.title {
  font-size: 25px;
  font-weight: 600;
  margin-bottom: 0px;
}
.price {
  font-size: 25px;
  font-weight: 600;
  vertical-align: top;
}
</style>
