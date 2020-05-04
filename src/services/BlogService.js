import Api from '@/services/api.js'

export default {
  newBlog (blog) {
    return Api().post('blogs', blog)
  },
  getBlog () {
    return Api().get('myblogs')
  },
  deleteBlog (blog) {
    console.log(blog)
    return Api().delete('myblogs/' + blog)
  }
}
