<template>
  <div>
    <v-container>
      <v-layout wrap row>
        <v-flex>
          <iframe
            id="ytplayer"
            class="playYoutube"
            type="text/html"
            src="https://www.youtube.com/embed/?autoplay=1&list=PLB_vaUBxT31Wx_drOfN24kGpWEYk-tvMw&listType=playlist&playsinline=1"
            frameborder="0"
            allowfullscreen
          />
        </v-flex>
        <!-- <v-flex lg4>
          <v-layout row wrap>
            <v-flex lg12 class="grid">
              <VuePerfectScrollbar class="scroll-area" v-once :settings="settings">
                <v-card @click="card_bottom(index)" v-for="(item, index) in 4" :key="item" class="card" v-bind:class="{ active: active[index]}">
                  <v-container grid-list-md text-xs-center>
                    <v-layout>
                      <v-flex lg4><img src="" alt=""></v-flex>
                      <v-flex lg8 class="description">
                        <h5>teste</h5>
                        <span>teste2</span>
                      </v-flex>
                    </v-layout>
                  </v-container>
                </v-card>
              </VuePerfectScrollbar>
            </v-flex>
          </v-layout>
        </v-flex>-->
      </v-layout>
    </v-container>
    <v-container>
      <h2>Sub titulo bonito pra uneVida</h2>
      <p>paragrafo bonito para unevida</p>
    </v-container>
  </div>
</template>

<script>
import VuePerfectScrollbar from "vue-perfect-scrollbar";
// import Slider from "./Slider";
export default {
  name: "Section2",
  data() {
    return {
      settings: {
        maxScrollbarLength: 60
      },
      active: [false, false, false, false]
    };
  },
  components: {
    VuePerfectScrollbar
    // Slider
  },
  watch: {
    active(val) {
      console.log("watch");
      this.active = val;
    }
  },
  methods: {
    card_bottom(index) {
      for (let i = 0; i < this.active.length; i++) {
        this.active[i] = false;
      }
      this.active[index] = 1;
    }
  }
};
</script>
<style scoped lang="stylus">
i = !important;

.active {
  background: red i;
}

.scroll-area {
  position: relative;
  margin: auto;
  width: 400px;
  height: 405px;
  background: black;
  border-radius: 5px;
}

.playYoutube {
  width: 720px;
  height: 405px;
}

.description {
  text-align: left;
}

.card {
  width: 94%;
  margin: 5px;
  background: black;
  color: white;
  border-bottom: 1px solid #f4f4f4;

  &:hover {
    background: #303030;
  }
}

@media (max-width: 560px) {
  .playYoutube {
    width: 100%;
    height: 185px;
  }

  .scroll-area {
    position: relative;
    margin: auto;
    width: auto;
    height: 405px;
    background: black;
    border-radius: 5px;
  }
}

@media (max-width: 768px) {
  .playYoutube {
    width: 100%;
  }
}
</style>
