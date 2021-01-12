<template
  ><div>
    <div class="main" @click="$store.dispatch('showNav')">
      <img
        class="left"
        src="@/assets/graphics/intro-graphic-left.svg"
        alt="aside-left"
      />
      <img
        class="right"
        src="@/assets/graphics/intro-graphic-right.svg"
        alt="aside-right"
      />
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style>
#app {
  font-family: "Times New Roman", Times, serif;
  min-height: 100vh;
  max-width: 24rem;
  margin: 0 auto;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
}
.main {
  background-color: rgb(56, 132, 109);
  display: flex;
  flex-direction: row;
  height: 100vh;
  background-image: url("../assets/graphics/airbean-landing.svg");
  background-repeat: no-repeat;
  background-position: center;
  justify-content: space-between;
}

.left {
  object-fit: cover;

  width: 80%;
}
.right {
  object-fit: cover;
  width: 80%;
}
.home {
  background-color: #2c2c24;
  color: white;
  background-image: none;
  display: grid;
  height: 100vh;
}
.x-btn {
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
.link {
  margin-top: 30px;
  margin-bottom: 5px;
  text-decoration: none;
  color: #fdfdfd;
  font-size: 45px;
  font-weight: 400;
  text-align: center;
  border-bottom: 1px solid #aaa;
}

.nav {
  margin-top: 250px;
  margin-bottom: 60%;
  display: grid;
  grid-auto-rows: 100px;
  justify-content: center;
  align-content: space-between;
}
</style>
