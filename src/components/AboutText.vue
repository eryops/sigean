<template>
  <div :class="visible ? 'slide-in-top': 'slide-out-top'">
    <h2 class="text-center">Who am I?</h2>
    <p class="text-center">
      I'm a Front-End Developer livning whit my family in Åkersberga,<br>
      north of Stockholm. <br>
      I have a passion for accessibility and making the web accessible for all. <br>
      For me the perfect balance between job and family is working four days a week, I get more time whit my family and I have a better focus and energy on my job when I worke.
    </p>
  </div>
</template>
<script>
	export default {
    name: 'AboutText',
		props: {
	    visible: {
        default: () => false
	    }
		}
	}
</script>
