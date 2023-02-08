<template>
  <nav class="navbar navbar-dark bg-secondary navbar-expand-md rounded mt-2 mb-2 ms-0 mr-0">
    <div class="container-fluid">
      <a class="navbar-brand" href="#">Navbar</a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav me-auto">
          <li class="nav-item">
            <router-link to="/" class="nav-link" :class="getActive('home')">Overview</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/" class="nav-link disabled" :class="getActive('cv')">CV</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/" class="nav-link disabled" :class="getActive('projects')">Projects</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/about" class="nav-link" :class="getActive('about')">About this Website</router-link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'NavBar',
  data() {
    return {
      activeLink: 'home'
    }
  },
  methods: {
    getActive(name) {
      // Returns 'active' if the name matches the activeLink, and false otherwise
      return this.activeLink === name && 'active'
    }
  },
  watch: {
    $route: function (route) {
      // Go through all nav-link elements
      this.activeLink = route.name
    }
  }
})
</script>

<style scoped>
</style>
