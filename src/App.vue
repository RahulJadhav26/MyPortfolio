<template>
  <div id="app">
    <div class="container">
      <Header></Header>
    </div>
       <!-- <HelloWorld/> -->
       <transition name='slide' mode="out-in">
       <router-view/>
       </transition>
       <!-- <p class="float-right mr-2">
        Trademark Rahul Jadhav
        <br>
         Developed Using Vuejs
       </p> -->
    </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
import HeaderVue from './components/Header.vue'

export default {
  name: 'app',
  components: {
    // HelloWorld,
    Header: HeaderVue
  },
  created () {
    this.$store.dispatch('initProjects')
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /* text-align: center; */
  color: #2c3e50;
  /* margin-top: 60px; */
}
@import url('https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap');

.slide-enter-active{
animation: slide-in 200ms ease-out forwards;
}
.slide-enter-leave{
animation: slide-out 200ms ease-out forwards;
}
@keyframes slide-in {
    from{
        transform: translateY(-30px);
        opacity:0;
    }
    to{
        transform: translateY(0);
        opacity: 1;
    }
}
@keyframes slide-out {
    from{
        transform:translateY(0);
        opacity: 1;
    }
    to{
        transform:translateY(-30px);
        opacity:0;
    }
}

</style>
