<template>
  <div class="home">
    <img
      src="@/assets/graphics/close.svg"
      class="x-btn"
      @click="$store.dispatch('hideNav')"
      v-if="$store.state.hideHome"
    />
    <div class="nav">
      <router-link
        class="link"
        @click.native="$store.dispatch('hideNav')"
        to="/meny"
        ><span>Meny</span>
      </router-link>
      <router-link
        class="link"
        @click.native="$store.dispatch('hideNav')"
        to="/vart-kaffe"
        >Vår Kaffe</router-link
      >
      <router-link
        class="link"
        @click.native="$store.dispatch('hideNav')"
        to="/min-profil"
        >Min profil</router-link
      >
      <router-link
        class="link"
        @click.native="$store.dispatch('hideNav')"
        to="/order-status"
        >Order status</router-link
      >
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      showNav: false,
    };
  },
};
</script>

<style scoped></style>
// @click.native=""
