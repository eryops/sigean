<template>
  <div id="app">
    <s-hero/>
	  <i-header/>
    <s-house/>
    <s-about-town/>
    <s-town/>
    <s-surroundings/>
    <s-contact/>
	  <i-footer/>
  </div>
</template>

<script>

// components
import IHeader 	from '@/includes/Header.vue';
import IFooter 	from '@/includes/Footer.vue';

import SHero 			from '@/sections/Hero.vue';
import SHouse 			from '@/sections/House.vue';
import SAboutTown		from '@/sections/AboutTown.vue';
import STown			from '@/sections/Town.vue';
import SSurroundings	from '@/sections/Surroundings.vue';
import SContact			from '@/sections/Contact.vue';


export default {
	components: {
		IHeader,
		IFooter,
		SHero,
		SHouse,
		SAboutTown,
		STown,
		SSurroundings,
		SContact
	},
	methods: {
		scrollEvents() {
			var pageHeader   		= document.getElementById('page-header');
			var pageHeaderMenu  	= document.getElementById('page-header-menu');
			var aboutTown        	= document.getElementById('about-town');
			var aboutTownText       = document.getElementById('about-town-text');
			var aboutTownSlideIn 	= aboutTown.offsetTop - (window.innerHeight - 250);
			var sticky       		= pageHeader.offsetTop;
			var pageYOffset	 		= window.pageYOffset;
			//console.log('aboutTown.offsetTop' + aboutTown.offsetTop);

			if(pageYOffset > sticky) {
				pageHeaderMenu.classList.add('sticky');
			}
			else {
				pageHeaderMenu.classList.remove('sticky');
			}
			if(pageYOffset >= aboutTownSlideIn) {
				//console.log('aboutTown slinging in');
				aboutTownText.classList.add('slide-in-top');
			}
		}
	},
	mounted() {
		this.scrollEvents();
		window.addEventListener('scroll', this.scrollEvents);
	}
}
</script>
