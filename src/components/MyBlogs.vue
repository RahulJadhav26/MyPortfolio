<template>
<div>
  <h4>My BLOGs</h4>
  <b-card class="mt-4" v-for="(blog,index) in blogs[0]" :key= index :title="blog.text">
    <b-card-text>
      Some quick example text to build on the <em>card title</em> and make up the bulk of the card's
      content.
      {{index}}
    </b-card-text>
    <div class="float-right">
      <b-button @click="deleteBlog(index)"  class="m-2" variant="outline-danger"><b-icon icon="trash"></b-icon> Delete</b-button>
      <b-button variant="outline-warning"><b-icon icon="pencil-square"></b-icon> Edit</b-button>
    </div>

  </b-card>
</div>
</template>

<script>
import BlogService from '../services/BlogService'
export default {
  data () {
    return {
      blogs: []
    }
  },
  mounted () {
    BlogService.getBlog().then((response) => {
      this.blogs = []
      this.blogs.push(response.data)
      console.log(response)
    })
  },
  methods: {
    deleteBlog (blog) {
      if (confirm('Are you sure you want to Delete')) {
        BlogService.deleteBlog(blog).then((response) => {
          console.log('deleted')
        })
        this.getBlog()
      }
    },
    getBlog () {
      console.log('called')
      BlogService.getBlog().then((response) => {
        this.blogs = []
        this.blogs.push(response.data)
      })
    }
  }
}
</script>

<style>

</style>
