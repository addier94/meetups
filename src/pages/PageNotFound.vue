<template>
  <div class="container">
    <ErrorView :title="'Ooooops, la página a la que está intentando acceder no existe'"
               :status="404"
               :navigateToPage="'PageHome'"
               :navigateToText="'Ir a home'" />
  </div>
</template>

<script>
  import ErrorView from '@/components/ErrorView'
  export default {
    components: {
      ErrorView
    }
  }
</script>

<style scoped>
</style>