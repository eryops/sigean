<template>
  <section id="about">
    <scroll-view tag="div" :offset="10" class="content">
      <template slot-scope="visibility">
        <div class="information">
          <div class="bg-img-cover bg-me"></div>
          <c-about-text key="about"
                        :visible="visibility.about"/>
        </div>
        <div class="knowledge-list">
          <h2>Knowledge</h2>
          <ul>
            <c-knowledge key="knowledgeVue"
                         :text="'Vue'"
                         :visible="visibility.knowledgeVue"/>
            <c-knowledge key="knowledgeHtml"
                         :text="'HTML'"
                         :visible="visibility.knowledgeHtml"
                         :textClass="'bigger'"/>
            <c-knowledge key="knowledgeCss"
                         :text="'CSS (scss and less)'"
                         :visible="visibility.knowledgeCss"
                         :textClass="'bigger'"/>
            <c-knowledge key="knowledgeJquery"
                         :text="'jQuery'"
                         :visible="visibility.knowledgeJquery"
                         :textClass="'big'"/>
            <c-knowledge key="knowledgeIllustrator"
                         :text="'Illustrator'"
                         :visible="visibility.knowledgeIllustrator"
                         :textClass="'small'"/>
            <c-knowledge key="knowledgePhotoshop"
                         :text="'Photoshop'"
                         :visible="visibility.knowledgePhotoshop"
                         :textClass="'small'"/>
            <c-knowledge key="knowledgeWebpack"
                         :text="'Webpack'"
                         :visible="visibility.knowledgeWebpack"
                         :textClass="'smaller'"/>
            <c-knowledge key="knowledgePhp"
                         :text="'Php'"
                         :visible="visibility.knowledgePhp"
                         :textClass="'smaller'"/>
            <c-knowledge key="knowledgeSql"
                         :text="'SQL'"
                         :visible="visibility.knowledgeSql"
                         :textClass="'small'"/>
          </ul>
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
