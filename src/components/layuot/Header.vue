<template>
    <section class="hero is-success">
      <div class="hero-head">
        <header class="navbar">
          <div class="container">
            <div class="navbar-start">
              <router-link to="/" class="navbar-item">
                <b>Platzi music</b>
              </router-link>
            </div>

            <div class="navbar-end navbar-menu">
              <!--Se puede llamar a la ruta con el nombre a traves de un objeto-->
              <!--<router-link to="{ name: search }" class="navbar-item">-->
              <router-link to="/" class="navbar-item">
                Buscar
              </router-link>

              <router-link to="about" class="navbar-item">
                Nosotros
              </router-link>
            </div>

          </div>
        </header>
      </div>

      <div class="hero-body">
        <div class="container has-text-centered">
          <h1 class="title">Platzi music</h1>
          <h2 class="subtitle">Canciones de moda</h2>

          <pm-player></pm-player>
        </div>
      </div>
    </section>
</template>

<script>

  import PmPlayer from '@/components/Player';

  export default {
    components: {
      PmPlayer
    },
  }
</script>
