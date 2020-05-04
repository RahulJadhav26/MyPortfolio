<template>
  <div class='container mt-4 mb-4'>
      <b-card>
          <template v-slot:header>
            <b-nav card-header tabs>
                <b-nav-item to="/blogs" exact exact-active-class="active">New</b-nav-item>
                <b-nav-item to="/blogs/myblogs" exact exact-active-class="active">My Blogs</b-nav-item>
            </b-nav>
            </template>
            <b-card-body>
      <!-- Child route gets rendered in <router-view> or <nuxt-child> -->
          <transition name='slide' mode="out-in">
            <router-view></router-view>
          </transition>
            </b-card-body>
      </b-card>
  </div>
</template>

<script>
// import NewBlogVue from './NewBlog.vue'
export default {
}
</script>

<style scoped>
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
