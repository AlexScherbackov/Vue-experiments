import Vue from 'vue'
import App from './App.vue'

// Определяем новый компонент под именем todo-item
var tabs = [
  {
    name: 'Home', 
    component: { 
      template: '<div>Home component</div>' 
    }
  },
  {
    name: 'Posts',
    component: {
      template: '<div>Posts component</div>'
    }
  },
  {
    name: 'Archive',
    component: {
      template: '<div>Archive component</div>',
    }
  }
]

const app = new Vue({
  el: '#app',
  render: h => h(App)
})
