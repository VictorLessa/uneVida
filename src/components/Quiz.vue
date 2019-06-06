 <template>
<div v-if="flag" style="width: 100%">
      <v-progress-linear
        color="purplee"
        height="25"
        :value="count * 10"
      > {{ count }} de 10 </v-progress-linear>
    <!-- </v-layout> -->
    <v-layout>
      <v-card
        dark
        color="#F9FAFC"
        style="width: 100%; padding: 20px;"
        >
          <v-card-title
            class="headline font-weight-bold"
          >
            <span class="question">{{ questions[count - 1] }}</span>
          </v-card-title>
            <div v-if="count === 1" transition="bounce">
              <v-card max-width="400px" class="select_options" v-touch:end="isActive1 = false" v-on:mouseover="isActive1 = true" v-on:mouseleave="isActive1 = false">
                <v-checkbox v-bind:class="{active: isActive1 }" color="green" label="Discordo totalmente" v-model="check1" @change="select(values[ count -1 ].value1)"></v-checkbox>
              </v-card>
              <v-card max-width="400px" class="select_options" v-touch:end="isActive2 = false" v-on:mouseover="isActive2 = true" v-on:mouseleave="isActive2 = false">
                <v-checkbox v-bind:class="{active: isActive2 }" color="green" label="Discordo em partes" v-model="check2" @change="select(values[ count -1 ].value2)"></v-checkbox>
              </v-card>
              <v-card max-width="400px" class="select_options" v-touch:end="isActive3 = false" v-on:mouseover="isActive3 = true" v-on:mouseleave="isActive3 = false">
                <v-checkbox v-bind:class="{active: isActive3 }" color="green" label="Indiferente" v-model="check3" @change="select(values[ count -1 ].value3)"></v-checkbox>
              </v-card>
              <v-card max-width="400px" class="select_options" v-touch:end="isActive4 = false" v-on:mouseover="isActive4 = true" v-on:mouseleave="isActive4 = false" >
                <v-checkbox v-bind:class="{active: isActive4 }" color="green" label="Concordo em partes" v-model="check4" @change="select(values[ count -1 ].value4)"></v-checkbox>
              </v-card>
              <v-card max-width="400px" class="select_options" v-touch:end="isActive5 = false" v-on:mouseover="isActive5 = true" v-on:mouseleave="isActive5 = false">
                <v-checkbox v-bind:class="{active: isActive5 }" color="green" label="Concordo totalmente" v-model="check5" @change="select(values[ count -1 ].value5)"></v-checkbox>
              </v-card>
            </div>
            <div v-if="count === 2" transition="bounce">
              <v-card max-width="400px" class="select_options" v-touch:end="isActive1 = false" v-on:mouseover="isActive1 = true" v-on:mouseleave="isActive1 = false">
                <v-checkbox v-bind:class="{active: isActive1 }" color="green" label="Discordo totalmente" v-model="check1" @change="select(values[ count -1 ].value1)"></v-checkbox>
              </v-card>
              <v-card max-width="400px" class="select_options" v-touch:end="isActive2 = false" v-on:mouseover="isActive2 = true" v-on:mouseleave="isActive2 = false">
                <v-checkbox v-bind:class="{active: isActive2 }" color="green" label="Discordo em partes" v-model="check2" @change="select(values[ count -1 ].value2)"></v-checkbox>
              </v-card>
              <v-card max-width="400px" class="select_options" v-touch:end="isActive3 = false" v-on:mouseover="isActive3 = true" v-on:mouseleave="isActive3 = false">
                <v-checkbox v-bind:class="{active: isActive3 }" color="green" label="Indiferente" v-model="check3" @change="select(values[ count -1 ].value3)"></v-checkbox>
              </v-card>
              <v-card max-width="400px" class="select_options" v-touch:end="isActive4 = false" v-on:mouseover="isActive4 = true" v-on:mouseleave="isActive4 = false" >
                <v-checkbox v-bind:class="{active: isActive4 }" color="green" label="Concordo em partes" v-model="check4" @change="select(values[ count -1 ].value4)"></v-checkbox>
              </v-card>
              <v-card max-width="400px" class="select_options" v-touch:end="isActive5 = false" v-on:mouseover="isActive5 = true" v-on:mouseleave="isActive5 = false">
                <v-checkbox v-bind:class="{active: isActive5 }" color="green" label="Concordo totalmente" v-model="check5" @change="select(values[ count -1 ].value5)"></v-checkbox>
              </v-card>
            </div>
            <div v-if="count === 3" transition="bounce">
              <v-card max-width="400px" class="select_options" v-touch:end="isActive1 = false" v-on:mouseover="isActive1 = true" v-on:mouseleave="isActive1 = false">
                <v-checkbox v-bind:class="{active: isActive1 }" color="green" label="Discordo totalmente" v-model="check1" @change="select(values[ count -1 ].value1)"></v-checkbox>
              </v-card>
              <v-card max-width="400px" class="select_options" v-touch:end="isActive2 = false" v-on:mouseover="isActive2 = true" v-on:mouseleave="isActive2 = false">
                <v-checkbox v-bind:class="{active: isActive2 }" color="green" label="Discordo em partes" v-model="check2" @change="select(values[ count -1 ].value2)"></v-checkbox>
              </v-card>
              <v-card max-width="400px" class="select_options" v-touch:end="isActive3 = false" v-on:mouseover="isActive3 = true" v-on:mouseleave="isActive3 = false">
                <v-checkbox v-bind:class="{active: isActive3 }" color="green" label="Indiferente" v-model="check3" @change="select(values[ count -1 ].value3)"></v-checkbox>
              </v-card>
              <v-card max-width="400px" class="select_options" v-touch:end="isActive4 = false" v-on:mouseover="isActive4 = true" v-on:mouseleave="isActive4 = false" >
                <v-checkbox v-bind:class="{active: isActive4 }" color="green" label="Concordo em partes" v-model="check4" @change="select(values[ count -1 ].value4)"></v-checkbox>
              </v-card>
              <v-card max-width="400px" class="select_options" v-touch:end="isActive5 = false" v-on:mouseover="isActive5 = true" v-on:mouseleave="isActive5 = false">
                <v-checkbox v-bind:class="{active: isActive5 }" color="green" label="Concordo totalmente" v-model="check5" @change="select(values[ count -1 ].value5)"></v-checkbox>
              </v-card>
            </div>
            <div v-if="count === 4" transition="bounce">
              <v-card max-width="400px" class="select_options" v-touch:end="isActive1 = false" v-on:mouseover="isActive1 = true" v-on:mouseleave="isActive1 = false">
                <v-checkbox v-bind:class="{active: isActive1 }" color="green" label="Discordo totalmente" v-model="check1" @change="select(values[ count -1 ].value1)"></v-checkbox>
              </v-card>
              <v-card max-width="400px" class="select_options" v-touch:end="isActive2 = false" v-on:mouseover="isActive2 = true" v-on:mouseleave="isActive2 = false">
                <v-checkbox v-bind:class="{active: isActive2 }" color="green" label="Discordo em partes" v-model="check2" @change="select(values[ count -1 ].value2)"></v-checkbox>
              </v-card>
              <v-card max-width="400px" class="select_options" v-touch:end="isActive3 = false" v-on:mouseover="isActive3 = true" v-on:mouseleave="isActive3 = false">
                <v-checkbox v-bind:class="{active: isActive3 }" color="green" label="Indiferente" v-model="check3" @change="select(values[ count -1 ].value3)"></v-checkbox>
              </v-card>
              <v-card max-width="400px" class="select_options" v-touch:end="isActive4 = false" v-on:mouseover="isActive4 = true" v-on:mouseleave="isActive4 = false" >
                <v-checkbox v-bind:class="{active: isActive4 }" color="green" label="Concordo em partes" v-model="check4" @change="select(values[ count -1 ].value4)"></v-checkbox>
              </v-card>
              <v-card max-width="400px" class="select_options" v-touch:end="isActive5 = false" v-on:mouseover="isActive5 = true" v-on:mouseleave="isActive5 = false">
                <v-checkbox v-bind:class="{active: isActive5 }" color="green" label="Concordo totalmente" v-model="check5" @change="select(values[ count -1 ].value5)"></v-checkbox>
              </v-card>
            </div>
            <div v-if="count === 5" transition="bounce">
              <v-card max-width="400px" class="select_options" v-touch:end="isActive1 = false" v-on:mouseover="isActive1 = true" v-on:mouseleave="isActive1 = false">
                <v-checkbox v-bind:class="{active: isActive1 }" color="green" label="Discordo totalmente" v-model="check1" @change="select(values[ count -1 ].value1)"></v-checkbox>
              </v-card>
              <v-card max-width="400px" class="select_options" v-touch:end="isActive2 = false" v-on:mouseover="isActive2 = true" v-on:mouseleave="isActive2 = false">
                <v-checkbox v-bind:class="{active: isActive2 }" color="green" label="Discordo em partes" v-model="check2" @change="select(values[ count -1 ].value2)"></v-checkbox>
              </v-card>
              <v-card max-width="400px" class="select_options" v-touch:end="isActive3 = false" v-on:mouseover="isActive3 = true" v-on:mouseleave="isActive3 = false">
                <v-checkbox v-bind:class="{active: isActive3 }" color="green" label="Indiferente" v-model="check3" @change="select(values[ count -1 ].value3)"></v-checkbox>
              </v-card>
              <v-card max-width="400px" class="select_options" v-touch:end="isActive4 = false" v-on:mouseover="isActive4 = true" v-on:mouseleave="isActive4 = false" >
                <v-checkbox v-bind:class="{active: isActive4 }" color="green" label="Concordo em partes" v-model="check4" @change="select(values[ count -1 ].value4)"></v-checkbox>
              </v-card>
              <v-card max-width="400px" class="select_options" v-touch:end="isActive5 = false" v-on:mouseover="isActive5 = true" v-on:mouseleave="isActive5 = false">
                <v-checkbox v-bind:class="{active: isActive5 }" color="green" label="Concordo totalmente" v-model="check5" @change="select(values[ count -1 ].value5)"></v-checkbox>
              </v-card>
            </div>
            <div v-if="count === 6" transition="bounce">
              <v-card max-width="400px" class="select_options" v-touch:end="isActive1 = false" v-on:mouseover="isActive1 = true" v-on:mouseleave="isActive1 = false">
                <v-checkbox v-bind:class="{active: isActive1 }" color="green" label="Discordo totalmente" v-model="check1" @change="select(values[ count -1 ].value1)"></v-checkbox>
              </v-card>
              <v-card max-width="400px" class="select_options" v-touch:end="isActive2 = false" v-on:mouseover="isActive2 = true" v-on:mouseleave="isActive2 = false">
                <v-checkbox v-bind:class="{active: isActive2 }" color="green" label="Discordo em partes" v-model="check2" @change="select(values[ count -1 ].value2)"></v-checkbox>
              </v-card>
              <v-card max-width="400px" class="select_options" v-touch:end="isActive3 = false" v-on:mouseover="isActive3 = true" v-on:mouseleave="isActive3 = false">
                <v-checkbox v-bind:class="{active: isActive3 }" color="green" label="Indiferente" v-model="check3" @change="select(values[ count -1 ].value3)"></v-checkbox>
              </v-card>
              <v-card max-width="400px" class="select_options" v-touch:end="isActive4 = false" v-on:mouseover="isActive4 = true" v-on:mouseleave="isActive4 = false" >
                <v-checkbox v-bind:class="{active: isActive4 }" color="green" label="Concordo em partes" v-model="check4" @change="select(values[ count -1 ].value4)"></v-checkbox>
              </v-card>
              <v-card max-width="400px" class="select_options" v-touch:end="isActive5 = false" v-on:mouseover="isActive5 = true" v-on:mouseleave="isActive5 = false">
                <v-checkbox v-bind:class="{active: isActive5 }" color="green" label="Concordo totalmente" v-model="check5" @change="select(values[ count -1 ].value5)"></v-checkbox>
              </v-card>
            </div>
            <div v-if="count === 7" transition="bounce">
              <v-card max-width="400px" class="select_options" v-touch:end="isActive1 = false" v-on:mouseover="isActive1 = true" v-on:mouseleave="isActive1 = false">
                <v-checkbox v-bind:class="{active: isActive1 }" color="green" label="Discordo totalmente" v-model="check1" @change="select(values[ count -1 ].value1)"></v-checkbox>
              </v-card>
              <v-card max-width="400px" class="select_options" v-touch:end="isActive2 = false" v-on:mouseover="isActive2 = true" v-on:mouseleave="isActive2 = false">
                <v-checkbox v-bind:class="{active: isActive2 }" color="green" label="Discordo em partes" v-model="check2" @change="select(values[ count -1 ].value2)"></v-checkbox>
              </v-card>
              <v-card max-width="400px" class="select_options" v-touch:end="isActive3 = false" v-on:mouseover="isActive3 = true" v-on:mouseleave="isActive3 = false">
                <v-checkbox v-bind:class="{active: isActive3 }" color="green" label="Indiferente" v-model="check3" @change="select(values[ count -1 ].value3)"></v-checkbox>
              </v-card>
              <v-card max-width="400px" class="select_options" v-touch:end="isActive4 = false" v-on:mouseover="isActive4 = true" v-on:mouseleave="isActive4 = false" >
                <v-checkbox v-bind:class="{active: isActive4 }" color="green" label="Concordo em partes" v-model="check4" @change="select(values[ count -1 ].value4)"></v-checkbox>
              </v-card>
              <v-card max-width="400px" class="select_options" v-touch:end="isActive5 = false" v-on:mouseover="isActive5 = true" v-on:mouseleave="isActive5 = false">
                <v-checkbox v-bind:class="{active: isActive5 }" color="green" label="Concordo totalmente" v-model="check5" @change="select(values[ count -1 ].value5)"></v-checkbox>
              </v-card>
            </div>
            <div v-if="count === 8" transition="bounce">
              <v-card max-width="400px" class="select_options" v-touch:end="isActive1 = false" v-on:mouseover="isActive1 = true" v-on:mouseleave="isActive1 = false">
                <v-checkbox v-bind:class="{active: isActive1 }" color="green" label="Discordo totalmente" v-model="check1" @change="select(values[ count -1 ].value1)"></v-checkbox>
              </v-card>
              <v-card max-width="400px" class="select_options" v-touch:end="isActive2 = false" v-on:mouseover="isActive2 = true" v-on:mouseleave="isActive2 = false">
                <v-checkbox v-bind:class="{active: isActive2 }" color="green" label="Discordo em partes" v-model="check2" @change="select(values[ count -1 ].value2)"></v-checkbox>
              </v-card>
              <v-card max-width="400px" class="select_options" v-touch:end="isActive3 = false" v-on:mouseover="isActive3 = true" v-on:mouseleave="isActive3 = false">
                <v-checkbox v-bind:class="{active: isActive3 }" color="green" label="Indiferente" v-model="check3" @change="select(values[ count -1 ].value3)"></v-checkbox>
              </v-card>
              <v-card max-width="400px" class="select_options" v-touch:end="isActive4 = false" v-on:mouseover="isActive4 = true" v-on:mouseleave="isActive4 = false" >
                <v-checkbox v-bind:class="{active: isActive4 }" color="green" label="Concordo em partes" v-model="check4" @change="select(values[ count -1 ].value4)"></v-checkbox>
              </v-card>
              <v-card max-width="400px" class="select_options" v-touch:end="isActive5 = false" v-on:mouseover="isActive5 = true" v-on:mouseleave="isActive5 = false">
                <v-checkbox v-bind:class="{active: isActive5 }" color="green" label="Concordo totalmente" v-model="check5" @change="select(values[ count -1 ].value5)"></v-checkbox>
              </v-card>
            </div>
            <div v-if="count === 9" transition="bounce">
              <v-card max-width="400px" class="select_options" v-touch:end="isActive1 = false" v-on:mouseover="isActive1 = true" v-on:mouseleave="isActive1 = false">
                <v-checkbox v-bind:class="{active: isActive1 }" color="green" label="Discordo totalmente" v-model="check1" @change="select(values[ count -1 ].value1)"></v-checkbox>
              </v-card>
              <v-card max-width="400px" class="select_options" v-touch:end="isActive2 = false" v-on:mouseover="isActive2 = true" v-on:mouseleave="isActive2 = false">
                <v-checkbox v-bind:class="{active: isActive2 }" color="green" label="Discordo em partes" v-model="check2" @change="select(values[ count -1 ].value2)"></v-checkbox>
              </v-card>
              <v-card max-width="400px" class="select_options" v-touch:end="isActive3 = false" v-on:mouseover="isActive3 = true" v-on:mouseleave="isActive3 = false">
                <v-checkbox v-bind:class="{active: isActive3 }" color="green" label="Indiferente" v-model="check3" @change="select(values[ count -1 ].value3)"></v-checkbox>
              </v-card>
              <v-card max-width="400px" class="select_options" v-touch:end="isActive4 = false" v-on:mouseover="isActive4 = true" v-on:mouseleave="isActive4 = false" >
                <v-checkbox v-bind:class="{active: isActive4 }" color="green" label="Concordo em partes" v-model="check4" @change="select(values[ count -1 ].value4)"></v-checkbox>
              </v-card>
              <v-card max-width="400px" class="select_options" v-touch:end="isActive5 = false" v-on:mouseover="isActive5 = true" v-on:mouseleave="isActive5 = false">
                <v-checkbox v-bind:class="{active: isActive5 }" color="green" label="Concordo totalmente" v-model="check5" @change="select(values[ count -1 ].value5)"></v-checkbox>
              </v-card>
            </div>
            <div v-if="count === 10" transition="bounce">
              <v-card max-width="400px" class="select_options" v-touch:end="isActive1 = false" v-on:mouseover="isActive1 = true" v-on:mouseleave="isActive1 = false">
                <v-checkbox v-bind:class="{active: isActive1 }" color="green" label="Discordo totalmente" v-model="check1" @change="select(values[ count -1 ].value1)"></v-checkbox>
              </v-card>
              <v-card max-width="400px" class="select_options" v-touch:end="isActive2 = false" v-on:mouseover="isActive2 = true" v-on:mouseleave="isActive2 = false">
                <v-checkbox v-bind:class="{active: isActive2 }" color="green" label="Discordo em partes" v-model="check2" @change="select(values[ count -1 ].value2)"></v-checkbox>
              </v-card>
              <v-card max-width="400px" class="select_options" v-touch:end="isActive3 = false" v-on:mouseover="isActive3 = true" v-on:mouseleave="isActive3 = false">
                <v-checkbox v-bind:class="{active: isActive3 }" color="green" label="Indiferente" v-model="check3" @change="select(values[ count -1 ].value3)"></v-checkbox>
              </v-card>
              <v-card max-width="400px" class="select_options" v-touch:end="isActive4 = false" v-on:mouseover="isActive4 = true" v-on:mouseleave="isActive4 = false" >
                <v-checkbox v-bind:class="{active: isActive4 }" color="green" label="Concordo em partes" v-model="check4" @change="select(values[ count -1 ].value4)"></v-checkbox>
              </v-card>
              <v-card max-width="400px" class="select_options" v-touch:end="isActive4 = false" v-on:mouseover="isActive5 = true" v-on:mouseleave="isActive5 = false">
                <v-checkbox v-bind:class="{active: isActive5 }" color="green" label="Concordo totalmente" v-model="check5" @change="select(values[ count -1 ].value5)"></v-checkbox>
              </v-card>
            </div>
      </v-card>
    </v-layout>
</div>
<div style="width: 100%; padding: 10px" v-else>
<getEmail :result="result" :title="title" :href="href" :text="text"></getEmail>
</div>
</template>

<script>
const JsonQuiz = require('../quiz/quiz.json')
import getEmail from './getEmail'
export default {
  name: 'Quizz',
  components: {
    getEmail
  },
  data () {
    return {
      count: 1,
      flag: this.show,
      result: '',
      selected: [],
      title: '',
      href:'',
      text: '',
      questions: JsonQuiz.questions,
      values: JsonQuiz.values,
      isActive1: false,
      isActive2: false,
      isActive3: false,
      isActive4: false,
      isActive5: false,
      check1: false,
      check2: false,
      check3: false,
      check4: false,
      check5: false,
    }
  },
  props: {
    show: null
  },
  watch: {
  },
  methods: {
    select (value) {
      console.log(value)
      this.selected.push(value)
      setTimeout(
        () => {
          if (this.count < 10) {
            this.count++
            this.check1 = false
            this.check2 = false
            this.check3 = false
            this.check1 = false
            this.check4 = false
            this.check5 = false
          } else {
            this.calc()
          }
      }, 300)
    },
    calc () {
      let result = 0
      for (let i = 0; i < this.selected.length; i++) {
        result += this.selected[i]
      }
      if (result <= 4) {
        this.title = 'Momento 1: Busca pela sobrevivência'
        this.result = 'Sobrevivência'
        this.href='https://blog.universidadeparavida.com.br/2019/05/06/momento-sobrevive%CC%82ncia/'
        this.text = 'Neste primeiro nível, a pessoa se ocupa apenas em manter-se viva. A vida é uma luta constante para satisfazer as necessidades básicas do corpo que são: ar, água, alimentos, roupas e abrigo. Não lhe sobram nem tempo e nem energia para fazer algo além da luta pela sobrevivência. As energias predominantes são a frustração, o desespero, o medo e a tristeza. Tem como principal desafio vencer a orfandade em que se encontra, que o leva a se sentir rejeitado pela vida, a insistir na autonegação e a buscar continuamente por um salvador, quer tenha consciência disto ou não... '
        // alert("Sobrevivente");
      } else if (result >= 5 && result <= 8) {
        this.title = 'Momento 2: Busca pela segurança familiar'
        this.result = 'Segurança'
        this.href='https://blog.universidadeparavida.com.br/2019/05/06/momento-seguranca/'
        this.text = 'No segundo nível, a pessoa já conquistou a sobrevivência imediata do primeiro nível e pode usar seu tempo e energia para garantir a sobrevivência no futuro. A sua consciência agora vai se concentrar em assegurar que primeiro ele, e depois seus entes queridos possam comer e ter um lugar para se abrigarem amanhã e nos dias subsequentes. Muitas pessoas sentem neste nível medo e ansiedade em relação à segurança no trabalho porque tem que pagar contas, pagar aluguel, comprar alimentos, etc...'
        // alert("Segurança");
      } else if (result >= 9 && result <= 12) {
        this.title = 'Busca pela gratificação do corpo e prazeres materiais'
        this.result = 'Busca pela gratificação do corpo e prazeres materiais'
        this.href='https://blog.universidadeparavida.com.br/2019/05/06/momento-sensacao-prazer/'
        this.text = 'No terceiro nível, a pessoa sente que conseguiu controlar a sobrevivência e a segurança. Ela então passa a usar o seu tempo e energia para a gratificação dos sentidos físicos, na busca pelo prazer. Neste nível, ela vê a vida apenas como diversão. A pessoa imagina que a felicidade se resume ao bem-estar físico e ao prazer sexual.'
        // alert("Sensação");
      } else if (result >= 13 && result <= 16) {
        this.title = 'Busca dominar pessoas ou poder egóico'
        this.result = 'Busca dominar pessoas ou poder egóico'
        this.href='https://blog.universidadeparavida.com.br/2019/05/06/dominio-ou-poder-egoico/'
        this.text = 'Neste 4º. nível, mesmo que as necessidades de obter sensações vão sendo satisfeitas, ainda assim a pessoa não se sente completamente feliz; ela começa então a se esforçar compulsivamente para satisfazer o objetivo imprescindível de felicidade. Nesta fase de Domínio, a pessoa anseia pelo poder sobre a matéria. Ela quer controlar as pessoas, lugares, coisas, acontecimentos e também acumular bens materiais e dinheiro. Ela busca por reconhecimento, prestígio, fama, posição social, dinheiro, política, negócios, ou pelo poder militar. Entretanto, isso é apenas poder egóico: energia usada para o benefício e glória de si mesmo, em oposição ao poder do Amor, onde tudo é feito para o bem de todos...'
        // alert("Dominio");
      } else if (result >= 17 && result <= 20) {
        this.title = 'Busca eliminar o sofrimento'
        this.result = 'A Noite escura da Alma'
        this.href='https://blog.universidadeparavida.com.br/2019/05/06/a-noite-escura-da-alma/'
        this.text = 'Neste 5º. nível, inicia-se uma fase decisiva e, por vezes, muito sofrida; que mudará – para sempre – a forma como a pessoa se relaciona com tudo que conhece, inclusive consigo mesma. É a noite escura da alma, o período que marca a aproximação de um viver luminoso, ou o fim das trevas. É o limiar que sinaliza a passagem de uma vida fundada no sofrimento, na escassez, no abandono, na falta, no medo, na dúvida, para um novo tempo de luz e esperança...'
        // alert("Noite escura");
      } else if (result >= 21 && result <= 24) {
        this.title = 'Momento 6: Busca respostas'
        this.result = 'A Busca'
        this.href="https://blog.universidadeparavida.com.br/2019/05/06/momento-de-busca/"
        this.text = 'Neste 6º. nível, o ser acredita que encontrou uma coesão interna, fruto do seu esforço de ser íntegro e verdadeiro. Contudo, enquanto não responder às questões existenciais que povoam sua consciência (quem sou eu?), para que existo?, o que faço aqui? para onde estou indo? de onde vim?), não terá encontrado, de fato, a verdadeira coerência...'
        // alert("busca");
      } else if (result >= 25 && result <= 28) {
        this.title = 'Busca coerência interna'
        this.result = 'O Primeiro Despertar'
        this.href='https://blog.universidadeparavida.com.br/2019/05/06/o-primeiro-despertar/'
        this.text = 'A Primeira Luz, o Alvorecer. Na fase anterior pessoa compreendeu que a vida é fundamentalmente espiritual e acumulou suficiente conhecimento a respeito. Começa a ver que o seu sofrimento durante a Noite Escura da Alma é um problema espiritual. Acontece que apesar do conhecimento adquirido, a Noite Escura ainda está muito presente e a pessoa ainda está muito confusa sobre a real natureza da espiritualidade e do mistério que é a vida...'
        // alert("primeiro");
      } else if (result >= 29 && result <= 32) {
        this.title = 'Busca integridade e autenticidade'
        this.result = 'O Segundo Despertar. O Amanhecer, A Realidade'
        this.href='https://blog.universidadeparavida.com.br/2019/05/06/o-segundo-despertar-o-amanhecer-a-realidade/'
        this.text = 'A pessoa continua a ler, estudar e a frequentar cursos; e a quantidade e qualidade do verdadeiro conhecimento espiritual, a Luz, aumenta e as trevas da alma diminuem. Eventualmente, a Luz como volume total da realidade e da convicção do espírito, passa a marca de 50%: agora é mais real para o ser que a vida é espiritual do que ele em sua ignorância e confusão imaginava durante o período das Trevas. Neste ponto, quando a luz é de 51% ou mais, quando o espírito recupera os reais valores, é o segundo Despertar...'
        // alert("segundo");
      } else if (result >= 33 && result <= 36) {
        this.title = 'Momento 9: Busca autorrealização'
        this.result = 'Comprometimento'
        this.href='https://blog.universidadeparavida.com.br/2019/05/06/comprometimento/'
        this.text = 'A Luz da Verdade que a pessoa vem alimentando no seu interior torna-se tão forte que ela não pode mais ignorar o seu brilho e o seu chamado. Ela agora começa a obedecer a orientação de Jesus: “Buscai primeiro o Reino dos Céus”. Anterior a esta fase, não importa quanta atenção a pessoa dava a sua espiritualidade, isto ainda não era sua prioridade. Ela ainda gastava mais Tempo e Energia para as coisas do mundo do que para as espirituais...'
        // alert("comprometimento");
      } else if (result >= 37) {
        this.title = 'Expressa Deus completamente'
        this.result = 'Iluminação'
        this.href='https://blog.universidadeparavida.com.br/2019/05/06/momento-iluminac%CC%A7a%CC%83o/'
        this.text = 'A viagem da escuridão para a iluminação finalmente termina na Totalidade da Luz.  Este estado é descrito em várias filosofias como: O Terceiro Despertar; o retorno, reintegração à Unidade, Consciência Cósmica, Nirvana, Samadhi, o Além, o Reino dos Céus, Auto Realização, Realização em Deus, o Nascimento do Espírito, para citar apenas alguns. É a recuperação da verdadeira identidade: o Infinito Ser Divino...'
        // alert("iluminação");
      }
      // this.$emit('res', true)
      this.flag = false
    }
  }
}
</script>

<style lang="stylus">
i = !important
check(color)
  color: color
.v-progress-linear__bar
  border: 1px solid #7a3acc;
  border-radius: 5px
.purplee
  background: #783699;
  border-radius: 5px
.v-progress-linear__content
  height: 25px;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
.select_options
  // padding: 25px 25px 25px 0;
  margin: 10px 0;
  background-color: white !important;
.select_options
  &:hover
    check(white)
    background-color: #994CC0 !important;
.v-input--selection-controls
  // margin-top: 0;
  padding-top: 0 !important;
.v-input__control
  // height: 0;
.active
  .v-input__control
    display: contents;
    .v-input__slot
      .theme--dark.v-label
        color: white !important
      .theme--dark.v-icon
        color: white !important;
.select_options
  .v-input
    .v-input__control
      display: contents;
      .v-input__slot
        .theme--dark.v-label
          check(black)
.theme--dark.v-icon
  color: black !important;
.v-input--selection-controls {
  padding-left: 25px
}
.v-input--selection-controls.v-input .v-label {
  height: 54px i
  width: 343px
  // padding-left 25px
}
.v-input--selection-controls:not(.v-input--hide-details) .v-input__slot {
  margin-bottom: 0 !important
}
.bounce-transition {
  display: inline-block; /* otherwise scale animation won't work */
}
.bounce-enter {
  animation: bounce-in .5s;
}
.bounce-leave {
  animation: bounce-out .5s;
}
.question
  color: black;
  text-align: left;
  height: auto
  font-size: 1.6rem
  font-family: 'Montserrat', sans-serif

@media (max-width: 560px)
  .question
    color: black;
    text-align: left;
    height: auto
    font-size 1rem
    font-family: 'Montserrat', sans-serif
  .select_options
    // padding: 25px 25px 25px 0;
    margin: 10px 0 i
    background-color: white !important;
  .select_options
    &:hover
      check(white)
      background-color: #994CC0 !important;
  .v-input--selection-controls
    // margin-top: 0;
    padding-top: 0 i
  .v-input__control
    // height: 0;
  .active
    .v-input__control
      display: contents;
      .v-input__slot
        .theme--dark.v-label
          color: white !important
        .theme--dark.v-icon
          color: white !important;
  .select_options
    .v-input
      .v-input__control
        display: contents;
        .v-input__slot
          .theme--dark.v-label
            check(black)
  .theme--dark.v-icon
    color: black i;
  .v-input--selection-controls {
    padding-left: 25px i
  }
  .v-input--selection-controls.v-input .v-label {
    height: 54px i
    width: 343px i
    // padding-left 25px
  }
  .v-input--selection-controls:not(.v-input--hide-details) .v-input__slot {
    margin-bottom: 0 i
  }
  .bounce-transition {
    display: inline-block; /* otherwise scale animation won't work */
  }
  .bounce-enter {
    animation: bounce-in .5s;
  }
  .bounce-leave {
    animation: bounce-out .5s;
  }
@keyframes bounce-in {
  0% {
    transform: scale(0);
  }
  50% {
    transform: scale(1.5);
  }
  100% {
    transform: scale(1);
  }
}
@keyframes bounce-out {
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.5);
  }
  100% {
    transform: scale(0);
  }
}
</style>
