<template>
  <div class="container-fluid m-0 p-0">
    <header>
      <NavBar></NavBar>
    </header>
    <main>
      <router-view></router-view>
    </main>
    <footer>
      <!-- TODO some footer -->
    </footer>
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
