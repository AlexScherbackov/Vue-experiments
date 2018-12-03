import Vue from 'vue'
import App from './App.vue'

// Определяем новый компонент под именем todo-item


const app = new Vue({
  el: '#app',
  render: h => h(App)
})
