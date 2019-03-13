<template>
  <v-container fluid class="section1">
    <h1 style="color: white">Em que direção seguir?</h1>
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
p
  width 720px
.section1
  background: url('/static/caminho_da_alma.png') no-repeat;
  background-size: cover;
  background-position: bottom;
  height: 100vh;
  align-items: center;
  display: flex;
  justify-content: center;
  flex-direction: column;
  min-height: 600px;


@media (max-width: 560px)
  p
    width 100%

@media (max-width: 768px)
  p
    width 100%
</style>
