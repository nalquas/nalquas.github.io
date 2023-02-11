
<template>
  <div class="container-lg d-flex d-wrap justify-content-between align-items-center py-3 my-4 border-top">
    <div class="col-md-4 d-flex align-items-center">
      <span class="text-muted">
        &copy; {{ new Date().getFullYear() }} Niklas Freund
      </span>
    </div>

    <ul class="nav col-md-4 justify-content-end list-unstyled d-flex">
      <li class="ms-3">
        <a class="text-muted" href="https://www.linkedin.com/in/niklas-freund/">
          <i class="bi bi-linkedin"></i>
        </a>
      </li>
      <li class="ms-3">
        <a class="text-muted" href="https://github.com/nalquas">
          <i class="bi bi-github"></i>
        </a>
      </li>
    </ul>
  </div>
</template>

<script>
</script>

<style scoped>
i {
  font-size: 24px;
}
</style>