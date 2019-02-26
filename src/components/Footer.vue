<template>
  <v-container fluid class="footer">
    <p>Footer bonito para UneVida</p>
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
  height: 200px;
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
