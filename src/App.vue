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
  font-family: 'Montserrat' , sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  font-weight 600
  color: #2c3e50;
}

h2
  font-weight 700

@import url('https://fonts.googleapis.com/css?family=Montserrat:400,600,700,900');

img
  width 150px

.nav {
  position: absolute;
  height: 88px;
}

.hooper-next, .hooper-prev
  height 100px
  background-color #9d9d9d !important
  opacity .8
</style>
