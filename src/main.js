import Vue from 'vue'
import App from './App.vue'

// Определяем новый компонент под именем todo-item
Vue.component('tab-home', { 
	template: '<div>Home component</div>' 
})

Vue.component('tab-posts', { 
	template: '<div>Posts component</div>' 
})

Vue.component('tab-archive', { 
	template: '<div>Archive component</div>' 
})

const app = new Vue({
  el: '#app',
  render: h => h(App)
})
