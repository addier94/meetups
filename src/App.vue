<template>
  <div id="app">
    <TheNavbar />
    <div class="page-wrapper">
      <router-view />
    </div>
    <TheFooter />
  </div>
</template>

<script>
import TheNavbar from '@/components/shared/TheNavbar'
import TheFooter from '@/components/shared/TheFooter'
export default {
  name: 'app',
  components: {
    TheNavbar,
    TheFooter
  }
}
</script>

<style lang="scss">
@import 'assets/css/spacing.css';
@import '~bulma/bulma.sass';
@import 'assets/css/global.scss';

.page-wrapper {
  min-height: 55vh;
}
</style>
