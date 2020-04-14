import Vue from 'vue'
import Router from 'vue-router'
import Cart from './views/cart.vue'
import Address from './views/address.vue'

Vue.use(Router);

export default new Router({
	routes:[
		{
			path: '/cart',
			name: 'cart',
			component:Cart
		},
		{
			path: '/addr',
			name: 'addr',
			component:Address
		}
	]
});