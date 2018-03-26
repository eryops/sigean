<template>
  <section id="work">
    <scroll-view tag="div" :offset="10" class="content">
      <template slot-scope="visibility">
        <div class="information">
          <h2>work Experience <em>(as web developer)</em></h2>
          <c-work-experience key="creo"
                             :visible="visibility.creo"
                             :company="'Creo Media Group'"
                             :link="'http://creo.se/'"
                             :period="'April 2017 - Now'"
                             :paragraph="'Working whit'"
                             :linkInParagraph="'http://creovideomanager.se/'"
                             :linkInParagraphText="'Creo Video Manager'"
                             :paragraph2="'(CVM) both developing the new platform and developing pages for custumers like live templates and play channels to play videos and live streaming. Making digital annual reports. Working whit jQuery, css/less/scss, html and vue.'"
                             :visibleClass="'slide-in-left'"
                             :hiddenClass="'slide-out-left'"/>
          <c-work-experience key="bazooka"
                             :visible="visibility.bazooka"
                             :company="'Bazooka'"
                             :link="'http://www.bazooka.se/projekt/vardagspuls-2/'"
                             :period="'Speptember 2016 - Mars 2017'"
                             :paragraph="'Worked in projects like'"
                             :linkInParagraph="'http://www.vardagspuls.se/'"
                             :linkInParagraphText="'Vardagspuls'"
                             :paragraph2="'and made most front-end for'"
                             :linkInParagraph2="'http://processsystems.sandvik.com'"
                             :linkInParagraphText2="'Sandvik process systems'"
                             :paragraph3="'web site. Mostly worked whit jQuery, HTML and scss/css/less.'"
                             :visibleClass="'slide-in-left'"
                             :hiddenClass="'slide-out-left'"/>
        </div>
        <div class="bg-img bg-work"></div>
      </template>
    </scroll-view>
  </section>
</template>
<script>
  import CWorkExperience from '../components/WorkExperience.vue'

  export default {
    components: {
      CWorkExperience
    }
  }
</script>
