<template>
  <section id="about">
    <div class="information">
      <c-about-text />
    </div>
    <div class="bg-img-cover bg-about">
    </div>
  </section>
</template>
<script>
  import CAboutText from '../components/AboutText.vue'
  import CKnowledge from '../components/Knowledge.vue'

  export default {
    components: {
      CAboutText,
      CKnowledge
    },
    methods: {
      markerNotVisible() {
        console.log(`marker is no longer visible!`)
      }
    }
  }
</script>
