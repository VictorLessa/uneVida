<template>
  <div>
    <v-container v-if="quiz === 0" class="section_quiz">
      <!-- <input type="image" src="/static/consciencia.png" name="Iniciar" value="Inicia quiz"/> -->
      <input class="botton" @click="startQuiz" type="button" value="Iniciar Quiz">
      <!-- <v-btn class="button" @click="startQuiz">Inicia quiz</v-btn> -->
    </v-container>
    <v-container v-if="quiz === 1" class="section_quiz">
      <v-card class="card">
        <h3>{{ questions[0].text }}</h3>
        <!-- <v-img
          class="white--text"
          height="200px"
          src="https://cdn.vuetifyjs.com/images/cards/docks.jpg"
        />-->
        <v-container fluid>
          <v-layout fill-height>
            <v-flex xs12 align-end flexbox>
              <v-radio-group v-model="result[0]">
                <v-radio v-for="n in response" :key="n.value" :label="`${n.text}`" :value="n.value"></v-radio>
              </v-radio-group>
            </v-flex>
          </v-layout>
        </v-container>
        <v-card-actions>
          <v-spacer/>
          <v-btn flat color="orange" @click="preview">Voltar</v-btn>
          <v-btn flat color="orange" @click="next">Proxima</v-btn>
        </v-card-actions>
      </v-card>
    </v-container>
    <v-container v-if="quiz === 2" class="section_quiz">
      <v-card class="card">
        <h3>{{questions[1].text}}</h3>
        <!-- <v-img
          class="white--text"
          height="200px"
          src="https://cdn.vuetifyjs.com/images/cards/docks.jpg"
        />-->
        <v-container fluid>
          <v-layout fill-height>
            <v-flex xs12 align-end flexbox>
              <v-radio-group v-model="result[1]">
                <v-radio v-for="n in response" :key="n.value" :label="`${n.text}`" :value="n.value"></v-radio>
              </v-radio-group>
            </v-flex>
          </v-layout>
        </v-container>
        <v-card-actions>
          <v-spacer/>
          <v-btn flat color="orange" @click="preview">Voltar</v-btn>
          <v-btn flat color="orange" @click="next">Proxima</v-btn>
        </v-card-actions>
      </v-card>
    </v-container>
    <v-container v-if="quiz === 3" class="section_quiz">
      <v-card class="card">
        <h3>{{questions[2].text}}</h3>
        <!-- <v-img
          class="white--text"
          height="200px"
          src="https://cdn.vuetifyjs.com/images/cards/docks.jpg"
        />-->
        <v-container fluid>
          <v-layout fill-height>
            <v-flex xs12 align-end flexbox>
              <v-radio-group v-model="result[2]">
                <v-radio v-for="n in response" :key="n.value" :label="`${n.text}`" :value="n.value"></v-radio>
              </v-radio-group>
            </v-flex>
          </v-layout>
        </v-container>
        <v-card-actions>
          <v-spacer/>
          <v-btn flat color="orange" @click="preview">Voltar</v-btn>
          <v-btn flat color="orange" @click="next">Proxima</v-btn>
        </v-card-actions>
      </v-card>
    </v-container>
  </div>
</template>

<script>
export default {
  name: "Section3",
  data() {
    return {
      quiz: 0,
      index: 0,
      result: [null, null, null],
      radioGroup: 0,
      response: [
        { text: "Sim", value: 1 },
        { text: "Não", value: 2 },
        { text: "Talvez", value: 3 }
      ],
      questions: [
        { text: "Vc gosta de carnaval?" },
        { text: "Vc gosta de broquinho?" },
        { text: "Vc é igual a vinicios?" }
      ]
    };
  },
  methods: {
    startQuiz() {
      this.quiz = 1;
    },
    preview() {
      if (this.quiz > 1) {
        this.quiz -= 1;
      }
    },
    next() {
      if (this.quiz < 3) {
        this.quiz += 1;
      } else if (this.quiz === 3) {
        for (let i = 0; i < this.result.length; i++) {
          if (this.result[i] === null) {
            alert("esta faltando respostas");
            return;
          }
        }
        var result = 0;
        for (let i = 0; i < this.result.length; i++) {
          result += this.result[i];
        }
        if (result === 5) {
          alert("Vc é definitivamente brasileiro");
        } else {
          alert("Vc prefere ficar em casa codando");
        }
      }
    }
  }
};
</script>

<style scoped lang="stylus">
i = !important;

.section_quiz {
  height: auto;
  justify-content: center;
  display: flex;
}

.card {
  width: 50vw;
}

input[type=button] {
  color: white;
  background: transparent url('/static/consciencia.png') no-repeat;
  height: 95px;
  width: 400px;
  // padding 0 0px 0 120px
}

.botton {
  &:hover {
    color: blue;
  }
}

@media (max-width: 560px) {
  .card {
    width: 100%;
  }

  input[type=button] {
    color: white;
    background: transparent url('/static/consciencia.png') no-repeat;
    background-size: contain;
    height: 75px;
    width: 300px;
  }
}
</style>
