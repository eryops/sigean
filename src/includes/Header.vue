<template>
  <header id="page-header">
    <button type="button"
            class="mobile-menu-button"
            title="Öppna menyn"
            @click="mobileMenuOpend = !mobileMenuOpend">
      <span class="icon-menu-opend" v-if="mobileMenuOpend">Öppen</span>
      <span class="icon-menu-closed" v-else>Stängd</span>
    </button>
    <nav :class="mobileMenuOpend ? 'mobile-menu-opend' : 'mobile-menu-closed'" class="content">
      <a href="#app"
         v-scroll-to="'#app'"
         @click="mobileMenuOpend = !mobileMenuOpend">
        Start
      </a>
      <a href="#about"
         v-scroll-to="'#about'"
         @click="mobileMenuOpend = !mobileMenuOpend">
        Om huset
      </a>
      <a href="#imgHouse"
         v-scroll-to="'#imgHouse'"
         @click="mobileMenuOpend = !mobileMenuOpend">
        Foton på huset
      </a>
      <a href="#imgSurandings"
         v-scroll-to="'imgSurandings'"
         @click="mobileMenuOpend = !mobileMenuOpend">
        Foton på omgivning
      </a>
      <a href="#map"
         v-scroll-to="'#map'"
         @click="mobileMenuOpend = !mobileMenuOpend">
        Karta
      </a>
    </nav>
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
