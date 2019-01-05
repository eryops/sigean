<template>
  <header id="page-header" :class="{ 'is-active':  mobileMenuOpend}">
    <button	type="button"
            class="mobile-menu-button hamburger hamburger--collapse"
			:class="{ 'is-active':  mobileMenuOpend}"
            title="Öppna menyn"
            @click="mobileMenuOpend = !mobileMenuOpend"
			aria-label="Menu"
			aria-controls="page-header-menu">
      <!-- <span class="icon-menu-opend" v-if="mobileMenuOpend">Öppen</span>
      <span class="icon-menu-closed" v-else>Stängd</span> -->
	  <span class="hamburger-box">
	    <span class="hamburger-inner"></span>
	  </span>
    </button>
	<b-nav pills
           v-b-scrollspy
           :class="{'mobile-menu-closed': !mobileMenuOpend}"
		   class="mobile-menu"
		   id="page-header-menu">
      <b-nav-item href="#app"
                  v-scroll-to="'#app'"
                  @click="mobileMenuOpend = !mobileMenuOpend">
        Start
      </b-nav-item>
	  <b-nav-item href="#house"
                  v-scroll-to="'#house'"
                  @click="mobileMenuOpend = !mobileMenuOpend">
        Huset
      </b-nav-item>
      <b-nav-item href="#about-town"
                  v-scroll-to="'#about-town'"
                  @click="mobileMenuOpend = !mobileMenuOpend">
        Om staden
      </b-nav-item>
      <b-nav-item href="#contact"
                  v-scroll-to="'#contact'"
                  @click="mobileMenuOpend = !mobileMenuOpend">
        Kontakta oss
      </b-nav-item>
    </b-nav>


  </header>
</template>
<script>
  export default {
    name: 'Header',
    data() {
			return {
				mobileMenuOpend: false
			}
		}
  }
</script>
<style lang="scss">
@import "~bootstrap/scss/functions";
@import '../assets/sass/variables';
@charset "UTF-8";
/*!
* Hamburgers
* @description Tasty CSS-animated hamburgers
* @author Jonathan Suh @jonsuh
* @site https://jonsuh.com/hamburgers
* @link https://github.com/jonsuh/hamburgers
*/

// Settings
// ==================================================
$hamburger-padding-x           : $space;
$hamburger-padding-y           : $space*1.2;
$hamburger-layer-width         : 2rem;
$hamburger-layer-height        : 0.25rem;
$hamburger-layer-spacing       : 0.266rem;
$hamburger-layer-color         : $color-font;
$hamburger-layer-border-radius : 0.25rem;
$hamburger-hover-opacity       : 1;
$hamburger-active-layer-color  : $hamburger-layer-color;
$hamburger-active-hover-opacity: $hamburger-hover-opacity;

// To use CSS filters as the hover effect instead of opacity,
// set $hamburger-hover-use-filter as true and
// change the value of $hamburger-hover-filter accordingly.
$hamburger-hover-use-filter   : false !default;
$hamburger-hover-filter       : opacity(50%) !default;
$hamburger-active-hover-filter: $hamburger-hover-filter !default;

// Types (Remove or comment out what you don’t need)
// ==================================================
$hamburger-types: (
	collapse
) ;

// Base Hamburger (We need this)
// ==================================================
@import "~hamburgers/_sass/hamburgers/_base.scss";
.hamburger {
	&-box {
		display: flex;
	}
}

// Hamburger types
// ==================================================
@import "~hamburgers/_sass/hamburgers/types/collapse";

</style>
