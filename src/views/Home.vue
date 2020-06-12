<template>
  <div id="page-home">
    <div class="content">
      <Header />
      <Main />
    </div>
    <img alt="logo" src="../assets/home-background.svg" />
  </div>
</template>

<script>
// @ is an alias to /src
import Header from "../components/Header";
import Main from "../components/Main";

export default {
  name: "Home",
  components: { Header, Main }
};
</script>
<style scoped>
#page-home {
  display: flex;
  flex-direction: row;
  justify-content: center;
  max-width: 1440px;
  margin: 0 auto;
  height: 100vh;
}

#page-home img {
  margin-top: auto;
}

#page-home .content {
  width: 100%;
  height: 100%;
  max-width: 1100px;
  margin: 0 auto;
  padding: 0 30px;

  display: flex;
  flex-direction: column;
  align-items: flex-start;
}

@media (max-width: 900px) {
  #page-home .content {
    align-items: center;
    text-align: center;
  }

  #page-home .content .header {
    margin: 48px auto 0;
  }

  #page-home .content .main {
    align-items: center;
  }

  #page-home .content .main h1 {
    font-size: 42px;
  }

  #page-home .content .main p {
    font-size: 24px;
  }
}
</style>
