<template>
    <div>
        <PageHeader/>
        <div class="container-fluid">
           <router-view></router-view> 
        </div>
    </div>
    
</template>
<script>
import PageHeader from './PageHeader.vue'

export default {
  components: {
    PageHeader
  }
}
</script>