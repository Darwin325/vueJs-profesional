<template>
  <div id="app">

    <pm-header></pm-header>

    <router-view></router-view>

    <pm-footer></pm-footer>

  </div>
</template>

<script>
  import PmFooter from '@/components/layuot/Footer';
  import PmHeader from '@/components/layuot/Header';


  export default {
    name: 'app',

    components: {
      PmFooter,
      PmHeader,
    },
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
