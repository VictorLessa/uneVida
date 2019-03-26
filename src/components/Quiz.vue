<template>
  <v-container>
    <v-layout align-start justify-start column>
      <h3>Quiz: Qual o meu nível de consciência?</h3>
      <v-layout>
        <div
          class="fb-share-button"
          data-href="https://www.youtube.com/"
          data-layout="button"
          data-size="large"
          style="margin-right: 10px"
          data-mobile-iframe="true"
        >
          <a
            target="_blank"
            href="https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Fdevelopers.facebook.com%2Fdocs%2Fplugins%2F&amp;src=sdkpreparse"
            class="fb-xfbml-parse-ignore"
          >Compartilhar</a>
        </div>
        <a class="twitter-share-button"
          href="https://twitter.com/intent/tweet?text=Hello%20world"
          data-size="large">
        Tweet</a>
      </v-layout>
      <v-progress-linear
        color="purplee"
        height="25"
        :value="count * 10"
      > {{ count }} de 10 </v-progress-linear>
    </v-layout>
    <v-layout>
      <v-card
        dark
        color="#F9FAFC"
        style="width: 100%; padding: 20px;"
        >
          <v-card-title
            class="headline font-weight-bold"
          >
            <span style="color: black">{{ questions[count - 1] }}</span>
          </v-card-title>
            <div v-if="count === 1" transition="bounce">
              <v-card max-width="400px" class="select_options" v-on:mouseover="isActive1 = true" v-on:mouseleave="isActive1 = false">
                <v-checkbox v-bind:class="{active: isActive1 }" color="green" label="Discordo totalmente" v-model="check1" @change="select(values[ count -1 ].value1)"></v-checkbox>
              </v-card>
              <v-card max-width="400px" class="select_options" v-on:mouseover="isActive2 = true" v-on:mouseleave="isActive2 = false">
                <v-checkbox v-bind:class="{active: isActive2 }" color="green" label="Discordo totalmente" v-model="check2" @change="select(values[ count -1 ].value2)"></v-checkbox>
              </v-card>
              <v-card max-width="400px" class="select_options" v-on:mouseover="isActive3 = true" v-on:mouseleave="isActive3 = false">
                <v-checkbox v-bind:class="{active: isActive3 }" color="green" label="Discordo totalmente" v-model="check3" @change="select(values[ count -1 ].value3)"></v-checkbox>
              </v-card>
              <v-card max-width="400px" class="select_options" v-on:mouseover="isActive4 = true" v-on:mouseleave="isActive4 = false" >
                <v-checkbox v-bind:class="{active: isActive4 }" color="green" label="Discordo totalmente" v-model="check4" @change="select(values[ count -1 ].value4)"></v-checkbox>
              </v-card>
              <v-card max-width="400px" class="select_options" v-on:mouseover="isActive5 = true" v-on:mouseleave="isActive5 = false">
                <v-checkbox v-bind:class="{active: isActive5 }" color="green" label="Discordo totalmente" v-model="check5" @change="select(values[ count -1 ].value5)"></v-checkbox>
              </v-card>
            </div>
            <div v-if="count === 2" transition="bounce">
              <v-card max-width="400px" class="select_options" v-on:mouseover="isActive1 = true" v-on:mouseleave="isActive1 = false">
                <v-checkbox v-bind:class="{active: isActive1 }" color="green" label="Discordo totalmente" v-model="check1" @change="select(values[ count -1 ].value1)"></v-checkbox>
              </v-card>
              <v-card max-width="400px" class="select_options" v-on:mouseover="isActive2 = true" v-on:mouseleave="isActive2 = false">
                <v-checkbox v-bind:class="{active: isActive2 }" color="green" label="Discordo totalmente" v-model="check2" @change="select(values[ count -1 ].value2)"></v-checkbox>
              </v-card>
              <v-card max-width="400px" class="select_options" v-on:mouseover="isActive3 = true" v-on:mouseleave="isActive3 = false">
                <v-checkbox v-bind:class="{active: isActive3 }" color="green" label="Discordo totalmente" v-model="check3" @change="select(values[ count -1 ].value3)"></v-checkbox>
              </v-card>
              <v-card max-width="400px" class="select_options" v-on:mouseover="isActive4 = true" v-on:mouseleave="isActive4 = false" >
                <v-checkbox v-bind:class="{active: isActive4 }" color="green" label="Discordo totalmente" v-model="check4" @change="select(values[ count -1 ].value4)"></v-checkbox>
              </v-card>
              <v-card max-width="400px" class="select_options" v-on:mouseover="isActive5 = true" v-on:mouseleave="isActive5 = false">
                <v-checkbox v-bind:class="{active: isActive5 }" color="green" label="Discordo totalmente" v-model="check5" @change="select(values[ count -1 ].value5)"></v-checkbox>
              </v-card>
            </div>
            <div v-if="count === 3" transition="bounce">
              <v-card max-width="400px" class="select_options" v-on:mouseover="isActive1 = true" v-on:mouseleave="isActive1 = false">
                <v-checkbox v-bind:class="{active: isActive1 }" color="green" label="Discordo totalmente" v-model="check1" @change="select(values[ count -1 ].value1)"></v-checkbox>
              </v-card>
              <v-card max-width="400px" class="select_options" v-on:mouseover="isActive2 = true" v-on:mouseleave="isActive2 = false">
                <v-checkbox v-bind:class="{active: isActive2 }" color="green" label="Discordo totalmente" v-model="check2" @change="select(values[ count -1 ].value2)"></v-checkbox>
              </v-card>
              <v-card max-width="400px" class="select_options" v-on:mouseover="isActive3 = true" v-on:mouseleave="isActive3 = false">
                <v-checkbox v-bind:class="{active: isActive3 }" color="green" label="Discordo totalmente" v-model="check3" @change="select(values[ count -1 ].value3)"></v-checkbox>
              </v-card>
              <v-card max-width="400px" class="select_options" v-on:mouseover="isActive4 = true" v-on:mouseleave="isActive4 = false" >
                <v-checkbox v-bind:class="{active: isActive4 }" color="green" label="Discordo totalmente" v-model="check4" @change="select(values[ count -1 ].value4)"></v-checkbox>
              </v-card>
              <v-card max-width="400px" class="select_options" v-on:mouseover="isActive5 = true" v-on:mouseleave="isActive5 = false">
                <v-checkbox v-bind:class="{active: isActive5 }" color="green" label="Discordo totalmente" v-model="check5" @change="select(values[ count -1 ].value5)"></v-checkbox>
              </v-card>
            </div>
            <div v-if="count === 4" transition="bounce">
              <v-card max-width="400px" class="select_options" v-on:mouseover="isActive1 = true" v-on:mouseleave="isActive1 = false">
                <v-checkbox v-bind:class="{active: isActive1 }" color="green" label="Discordo totalmente" v-model="check1" @change="select(values[ count -1 ].value1)"></v-checkbox>
              </v-card>
              <v-card max-width="400px" class="select_options" v-on:mouseover="isActive2 = true" v-on:mouseleave="isActive2 = false">
                <v-checkbox v-bind:class="{active: isActive2 }" color="green" label="Discordo totalmente" v-model="check2" @change="select(values[ count -1 ].value2)"></v-checkbox>
              </v-card>
              <v-card max-width="400px" class="select_options" v-on:mouseover="isActive3 = true" v-on:mouseleave="isActive3 = false">
                <v-checkbox v-bind:class="{active: isActive3 }" color="green" label="Discordo totalmente" v-model="check3" @change="select(values[ count -1 ].value3)"></v-checkbox>
              </v-card>
              <v-card max-width="400px" class="select_options" v-on:mouseover="isActive4 = true" v-on:mouseleave="isActive4 = false" >
                <v-checkbox v-bind:class="{active: isActive4 }" color="green" label="Discordo totalmente" v-model="check4" @change="select(values[ count -1 ].value4)"></v-checkbox>
              </v-card>
              <v-card max-width="400px" class="select_options" v-on:mouseover="isActive5 = true" v-on:mouseleave="isActive5 = false">
                <v-checkbox v-bind:class="{active: isActive5 }" color="green" label="Discordo totalmente" v-model="check5" @change="select(values[ count -1 ].value5)"></v-checkbox>
              </v-card>
            </div>
            <div v-if="count === 5" transition="bounce">
              <v-card max-width="400px" class="select_options" v-on:mouseover="isActive1 = true" v-on:mouseleave="isActive1 = false">
                <v-checkbox v-bind:class="{active: isActive1 }" color="green" label="Discordo totalmente" v-model="check1" @change="select(values[ count -1 ].value1)"></v-checkbox>
              </v-card>
              <v-card max-width="400px" class="select_options" v-on:mouseover="isActive2 = true" v-on:mouseleave="isActive2 = false">
                <v-checkbox v-bind:class="{active: isActive2 }" color="green" label="Discordo totalmente" v-model="check2" @change="select(values[ count -1 ].value2)"></v-checkbox>
              </v-card>
              <v-card max-width="400px" class="select_options" v-on:mouseover="isActive3 = true" v-on:mouseleave="isActive3 = false">
                <v-checkbox v-bind:class="{active: isActive3 }" color="green" label="Discordo totalmente" v-model="check3" @change="select(values[ count -1 ].value3)"></v-checkbox>
              </v-card>
              <v-card max-width="400px" class="select_options" v-on:mouseover="isActive4 = true" v-on:mouseleave="isActive4 = false" >
                <v-checkbox v-bind:class="{active: isActive4 }" color="green" label="Discordo totalmente" v-model="check4" @change="select(values[ count -1 ].value4)"></v-checkbox>
              </v-card>
              <v-card max-width="400px" class="select_options" v-on:mouseover="isActive5 = true" v-on:mouseleave="isActive5 = false">
                <v-checkbox v-bind:class="{active: isActive5 }" color="green" label="Discordo totalmente" v-model="check5" @change="select(values[ count -1 ].value5)"></v-checkbox>
              </v-card>
            </div>
            <div v-if="count === 6" transition="bounce">
              <v-card max-width="400px" class="select_options" v-on:mouseover="isActive1 = true" v-on:mouseleave="isActive1 = false">
                <v-checkbox v-bind:class="{active: isActive1 }" color="green" label="Discordo totalmente" v-model="check1" @change="select(values[ count -1 ].value1)"></v-checkbox>
              </v-card>
              <v-card max-width="400px" class="select_options" v-on:mouseover="isActive2 = true" v-on:mouseleave="isActive2 = false">
                <v-checkbox v-bind:class="{active: isActive2 }" color="green" label="Discordo totalmente" v-model="check2" @change="select(values[ count -1 ].value2)"></v-checkbox>
              </v-card>
              <v-card max-width="400px" class="select_options" v-on:mouseover="isActive3 = true" v-on:mouseleave="isActive3 = false">
                <v-checkbox v-bind:class="{active: isActive3 }" color="green" label="Discordo totalmente" v-model="check3" @change="select(values[ count -1 ].value3)"></v-checkbox>
              </v-card>
              <v-card max-width="400px" class="select_options" v-on:mouseover="isActive4 = true" v-on:mouseleave="isActive4 = false" >
                <v-checkbox v-bind:class="{active: isActive4 }" color="green" label="Discordo totalmente" v-model="check4" @change="select(values[ count -1 ].value4)"></v-checkbox>
              </v-card>
              <v-card max-width="400px" class="select_options" v-on:mouseover="isActive5 = true" v-on:mouseleave="isActive5 = false">
                <v-checkbox v-bind:class="{active: isActive5 }" color="green" label="Discordo totalmente" v-model="check5" @change="select(values[ count -1 ].value5)"></v-checkbox>
              </v-card>
            </div>
            <div v-if="count === 7" transition="bounce">
              <v-card max-width="400px" class="select_options" v-on:mouseover="isActive1 = true" v-on:mouseleave="isActive1 = false">
                <v-checkbox v-bind:class="{active: isActive1 }" color="green" label="Discordo totalmente" v-model="check1" @change="select(values[ count -1 ].value1)"></v-checkbox>
              </v-card>
              <v-card max-width="400px" class="select_options" v-on:mouseover="isActive2 = true" v-on:mouseleave="isActive2 = false">
                <v-checkbox v-bind:class="{active: isActive2 }" color="green" label="Discordo totalmente" v-model="check2" @change="select(values[ count -1 ].value2)"></v-checkbox>
              </v-card>
              <v-card max-width="400px" class="select_options" v-on:mouseover="isActive3 = true" v-on:mouseleave="isActive3 = false">
                <v-checkbox v-bind:class="{active: isActive3 }" color="green" label="Discordo totalmente" v-model="check3" @change="select(values[ count -1 ].value3)"></v-checkbox>
              </v-card>
              <v-card max-width="400px" class="select_options" v-on:mouseover="isActive4 = true" v-on:mouseleave="isActive4 = false" >
                <v-checkbox v-bind:class="{active: isActive4 }" color="green" label="Discordo totalmente" v-model="check4" @change="select(values[ count -1 ].value4)"></v-checkbox>
              </v-card>
              <v-card max-width="400px" class="select_options" v-on:mouseover="isActive5 = true" v-on:mouseleave="isActive5 = false">
                <v-checkbox v-bind:class="{active: isActive5 }" color="green" label="Discordo totalmente" v-model="check5" @change="select(values[ count -1 ].value5)"></v-checkbox>
              </v-card>
            </div>
            <div v-if="count === 8" transition="bounce">
              <v-card max-width="400px" class="select_options" v-on:mouseover="isActive1 = true" v-on:mouseleave="isActive1 = false">
                <v-checkbox v-bind:class="{active: isActive1 }" color="green" label="Discordo totalmente" v-model="check1" @change="select(values[ count -1 ].value1)"></v-checkbox>
              </v-card>
              <v-card max-width="400px" class="select_options" v-on:mouseover="isActive2 = true" v-on:mouseleave="isActive2 = false">
                <v-checkbox v-bind:class="{active: isActive2 }" color="green" label="Discordo totalmente" v-model="check2" @change="select(values[ count -1 ].value2)"></v-checkbox>
              </v-card>
              <v-card max-width="400px" class="select_options" v-on:mouseover="isActive3 = true" v-on:mouseleave="isActive3 = false">
                <v-checkbox v-bind:class="{active: isActive3 }" color="green" label="Discordo totalmente" v-model="check3" @change="select(values[ count -1 ].value3)"></v-checkbox>
              </v-card>
              <v-card max-width="400px" class="select_options" v-on:mouseover="isActive4 = true" v-on:mouseleave="isActive4 = false" >
                <v-checkbox v-bind:class="{active: isActive4 }" color="green" label="Discordo totalmente" v-model="check4" @change="select(values[ count -1 ].value4)"></v-checkbox>
              </v-card>
              <v-card max-width="400px" class="select_options" v-on:mouseover="isActive5 = true" v-on:mouseleave="isActive5 = false">
                <v-checkbox v-bind:class="{active: isActive5 }" color="green" label="Discordo totalmente" v-model="check5" @change="select(values[ count -1 ].value5)"></v-checkbox>
              </v-card>
            </div>
            <div v-if="count === 9" transition="bounce">
              <v-card max-width="400px" class="select_options" v-on:mouseover="isActive1 = true" v-on:mouseleave="isActive1 = false">
                <v-checkbox v-bind:class="{active: isActive1 }" color="green" label="Discordo totalmente" v-model="check1" @change="select(values[ count -1 ].value1)"></v-checkbox>
              </v-card>
              <v-card max-width="400px" class="select_options" v-on:mouseover="isActive2 = true" v-on:mouseleave="isActive2 = false">
                <v-checkbox v-bind:class="{active: isActive2 }" color="green" label="Discordo totalmente" v-model="check2" @change="select(values[ count -1 ].value2)"></v-checkbox>
              </v-card>
              <v-card max-width="400px" class="select_options" v-on:mouseover="isActive3 = true" v-on:mouseleave="isActive3 = false">
                <v-checkbox v-bind:class="{active: isActive3 }" color="green" label="Discordo totalmente" v-model="check3" @change="select(values[ count -1 ].value3)"></v-checkbox>
              </v-card>
              <v-card max-width="400px" class="select_options" v-on:mouseover="isActive4 = true" v-on:mouseleave="isActive4 = false" >
                <v-checkbox v-bind:class="{active: isActive4 }" color="green" label="Discordo totalmente" v-model="check4" @change="select(values[ count -1 ].value4)"></v-checkbox>
              </v-card>
              <v-card max-width="400px" class="select_options" v-on:mouseover="isActive5 = true" v-on:mouseleave="isActive5 = false">
                <v-checkbox v-bind:class="{active: isActive5 }" color="green" label="Discordo totalmente" v-model="check5" @change="select(values[ count -1 ].value5)"></v-checkbox>
              </v-card>
            </div>
            <div v-if="count === 10" transition="bounce">
              <v-card max-width="400px" class="select_options" v-on:mouseover="isActive1 = true" v-on:mouseleave="isActive1 = false">
                <v-checkbox v-bind:class="{active: isActive1 }" color="green" label="Discordo totalmente" v-model="check1" @change="select(values[ count -1 ].value1)"></v-checkbox>
              </v-card>
              <v-card max-width="400px" class="select_options" v-on:mouseover="isActive2 = true" v-on:mouseleave="isActive2 = false">
                <v-checkbox v-bind:class="{active: isActive2 }" color="green" label="Discordo totalmente" v-model="check2" @change="select(values[ count -1 ].value2)"></v-checkbox>
              </v-card>
              <v-card max-width="400px" class="select_options" v-on:mouseover="isActive3 = true" v-on:mouseleave="isActive3 = false">
                <v-checkbox v-bind:class="{active: isActive3 }" color="green" label="Discordo totalmente" v-model="check3" @change="select(values[ count -1 ].value3)"></v-checkbox>
              </v-card>
              <v-card max-width="400px" class="select_options" v-on:mouseover="isActive4 = true" v-on:mouseleave="isActive4 = false" >
                <v-checkbox v-bind:class="{active: isActive4 }" color="green" label="Discordo totalmente" v-model="check4" @change="select(values[ count -1 ].value4)"></v-checkbox>
              </v-card>
              <v-card max-width="400px" class="select_options" v-on:mouseover="isActive5 = true" v-on:mouseleave="isActive5 = false">
                <v-checkbox v-bind:class="{active: isActive5 }" color="green" label="Discordo totalmente" v-model="check5" @change="select(values[ count -1 ].value5)"></v-checkbox>
              </v-card>
            </div>
      </v-card>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  name: 'Quizz',
  data () {
    return {
      count: 1,
      selected: [],
      questions: [
        '1. Você sente que está em uma luta constante para satisfazer suas necessidades básicas?',
        '2. Você sente que está em uma luta constante para satisfazer suas necessidades básicas?',
        '3. Você sente que está em uma luta constante para satisfazer suas necessidades básicas?',
        '4. Você sente que está em uma luta constante para satisfazer suas necessidades básicas?',
        '5. Você sente que está em uma luta constante para satisfazer suas necessidades básicas?',
        '6. Você sente que está em uma luta constante para satisfazer suas necessidades básicas?',
        '7. Você sente que está em uma luta constante para satisfazer suas necessidades básicas?',
        '8. Você sente que está em uma luta constante para satisfazer suas necessidades básicas?',
        '9. Você sente que está em uma luta constante para satisfazer suas necessidades básicas?',
        '10. Você sente que está em uma luta constante para satisfazer suas necessidades básicas?'
      ],
      values: [
        {value1: 4, value2: 3, value3: 0, value4: 2, value5: 1},
        {value1: 4, value2: 3, value3: 0, value4: 2, value5: 1},
        {value1: 4, value2: 3, value3: 0, value4: 2, value5: 1},
        {value1: 4, value2: 3, value3: 0, value4: 2, value5: 1},
        {value1: 4, value2: 3, value3: 0, value4: 2, value5: 1},
        {value1: 4, value2: 3, value3: 0, value4: 2, value5: 1},
        {value1: 4, value2: 3, value3: 0, value4: 2, value5: 1},
        {value1: 4, value2: 3, value3: 0, value4: 2, value5: 1},
        {value1: 4, value2: 3, value3: 0, value4: 2, value5: 1},
        {value1: 4, value2: 3, value3: 0, value4: 2, value5: 1}
      ],
      isActive1: false,
      isActive2: false,
      isActive3: false,
      isActive4: false,
      isActive5: false,
      check: false ,
      check1: false,
      check2: false,
      check3: false,
      check4: false,
      check5: false,

      
    }
  },
  watch: {
  },
  methods: {
    select (value) {
      this.selected.push(value)
      setTimeout(
        () => {
          this.count++
          this.check1 = false
          this.check2 = false
          this.check3 = false
          this.check4 = false
          this.check5 = false
      }, 500)
      console.log('vdf')
    }
  }
}
</script>

<style lang="stylus">
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
  padding-top: 0;
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
  color: black;
.v-input--selection-controls {
  padding-left: 25px
}
.v-input--selection-controls.v-input .v-label {
  height: 54px
  width: 343px
  // padding-left 25px
}
.v-input--selection-controls:not(.v-input--hide-details) .v-input__slot {
  margin-bottom: 0
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
