<template>
  <header id="page-header">
    <button type="button"
            class="mobile-menu-button"
            title="Öppna menyn"
            @click="mobileMenuOpend = !mobileMenuOpend">
      <span class="icon-menu-opend" v-if="mobileMenuOpend">Öppen</span>
      <span class="icon-menu-closed" v-else>Stängd</span>
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
      <b-nav-item href="#about"
                  v-scroll-to="'#about'"
                  @click="mobileMenuOpend = !mobileMenuOpend">
        Om
      </b-nav-item>
      <b-nav-item href="#imgSurandings"
                  v-scroll-to="'imgSurandings'"
                  @click="mobileMenuOpend = !mobileMenuOpend">
        Foton på omgivning
      </b-nav-item>
      <b-nav-item href="#map"
                  v-scroll-to="'#map'"
                  @click="mobileMenuOpend = !mobileMenuOpend">
        Karta
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
