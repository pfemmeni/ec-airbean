<template>
  <div class="backgroundVK">
    <header class="tops">
      <img
        src="@/assets/graphics/navicon.svg"
        class="x-btn"
        @click="$store.dispatch('showNav')"
      />
    </header>
    <div class="text">
      <h1>Vårt Kaffe</h1>
      <h3>
        Pumpkin spice mug, barista cup, sit macchiato, kopi-luwak, doppio,
        grounds dripper, crema, strong whipped, variety extra iced id lungo half
        and half mazagran. Pumpkin spice.
      </h3>
      <p>
        Que dark fair trade, spoon decaffeinated, barista wings whipped, as rich
        aftertaste, con panna milk black, arabica white rich beans single shot
        extra affogato. So affogato macchiato sit extraction instant grinder
        seasonal organic, turkish single shot, single origin, and robusta strong
        to go so dripper. Viennese froth, grounds caramelization skinny aromatic
        cup kopi-luwak, fair trade flavour, frappuccino medium, café au lait
        flavour cultivar ut bar instant kopi-luwak.
      </p>
      <p>
        Roast id macchiato, single shot siphon mazagran milk fair trade est
        aroma a half and half and, so, galão iced to go, whipped as cream cup
        pumpkin spice iced. At extra, rich grinder, brewed to go, steamed half
        and half at, that, percolator macchiato trifecta and body as arabica
        dripper. In galão black java milk sit trifecta, robusta, acerbic café au
        lait instant shop latte. Seasonal bar shop filter aroma id, crema,
        affogato viennese cultivar aftertaste, seasonal, percolator cream black,
        galão flavour, milk aromatic turkish skinny crema.
      </p>
    </div>

    <footer class="bens">
      <img
        class="bens-item bens-pic"
        src="../assets/graphics/eva-cortado.jpg"
      />
      <h2 class="bens-item">Eva Cortado</h2>
      <span class="bens-item">VD & Grundare</span>
    </footer>
  </div>
</template>

<script>
export default {};
</script>

<style>
.backgroundVK {
  background-color: #f3e3e3;
  height: 100vh;
  display: grid;
  grid-template-rows: 0.5fr 3.3fr 1.2fr;
  margin-bottom: 0;
}

.tops {
  width: 100%;
  margin-top: 0;
  margin-bottom: 0;
  background-image: url("../assets/graphics/graphics-header.svg");
  background-repeat: no-repeat;
  background-size: 100%;
}
.bens {
  width: 100%;
  background-image: url("../assets/graphics/graphics-footer.svg");
  margin-bottom: 0;
  background-repeat: no-repeat;
  background-position: bottom;
  background-size: contain;
  justify-content: center;
}
.bens-pic {
  border-radius: 50px;
}
.bens-item {
  justify-content: center;
  margin: 3px;
}

.text {
  color: #2c2c24;
  margin-left: 8%;
  margin-right: 8%;
  margin-top: 0;
  margin-bottom: 0;
}
.text h1 {
  margin-top: 40px;
  font-size: 35px;
  font-weight: 800;
}
.text h3 {
  font-family: Arial, Helvetica, sans-serif;
  font-weight: 600;
  font-size: 16px;
}
.text p {
  font-family: Arial, Helvetica, sans-serif;
  font-size: 15px;
  font-weight: 400;
}
</style>
