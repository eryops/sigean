<template>
  <div id="app">
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
	  components: {
		  IHeader,
		  IFooter,
      SHero,
      SAbout
	  },
    methods: {
      stickyMenu() {
        var headerNav    = document.getElementById('page-header');
        var about        = document.getElementById('about');
        var aboutSlideIn = about.offsetTop - (window.innerHeight - 150);
        var sticky       = headerNav.offsetTop;

        window.addEventListener('scroll', function () {
          if(window.pageYOffset >= sticky) {
            headerNav.classList.add('sticky');
            about.classList.add('sticky');
          }
          else {
            headerNav.classList.remove('sticky');
            about.classList.remove('sticky');
          }
          if(window.pageYOffset >= aboutSlideIn) {
            about.classList.add('slide-in-top');
          }
        })
      }
    },
    mounted() {
      this.stickyMenu();
    }
	}
</script>

<style lang="scss">
	@import "./assets/sass/main";
</style>
