<template>
  <div>
 <b-card title="Add Blog" sub-title="Ponder yourself.....">
<b-card-text>
      <b-form-textarea
      id="textarea"
      v-model="text"
      placeholder="Enter something..."
      rows="3"
      max-rows="6"
    ></b-form-textarea>
</b-card-text>
<b-row>
    <b-col>
        <b-button @click="post()" variant="outline-primary">Post..!!</b-button>
    </b-col>
    <b-col sm="2">
        <label class="float-right">Font-Size</label>
    </b-col>
    <b-col sm="2">
        <b-form-select v-model="size"  size="sm" :options="options"></b-form-select>
    </b-col>
    <b-col sm="2">
        <label class="float-right">Font Color</label>
    </b-col>
    <b-col sm="2">
        <b-form-input v-model="color" size="sm" type="color"></b-form-input>
    </b-col>
    <b-col sm="4">
    <b-form-file
      class="mt-4"
      v-model="file"
      :state="Boolean(file)"
      placeholder="Choose a file or drop it here..."
      drop-placeholder="Drop file here..."
    ></b-form-file>
    <div class="mt-3">Selected file: {{ file ? file.name : '' }}</div>
    </b-col>
    <b-col class="mt-4" sm="2">
       <b-button @click="file1()" variant="outline-primary">Upload</b-button>
    </b-col>
</b-row>
</b-card>

<div class="pb-5">
    <b-card  class="mt-5 ">
        <h4 class="text-center" style="color:#007bff;">Review your Blog</h4>
        <div class="">

            <b-img class="img-thumbnail" center rounded v-if="Boolean(imageURL)" :src="imageURL" alt="" fluid style="height:500px; "></b-img>
            <pre class="mt-4" :style = "{fontSize: size + 'px', color: color}">{{text}}</pre>
     </div>
        <div class="float-right">
            <b-button class="mr-4" variant="outline-warning">Erase</b-button>
            <b-button variant="outline-primary">Confirm</b-button>

        </div>
    </b-card>
    </div>
  </div>
</template>

<script>
import BlogService from '../services/BlogService'
export default {
  data () {
    return {
      text: '',
      size: 15,
      imageURL: '',
      file: null,
      color: '',
      options: [
        { value: null, text: 'Select size' },
        { value: 13, text: '13' },
        { value: 14, text: '14' },
        { value: 15, text: '15' },
        { value: 16, text: '16' },
        { value: 17, text: '17' },
        { value: 18, text: '18' },
        { value: 19, text: '19' },
        { value: 20, text: '20' },
        { value: 21, text: '21' },
        { value: 22, text: '22' },
        { value: 23, text: '23' },
        { value: 24, text: '24' },
        { value: 25, text: '25' },
        { value: 26, text: '26' },
        { value: 27, text: '27' },
        { value: 28, text: '28' },
        { value: 29, text: '29' },
        { value: 30, text: '30' }

      ]
    }
  },
  computed: {
    fontcolor () {
      return this.color
    },
    fontsize () {
      return this.size
    }
  },
  methods: {
    post () {
      var obj = {
        imageName: this.file.name,
        ext: this.file.name.slice(this.file.name.lastIndexOf('.')),
        text: this.text
      }
      console.log(obj)
      BlogService.newBlog(obj).then((response) => {
        console.log(response.data)
      })
    },
    file1 (event) {
      console.log(this.file + ' file')
      const reader = new FileReader()
      if (this.file) {
        reader.readAsDataURL(this.file)
        console.log(this.file)

        reader.addEventListener('load', () => {
          this.imageURL = reader.result
          console.log('inside')
        })
      }
    }
  }
}
</script>

<style>

</style>
