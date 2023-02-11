<template>
  <div class="container-fluid m-0 p-0">
    <header>
      <NavBar></NavBar>
    </header>
    <main class="container-lg mt-2 mb-2">
      <router-view></router-view>
    </main>
    <footer>
      <Footer></Footer>
    </footer>
  </div>
</template>

<script>
import NavBar from './components/NavBar.vue';
import Footer from './components/Footer.vue';

export default {
  name: 'App',
  components: {
    NavBar,
    Footer
  },
  watch: {
    $route: {
      immediate: true,
      handler(to, from) {
        let pageTitle = (to.meta && to.meta.title) || 'Unknown';
        document.title = 'Niklas Freund - ' + pageTitle;
      }
    }
  }
}
</script>

<style scoped>
</style>
