<template>
  <v-container fluid class="footer">
    <p style="font-weight: 400">Email: portal@unevida.com.br<br>
Telefone: (21) 3789-5621 | (21) 3659-8974<br>
Copyright © 2018 Portal UneVida Inc., Todos os direitos reservados.</p>
  </v-container>
</template>

<script>
export default {
  name: "Footer",
  data() {
    return {};
  }
};
</script>

<style scoped lang="stylus">
.footer {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 150px;
  background: url('/static/espiritualidade.png') no-repeat;
  background-size: cover;
  color: white;
}

@media (max-width: 560px) {
  .footer {
    height: 150px;
    background-size: cover;
    background-position: center;
  }
}
</style>
