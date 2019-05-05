<template>
  <div class="container">
    <div class="columns">
      <div class="column is-5 is-offset-4">

        <div class="clumn is-3 has-text-centered">
          <figure class="media-left">

            <p class="image">
              <img :src="track.album.images[0].url" alt="">
            </p>

            <p>
              <a class="button is-primary is-large" href="">
                <span class="icon" @click="selectTrack">

                </span>
              </a>
            </p>

          </figure>
        </div>

        <div class="column is-8">
          <div class="panel">

            <div class="panel-heading">
              <h1 class="title">
                {{ track.name }}
              </h1>
            </div>

            <div class="panel-block">
              <article class="media">

                <div class="media-content">
                  <div class="content">
                    <ul>
                      <!--TODO Realizar el listado de loas propiedades la canción-->
                    </ul>
                  </div>
                </div>

                <nav class="level">
                  <div class="level-left">
                    <a href="#" class="level-item">

                    </a>
                  </div>
                </nav>

              </article>
            </div>

          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

  import trackService from '@/services/track';
  import trackMixin from '@/mixins/track';

  export default {
    name: "TrackDetail",

    mixins: [ trackMixin ],

    data(){
      return {
        track: {}
      }
    },

    created() {
      const id = this.$route.params.id;
      trackService.getById(id)
        .then(res => {
          this.track = res;
        })
    }
  }
</script>

<style scoped lang="scss">
  .columns{
    margin: 20px;
  }
</style>
