// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

Vue.config.productionTip = false

/* polyfill */
import { polyfill } from 'es6-promise';
polyfill();


/* scroll to */
import VueScrollTo from 'vue-scrollto'

// change offset depending on viewport
var windowWidth = window.innerWidth;
if(windowWidth >= 992){
	var scrollOffset = -80;
}else{
	var scrollOffset = -50;
}

Vue.use(VueScrollTo, {
	offset: scrollOffset,
	cancelable: false
})

/* scroll view */
import ScrollView from 'vue-scrollview'
Vue.use(ScrollView)

/* eslint-disable no-new */
new Vue({
	el: '#app',
	router,
	components: { App },
	template: '<App/>'
})
