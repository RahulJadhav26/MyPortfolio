<template>
<div>
  <div class="container">
    <div class="header mt-4">
       <h1>My Final Year Project(VIStul) </h1>
       <br>
       <h3> Title:"Dynamic Pricing Intelligence for E-commerce Market Using KNN" </h3>
    </div>
  </div>
  <div class="header mt-5">
          <h3>NEED FOR IT.....</h3>
          <iframe class="videos" width="500" height="300" src="https://www.youtube.com/embed/X8iu97QEHhI" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
      </div>

    <div class="content"  >
      <b-row >
        <b-col sm ='12' md ='5'>
          <img style=" margin:10px auto ;width:100%; height:694px; border-radius: 1.2rem; border:2px solid rgb(255, 217, 0);" src="../assets/proposedSys.png" alt="not found">
        </b-col>
        <b-col sm ='12' md ='7'>
          <div class= 'abstract mt-3'>
             <h3>Abstract</h3>
             <p>A new phase of business “E-commerce” has arrived, and yet, there are certain crude old problems we still face — finding primary competitors, Keeping track of market, acquisition of profitability. Traditionally manual track of prices, stocks and market trends of its competitors. Since with the advancement in the technology and higher demands of E-commerce transactions staying always at the edge of the curve is critical. One needs to be periodically updated with the market trends. With the increased competition and reliance on instant shopping by the customers , one needs to track its own products with the  products sold by its primary competitors targeting its own primary audience .This brings in a proposed system as a solution for increasing the efficiency of business decisions. By developing a crawler for e-commerce website(primary competitors) which crawls and scrapes the required parameters for comparison of products and compares each of the client-side’s product with same product sold in the market using KNN algorithm for reducing the human effort to analyze each of its product sold in the market. With the growing market trends and digitization in every sector, e-commerce websites have created a tremendous growth in terms of shopping which further leaded to competition within the markets. Main objective is to automate the entire system where the crawling and scraping of data happens in real time. The program of matching the product with the crawled data of market will run from the instance created on the cloud in the real time so as to reduce the infrastructure constraints. This will render and will display the complete analysis study of bulk data crawled from its competitors E-commerce website and will help in improve business decisions.</p>
          </div>
        </b-col>
      </b-row>
      <b-row >
        <b-col>
          <img style="margin: 100px auto; height:700px" src="../assets/pipeline.png" alt="Production Pipeline">
        </b-col>
      </b-row>
      <div class="container mt-5">
        <h1 class="header">Videos of Features</h1>
      <b-row class="mt-5" >
            <b-col md='6'>
             <b-card style="border:none;" no-body >
                    <iframe class="videos"  width="550" height="350" src="https://www.youtube.com/embed/VkV51Ga9fWw" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

              </b-card>
            </b-col>
            <b-col md='6'>
             <b-card style="border:none;" no-body >

                   <iframe class="videos" width="550" height="350" src="https://www.youtube.com/embed/7xC3Egey6fk" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
              </b-card>
            </b-col>
      </b-row>
      </div>

     <div class="Resources">
        <div class="header">
          <h1>Resources</h1>
      </div>
    </div>

    </div>

</div>
</template>

<script>
export default {

}
</script>

<style scoped>
.header{
  text-align: center;
  text-decoration: underline  #404040;

}
.content{
  padding:100px;
  border-radius: 1.2rem;
}
.abstract{
 text-align: left;
 width:90%;
}
.videos{
  border-radius:1.2em;
}
.videos:hover{
  border:3px solid rgb(255, 217, 0)
}
.Resources{
  margin: 100px;
}
</style>
