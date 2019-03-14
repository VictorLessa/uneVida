<template>
  <v-container text-xs-left fluid class="section1">
    <v-layout align-start justify-center column fill-height>
      <div class="elevation">
        <img src="/static/logo_unevida.svg" alt="autoconhecimento">
      </div>
      <div class="elevation">
        <h1 style="color: white">Em que direção seguir?</h1>
        <p style="color: white">Existe um momento na vida onde todos começarão a questionar<br>
    os seus princípios e com isso a busca das respostas é apenas a<br>
    consequência de uma série de fatores a serem desvendados.</p>
      </div>
      <div class="elevation">
        <input class="botton" @click="$vuetify.goTo('#section2', {duration: 300, offset: 0, easing: 'easeInOutCubic'})" type="button" value="Saiba mais">
      </div>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  name: "Section1",
  data() {
    return {};
  }
};
</script>

<style scoped lang="stylus">
p
  width 720px
.section1
  background: url('/static/caminho_da_alma.png') no-repeat;
  background-size: cover;
  background-position: bottom;
  height: 100vh;
  min-height: 600px;

.elevation
  margin 30px 50px

.botton
  &:focus
    outline none
input[type=button]
  color: white;
  background: transparent url('/static/consciencia.svg') no-repeat;
  height: 108px;
  width: 332px;
  background-position-y: 7px;
  background-size: 291px;
@media (max-width: 560px)
  p
    width 100%
  .elevation
    margin 30px 0px
  br
    display none
@media (max-width: 768px)
  p
    width 100%
</style>
