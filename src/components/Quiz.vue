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
<getEmail :result="result"></getEmail>
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
      if (result <= 10) {
        this.result = 'Sobrevivência'
        // alert("Sobrevivente");
      } else if (result >= 11 && result <= 14) {
        this.result = 'Segurança'
        // alert("Segurança");
      } else if (result >= 15 && result <= 18) {
        this.result = 'Sensação, Prazer'
        // alert("Sensação");
      } else if (result >= 19 && result <= 22) {
        this.result = 'Domínio ou Poder Egóico'
        // alert("Dominio");
      } else if (result >= 23 && result <= 26) {
        this.result = 'A Noite escura da Alma'
        // alert("Noite escura");
      } else if (result >= 27 && result <= 30) {
        this.result = 'A Busca'
        // alert("busca");
      } else if (result >= 31 && result <= 33) {
        this.result = 'O Primeiro Despertar'
        // alert("primeiro");
      } else if (result >= 34 && result <= 36) {
        this.result = 'O Segundo Despertar. O Amanhecer, A Realidade'
        // alert("segundo");
      } else if (result >= 37 && result <= 39) {
        this.result = 'Comprometimento'
        // alert("comprometimento");
      } else if (result >= 40) {
        this.result = 'Iluminação'
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
