
<template>
  <article>
    <!-- Vogeljagd 2 -->
    <Hero :reverse="true"
      :imgSrc="'/images/vogeljagd2-screenshot01.png'"
      :hrefPrimary="'https://nalquas.itch.io/vogeljagd2'"
      :hrefSecondary="'https://github.com/nalquas/vogeljagd2'"
    >
      <template #title>Vogeljagd 2</template>
      Vogeljagd 2 is a shoot-em-up where your goal is to hit as many birds as possible in 60 seconds, made in TIC-80.
      <template #buttonPrimary><i class="bi bi-controller"></i> Play on itch.io</template>
      <template #buttonSecondary><i class="bi bi-github"></i> GitHub</template>
    </Hero>

    <!-- Mainfighter -->
    <Hero class="border-top" :reverse="false"
      :imgSrc="'/images/mainfighter-gameplay.gif'"
      :hrefPrimary="'https://nalquas.itch.io/mainfighter'"
      :hrefSecondary="'https://github.com/nalquas/mainfighter'"
    >
      <template #title>Mainfighter</template>
      Mainfighter is a shoot-em-up with pseudo-3d graphics, made in TIC-80.
      <template #buttonPrimary><i class="bi bi-controller"></i> Play on itch.io</template>
      <template #buttonSecondary><i class="bi bi-github"></i> GitHub</template>
    </Hero>

    <!-- Blobs of Colour -->
    <Hero class="border-top" :reverse="true"
      :imgSrc="'/images/blobs-of-colour-screenshot01.png'"
      :hrefPrimary="'https://nalquas.itch.io/blobs-of-colour'"
      :hrefSecondary="'https://github.com/nalquas/blobs-of-colour'"
    >
      <template #title>Blobs of Colour</template>
      Blobs of Colour is a game about filling a hall with as much colour as possible in 99 seconds, made with Godot.
      <template #buttonPrimary><i class="bi bi-controller"></i> Play on itch.io</template>
      <template #buttonSecondary><i class="bi bi-github"></i> GitHub</template>
    </Hero>

  </article>
</template>

<script>
import Hero from './Hero.vue';

export default {
  name: 'Projects',
  components: {
    Hero
  }
}
</script>

<style scoped>
</style>
