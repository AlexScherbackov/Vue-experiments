<template>
  <div id="app">
  <ol>
  <!-- Создаём экземпляр компонента todo-item -->
   <todo-item
    v-for="todo in todos" v-bind:todo="todo" v-bind:key="todo.id"></todo-item>
  </ol>
  </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      todos: [
      { id: 0, text: 'Изучить JavaScript' },
      { id: 1, text: 'Изучить Vue' },
      { id: 2, text: 'Создать что-нибудь классное' }
      ]  
    }
  },
  
}
</script>

<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
