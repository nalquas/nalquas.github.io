<template>
  <div class="container-fluid">
    <div class="row">
      <div class="col">
        <NavBar></NavBar>
      </div>
    </div>
    <div class="row">
      <div class="col">
        TODO some content here
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import NavBar from './components/NavBar.vue';

export default {
  name: 'App',
  components: {
    NavBar
  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Titillium+Web&display=swap');

#app {
  font-family: 'Titillium Web', sans-serif;
}
</style>
