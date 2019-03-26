<template>
  <v-container text-xs-center>
    <v-layout row wrap>
      <v-card
        dark
        color="#F9FAFC"
        style="width: 100%; padding: 20px;"
      >
        <h4 style="color: black">Seu resultado é</h4>
        <h3 style="color: blue">Dominío ou Poder Egoico</h3>
        <p style="color: black">Neste nível, mesmo as necessidades de </p>
        <h4 style="color: black">Gostaria de saber como continuar expandindo sua consciência e saber mais sobre?</h4>
        <p style="color: black">Cadastre seu e-mail para receber um material exclusivo sobre seu nível e</p>
        <v-layout justify-center>
          <v-flex lg7>
            <v-text-field
              label="E-mail"
              box
              background-color="white"
              single-line
            ></v-text-field>
          </v-flex>
          <v-flex lg1>
            <v-btn
              color="purple"
              big
              dark
              style="text-transform: capitalize; font-family: Montserrat, sans-serif; font-weight: 600"
            >
              Enviar
            </v-btn>
          </v-flex>
        </v-layout>
      </v-card>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  name: "Result",
  data () {
    return {

    }
  }
}
</script>

<style lang="stylus">
i = !important
.theme--dark.v-input:not(.v-input--is-disabled) input, .theme--dark.v-input:not(.v-input--is-disabled) textarea
  color: black i
.theme--dark.v-label
  color black i
.theme--dark.v-btn:not(.v-btn--icon):not(.v-btn--flat)
  height 56px
  width: 200px
  margin 0 0 0 10px
</style>
