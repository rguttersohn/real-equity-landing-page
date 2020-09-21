<template>
  <div class="logo-wrapper">
    <div>
      <h3>Presented by:</h3>
      <div class="logo-flex-container">
        <img v-for="logo in logos" :src="logo.src" :alt="logo.org" :key="logo.org" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      logos: [
        {
          org: "CCC of New York",
          src:
            "https://www.cccnewyork.org/wp-content/uploads/2020/09/ccc-logo-75th-color-primary.svg"
        },
        {
          org: "FPWA",
          src:
            "https://www.cccnewyork.org/wp-content/uploads/2020/09/FPWA-Logo-TRANSPARENT.png"
        },
        {
          org: "UNH",
          src:
            "https://www.cccnewyork.org/wp-content/uploads/2020/09/UNH-LOGO-PNG.png"
        }
      ]
    };
  }
};
</script>

<style scoped>
.logo-wrapper {
  width: 100%;
  margin: 3% auto;
  background-color: #fcedd0;
  height: 200px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.logo-wrapper div {
  width: 90%;
  margin: auto;
}
.logo-wrapper div .logo-flex-container {
  display: flex;
  justify-content: space-evenly;
  align-items: center;
}

.logo-wrapper div h3 {
  text-align: center;
}

.logo-wrapper div img {
  width: 20%;
  display: block;
}

@media screen and (max-width: 928px) {
  .logo-wrapper {
    width: 100%;
    justify-content: space-between;
  }

  .logo-wrapper div {
    flex-wrap: wrap;
  }

  .logo-wrapper div img {
    width: 30%;
  }
}
</style>