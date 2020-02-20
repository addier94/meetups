<template>
  <div id="app">
    <TheNavbar />
    <PageHome />
    <TheFooter />
  </div>
</template>

<script>
import  PageHome from '@/pages/PageHome'
import TheNavbar from '@/components/shared/TheNavbar'
import TheFooter from '@/components/shared/TheFooter'
export default {
  name: 'app',
  components: {
    PageHome,
    TheNavbar,
    TheFooter
  }
}
</script>

<style lang="scss">
@import 'assets/css/spacing.css';
@import '~bulma/bulma.sass';
@import 'assets/css/global.scss';

</style>
