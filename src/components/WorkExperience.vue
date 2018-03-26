<template>
  <div :class="visible ? visibleClass: hiddenClass" class="work-experience">
    <a :href="link"><h3>{{ company }}</h3></a>
    <em>{{ period }}</em>
    <p>{{ paragraph }} <a :href="linkInParagraph" v-if="linkInParagraph">{{ linkInParagraphText}}</a> <span v-if="paragraph2">{{ paragraph2 }}</span> <a :href="linkInParagraph2" v-if="linkInParagraph2">{{ linkInParagraphText2}}</a> <span v-if="paragraph3">{{ paragraph3 }}</span> </p>
  </div>
</template>

<script>
export default {
  props: {
    visible: {
      default: () => false
    },
    company: {
      default: () => ''
    },
    period: {
      default: () => ''
    },
    paragraph: {
      default: () => ''
    },
    linkInParagraph: {
      default: () => false
    },
    linkInParagraphText: {
      default: () => 'link'
    },
    paragraph2: {
      default: () => false
    },
    linkInParagraph2: {
      default: () => false
    },
    linkInParagraphText2: {
      default: () => 'link'
    },
    paragraph3: {
      default: () => false
    },
    link: {
      defualt: () => ''
    },
    visibleClass: {
      default: () => 'slide-in-top'
    },
    hiddenClass: {
      default: () => 'slide-out-top'
    }
  }
}
</script>
