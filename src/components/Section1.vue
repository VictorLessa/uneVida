<template>
  <v-container fluid class="section1">
    <h1 style="color: white">Em que direção seguir</h1>
    <p style="color: white">Existe um momento na vida onde todos começarão a questionar os seus princípios, e com isso a busca das resposta é apenas a consequência de uma série de fatores a serem desvendados.</p>
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
