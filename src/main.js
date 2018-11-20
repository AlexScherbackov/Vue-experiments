import Vue from 'vue'
import App from './App.vue'

// Определяем новый компонент под именем todo-item
Vue.component('todo-item', {
	props: ['todo'],
  template: '<li>{{todo.text}}</li>'
})

const app = new Vue({
  el: '#app',
  render: h => h(App)
})
