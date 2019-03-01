<template lang="pug">

   .container
     nav.level
        // Left side
        .level-left
           .level-item
              p.subtitle.is-5
                 strong 123
                 |  posts
           .level-item
              .field.has-addons
                 p.control
                    input.input(
                      type='text',
                      placeholder='Find a post'
                    )
                 p.control
                    button.button
                       | Search
        // Right side
        .level-right
           p.level-item
              strong All
           p.level-item
              a Published
           p.level-item
              a Drafts
           p.level-item
              a Deleted
           p.level-item
              a.button.is-success New

</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      msg: 'Hola vue'
    }
  }
}
</script>

<style lang="scss">
  @import "./scss/main";

   .color{
      color: azure;
   }

</style>
