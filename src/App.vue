<template>
  <div id="app">
    <v-toolbar
        flat
        absolute
        color="transparent"
      >

          <v-spacer></v-spacer>
            Contato

      </v-toolbar>
    <v-container fluid class="nav">
      <v-container>
        <!-- <img src="/static/logo_unevida.svg" alt="autoconhecimento"> -->
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

h1
  font-size 36px

img
  width 150px

.nav {
  position: absolute;
  height: 88px;
}

.hooper-next, .hooper-prev
  height 80px
  background-color white !important
  opacity .8
h1, h2, h3
  margin-bottom 20px
p
  width 70vw
  margin 0 auto
  font-weight 400
.v-card
  box-shadow none

.icon_hover
  position: absolute;
  z-index: 5;
  /* top: 30px; */
  opacity: 0;
  height: 80px;
  width: 150px;
  display: flex;
  align-items: center;
  justify-content: center;
  &:hover
    opacity 1
</style>
