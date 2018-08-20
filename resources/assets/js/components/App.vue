<template>
    <div>
    	<v-app>
			<app-drawer></app-drawer>
			<app-toolbar></app-toolbar>
			

			<v-content>
				<router-view></router-view> 
			</v-content>

		</v-app>
    </div>
    
</template>
<script>
import AppToolbar from './AppToolbar.vue';
import AppDrawer from './AppDrawer.vue';

export default {
  components: {
    AppToolbar,
    AppDrawer
  },
  created () {
    window.getApp = this;
  }
  
}
</script>