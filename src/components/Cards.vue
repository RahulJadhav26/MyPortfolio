<template>
  <CCol lg="4" >
      <b-card-group deck >
             <a  href="#" @click="modalShow = !modalShow"> <b-card class="cards title" border-variant="dark" style="margin:40px; color:#007bff"  :title = card.title>
              <b-card-text class="text" >
                    {{card.desc}}
                </b-card-text>
                <b-card-text class="small text-muted">Worked During: {{card.date}}</b-card-text>

                 <b-modal v-model="modalShow">
                     {{card.title}}
                 </b-modal>
            </b-card></a>

      </b-card-group>
    </CCol>
</template>
<script>
export default {
  props: [
    'card',
    'perPage'
  ],
  data () {
    return {
      modalShow: false
    }
  }
}
</script>
<style scoped>
.cards{
    height:250px;
}
.text{
    color:#404040;
}
h4{
  color:rgb(255, 217, 0);
}
h4:hover{
    color:rgb(255, 217, 0) !important;
    text-decoration-line: underline;
    text-shadow: 0 0 3px black;
}

a:hover{
  text-decoration: none !important;

}

</style>
