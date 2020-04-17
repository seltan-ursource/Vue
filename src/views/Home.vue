<template>
  <div class="home">
    <h1>HP Laptops</h1>
    <div v-for="product in products" :key="product.id" class="product-details">
      <div class="Product-stats">
        <div>
          <span>{{product.name}}</span>
        </div>
        <div>
          <img class="materialboxed" :src="product.image" width="200">
        </div>
        <div>
          <span class="Brand"><b>Brand:</b> {{product.brand}}</span>
        </div>
        <div>
          <span class="Category"><b>Category:</b> {{product.category}}</span>
        </div>
        <div>
          <span class="location"><b>Description:</b> {{product.description}}</span>
        </div>
        <div>
          <span class="Price"><b>Price:</b> {{product.price}}</span>
        </div>
      </div><br>
  </div>
  </div>
</template>

<script>
import axios from 'axios'
export default{
  data(){
    return{
      products:[]
    }
  },
  created(){
    axios
    .get('http://localhost:3000/products')
    .then(response =>{
      console.log(response.data);
      this.products = response.data
    })
    .catch(error =>{
    console.log('error' +error.response);
    })
  
  }
}
</script>