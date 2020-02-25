<template>
  <nav class="navbar is-fixed-top is-spaced" role="navigation" aria-label="main navigation">
    <div class="navbar-brand">
      <router-link :to="'/'" class="navbar-item">
        <img src="@/assets/logo.png" width="112" height="28">
      </router-link>
      <a role="button" :class="['navbar-burger navbar-toggler', toggleNav ? 'is-active' : '']" @click="toggleNav = !toggleNav" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
      </a>
    </div>

    <div id="navbarBasicExample" :class="['navbar-menu', toggleNav ? 'is-active' : '']" >
      <div class="navbar-start">
        <router-link :to="'/'" class="navbar-item nav-active">
          Home
        </router-link>

        <router-link :to="{name: 'PageMeetupFind'}" class="navbar-item">
          Buscar
        </router-link>

        <div @click="navMobileToggle = !navMobileToggle" class="navbar-item has-dropdown is-hoverable">
          <a class="navbar-link">
            Mas
          </a>
          <div :class="['navbar-dropdown', navMobileToggle ? 'nav-mobile-toggle-hidde' : '']">
            <a class="navbar-item">
              Acerca de
            </a>
            <a class="navbar-item">
              Trabajos
            </a>
            <a class="navbar-item">
              Contacto
            </a>
            <hr class="navbar-divider">
            <a class="navbar-item">
              Reportar un problema
            </a>
          </div>
        </div>
      </div>

      <div class="navbar-end">
        <div class="navbar-item">
          <div class="buttons">
            <a class="button btn-yellow">
              Registrarse
            </a>
            <a class="button btn-black">
              Iniciar Sesion
            </a>
          </div>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
  export default {
    data () {
      return {
        toggleNav: false,
        navMobileToggle: true
      }
    }
  }
</script>

<style scoped lang="scss">
  @import "@/assets/css/global.scss";

  .navbar-brand{
    padding: .5rem;
  }
  a.navbar-toggler{
    transition: all 0.5s ease!important;
    border: 4px solid $mainYellow;
    border-radius: .25rem;
    &:hover{
      background: none;
    }
    span:nth-child(1),
    span:nth-child(2),
    span:nth-child(3){
      width: 23px;
      height: 4px;
      background: $mainYellow;
      transition: all 0.5s ease;
      left: calc(50% - 11.5px);
    }
    span:nth-child(1) {
      top: calc(50% - 10px);
    }
    span:nth-child(2) {
      top: calc(50% - 2px);
    }
    span:nth-child(3) {
      top: calc(50% - (-6px));
    }
  }
  .navbar-toggler.is-active span:nth-child(1) {
    top: calc(50% - 5px);
    transition: all 0.5s ease;
  }

  .navbar-start .navbar-item, a.navbar-link{
    font-size: 1.4rem; 
    color: $mainGrey;
    &:hover{
      background: none;
      color: $mainBlack;
    }
  }
  .navbar-item.nav-active{
    border-bottom: .05rem solid $mainYellow;
    color: $mainBlack;
  }

  .nav-mobile-toggle-hidde{
    display: none;
  }

  .navbar-link:not(.is-arrowless)::after {
    border-color: $mainYellow;
  }
</style>
