<template>
<div style="padding: 10px">
  <h2>Faça o teste e confira qual o seu momento atual</h2>
  <v-container  v-show="show" class="section_quiz">
    <v-layout fill-height align-center justify-center>
      <!-- <input type="image" src="/static/consciencia.png" name="Iniciar" value="Inicia quiz"/> -->
      <input class="botton" @click="show = false" type="button" value="Iniciar Quiz">
      <!-- <v-btn class="button" @click="startQuiz">Inicia quiz</v-btn> -->
    </v-layout>
  </v-container>
  <v-container v-if="!show">
    <v-layout align-start justify-start column>
    <h3>Quiz: Qual o meu nível de consciência?</h3>
      <v-layout>
        <vue-goodshare-facebook
          page_url="https://despertarparaalma.com.br/"
          title_social="Facebook"
        ></vue-goodshare-facebook>
        <vue-goodshare-twitter
          page_url="https://despertarparaalma.com.br/"
          title_social="Twitter"
        ></vue-goodshare-twitter>
        <vue-goodshare-whatsapp
          page_url="https://despertarparaalma.com.br/"
          title_social="Whatsapp"
        ></vue-goodshare-whatsapp>
      </v-layout>
    <Quiz :show="!show"></Quiz>
    </v-layout>
  </v-container>
</div>
</template>

<script>
import VueGoodshareFacebook from "vue-goodshare/src/providers/Facebook.vue";
import VueGoodshareTwitter from "vue-goodshare/src/providers/Twitter.vue";
import VueGoodshareWhatsapp from "vue-goodshare/src/providers/Whatsapp.vue";
import Quiz from './Quiz'
import getEmail from "./getEmail";
export default {
  name: "Section3",
  data () {
    return {
      show: true
    }
  },
  components: {
    getEmail,
    Quiz,
    VueGoodshareFacebook,
    VueGoodshareTwitter,
    VueGoodshareWhatsapp
  },
  methods: {
    startQuiz() {
      this.quiz = 1;
    },
    preview() {
      if (this.quiz > 1) {
        1;
        this.quiz -= 1;
      }
    },
    next() {
      if (this.quiz < 10) {
        this.quiz += 1;
        return;
      }
      var result = 0;
      for (let i = 0; i < this.result.length; i++) {
        result += this.result[i];
      }
      // 1 - 10 sobrevivente
      // 11 - 14 segurança
      // 15 - 18 sensação
      // 19 - 22 dominio
      // 23 -26 noite escura
      // 27 - 30 busca
      // 31 - 33 primeiro
      // 34 - 36 segundo
      // 37 - 39 comprometimento
      // 40 iluminação
      this.show = false;
      if (result <= 10) {
        // alert("Sobrevivente");
      } else if (result >= 11 && result <= 14) {
        // alert("Segurança");
      } else if (result >= 15 && result <= 18) {
        // alert("Sensação");
      } else if (result >= 19 && result <= 22) {
        // alert("Dominio");
      } else if (result >= 23 && result <= 26) {
        // alert("Noite escura");
      } else if (result >= 27 && result <= 30) {
        // alert("busca");
      } else if (result >= 31 && result <= 33) {
        // alert("primeiro");
      } else if (result >= 34 && result <= 36) {
        // alert("segundo");
      } else if (result >= 37 && result <= 39) {
        // alert("comprometimento");
      } else if (result >= 40) {
        // alert("iluminação");
      }
    }
  },
  data() {
    return {
      quiz: 0,
      show: true,
      index: 0,
      result: [null, null, null, null, null, null, null, null, null, null],
      radioGroup: 0
    };
  }
};
</script>

<style scoped lang="stylus">
i = !important;

.section_quiz {
  height: auto;
}

h2 {
  margin-top: 50px;
}

.card {
  width: 50vw;

  h3 {
    box-sizing: border-box;
    text-align: left;
    align-items: center;
    display: flex;
    margin: 0 auto;
    height: 100px;
    width: 90%;
  }
}

input[type=button] {
  color: white;
  background: transparent url('/static/consciencia.svg') no-repeat;
  height: 108px;
  width: 332px;
  background-position-y: 7px;
  background-size: 291px;
  // padding 0 0px 0 120px
}

.botton {
  &:hover {
    color: white;

  }
}

.botton
  &:focus
    outline none

@media (max-width: 560px)
  .card
    width: 100%;

  .section_quiz
    padding 40px 0

  h2
    margin-left: 10px
    margin-right: 10

  input[type=button]
    color: white;
    background: transparent url('/static/consciencia.png') no-repeat;
    background-size: contain;
    height: 75px;
    width: 300px;

</style>
