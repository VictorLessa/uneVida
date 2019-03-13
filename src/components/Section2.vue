<template>
  <div>
    <v-container class="section_2" id="section2">
      <v-layout wrap row style="justify-content: center">
        <v-flex>
          <iframe
            id="ytplayer"
            class="playYoutube"
            type="text/html"
            :src="`https://www.youtube.com/embed/${videoID}?version=3&autoplay=1&origin=http://localhost:8080`"
            frameborder="0"
            allowfullscreen
          />
        </v-flex>
        <v-flex lg9>
          <Hooper :itemsToShow="3">
            <Slide>
              <div class="list_thumb" @click="activeThumb1" v-bind:class="{ active: isActive1 }">
                <div class="thumb">
                  <div class="icon_hover" v-bind:class="{ active: isActive1 }">
                    <v-icon @click="activeThumb1" x-large color="white">play_arrow</v-icon>
                  </div>
                  <img src="/static/thumb2.jpeg" alt>
                </div>
              </div>
            </Slide>
            <Slide>
              <div class="list_thumb" @click="activeThumb2" v-bind:class="{ active: isActive2 }">
                <div class="thumb">
                  <div class="icon_hover" v-bind:class="{ active: isActive2 }">
                    <v-icon @click="activeThumb2" x-large color="white">play_arrow</v-icon>
                  </div>
                  <img src="/static/thumb2.jpeg" alt>
                </div>
              </div>
            </Slide>
            <Slide>
              <div class="list_thumb" @click="activeThumb3" v-bind:class="{ active: isActive3 }">
                <div class="thumb">
                  <div class="icon_hover" v-bind:class="{ active: isActive3 }">
                    <v-icon  @click="activeThumb3" x-large color="white">play_arrow</v-icon>
                  </div>
                  <img src="/static/thumb2.jpeg" alt>
                </div>
              </div>
            </Slide>
            <Slide>
              <div class="list_thumb" @click="activeThumb4" v-bind:class="{ active: isActive4 }">
                <div class="thumb">
                  <div class="icon_hover" v-bind:class="{ active: isActive4 }">
                    <v-icon @click="activeThumb4" x-large color="white">play_arrow</v-icon>
                  </div>
                  <img src="/static/thumb2.jpeg" alt>
                </div>
              </div>
            </Slide>
            <Slide>
              <div class="list_thumb" @click="activeThumb5" v-bind:class="{ active: isActive5 }">
                <div class="thumb">
                  <div class="icon_hover" v-bind:class="{ active: isActive5 }">
                    <v-icon @click="activeThumb5" x-large color="white">play_arrow</v-icon>
                  </div>
                  <img src="/static/thumb2.jpeg" alt>
                </div>
              </div>
            </Slide>
            <hooper-navigation slot="hooper-addons"></hooper-navigation>
          </Hooper>
        </v-flex>
      </v-layout>
    </v-container>
    <v-container>
      <v-layout>
        <v-flex>
          <h2>Os 10 momentos da jornada Humana</h2>
          <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).</p>
        </v-flex>
      </v-layout>
    </v-container>
  </div>
</template>

<script>
import {
  Hooper,
  Slide,
  Progress as HooperProgress,
  Pagination as HooperPagination,
  Navigation as HooperNavigation
} from "hooper";
// import VuePerfectScrollbar from "vue-perfect-scrollbar";
import "hooper/dist/hooper.css";
// import Slider from "./Slider";
export default {
  name: "Section2",
  data() {
    return {
      hooperSettings: {
        itemsToShow: 2,
        centerMode: true
      },
      active: [false, false, false, false],
      isActive1: false,
      isActive2: false,
      isActive3: false,
      isActive4: false,
      isActive5: false,
      videoID: "2dVyPvdMtwg"
    };
  },
  components: {
    Hooper,
    Slide,
    HooperProgress,
    HooperPagination,
    HooperNavigation
    // Slider
  },
  watch: {},
  methods: {
    card_bottom(index) {
      for (let i = 0; i < this.active.length; i++) {
        this.active[i] = false;
      }
      this.active[index] = 1;
    },
    activeThumb1() {
      this.isActive1 = true;
      this.isActive2 = false;
      this.isActive3 = false;
      this.isActive4 = false;
      this.isActive5 = false;
      this.videoID = '2dVyPvdMtwg'
    },
    activeThumb2() {
      this.isActive1 = false;
      this.isActive2 = true;
      this.isActive3 = false;
      this.isActive4 = false;
      this.isActive5 = false;
      this.videoID = '2dVyPvdMtwg'
    },
    activeThumb3() {
      this.isActive1 = false;
      this.isActive2 = false;
      this.isActive3 = true;
      this.isActive4 = false;
      this.isActive5 = false;
      this.videoID = 'mu3DMgjN2tE'
    },
    activeThumb4() {
      this.isActive1 = false;
      this.isActive2 = false;
      this.isActive3 = false;
      this.isActive4 = true;
      this.isActive5 = false;
      this.videoID = '2dVyPvdMtwg'
    },
    activeThumb5() {
      this.isActive1 = false;
      this.isActive2 = false;
      this.isActive3 = false;
      this.isActive4 = false;
      this.isActive5 = true;
      this.videoID = '2dVyPvdMtwg'
    }
  }
};
</script>
<style scoped lang="stylus">
i = !important;
p
  width 720px
.section_2 {
  padding: 60px;
}
.active {
  opacity 1
  background-color  rgba(54, 41, 46, 0.3)
  border-bottom solid 3px red
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

.hooper-navigation {
  .hooper-next {
    height: 80px i;
    background-color: white i;
  }
}

.thumb
  width: auto;
  height: 80px;
  margin-bottom: 5px;
  display flex
  justify-content center
  &:hover
    z-index 105
    background-color  rgba(54, 41, 46, 0.3)
  img
    height: 80px;
    z-index -1;

.hooper {
  height: 80px i;
  width: 720px;
  margin: 0 auto;
}

.hooper-slide {
  width: auto i;
  height: auto i;
  margin: 0 2px;
}

@media (max-width: 560px)
  .section_2
    padding 0
  .playYoutube
    width: 100%;
    height: 185px;

  .hooper
    height: 80px i;
    width: 100%;
    margin: 0 auto;

  p
    width 100%
  .scroll-area
    position: relative;
    margin: auto;
    width: auto;
    height: 405px;
    background: black;
    border-radius: 5px;


@media (max-width: 768px)
  .playYoutube
    width: 100%;
  .hooper
    height: 80px i;
    width: 100%;
    margin: 0 auto;
  p
    width 100%
</style>
