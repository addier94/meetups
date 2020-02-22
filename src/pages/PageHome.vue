<template>
  <div>
    <!-- banner -->
    <div class="banner is-flex align-items-center">
      <div>
        <h1 class="is-capitalized text-slanted">Bienvenidos a JT</h1>
        <h1 class="is-uppercase has-text-weight-bold mb-3">Planifica tus reuniones   de forma simple y en cualquier lugar
        </h1>
        <a href="#" class="button btn-yellow">Ver Reuniones</a>
      </div>
    </div>
    <!-- end banner -->
    <!-- meetups -->
    <div class="container">
      <section class="section">
        <div class="columns is-gapless mt-n4">
          <h1 class="title column">Reuniones destacados en "Localización"</h1>
          <div class="column has-text-right-tablet mt-1">
            <button class="button btn-yellow mr-2">Crear reuniones</button>
            <button class="button btn-black">Todo</button>
          </div>
        </div>
        <div class="columns store-items is-multiline" id="store-items">
          <MeetupItem v-for="meetup in meetups"
                      :key="meetup._id"
                      :meetup="meetup" />
        </div>
        <!-- end meetups -->
      </section>
      <section class="section">
        <h1 class="title">Categorias</h1>
        <div class="columns store-items is-multiline" id="store-items">
        <CategoryItem v-for="category in categories"
                      :key="category._id"
                      :category="category" />
        </div>
      </section>
    </div>
  </div>
</template>
<script>
  import axios from 'axios'
  import CategoryItem from '@/components/CategoryItem'
  import MeetupItem from '@/components/MeetupItem'
  export default {
    components: {
      CategoryItem,
      MeetupItem
    },
    data() {
      return {
        meetups: [],
        categories: []
      }
    },
    created () {
      axios.get('/api/v1/meetups')
        .then(res => {
          this.meetups = res.data
        })

      axios.get('/api/v1/categories')
        .then(res => {
          this.categories = res.data
        })
    }
  }
</script>

<style scoped lang="scss">
  .is-rounded {
    border-radius: 10px !important;
  }
  /* banner */
.banner{
  min-height: calc(100vh - 0px);
  font-size: 2.2rem;
  line-height: 1.5;
  padding-left: 2rem;
  background: url('../assets/images/banner.jpeg') center/cover fixed no-repeat;
}
// end banner


</style>
