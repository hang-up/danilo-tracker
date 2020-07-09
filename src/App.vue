<template>
  <div id="app">
    <Menu :route="currentRoute" />
    <router-view />
  </div>
</template>

<script>
import Menu from './components/Menu';
export default {
  components: { Menu },
  computed: {
    currentRoute() {
      return this.$router.currentRoute.name;
    },
  },
  watch: {
    currentRoute(newr, oldr) {
      console.log(newr, oldr);
    },
  },
};
</script>
<style>
@import url('https://fonts.googleapis.com/css2?family=Quicksand:wght@300;500;700&display=swap');
@import './css/form.css';

:root {
  --primary-color: #34cb79;
  --primary-color-darker: #2fb86e;
  --title-color: #322153;
  --text-color: #6c6c80;
  --light-grey: #f0f0f5;
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  background: var(--light-grey);
  -webkit-font-smoothing: antialiased;
  color: var(--text-color);
}

body,
input,
button {
  font-family: 'Quicksand', Arial, Helvetica, sans-serif;
}

span,
h1,
h2,
h3,
h4,
h5,
h6 {
  color: var(--title-color);
  font-family: 'Quicksand';
}

#app {
  display: flex;
  flex-direction: column;
  max-width: 1440px;
  margin: 0 auto;
}

@media (min-width: 320px) and (max-width: 480px) {
  body {
    background: #fff;
  }
}
</style>
