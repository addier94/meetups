
<template>
  <div class="notFoundContainer">
    <div>
      <h1 class="title">{{title}}</h1>
      <router-link :to="{name: navigateToPage}" class="button btn-yellow">{{navigateToText}}</router-link>
    </div>
    <h2 class="subtitle mb-5">{{status}}<span> :(</span></h2>
  </div>
</template>

<script>
  export default {
    props: {
      title: {
        required: true,
        type: String
      },
      status: {
        required: true,
        type: String
      },
      navigateToPage: {
        required: true,
        type: String
      },
      navigateToText: {
        required: true,
        type: String
      }
    }
  }
</script>

<style scoped>
  .title {
    font-size: 40px;
  }
  .subtitle {
    font-size: 140px;
    text-align: center;
  }
  .notFoundContainer {
    margin-top: 32vh;
  }
</style>