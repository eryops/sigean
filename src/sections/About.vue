<template>
  <section id="about">
    <scroll-view tag="div" :offset="10" class="content">
      <template slot-scope="visibility">
        <div class="information">
          <c-about-text key="about"
                        :visible="visibility.about"/>
        </div>
        <div class="bg-img-cover bg-about">
        </div>
      </template>
    </scroll-view>


  </section>
</template>
<script>
  import CAboutText from '../components/AboutText.vue'
  import CKnowledge from '../components/Knowledge.vue'

  export default {
    components: {
      CAboutText,
      CKnowledge
    }
  }
</script>
