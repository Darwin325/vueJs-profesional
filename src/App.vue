<template>
  <div id="app">

    <pm-header></pm-header>

    <pm-notification v-show="showNotification">
      <p slot="body">
        No se enconraron resultados
      </p>
    </pm-notification>

    <pm-loader v-show="isLoading"></pm-loader>

    <section v-show="!isLoading" class="section">
      <nav class="nav">
        <div class="container">
          <input
            class="input is-large"
            type="text"
            placeholder="Buscar canciones"
            v-model="searchQuery"
          />
          <a class="button is-info is-large" @click="search">Buscar</a>
          <a class="button is-danger is-large">&times;</a>
        </div>
      </nav>

      <div class="container">
        <p>
          <small>{{ searchMessage }}</small>
        </p>
      </div>

      <div class="container results">
        <div class="columns is-multiline">
          <div
            v-for="t in tracks"
            class="column is-one-quarter"
            :key="t.id"
          >
            <pm-track
              :class="{ 'is-active' : t.id == selectedTrack }"
              :track="t"
              @select="setSelectedTrack"
            >

            </pm-track>
          </div>
        </div>
      </div>

    </section>

    <pm-footer></pm-footer>

  </div>
</template>

<script>
  import trackService from '@/services/track';
  import PmFooter from '@/components/layuot/Footer';
  import PmHeader from '@/components/layuot/Header';

  import PmTrack from '@/components/Track';

  import PmLoader from '@/components/shared/loader';
  import PmNotification from '@/components/shared/notification';

  export default {
    name: 'app',

    components: {
      PmFooter,
      PmHeader,
      PmTrack,
      PmLoader,
      PmNotification,
    },

    data () {
      return {
        searchQuery: '',
        tracks: [],

        isLoading: false,

        selectedTrack: '',
        showNotification: false,
      }
    },

    computed: {
      searchMessage (){
        return `Encontrados: ${this.tracks.length}`;
      }
    },

    watch: {
      showNotification(){
        if (this.showNotification){
          setTimeout(()=>{
            this.showNotification = false;
          }, 3000)
        }
      }
    },

    methods: {
      search (){
        if (! this.searchQuery){
          return;
        }
        this.isLoading = true;

        trackService.search(this.searchQuery)
          .then(res =>{
            this.showNotification = res.tracks.total === 0;
            this.tracks = res.tracks.items;
            this.isLoading = false;
          });
      },

      setSelectedTrack(id){
        this.selectedTrack = id;
      }

    },

    created() {

    }
  }
</script>

<style lang="scss">
  @import "./scss/main";

  .color{
    color: azure;
  }

  .results{
    margin-top: 50px;
  }

  .is-active{
    border: 2px #23d160 solid;
  }

</style>
