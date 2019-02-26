<template>
  <v-container fluid class="section1">
    <h1>Texto bonito para une vida</h1>
    <p>Paragrafo bonito para uneVida</p>
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
.section1 {
  background: url('/static/porques.png') no-repeat;
  background-size: cover;
  background-position: bottom;
  height: 100vh;
  align-items: center;
  display: flex;
  justify-content: center;
  flex-direction: column;
  min-height: 600px;
}
</style>
