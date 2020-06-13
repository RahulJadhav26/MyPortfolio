<template>
  <div>
    <!-- <div class="container">
      <b-alert show variant="warning">Portfolio Under Development....!!</b-alert>
    </div> -->
    <CRow>
      <CCol sm='12' md="12">
       <img style='width:70%;height:100%;' class="rounded mx-auto d-block" rounded  src="../assets/Tagline.jpeg" alt="Image 1">
    </CCol>
    </CRow>
    <CRow>
    <b-navbar  class="sticky mx-auto">
      <div class="container">
        <b-nav  v-b-scrollspy:nav-scroller class=" shadow-lg" style="border-bottom:2px solid #404040;border-top:2px solid #404040; background-color:rgb(225, 173, 1); border-radius:1.2rem;">
            <b-nav-item href="#projectLibrary" active>Project Library</b-nav-item>
            <b-nav-item href="#Achievements">Achievements</b-nav-item>
            <b-nav-item href="#skills">Skills</b-nav-item>
            <b-nav-item href="#Qualifications">Qualifications</b-nav-item>
        </b-nav>
      </div>
    </b-navbar>
    </CRow>
    <div id="nav-scroller" style=" border-radius:1.2rem; border-top:1px solid #404040; margin:30px; position:relative; height:500px; overflow-y:scroll;">
    <CRow>
      <CCol id="projectLibrary">
        <h3  class="underline">PROJECT LIBRARY</h3>
      </CCol>
    </CRow>
    <CRow>

        <app-Card class="slide-enter-active" v-for="card in projects.slice((currentpage-1)*3,currentpage*3)"  :key="card.id" :card="card"></app-Card>

      </CRow>
<b-pagination   v-model="currentpage" :items="this.$store.state.projects" pills :per-page="perPage" :total-rows="rows" class="ml-5"></b-pagination>
    <CRow>
      <CCol id="Achievements">
        <h3  class="underline">ACHIEVEMENTS</h3>
        <b-row >
          <b-col md="6" sm="12" >
            <h5 class="underline">Technical and Implementation Excellent Paper Award</h5>
              <ul>
                <li class="mt-2">Awarded for Best Technical paper at  <a href="http://theconferenceworld.org/conference_album.php?al_id=289">WRFASE Conference</a> </li>
              </ul>
          </b-col>
          <b-col md="6" sm="12" >
            <h5 class="underline">Paper Publication at <a href="http://ijmas.iraj.in">IJMAS</a> </h5>
              <ul>
                <li class="mt-2">Title: Dynamic E-commerce Pricing Intelligence Using KNN </li>
              </ul>
          </b-col>
          <b-col md="6" sm="12" >
            <h5 class="underline">Err_404 2.0 Hackathon Competition</h5>
              <ul>
                <li class="mt-2">Selected in Top 11 out of 49 teams for Final Round</li>
                <li class="mt-2"><a href="https://drive.google.com/file/d/1Kx_uCjFKiqcrcA7Y23nt9WRIAy-CcbB6/preview">Partcipation Certificate</a></li>
              </ul>
          </b-col>
          <b-col md="6" sm="12" >
            <h5 class="underline">Music Cordinator of College</h5>
              <ul>
                <li class="mt-2">Managed all the Stage Performances(Inter and Intra) for Academic Year (2018-19)</li>
              </ul>
          </b-col>
        </b-row>
      </CCol>
    </CRow>
    <CRow>
      <CCol id="skills" >
        <h3  class="underline">SKILLS</h3>
        <b-row>
          <div class="container">
            <b-col>
              <p class="underline">Programing languages</p>
              <ul>
                <li class="mt-2">Python <b-progress value="75" variant="warning" striped :animated="animate"></b-progress></li>
                <li class="mt-2">JavaScript <b-progress value="95" variant="warning" striped :animated="animate"></b-progress></li>
                <li class="mt-2">Nodejs(runtime Environment)<b-progress value="88" variant="warning" striped :animated="animate"></b-progress></li>
              </ul>
          </b-col>
          <b-col>
              <p class="underline">Domain HandsOn Experience</p>
              <ul >
                <li class="mt-2">Web Development(Front End) Vuejs Developer <b-progress value="95" variant="warning" striped :animated="animate"></b-progress></li>
                <li class="mt-2">Machine Learning <b-progress value="65" variant="warning" striped :animated="animate"></b-progress></li>
                <li class="mt-2">REST API ( Web Servers using Nodejs )<b-progress value="80" variant="warning" striped :animated="animate"></b-progress></li>
                <li class="mt-2">Databases( Non Relational Databases: MongoDB, DynamoDB, Firebase Firestone )<b-progress value="90" variant="warning" striped :animated="animate"></b-progress></li>
                <li class="mt-2">Deployment on Cloud ( EC2, DynamoDB, VPC, S3, Route53, CloudFront, Lambda )<b-progress value="75" variant="warning" striped :animated="animate"></b-progress></li>
              </ul>
          </b-col>
          </div>
        </b-row>
      </CCol>
    </CRow>
    <CRow>
      <CCol id="Qualifications" md="12" >
        <h3  class="underline">QUALIFICATIONS</h3>
        <div class="container">
        <b-row>
          <b-col md="6" >
            <p class="underline">Bachelors of Engineering</p>
              <ul>
                <li class="mt-2">Branch : Information and Technology</li>
                <li class="mt-2">College: Vidyalankar Institute of Technology </li>
                <li class="mt-2">Mumbai University</li>
                <li class="mt-2"> CGPA:7.43 </li>
              </ul>
          </b-col>
          <b-col md = "6">
            <p class="underline">Higher Secondary Education</p>
              <ul>
                <li class="mt-2">Stream: Science (Vocational subject: CS)</li>
                <li class="mt-2">College: PACE junior Science College</li>
                <li class="mt-2">Percentage:75.28%</li>
              </ul>
          </b-col>
        </b-row>
        </div>
      </CCol>
    </CRow>
  </div>
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
      perPage: 3,
      animate: true
    }
  }
}
</script>

<style scoped>
.nav-link{
  color:#404040!important;
}
.nav-link:hover{
  color:blanchedalmond!important;
}
.PresentInfo{
  margin-top:20px;
  width: 70%;
  height: 100%;
  background-color: rgb(225, 173, 1);
  text-align: center;
}
img{
  /* margin:50px; */
  display:flex;
  width:300px;
  height:400px;
}
.Highlight{
  color:#007bff;
}
.underline{
  text-decoration: underline;
  margin:20px 30px 0px 20px;
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
