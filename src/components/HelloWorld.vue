<template>
  <div>
    <CRow>
      <CCol sm='12' md="12">
       <img style='width:90%;height:80%;' rounded  src="../assets/Tagline.jpeg" alt="Image 1">
    </CCol>
    </CRow>
    <CRow>
      <CCol>
        <h3 class="underline">Project Library</h3>
      </CCol>
    </CRow>
    <CRow>

        <app-Card class="slide-enter-active" v-for="card in projects.slice((currentpage-1)*3,currentpage*3)"  :key="card.id" :card="card"></app-Card>

      </CRow>
<b-pagination v-model="currentpage" :items="this.$store.state.projects" pills :per-page="perPage" :total-rows="rows" class="ml-5"></b-pagination>
  </div>
</template>

<script>
import CardsVue from './Cards.vue'

export default {
  components: {
    appCard: CardsVue
  },
  computed: {
    rows () {
      return this.$store.getters.projects.length
    },
    projects () {
      return this.$store.getters.projects
    }
  },
  data () {
    return {
      currentpage: 1,
      perPage: 3
    }
  }
}
</script>

<style scoped>
.PresentInfo{
  margin-top:20px;
  width: 70%;
  height: 100%;
  background-color: rgb(255, 217, 0);
  text-align: center;
}
img{
  margin:50px;
  display:flex;
  width:300px;
  height:400px;
}
.Highlight{
  color:#007bff;
}
.underline{
  border-bottom:1px solid gray;
  width: 25%;
  margin:40px;
}
@import url('https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap');

.slide-enter-active{
animation: slide-in 500ms ease-out forwards;
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
