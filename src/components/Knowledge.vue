<template>
  <li :class="visible ? 'slide-in-right' : 'slide-out-right'">
    <span class="knowledge" :class="textClass">{{ text }}</span>
  </li>
</template>
<script>
export default {
  name: 'Knowledge',
  props: {
    visible: {
      default: () => false
    },
    text: {
      default: () => ''
    },
    textClass: {
      default: () => ''
    }
  }
}
</script>
