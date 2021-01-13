<template>
  <div class="log-in">
    <div class="welcome">
      <img src="../assets/graphics/small-logo.png" alt="" />
      <h1>Välkommen till AirBean-familjen!</h1>
      <p>
        Genom att skapa ett konto nedan kan du spara och se din orderhistorik.
      </p>
    </div>
    <div class="form">
      <label for="name">Namn</label>
      <input
        v-model="name"
        @change="$store.dispatch('loginName', name)"
        type="text"
        placeholder="Skriv ditt namn"
      />
      <label for="email">E-mail</label>
      <input
        v-model="email"
        @change="$store.dispatch('loginEmail', email)"
        type="text"
        placeholder="Skriv din e-mail"
      />
      <div class="radio">
        <input type="radio" />
        <p>GPDR Ok!</p>
      </div>
      <button @click="$store.dispatch('loggedIn')" class="welcome-btn">
        Brew me a cup!
      </button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      name: "",
      email: "",
    };
  },
};
</script>

<style>
.log-in {
  background-color: #f3e3e3;
  color: #2c2c24;

  position: fixed;
  width: 21rem;
  top: 12%;
  bottom: auto;
  left: 27%;
  right: auto;
  padding: 10px;
  border-radius: 2% 2%;
  padding-bottom: 30px;
  opacity: 1;
  min-height: 500px;
}
.welcome {
  text-align: center;
  padding-top: 0px;
}
.welcome img {
  width: 60px;
  margin-bottom: 0;
  padding-top: 10px;
  padding-bottom: 0;
}
.welcome h1 {
  font-size: 38px;
  padding-top: 0px;
  margin-top: 10px;
}
.welcome p {
  font-size: 20px;
  margin-bottom: 50px;
}
.form {
  display: flex;
  flex-direction: column;
  margin: 5px;
}
.form input {
  margin-top: 5px;
  margin-bottom: 15px;
  height: 30px;
  background-color: inherit;
  border-radius: 5% 5%;
}
.radio {
  display: flex;
  flex-direction: row;
  align-content: center;
  font-size: 15px;
}
.radio input {
  width: 15px;
  padding: 0;
}
.radio p {
  padding: 0px;
  margin-top: 10px;
  margin-left: 3px;
}
.welcome-btn {
  margin-top: 10%;

  font-family: Arial, Helvetica, sans-serif;
  width: 250px;
  height: 60px;
  font-size: 20px;
  font-weight: 600;

  border-radius: 50px 50px;
  border: none;
  margin-left: auto;
  margin-right: auto;
  display: flex;
  align-items: center;
  vertical-align: middle;
  background-color: #2c2c24;
  color: #fdfdfdea;
  text-decoration: none;
  justify-content: space-around;
}
</style>
