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
            <a class="nav-link active" aria-current="page" href="#">Overview</a>
          </li>
          <li class="nav-item">
            <a class="nav-link disabled" href="#">CV</a>
          </li>
          <li class="nav-item">
            <a class="nav-link disabled" href="#">Projects</a>
          </li>
          <li class="nav-item">
            <a class="nav-link disabled" href="#">About this Website</a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'NavBar'
})
</script>

<style scoped>
</style>
