import Vue from 'vue'
import App from './App'
import router from './router'

Vue.config.productionTip = false

import { polyfill } from 'es6-promise';
polyfill();

import VueScrollTo from 'vue-scrollto'

// change offset depending on viewport
var windowWidth = window.matchMedia;
if(windowWidth >= 992){
	var scrollOffset = -80;
}else{
	var scrollOffset = -50;
}

Vue.use(VueScrollTo, {
	offset: scrollOffset,
	cancelable: false
})

import BootstrapVue from 'bootstrap-vue'
Vue.use(BootstrapVue)

/* eslint-disable no-new */
new Vue({
	el: '#app',
	router,
	components: { App },
	template: '<App/>'
})
