<template>
  <div class="column is-one-quarter">
    <div class="card single-item large">
      <a href="#" class="card-meetup-link">
        <div class="img-container">
          <figure class="image is-4by3">
              <img :src="category.image" :alt="category.name">
          </figure>
        </div>
      </a>
        <div class="content text-slanted is-size-4 p-1">
            {{ category.name | capitalize }}
        </div>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    category: {
      required: true,
      type: Object
    }
  }
}
</script>

<style lang="scss" scope>

</style>