<template>
  <v-container fluid class="footer">
    <p style="font-weight: 400">Email: contato@universidadeparavida.com.br<br>
Telefone: (21) 98192-1700<br>
Copyright © {{ data }} Portal UneVida Inc. Todos os direitos reservados.</p>
  </v-container>
</template>

<script>
export default {
  name: "Footer",
  data() {
    return {};
  },
  computed: {
    data () {
      return new Date().getFullYear()
    }
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
