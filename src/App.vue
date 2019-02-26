<template>
  <div id="app">
    <v-container fluid class="nav">
      <v-container>
        <img src="/static/autoconhecimento.webp" alt="autoconhecimento">
      </v-container>
    </v-container>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: "App"
};
</script>

<style lang="stylus">
@import '~vuetify/src/stylus/main';

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

.nav {
  position: absolute;
  height: 88px;
}
</style>
