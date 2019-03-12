<template>
  <v-container>
    <v-text-field
      v-model="email"
      v-validate="'required|email'"
      :error-messages="errors.collect('email')"
      label="E-mail"
      data-vv-name="email"
      required
    ></v-text-field>
  </v-container>
</template>

<script>
export default {
  $_veeValidate: {
    validator: 'new'
  },
  name: 'Email',
  data () {
    return {
      email: ''
    }
  },
  mounted () {
    this.$validator.localize('en', this.dictionary)
  },

  methods: {
    submit () {
      this.$validator.validateAll()
    },
    clear () {
      this.name = ''
      this.email = ''
      this.select = null
      this.checkbox = null
      this.$validator.reset()
    }
  }
}
</script>

<style>

</style>
