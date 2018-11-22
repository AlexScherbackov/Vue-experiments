<template>
  <div id="app">
    <p>Можно итерировать как массивы</p>
    <ul>
      <li v-for="(item, index) of items">{{parentText}} {{item}}-index={{index}}</li>
    </ul>
    <button v-on:click="addItem">Добавить элемент в конец массива</button>
    <p>   в этом случае мы добавляем элемнт в массив с помощью метода push, а он по умолчанию обёрнут в реактивность фреймворком, поэтому представление обновляется вместе с данными</p>
   <button v-on:click="addItemBadPractice">Добавление в масси по индексу</button>
   <p>В этом случае обновления представления не происходит т.к. добавление по индексу не реализован реактивно в фреймворке, но мы можнем удостовериться в том, что на самом деле добавление происходит нажав на первую кнопку. В общем это плохой способ и так делать не надо!</p>
    <p>так и свойства объектов</p>
    <ul>
      <li v-for="(prop, key, index) in user">{{index}}. {{key}}: {{prop}}</li>
    </ul>
  </div> 
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      parentText: 'foo',
      items: ['text1', 'text2', 'text3'],
      user: {
        firstName: 'Alex',
        lastName: 'Shcherbackov',
        age: 27
      }
    }
  },
  methods: {
    addItem(){
       
      let lastNumberPart = this.items[this.items.length - 1]
        .split('')
        .filter((char)=>{
          return parseInt(char);
        })
        .join('');

      this.items.push(`text${++lastNumberPart}`);
    
    },
    addItemBadPractice(){
      this.items[this.items.length] = "badPractice";
    }
  }
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
  margin:10px;
}

a {
  color: #42b983;
}
</style>
