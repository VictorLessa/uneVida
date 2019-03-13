<template>
  <v-container grid-list-md class="response_quiz">
    <h4>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum</h4>
    <v-layout row wrap justify-center>
      <v-flex md5 sm5 lg3 xs12>
        <v-text-field
          v-model="email"
          v-validate="'required|email'"
          :error-messages="errors.collect('email')"
          label="E-mail"
          data-vv-name="email"
          required
        ></v-text-field>
      </v-flex>
      <v-flex md3 sm3 lg2 xs12>
        <v-btn round color="#7a3acc"><span style="color: white; text-transform: capitalize">Enviar Email</span></v-btn>
      </v-flex>
    </v-layout>
    <div
      class="fb-share-button"
      data-href="https://www.youtube.com/"
      data-layout="button"
      data-size="large"
      data-mobile-iframe="true"
    >
      <a
        target="_blank"
        href="https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Fdevelopers.facebook.com%2Fdocs%2Fplugins%2F&amp;src=sdkpreparse"
        class="fb-xfbml-parse-ignore"
      >Compartilhar</a>
    </div>
  </v-container>
</template>

<script>
export default {
  $_veeValidate: {
    validator: "new"
  },
  name: "Email",
  data() {
    return {
      email: ""
    };
  },
  mounted() {
    this.$validator.localize("en", this.dictionary);
  },

  methods: {
    submit() {
      this.$validator.validateAll();
    },
    clear() {
      this.name = "";
      this.email = "";
      this.select = null;
      this.checkbox = null;
      this.$validator.reset();
    }
  }
};
</script>

<style lang="stylus">
.response_quiz
  height: auto;
  padding-bottom: 150px;

h4
  width: 720px;
  margin: 0px auto 30px auto;
  font-weight: 400

@media (max-width: 560px)
  h4
    width 100%
    margin 0

@media (max-width: 768px)
  h4
    width 100%
</style>
