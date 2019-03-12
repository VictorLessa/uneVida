<template>
  <div>
    <v-container class="section_2">
      <v-layout wrap row style="justify-content: center">
        <v-flex>
          <iframe
            id="ytplayer"
            class="playYoutube"
            type="text/html"
            :src="`https://www.youtube.com/embed/${videoID}`"
            frameborder="0"
            allowfullscreen
          />
        </v-flex>
        <v-flex lg9>
          <Hooper :itemsToSlide="1" :itemsToShow="5" :infiniteScroll="true">
            <Slide>
              <div class="list_thumb" @click="activeThumb1" v-bind:class="{ active: isActive1 }">
                <div class="thumb">
                  <img src="/static/thumb2.jpeg" alt="">
                </div>
              </div>
            </Slide>
            <Slide>
              <div @click="activeThumb2" v-bind:class="{ active: isActive2 }">
                <div class="thumb">
                  <img src="/static/thumb1.jpeg" alt="">
                </div>
              </div>
            </Slide>
            <Slide>
              <div @click="activeThumb3" v-bind:class="{ active: isActive3 }">
                <div class="thumb">
                  <img src="/static/thumb2.jpeg" alt="">
                </div>
              </div>
            </Slide>
            <Slide>
              <div @click="activeThumb4" v-bind:class="{ active: isActive4 }">
                <div class="thumb">
                  <img src="/static/thumb2.jpeg" alt="">
                </div>
              </div>
            </Slide>
            <Slide>
              <div @click="activeThumb5" v-bind:class="{ active: isActive5 }">
                <div class="thumb">
                  <img src="/static/thumb2.jpeg" alt="">
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
          <h2>Sub titulo bonito pra uneVida</h2>
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
    } from 'hooper';
// import VuePerfectScrollbar from "vue-perfect-scrollbar";
import 'hooper/dist/hooper.css';
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
      videoID: 'uLHpfDmIiNk'
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
  watch: {
  },
  methods: {
    card_bottom(index) {
      for (let i = 0; i < this.active.length; i++) {
        this.active[i] = false;
      }
      this.active[index] = 1;
    },
    activeThumb1 () {
      this.isActive1 = true
      this.isActive2 = false
      this.isActive3 = false
      this.isActive4 = false
      this.isActive5 = false
      this.videoID = 'cz2jJYWDDaY'
    },
    activeThumb2 () {
      this.isActive1 = false
      this.isActive2 = true
      this.isActive3 = false
      this.isActive4 = false
      this.isActive5 = false
    },
    activeThumb3 () {
      this.isActive1 = false
      this.isActive2 = false
      this.isActive3 = true
      this.isActive4 = false
      this.isActive5 = false
    },
    activeThumb4 () {
      this.isActive1 = false
      this.isActive2 = false
      this.isActive3 = false
      this.isActive4 = true
      this.isActive5 = false
    },
    activeThumb5 () {
      this.isActive1 = true
      this.isActive2 = false
      this.isActive3 = false
      this.isActive4 = false
      this.isActive5 = true
    }
  }
};
</script>
<style scoped lang="stylus">
i = !important;

.section_2
  padding 60px
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
.hooper-next, .hooper-prev
  height 100px
  background-color white i
.hooper-navigation
  .hooper-next
    height 100px i
    background-color white i
.thumb
  width auto
  height 100px
  margin-bottom 5px
  img 
    height 100px
.hooper
  height 100px i
.hooper-slide
  width auto i
  height auto i
  margin 0 2px
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
