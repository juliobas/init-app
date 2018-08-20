<template>
    <v-toolbar app>
        <v-toolbar-side-icon @click.stop="handleDrawerToggle"></v-toolbar-side-icon>
        
        <v-toolbar-items class="hidden-xs-only">
            <v-btn flat to="/">Inicio</v-btn>
        </v-toolbar-items>
        <v-spacer></v-spacer>
        <v-toolbar-items class="hidden-xs-only">
            <v-btn flat @click.prevent="$auth.logout()" v-if="$auth.check()">Salir</v-btn>
            <v-btn flat to="/login" v-if="!$auth.check()">Iniciar</v-btn>
            <v-btn flat to="/register" v-if="!$auth.check()">Registrar</v-btn>
        </v-toolbar-items>
    </v-toolbar>
</template>
<script>
export default {
  name: 'app-toolbar',
  data () {
      return {
        appTitle: 'Awesome App'
      }
    },
    methods: {
        handleDrawerToggle () {
          window.getApp.$emit('APP_DRAWER_TOGGLED');
        }
    }
}
</script>