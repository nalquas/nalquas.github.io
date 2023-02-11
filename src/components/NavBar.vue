<template>
  <nav class="navbar navbar-dark bg-secondary navbar-expand-md">
    <div class="container-lg">
      <router-link to="/" class="navbar-brand">Navbar</router-link>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav">
          <li class="nav-item">
            <router-link to="/" class="nav-link" :class="getActive('home')">Overview</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/cv" class="nav-link" :class="getActive('cv')">CV</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/projects" class="nav-link" :class="getActive('projects')">Projects</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/contact" class="nav-link" :class="getActive('contact')">Contact</router-link>
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
