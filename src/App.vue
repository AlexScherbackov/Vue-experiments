<template>
  <div id="app">
    <h1>Dear {{fullName}}</h1>
    <form v-on:submit.prevent="onSubmit">
      <input type='text'>
    </form>
  </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
     firstName: "Alex",
     lastName: "Shcherbackov" 
    }
  },
  computed: {
    fullName: {
      get(){
        return `${this.firstName} ${this.lastName}`;
      },
      set(newValue){
        const names = newValue.split(' ');
        this.firstName = names[0];
        this.lastName = names[1];
      }
    }
  },
  methods: {
    onSubmit(e){
      this.fullName = e.target.querySelector('input').value;
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
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
