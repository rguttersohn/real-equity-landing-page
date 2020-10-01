<template>
  <div id="app">
    <Header />
    <Intro />
    <div id="nav">
      <router-link :to="{name:'Economic'}">
        <img
          src="https://www.cccnewyork.org/wp-content/uploads/2020/09/economy-icon.png"
          alt="icon for economic equity"
        />
        <h2>
          Economic
          <br />Equity
        </h2>
        <p>Oct. 1</p>
      </router-link>
      <router-link :to="{name:'Housing'}">
        <img
          src="https://www.cccnewyork.org/wp-content/uploads/2020/09/housing-icon.png"
          alt="icon for housing equity"
        />
        <h2>
          Housing
          <br />Equity
        </h2>
        <p>Oct. 8</p>
      </router-link>
      <router-link :to="{name:'Health'}">
        <img
          src="https://www.cccnewyork.org/wp-content/uploads/2020/09/health-icon.png"
          alt="icon for health equity"
        />
        <h2>
          Health
          <br />Equity
        </h2>
        <p>Oct. 15</p>
      </router-link>
      <router-link :to="{name:'Education'}">
        <img
          src="https://www.cccnewyork.org/wp-content/uploads/2020/09/education-icon.png"
          alt="icon for education equity"
        />
        <h2>
          Education
          <br />Equity
        </h2>
        <p>Oct. 22</p>
      </router-link>
      <router-link :to="{name:'Justice'}">
        <img
          src="https://www.cccnewyork.org/wp-content/uploads/2020/09/justice-icon.png"
          alt="icon for justice equity"
        />
        <h2>
          Justice
          <br />Equity
        </h2>
        <p>Oct. 29</p>
      </router-link>
    </div>
    <router-view />
    <Orgs />
  </div>
</template>

<script>
import Header from "@/components/Header.vue";
import Intro from "@/components/Intro.vue";
import Orgs from "@/components/Orgs.vue";
export default {
  components: {
    Header,
    Intro,
    Orgs
  }
};
</script>

<style>
#app * {
  font-family: sans-serif;
  line-height: 150%;
}

#app p,
strong,
em,
li,
ul,
ol,
text,
h3 {
  font-size: 16px;
}

#app h2,
#app strong {
  font-weight: bold;
}

#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  width: 992px;
  margin: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

#app #nav {
  padding: 30px;
  display: flex;
  align-items: flex-start;
  justify-content: space-around;
}

#app #nav a {
  padding: 1%;
  font-weight: bold;
  color: #333333;
  margin: 0 1%;
  width: 20%;
  text-align: center;
  border-radius: 15px;
  border-bottom: 1px solid #cc6633;
  position: relative;
  z-index: 20;
}

#app #nav a:first-child {
  margin-left: 0%;
}

#app #nav a:last-child {
  margin-right: 0%;
}

#app #nav a p {
  font-style: italic;
  font-weight: initial;
  color: slategray;
  text-decoration: unset !important;
}

#app #nav a:hover {
  background-color: #fcf7f6;
}

#app #nav a.router-link-exact-active {
  border-bottom: initial;
  padding-bottom: 50px;
  background-color: #fcf7f6;
}

#app #nav a.router-link-exact-active h2 {
  color: #cc6633;
}

#app #nav a img {
  width: 50%;
}

@media screen and (max-width: 928px) {
  #app {
    width: 100vw;
    margin: 0;
  }
  #app #nav {
    width: 100vw;
    justify-content: center;
    align-items: flex-end;
  }

  #app #nav a {
    margin: 0 3%;
      border-bottom:initial;
      border-radius:5px;

  }

  #app #nav a img {
    width: 100%;
    display:block;
    margin:auto;
  }

  #app #nav a.router-link-exact-active{
    padding-bottom:initial;
     border: 1px solid #cc6633;
  }
}

@media screen and (max-width: 700px) {
  #app #nav a h2,
  #app #nav a p {
    display: none;
  }
}
</style>
