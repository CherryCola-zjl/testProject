import Vue from 'vue'
import App from './App.vue'
import Vuex from 'vuex'
import Router from 'vue-router'
Vue.use(Vuex)
Vue.use(Router)

Vue.config.productionTip = false
const store = new Vuex.Store({
	state: {
		count: 0
	},
	mutations: {
		increment(state) {
			state.count++
		}
	}
})
new Vue({
	store,
	render: h => h(App),
}).$mount('#app')
