<template>
  <div class="banner">
    <div class="banner-container"></div>
    <div class="filter-box"></div>
    <img
      src="https://www.cccnewyork.org/wp-content/uploads/2020/09/real-equity-PRIMARY.png"
      alt="logo for the REAL Equity"
      class="logo"
    />
  </div>
</template>

<script>
export default {};
</script>

<style >
#app .banner {
  position: relative;
  width: 100%;
  height:250px;
  margin-bottom:5%;
}
#app .banner-container {
  position: absolute;
  width: 100%;
  height: 250px;
  background-image: url(https://www.cccnewyork.org/wp-content/uploads/2020/09/protest-3-e1600264658671.png);
  background-attachment:scroll;
  background-repeat: no-repeat;
  background-position:0 -160px;
  background-size: 110%;
}

#app .filter-box {
  position: absolute;
  width: 100%;
  height: 250px;
  background-color:#3333333f;
}


#app .banner .logo {
  position: absolute;
  width: 30%;
  filter: unset;
  top:30px;
  left:700px;
}

@media screen and (max-width:928px){
  #app .banner {
    width:100vw;
  }
  #app .banner-container{
    width:100%;
  }
  #app .filter-box{
    width:100%;
  }
#app .banner .logo{
  left:50%;
  top:10%;
  width:40%;
}
}

@media screen and (max-width:665px){
  #app .banner-container{
    background-position: center center;
  }
}
</style>