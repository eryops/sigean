<template>
  <div id="app">
    <s-hero/>
	  <i-header/>
    <s-house/>
    <s-about/>
	  <i-footer/>
  </div>
</template>

<script>

// components
import IHeader 	from './includes/Header.vue';
import IFooter 	from './includes/Footer.vue';
import SHero 	from './sections/Hero.vue';
import SHouse 	from './sections/House.vue';
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
		SHouse,
		SAbout
	},
	methods: {
		scrollEvents() {
			var pageHeader   	= document.getElementById('page-header');
			var pageHeaderMenu  = document.getElementById('page-header-menu');
			var about        	= document.getElementById('about');
			var aboutText       = document.getElementById('about-text');
			var aboutSlideIn 	= about.offsetTop - (window.innerHeight - 250);
			var sticky       	= pageHeader.offsetTop;
			var pageYOffset	 	= window.pageYOffset;
			console.log('about.offsetTop' + about.offsetTop);

			if(pageYOffset > sticky) {
				pageHeaderMenu.classList.add('sticky');
			}
			else {
				pageHeaderMenu.classList.remove('sticky');
			}
			if(pageYOffset >= aboutSlideIn) {
				console.log('about slinging in');
				aboutText.classList.add('slide-in-top');
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
