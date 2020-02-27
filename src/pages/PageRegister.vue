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
                          @blur="$v.form.username.$touch()"
                          class="input is-large"
                          type="text"
                          placeholder="Usuario">
                  <div v-if="$v.form.username.$error" class="form-error">
                    <span v-if="!$v.form.username.required" class="help is-danger">Usuario es necesario</span>
                  </div>
                </div>
              </div>
              <div class="field">
                <div class="control">
                  <input  v-model="form.name"
                          @blur="$v.form.name.$touch()"
                          class="input is-large"
                          type="text"
                          placeholder="Nombre">
                  <div v-if="$v.form.name.$error" class="form-error">
                    <span v-if="!$v.form.name.required" class="help is-danger">Nombre es necesario</span>
                  </div>
                </div>
              </div>
              <div class="field">
                <div class="control">
                  <input  v-model="form.email"
                          @blur="$v.form.email.$touch()"
                          class="input is-large"
                          type="email"
                          placeholder="Correo">
                  <div v-if="$v.form.email.$error" class="form-error">
                    <span v-if="!$v.form.email.required" class="help is-danger">Correo es necesario</span>
                    <span v-if="!$v.form.email.email" class="help is-danger">Correo no valido</span>
                  </div>
                </div>
              </div>
              <div class="field">
                <div class="control">
                  <input  v-model="form.avatar"
                          @blur="$v.form.avatar.$touch()"
                          class="input is-large"
                          type="text"
                          placeholder="Link para foto de perfil"
                          autocomplete="">
                  <div v-if="$v.form.avatar.$error" class="form-error">
                    <span v-if="!$v.form.avatar.url" class="help is-danger">Formato url para la foto de perfil no valido</span>
                    <span v-if="!$v.form.avatar.supportedFileType" class="help is-danger">Imagen con tipo de archivo no valido!</span>
                  </div>
                </div>
              </div>
              <div class="field">
                <div class="control">
                  <input  v-model="form.password"
                          @blur="$v.form.password.$touch()"
                          class="input is-large"
                          type="password"
                          placeholder="Contraseña"
                          autocomplete="new-password">
                  <div v-if="$v.form.password.$error" class="form-error">
                    <span v-if="!$v.form.password.required" class="help is-danger">Contraseña es necesario</span>
                    <span v-if="!$v.form.password.minLength" class="help is-danger">Contraseña mínimo debe ser 6 caracteres</span>
                  </div>
                </div>
              </div>
              <div class="field">
                <div class="control">
                  <input  v-model="form.passwordConfirmation"
                          @blur="$v.form.passwordConfirmation.$touch()"
                          class="input is-large"
                          type="password"
                          placeholder="Confirmar contraseña"
                          autocomplete="off">
                  <div v-if="$v.form.passwordConfirmation.$error" class="form-error">
                    <span v-if="!$v.form.passwordConfirmation.required" class="help is-danger">Contraseña es necesario</span>
                    <span v-if="!$v.form.passwordConfirmation.sameAsPassword" class="help is-danger">Contraseña debe coincidir para la confirmación</span>
                  </div>
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
import { required, email, minLength, url, sameAs } from 'vuelidate/lib/validators'
import { supportedFileType } from '@/helpers/validators'
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
    validations: {
      form: {
        username: {
          required
        },
        name: {
          required
        },
        email: {
          required,
          email
        },
        avatar: {
          url,
          supportedFileType
        },
        password: {
          required,
          minLength: minLength(6)
        },
        passwordConfirmation: {
          required,
          sameAsPassword: sameAs('password')
        }
      }
    },
    methods: {
      register () {
        this.$v.form.$touch()
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