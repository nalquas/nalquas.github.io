
<template>
  <div class="container px-4 py-0">
    <div class="row align-items-center g-5 py-5" :class="(this.reverse && 'flex-lg-row-reverse') || 'flex-lg-row'">
      <div class="col-12 col-lg-6">
        <img :src="this.imgSrc" class="img-fluid border rounded-3 shadow-lg" :class="this.imgNearestNeighbor && 'img-nearest-neighbor'" alt="Image of the product described in the accompanying text" width="1920" height="1080" loading="lazy">
      </div>
      <div class="col-lg-6">
        <h1 class="display-5 fw-bold lh-1 mb-3"><slot name="title">Title</slot></h1>
        <p class="lead">
          <slot></slot>
        </p>
        <div class="d-grid gap-2 d-md-flex justify-content-md-start">
          <slot name="buttons">
            <a type="button" class="btn btn-primary btn-lg px-4 me-md-2" :href="this.hrefPrimary"><slot name="buttonPrimary">Primary</slot></a>
            <a type="button" class="btn btn-secondary btn-lg px-4" :href="this.hrefSecondary"><slot name="buttonSecondary">Secondary</slot></a>
          </slot>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Hero',
  props: {
    reverse: {
      type: Boolean,
      required: true
    },
    imgSrc: {
      type: String,
      required: true
    },
    imgNearestNeighbor: {
      type: Boolean,
      required: false
    },
    hrefPrimary: {
      type: String,
      required: false
    },
    hrefSecondary: {
      type: String,
      required: false
    }
  }
}
</script>

<style scoped>
  .img-nearest-neighbor {
    /* IE, only works on <img> tags */
    -ms-interpolation-mode: nearest-neighbor;
    /* Firefox */
    image-rendering: crisp-edges;
    /* Chromium + Safari */
    image-rendering: pixelated;
  }
</style>
