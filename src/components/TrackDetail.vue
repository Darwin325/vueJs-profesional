<template>
  <div class="container" v-if="track && track.id">
    <div class="columns">
      <div class="column is-5 is-offset-4">

        <div class="clumn is-3 has-text-centered">
          <figure class="media-left">

            <p class="image">
              <img :src="track.album.images[0].url">
            </p>

            <p class="button-bar">
              <a class="button is-primary is-large" href="">
                <span class="icon" @click="selectTrack">
                  ▶️
                </span>
              </a>
            </p>

          </figure>
        </div>

        <div class="column is-8">
          <div class="panel">

            <div class="panel-heading">
              <h1 class="title">
                {{ trackTitle }}
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

  import { mapState, mapActions, mapGetters } from 'vuex';
  import trackMixin from '@/mixins/track';

  export default {
    name: "TrackDetail",

    mixins: [ trackMixin ],

    computed: {
      ...mapState(['track']),

      ...mapGetters(['trackTitle']),
    },

    created() {
      const id = this.$route.params.id;

      if (!this.track || !this.track.id || this.track.id !== id){
        this.getTrackById({ id })
          .then(() =>{
            console.log('Ok');
          })
      }
    },

    methods: {
      ...mapActions(['getTrackById']),
    }
  }
</script>

<style scoped lang="scss">
  .columns{
    margin: 20px;
  }

  .button-bar{
    margin-top: 20px;
  }
</style>
