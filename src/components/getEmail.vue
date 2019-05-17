<template>
  <!-- <v-container grid-list-md text-xs-center>
    <v-layout row wrap> -->
      <v-card
        dark
        color="#F9FAF6"
        class="cardGetEmail"
      >
        <h4 style="color: black">Seu resultado é</h4>
        <h3 style="color: blue; margin: 10px 0; font-size: 20px">{{ result }}</h3>
        <p style="color: black; margin: 20px 0; width: auto">Gostaria de saber mais sobre? Cadastre seu e-mail para receber um detalhamento maior do seu nível.</p>
          <v-form
            ref="form"
            v-model="valid"
            lazy-validation
            class="form"
          >
        <v-container grid-list-md text-xs-center>
            <v-layout row wrap align-start>
                <v-flex md12 lg10>
                  <v-text-field
                    ref="email"
                    v-model="email"
                    :rules="[
                      () => !!email || 'E-mail é necessario!',
                      () => /.+@.+/.test(email) || 'Valor não é um e-mail!' 
                      ]"
                    :error-messages="errorMessages"
                    label="E-mail"
                    solo
                    color="black"
                    required
                  ></v-text-field>
                </v-flex>
                <v-flex md12 lg2>
                  <v-btn
                    class="btn-send"
                    color="#7A3ACC"
                    style="heigth: 48px; text-transform: capitalize"
                    :loading="loading"
                    @click="submit"
                  >
                    {{ text_botao }}
                  </v-btn>
                </v-flex>
            </v-layout>
        </v-container>
          </v-form>
      </v-card>
    <!-- </v-layout>
  </v-container> -->
</template>

<script>
import classSendEmail from '@/nodeMailer/index.js'
export default {
  name: "Result",
  data () {
    return {
      valid: true,
      loading: false,
      email: null,
      text_botao: 'Enviar',
      errorMessages: '',
      rules: {
        required: value => !!value || 'Required.',
        counter: value => value.length <= 20 || 'Max 20 characters',
        email: value => {
          const pattern = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
          return pattern.test(value) || 'Invalid e-mail.'
        }
      }
    }
  },
  computed: {
    form () {
      return {
        email: this.email
      }
    }
  },
  watch: {
    name () {
      this.errorMessages = ''
    }
  },
  methods: {
    sendEmail () {
      mailsender.sendEmail()
    },
    async submit () {
      this.loading = true
      this.text_botao = 'Enviado'
      
      this.formHasErrors = false

      Object.keys(this.form).forEach(f => {
        if (!this.form[f]) this.formHasErrors = true
        this.$refs[f].validate(true)
        
      })
      if (!this.formHasErrors) {
        this.text_botao = 'Enviado'
        await classSendEmail.sendEmail(this.email, this.title, this.href, this.text)
          .then(
            s => {
              this.loading = false
              this.text_botao = 'Enviado'
          })
          .catch(
            err => {
              this.loading = false
              this.text_botao = 'Error'
          })
      }
    }
  },
  props: {
    result: '',
    title: '',
    href:'',
    text:''
  }
}
</script>

<style lang="stylus">
i = !important
.theme--dark.v-messages
  color: red i
.theme--dark.v-label
  color: black i
.theme--dark.v-text-field--solo > .v-input__control > .v-input__slot
  background white i
.theme--dark.v-input:not(.v-input--is-disabled) input
  color black i
.form
  width 500px
  display flex
  margin 0 auto
  justify-content center
// .theme--dark.v-input:not(.v-input--is-disabled) input, .theme--dark.v-input:not(.v-input--is-disabled) textarea
//   color: black i
// .theme--dark.v-label
//   color black i
// .theme--dark.v-btn:not(.v-btn--icon):not(.v-btn--flat)
//   height 56px
//   width: 200px
//   margin 0 0 0 10px
.cardGetEmail
  width: 100%;
  padding: 20px;

@media (max-width 500px)
  .form
    width 100%
  .cardGetEmail
    width: 100%;
    padding: 10px;
  .btn-send
    width 95%

</style>
