<template lang="pug">
  <div>
    <v-container>
      <iframe id="ytplayer" class="playYoutube" type="text/html" src="https://www.youtube.com/embed/?autoplay=1&list=PLB_vaUBxT31Wx_drOfN24kGpWEYk-tvMw&listType=playlist&playsinline=1" frameborder="0" allowfullscreen/>
    </v-container>
    <v-container>
      <h2>Sub titulo bonito pra uneVida</h2>
      <p>paragrafo bonito para unevida</p>
    </v-container>
  </div>
</template>

<script>
import Slider from "./Slider";
export default {
  name: "Section2",
  data() {
    return {};
  },
  components: {
    Slider
  }
  // methods: {
  //   enlarge(event) {
  //     event.currentTarget.classList.add("large");
  //   }
  // }
};
</script>
<style scoped lang="stylus">
.playYoutube {
  width: 720px;
  height: 405px;
}
</style>
