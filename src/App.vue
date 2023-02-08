<template>
  <div class="container-lg">
    <header class="row">
      <div class="col">
        <NavBar></NavBar>
      </div>
    </header>
    <main class="row">
      <div class="col">
        <div>
          <router-view></router-view>
        </div>
      </div>
    </main>
    <footer class="row">
      <div class="col">
        <!-- TODO some footer -->
      </div>
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
