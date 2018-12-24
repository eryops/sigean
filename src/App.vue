<template>
  <div id="app" :scroll.passive="stickyMenu">
    <s-hero/>
	  <i-header/>
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
	data() {
		return {

		}
	},
	components: {
		IHeader,
		IFooter,
		SHero,
		SAbout
	},
	methods: {
		scrollEvents() {
			var pageHeader   	= document.getElementById('page-header');
			var pageHeaderMenu  = document.getElementById('page-header-menu');
			var about        	= document.getElementById('about');
			var aboutSlideIn 	= about.offsetTop - (window.innerHeight - 150);
			var sticky       	= pageHeader.offsetTop;
			var pageYOffset	 	= window.pageYOffset;

			if(pageYOffset > sticky) {
				pageHeaderMenu.classList.add('sticky');
			}
			else {
				pageHeaderMenu.classList.remove('sticky');
			}
			if(pageYOffset >= aboutSlideIn) {
				about.classList.add('slide-in-top');
			}
		}
	},
	mounted() {
		this.scrollEvents();
		window.addEventListener('scroll', this.scrollEvents);
	}
}
</script>

<style lang="scss">
	@import "./assets/sass/main";
</style>
