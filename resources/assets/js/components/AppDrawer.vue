<template>
    <v-navigation-drawer v-model="sidebar" app></v-navigation-drawer>
</template>
<script>
export default {
  name: 'app-drawer',
  data () {
      return {
        sidebar: false
      }
    },
    created () {
      window.getApp.$on('APP_DRAWER_TOGGLED', () => {
        this.sidebar = (!this.sidebar);
      });
    },
  
}
</script>