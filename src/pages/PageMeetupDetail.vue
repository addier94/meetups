<template>
  <div class="meetup-detail-page">
    <section class="hero">
      <div class="hero-body top-afternavbar">
        <div class="container">
          <h2 class="subtitle">
            {{meetup.startDate | formatDate}}
          </h2>
          <h1 class="title mb-2">
            {{meetup.title}}
          </h1>
          <article class="media v-center">
            <figure class="media-left">
              <p class="image is-64x64">
                <img class="is-rounded" :src="meetupCreator.avatar">
              </p>
            </figure>
            <div class="media-content">
              <div class="content">
                <p>
                  Creado por <strong>{{meetupCreator.name}}</strong>
                </p>
              </div>
            </div>
          </article>
        </div>
        <div class="is-pulled-right">
          <!-- We will handle this later (: -->
          <button class="button btn-yellow">Salir del grupo</button>
        </div>
      </div>
    </section>
    <section class="section">
      <div class="container">
        <div class="columns">
          <div class="column is-3">
            <aside class="is-medium menu">
              <div class="meetup-side-box">
                <div class="meetup-side-box-date">
                  <p><b>Fecha</b></p>
                  <p>{{meetup.startDate | formatDate}}</p>
                </div>
                <div class="meetup-side-box-date">
                  <p><b>Hora</b></p>
                  <span>{{meetup.timeFrom}}</span> - <span>{{meetup.timeTo}}</span>
                </div>
                <div class="meetup-side-box-place">
                  <p><b>Ubicación</b></p>
                  <p>{{meetup.location}}</p>
                </div>
                <div class="meetup-side-box-more-info">
                  <p><b>Información adicional</b></p>
                  <p>{{meetup.shortInfo}}</p>
                </div>
              </div>
              <div class="meetup-side-box-map">
                <img src="../assets/images/mylocation.png" class="venueMap-mapImg span--100" alt="Location image of meetup venue">
              </div>
              <!-- Threads Start -->
              <p class="menu-label">
                Salas de chat
              </p>
              <ul>
                <li>Should I follow some dresscode ?</li>
              </ul>
              <p class="menu-label">
                Personas que asistiran a la reunión
              </p>
              <div class="columns is-multiline is-mobile">
                <!-- Joined People Images Here -->
                <div class="column is-3">
                  <figure class="image is-64x64">
                    <img class="is-rounded" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQuqyc3j2s3bL4DIkC8uC9h0rcAdsDXcwJPNh8XHWbLQfHbOpVU" alt="Image">
                  </figure>
                </div>
              </div>
              <!-- Threads Ends -->
            </aside>
          </div>
          <div class="column is-7 is-offset-1">
            <div class="content is-medium">
              <h3 class="title is-3">Sobre la reunión</h3>
              <p>{{meetup.description}}</p>
              <!-- Join Meetup, We will handle it later (: -->
              <button class="button btn-black">Unirme a la reunión</button>
              <!-- Not logged In Case, handle it later (: -->
              <!-- <button :disabled="true"
                      class="button is-warning">You need authenticate in order to join</button> -->
            </div>
            <!-- Thread List START -->
            <div class="content is-medium">
              <h3 class="title is-3">Salas de chat</h3>
              <div class="box">
                <!-- Thread title -->
                <h4 id="const" class="title is-3">Should I follow some dresscode ?</h4>
                <!-- Create new post, handle later -->
                <form class="post-create">
                  <div class="field">
                    <textarea class="textarea textarea-post"
                              placeholder="Write a post"
                              rows="1"></textarea>
                    <button :disabled="true" class="button btn-yellow m-t-sm">Enviar</button>
                  </div>
                </form>
                <!-- Create new post END, handle later -->
                <!-- Posts START -->
                <article class="media post-item">
                  <figure class="media-left is-rounded user-image">
                    <p class="image is-32x32">
                      <img class="is-rounded" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQuqyc3j2s3bL4DIkC8uC9h0rcAdsDXcwJPNh8XHWbLQfHbOpVU">
                    </p>
                  </figure>
                  <div class="media-content">
                    <div class="content is-medium">
                      <div class="post-content">
                        <!-- Post User Name -->
                        <strong class="author">Filip Jerga</strong>
                        {{' '}}
                        <!-- Post Updated at -->
                        <small class="post-time">13th Jan</small>
                        <br>
                        <p class="post-content-message">It's up to you (:</p>
                      </div>
                    </div>
                  </div>
                </article>
                <!-- Posts END -->
              </div>
            </div>
            <!-- Thread List END -->
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
  import axios from 'axios'
  export default {
    data () {
      return {
        meetup: {}
      }
    },
    created () {
      const meetupId = this.$route.params.id
      axios.get(`/api/v1/meetups/${meetupId}`)
        .then(res => {
          this.meetup = res.data
        })
    },
    computed: {
      meetupCreator () {
        return this.meetup.meetupCreator
      }
    }
  }
</script>

<style scoped lang="scss">
  .tag.is-warning {
    opacity: 0.5;
  }
  .meetup-detail-page {
    background-color: #f5f5f5;
    .mapouter{text-align:right;height:500px;width:600px;}.gmap_canvas {overflow:hidden;background:none!important;height:500px;width:600px;}
    .hero-body {
      background-color: white;
      border: 1px solid rgba(46,62,72,.12);
      color: white;
      background-image: linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url('../assets/images/product-banner.jpeg');
      background-size: cover;
      background-repeat: no-repeat;
      background-attachment: fixed;
        > p,h1,h2, strong {
          color: white;
        }
      }
    .meetup-side-box {
      background-color: white;
      border-radius: 10px;
      font-size: 16px;
      padding: 15px;
    }
  }
  pre,
  .message {
    max-width: 960px;
  }
  .v-center {
    align-items: center;
  }
  li {margin: 10px}
  .hero.is-primary {
  background: linear-gradient(to top right, #524ad0 10%, #D099FA);
  }
  .box {
    box-shadow: 0 2px 6px 0 rgba(0, 0, 0, 0.2);
  }
  .box span.icon {
    float: right;
    font-size: 1.7em;
    padding: 2rem 2rem 0 0;
  }
  .is-large.fab {
    font-size: 7em;
  }
  .is-large.fas {
    font-size: 5em;
    margin-left: 0.2em;
  }
  .media-content {overflow: hidden;}
  .menu-list li a:hover {
    background: #d9d9d9;
  }
  .token.number {
    display: inline;
    padding: inherit;
    font-size: inherit;
    line-height: inherit;
    text-align: inherit;
    vertical-align: inherit;
    border-radius: inherit;
    font-weight: inherit;
    white-space: inherit;
    background: inherit;
    margin: inherit;
  }
  .footer {background-color: white;}
  // Post Create Input START
  .textarea-post {
    padding-bottom: 30px;
  }
  .post-create {
    margin-bottom: 15px;
  }
  // Post Create END
  // Thread List START
  .content {
    figure {
      margin-bottom: 0;
    }
  }
  .media-content-threads {
    background-color: #f1f1f1;
    padding: 3px 20px;
    border-radius: 10px;
    margin-right: 40px;
    width: 100px;
  }
  .media-left.user-image {
    margin: 0;
    margin-right: 15px;
  }
  .media + .media {
    border: none;
    margin-top: 0;
  }
  .post-content {
    margin: 0;
    &-message {
      font-size: 16px;
    }
    .author {
      font-size: 18px;
    }
    .post-time {
      font-size: 16px;
    }
  }

  .top-afternavbar {
    margin-top: 5.7rem;
  }
  // Thread List END
</style>