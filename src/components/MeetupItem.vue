<template>
  <div class="column is-one-third">
    <div class="card single-item large">
      <router-link :to="{name: 'PageMeetupDetail', params: {id: meetup._id}}" class="card-meetup-link">
        <div class="img-container">
          <figure class="image is-4by3">
              <img class="store-img" :src="meetup.image" :alt="meetup.title">
          </figure>
        </div>
      </router-link>
        <div class="card-content pt-2">
          <div class="level mb-2">
            <div class="media-left">
              <div class="level-item has-text-centered">
                <div>
                  <p class="title">{{ meetup.startDate | formatDate('MMM') }}</p>
                  <p class="title">{{ meetup.startDate | formatDate('D') }}</p>
                </div>
              </div>
            </div>
            <div class="media-content">
                <p class="title is-4 no-padding is-marginless">{{ meetup.title }}</p>
                <span class="tag badge-black">{{ meetup.category.name | capitalize }}</span>
                <p class="subtitle is-7">{{ meetup.location }}</p>
            </div>
          </div>
          <div class="content text-mainGrey">
              {{ meetup.description }}
          </div>
        </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    meetup: {
      required: true,
      type: Object
    }
  }
}
</script>