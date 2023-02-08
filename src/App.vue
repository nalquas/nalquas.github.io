<template>
  <div class="container-fluid">
    <div class="row">
      <div class="col">
        <NavBar></NavBar>
      </div>
    </div>
    <div class="row">
      <div class="col">
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>

<script>
import NavBar from './components/NavBar.vue';

export default {
  name: 'App',
  components: {
    NavBar
  }
}
</script>

<style scoped>
</style>
