<template>
  <div id="app">

    <pm-header></pm-header>

    <section class="section">
      <nav class="nav has-shadow">
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
        <div class="columns">
          <div
            v-for="t in tracks"
            class="column"
            :key="t.id"
          >
            {{ t.name }} - {{ t.artists[0].name }}
          </div>
        </div>
      </div>

    </section>

    <pm-footer></pm-footer>

  </div>
</template>

<script>
  import trackService from './services/track';
  import PmFooter from './components/layuot/Footer';
  import PmHeader from './components/layuot/Header';

  export default {
    name: 'app',

    components: {
      PmFooter,
      PmHeader
    },

    data () {
      return {
        searchQuery: '',
        tracks: [],
      }
    },

    computed: {
      searchMessage (){
        return `Encontrados: ${this.tracks.length}`;
      }
    },

    methods: {
      search (){
        if (! this.searchQuery){
          return;
        }

        trackService.search(this.searchQuery)
          .then(res =>{
            this.tracks = res.tracks.items
          });
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

</style>
