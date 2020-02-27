<template>
  <section class="hero is-success is-fullheight">
    <div class="hero-body hero-body-mt">
      <div class="container has-text-centered">
        <div class="column is-4 is-offset-4">
          <h3 class="title has-text-grey">Registro</h3>
          <p class="subtitle has-text-grey">Por favor registrese</p>
          <div class="box">
            <figure class="avatar">
                <img src="https://placehold.it/128x128">
            </figure>
            <form>
              <div class="field">
                <div class="control">
                  <input  v-model="form.username" 
                          class="input is-large"
                          type="text"
                          placeholder="Usuario">
                </div>
              </div>
              <div class="field">
                <div class="control">
                  <input  v-model="form.name"
                          class="input is-large"
                          type="text"
                          placeholder="Nombre">
                </div>
              </div>
              <div class="field">
                <div class="control">
                  <input  v-model="form.email"
                          class="input is-large"
                          type="email"
                          placeholder="Correo">
                </div>
              </div>
              <div class="field">
                <div class="control">
                  <input  v-model="form.avatar"
                          class="input is-large"
                          type="text"
                          placeholder="Link para foto de perfil"
                          autocomplete="">
                </div>
              </div>
              <div class="field">
                <div class="control">
                  <input  v-model="form.password"
                          class="input is-large"
                          type="password"
                          placeholder="Contraseña"
                          autocomplete="new-password">
                </div>
              </div>
              <div class="field">
                <div class="control">
                  <input  v-model="form.passwordConfirmation"
                          class="input is-large"
                          type="password"
                          placeholder="Confirmar contraseña"
                          autocomplete="off">
                </div>
              </div>
              <button @click.prevent="register" type="submit" class="button is-block btn-yellow is-large is-fullwidth">Registro</button>
            </form>
          </div>
          <p class="has-text-grey">
            <a class="link-grey" href="#">Iniciar sesion</a> &nbsp;·&nbsp;
            <a class="link-grey" href="#">Iniciar sesion con google</a> &nbsp;·&nbsp;
            <a class="link-grey" href="#">Necesitas ayuda?</a>
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
  export default {
    data () {
      return {
        form: {
          username: null,
          name: null,
          email: null,
          avatar: null,
          password: null,
          passwordConfirmation: null
        }
      }
    },
    methods: {
      register () {
        this.$store.dispatch('auth/registerUser', this.form)
      }
    }
  }
</script>

<style scoped>
  .hero-body-mt {
    padding-top: 6.5rem;
  }
  .hero.is-success {
    background: #F2F6FA;
  }
  .hero .nav, .hero.is-success .nav {
    -webkit-box-shadow: none;
    box-shadow: none;
  }
  .box {
    margin-top: 5rem;
  }
  .avatar {
    margin-top: -70px;
    padding-bottom: 20px;
  }
  .avatar img {
    padding: 5px;
    background: #fff;
    border-radius: 50%;
    -webkit-box-shadow: 0 2px 3px rgba(10,10,10,.1), 0 0 0 1px rgba(10,10,10,.1);
    box-shadow: 0 2px 3px rgba(10,10,10,.1), 0 0 0 1px rgba(10,10,10,.1);
  }
  input {
    font-weight: 300;
  }
  p {
    font-weight: 700;
  }
  p.subtitle {
    padding-top: 1rem;
  }
</style>