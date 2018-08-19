<template>
  <nav class="navbar navbar-default navbar-fixed-top">
    <div class="container">
      <div class="navbar-header">
        <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
          <span class="sr-only">Toggle navigation</span>
          <span class="icon-bar"></span>
          <span class="icon-bar"></span>
          <span class="icon-bar"></span>
        </button>
      </div>
      <div id="navbar" class="navbar-collapse collapse">
        <ul class="nav navbar-nav">
          <router-link :to="{name:'home'}" tag="li"><a href="#">Inicio</a></router-link></li>
        </ul>
        <ul class="nav navbar-nav navbar-right" v-if="$auth.check()">
          <li><a href="#" @click.prevent="$auth.logout()">Salir</a></li>
        </ul>
        <ul class="nav navbar-nav navbar-right" v-else>
          <router-link :to="{name:'login'}" tag="li"><a href="#">Iniciar</a></router-link></li>
          <router-link :to="{name:'register'}" tag="li"><a href="#">Registrar</a></router-link></li>
        </ul>
      </div>
    </div>
  </nav>
</template>
<script>
export default {
  name: 'page-header',
}
</script>