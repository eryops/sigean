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
        var headerNav = document.getElementById('page-header');
        var sticky = headerNav.offsetTop;

        window.addEventListener('scroll', function () {
          console.log(sticky);
          if(window.pageYOffset >= sticky) {
            headerNav.classList.add('sticky');
          }
          else {
            headerNav.classList.remove('sticky');
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
