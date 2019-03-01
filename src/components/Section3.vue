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
                <v-radio v-for="n in response[0]" :key="n.value" :label="`${n.text}`" :value="n.value"></v-radio>
              </v-radio-group>
            </v-flex>
          </v-layout>
        </v-container>
        <span>1/10</span>
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
                <v-radio v-for="n in response[1]" :key="n.value" :label="`${n.text}`" :value="n.value"></v-radio>
              </v-radio-group>
            </v-flex>
          </v-layout>
        </v-container>
        <span>2/10</span>
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
                <v-radio v-for="n in response[2]" :key="n.value" :label="`${n.text}`" :value="n.value"></v-radio>
              </v-radio-group>
            </v-flex>
          </v-layout>
        </v-container>
        <span>3/10</span>
        <v-card-actions>
          <v-spacer/>
          <v-btn flat color="orange" @click="preview">Voltar</v-btn>
          <v-btn flat color="orange" @click="next">Proxima</v-btn>
        </v-card-actions>
      </v-card>
    </v-container>
    <v-container v-if="quiz === 4" class="section_quiz">
      <v-card class="card">
        <h3>{{questions[3].text}}</h3>
        <!-- <v-img
          class="white--text"
          height="200px"
          src="https://cdn.vuetifyjs.com/images/cards/docks.jpg"
        />-->
        <v-container fluid>
          <v-layout fill-height>
            <v-flex xs12 align-end flexbox>
              <v-radio-group v-model="result[3]">
                <v-radio v-for="n in response[3]" :key="n.value" :label="`${n.text}`" :value="n.value"></v-radio>
              </v-radio-group>
            </v-flex>
          </v-layout>
        </v-container>
        <span>4/10</span>
        <v-card-actions>
          <v-spacer/>
          <v-btn flat color="orange" @click="preview">Voltar</v-btn>
          <v-btn flat color="orange" @click="next">Proxima</v-btn>
        </v-card-actions>
      </v-card>
    </v-container>
    <v-container v-if="quiz === 5" class="section_quiz">
      <v-card class="card">
        <h3>{{questions[4].text}}</h3>
        <!-- <v-img
          class="white--text"
          height="200px"
          src="https://cdn.vuetifyjs.com/images/cards/docks.jpg"
        />-->
        <v-container fluid>
          <v-layout fill-height>
            <v-flex xs12 align-end flexbox>
              <v-radio-group v-model="result[4]">
                <v-radio v-for="n in response[4]" :key="n.value" :label="`${n.text}`" :value="n.value"></v-radio>
              </v-radio-group>
            </v-flex>
          </v-layout>
        </v-container>
        <span>5/10</span>
        <v-card-actions>
          <v-spacer/>
          <v-btn flat color="orange" @click="preview">Voltar</v-btn>
          <v-btn flat color="orange" @click="next">Proxima</v-btn>
        </v-card-actions>
      </v-card>
    </v-container>
    <v-container v-if="quiz === 6" class="section_quiz">
      <v-card class="card">
        <h3>{{questions[5].text}}</h3>
        <!-- <v-img
          class="white--text"
          height="200px"
          src="https://cdn.vuetifyjs.com/images/cards/docks.jpg"
        />-->
        <v-container fluid>
          <v-layout fill-height>
            <v-flex xs12 align-end flexbox>
              <v-radio-group v-model="result[5]">
                <v-radio v-for="n in response[5]" :key="n.value" :label="`${n.text}`" :value="n.value"></v-radio>
              </v-radio-group>
            </v-flex>
          </v-layout>
        </v-container>
        <span>6/10</span>
        <v-card-actions>
          <v-spacer/>
          <v-btn flat color="orange" @click="preview">Voltar</v-btn>
          <v-btn flat color="orange" @click="next">Proxima</v-btn>
        </v-card-actions>
      </v-card>
    </v-container>
    <v-container v-if="quiz === 7" class="section_quiz">
      <v-card class="card">
        <h3>{{questions[6].text}}</h3>
        <!-- <v-img
          class="white--text"
          height="200px"
          src="https://cdn.vuetifyjs.com/images/cards/docks.jpg"
        />-->
        <v-container fluid>
          <v-layout fill-height>
            <v-flex xs12 align-end flexbox>
              <v-radio-group v-model="result[6]">
                <v-radio v-for="n in response[6]" :key="n.value" :label="`${n.text}`" :value="n.value"></v-radio>
              </v-radio-group>
            </v-flex>
          </v-layout>
        </v-container>
        <span>7/10</span>
        <v-card-actions>
          <v-spacer/>
          <v-btn flat color="orange" @click="preview">Voltar</v-btn>
          <v-btn flat color="orange" @click="next">Proxima</v-btn>
        </v-card-actions>
      </v-card>
    </v-container>
    <v-container v-if="quiz === 8" class="section_quiz">
      <v-card class="card">
        <h3>{{questions[7].text}}</h3>
        <!-- <v-img
          class="white--text"
          height="200px"
          src="https://cdn.vuetifyjs.com/images/cards/docks.jpg"
        />-->
        <v-container fluid>
          <v-layout fill-height>
            <v-flex xs12 align-end flexbox>
              <v-radio-group v-model="result[7]">
                <v-radio v-for="n in response[7]" :key="n.value" :label="`${n.text}`" :value="n.value"></v-radio>
              </v-radio-group>
            </v-flex>
          </v-layout>
        </v-container>
        <span>8/10</span>
        <v-card-actions>
          <v-spacer/>
          <v-btn flat color="orange" @click="preview">Voltar</v-btn>
          <v-btn flat color="orange" @click="next">Proxima</v-btn>
        </v-card-actions>
      </v-card>
    </v-container>
    <v-container v-if="quiz === 9" class="section_quiz">
      <v-card class="card">
        <h3>{{questions[8].text}}</h3>
        <!-- <v-img
          class="white--text"
          height="200px"
          src="https://cdn.vuetifyjs.com/images/cards/docks.jpg"
        />-->
        <v-container fluid>
          <v-layout fill-height>
            <v-flex xs12 align-end flexbox>
              <v-radio-group v-model="result[8]">
                <v-radio v-for="n in response[8]" :key="n.value" :label="`${n.text}`" :value="n.value"></v-radio>
              </v-radio-group>
            </v-flex>
          </v-layout>
        </v-container>
        <span>9/10</span>
        <v-card-actions>
          <v-spacer/>
          <v-btn flat color="orange" @click="preview">Voltar</v-btn>
          <v-btn flat color="orange" @click="next">Proxima</v-btn>
        </v-card-actions>
      </v-card>
    </v-container>
    <v-container v-if="quiz === 10" class="section_quiz">
      <v-card class="card">
        <h3>{{questions[9].text}}</h3>
        <!-- <v-img
          class="white--text"
          height="200px"
          src="https://cdn.vuetifyjs.com/images/cards/docks.jpg"
        />-->
        <v-container fluid>
          <v-layout fill-height>
            <v-flex xs12 align-end flexbox>
              <v-radio-group v-model="result[9]">
                <v-radio v-for="n in response[9]" :key="n.value" :label="`${n.text}`" :value="n.value"></v-radio>
              </v-radio-group>
            </v-flex>
          </v-layout>
        </v-container>
        <span>10/10</span>
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
      if (this.quiz < 10) {
        this.quiz += 1
        return
      }
      var result = 0
      for (let i = 0; i < this.result.length; i++) {
        result += this.result[i]
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
      if (result <= 10) {
        alert('Sobrevivente')
      } else if (result >= 11 && result <= 14) {
        alert('Segurança')
      }else if (result >= 15 && result <= 18) {
        alert('Sensação')
      }else if (result >= 19 && result <= 22) {
        alert('Dominio')
      }else if (result >= 23 && result <= 26) {
        alert('Noite escura')
      }else if (result >= 27 && result <= 30) {
        alert('busca')
      }else if (result >= 31 && result <= 33) {
        alert('primeiro')
      }else if (result >= 34 && result <= 36) {
        alert('segundo')
      }else if (result >= 37 && result <= 39) {
        alert('comprometimento')
      }else if (result >= 40) {
        alert('iluminação')
      }
    }
  },
  data() {
    return {
      quiz: 0,
      index: 0,
      result: [null, null, null, null, null, null, null, null, null, null],
      radioGroup: 0,
      response: [
        [
          { text: "Discordo totalmente", value: 4 },
          { text: "Discordo em partes", value: 3 },
          { text: "Indiferente", value: 0 },
          { text: "Concordo em partes", value: 2 },
          { text: "Concordo totalmente", value: 1 }
        ],
        [
          { text: "Discordo totalmente", value: 4 },
          { text: "Discordo em partes", value: 3 },
          { text: "Indiferente", value: 0 },
          { text: "Concordo em partes", value: 2 },
          { text: "Concordo totalmente", value: 1 }
        ],
        [
          { text: "Discordo totalmente", value: 4 },
          { text: "Discordo em partes", value: 3 },
          { text: "Indiferente", value: 0 },
          { text: "Concordo em partes", value: 2 },
          { text: "Concordo totalmente", value: 1 }
        ],
        [
          { text: "Discordo totalmente", value: 4 },
          { text: "Discordo em partes", value: 3 },
          { text: "Indiferente", value: 0 },
          { text: "Concordo em partes", value: 2 },
          { text: "Concordo totalmente", value: 1 }
        ],
        [
          { text: "Discordo totalmente", value: 1 },
          { text: "Discordo em partes", value: 2 },
          { text: "Indiferente", value: 0 },
          { text: "Concordo em partes", value: 3 },
          { text: "Concordo totalmente", value: 4 }
        ],
        [
          { text: "Discordo totalmente", value: 1 },
          { text: "Discordo em partes", value: 2 },
          { text: "Indiferente", value: 0 },
          { text: "Concordo em partes", value: 3 },
          { text: "Concordo totalmente", value: 4 }
        ],
        [
          { text: "Discordo totalmente", value: 4 },
          { text: "Discordo em partes", value: 3 },
          { text: "Indiferente", value: 0 },
          { text: "Concordo em partes", value: 2 },
          { text: "Concordo totalmente", value: 1 }
        ],
        [
          { text: "Discordo totalmente", value: 4 },
          { text: "Discordo em partes", value: 3 },
          { text: "Indiferente", value: 0 },
          { text: "Concordo em partes", value: 2 },
          { text: "Concordo totalmente", value: 1 }
        ],
        [
          { text: "Discordo totalmente", value: 1 },
          { text: "Discordo em partes", value: 2 },
          { text: "Indiferente", value: 0 },
          { text: "Concordo em partes", value: 3 },
          { text: "Concordo totalmente", value: 4 }
        ],
        [
          { text: "Discordo totalmente", value: 1 },
          { text: "Discordo em partes", value: 2 },
          { text: "Indiferente", value: 0 },
          { text: "Concordo em partes", value: 3 },
          { text: "Concordo totalmente", value: 4 }
        ],
      ],
      questions: [
      { text: '1. Você sente que está em uma luta constante para satisfazer suas necessidades básicas?' },
      { text: '2. Você sente que "mata um leão por dia"? Que vive e trabalha apenas para sustentar você e/ou sua familia no futuro?' },
      { text: '3. Você acredita que a felicidade se resume ao bem-estar físico e ao prazer sexual?' },
      { text: '4. Você busca incansavelmente por reconhecimento, prestígio, ascenção social e/ou poder?' },
      { text: '5. Você se pergunta frequentemente questões do tipo "Quem sou eu?", "Qual o meu propósito?" etc.?' },
      { text: '6. Você procura conhecimentos de diversas religiões e dogmas para investigar a espiritualidade?' },
      { text: '7. Você sente que já tem conhecimento espiritual consideravel, mas ainda está confuso?' },
      { text: '8. Você tem convicção de que a vida é espiritual, mas às vezes tem crises de dúvidas?' },
      { text: '9. Você está comprometido com a sua espiritualidade e sente que ela é mais importante que assuntos mundanos, como trabalho, prazer ou fortuna?' },
      { text: '10. Você sente que se reintegrou ao Infinito Ser Divino, tenho chegado ao mesmo estado de Buda e de Cristo?' },
    ]
  };
  }
};
</script>

<style scoped lang="stylus">
i = !important;

.section_quiz {
  padding 60px
  height: auto;
  justify-content: center;
  display: flex;
}

.card
  width: 50vw;
  h3
    box-sizing border-box
    text-align left
    align-items center
    display flex
    margin 0 auto
    height 100px
    width 90%
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
