<template>
  <div v-if="track && track.album" class="content">

    <p class="is-128x128">
      <img :src="track.album.images[0].url" alt="">
    </p>

    <p>
      <b>{{ track.name }}</b>
      <small>
        [{{ track.duration_ms | ms-to-mm }}]
      </small>
    </p>

    <p>
      <audio :src="track.preview_url" controls>

      </audio>
    </p>
  </div>
</template>

<script>
  export default {
    name: "Player",

    data (){
      return{
        track: {},
      }
    },

    created() {
      this.$bus.$on('set-track', (track) =>{
        this.track = track;
      });
    },
  }
</script>

<style scoped lang="scss">
  img{
    width: 124px;
    border-radius: 50%;
  }
</style>
