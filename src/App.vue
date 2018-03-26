<template>
  <div id="app">
	  <i-header/>
    <s-hero/>
    <s-about/>
	  <i-footer/>
  </div>
</template>

<script>

	// components
  import IHeader 	from './includes/Header.vue';
	import IFooter 	from './includes/Footer.vue';
	import SHero 	from './sections/Hero.vue';
	import SAbout	from './sections/About.vue';


	export default {
	  name: 'App',
	  components: {
		  IHeader,
		  IFooter,
      SHero,
      SAbout
	  }
	}
</script>

<style lang="scss">
	@import "./assets/sass/app";
</style>
