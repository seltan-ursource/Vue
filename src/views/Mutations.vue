<template>
  <div>
    <h1>Mutations & Actions Example</h1>
    <form @submit.prevent="createProduct">
      <label>Select a category</label>
      <select v-model="product.category">
        <option v-for="cat in categories" :key="cat">{{ cat }}</option>
      </select>
      <h3>Name & describe your product</h3>
      <div class="field">
        <label>Title</label>
        <input v-model="product.name" type="text" placeholder="Add an product title" />
      </div>
      <div class="field">
        <label>Description</label>
        <input v-model="product.description" type="text" placeholder="Add a description" />
      </div>
      <div class="field">
        <label>Price</label>
        <input v-model="product.price" type="text" placeholder="Add product Price" />
      </div>
      <h3>Product Brand?</h3>
      <div class="field">
        <label>Brand</label>
        <input v-model="product.brand" type="text" placeholder="Add product Brand" />
      </div>
      <input type="submit" class="button -fill-gradient" value="Submit" />
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      product: this.createNewProduct(),
      categories: this.$store.state.categories
    };
  },
  methods: {
      createProduct(){
          this.$store.dispatch('createProduct', this.product)
      },
    createNewProduct() {
      return {
        name: '',
        price: '',
        description: '',
        brand: '',
        category: '',
        image: ''
      };
    }
  },
  actions :{
      createProduct() {
        this.$store.dispatch('createProduct', this.product)
    }
  }
};
</script>

<style lang="scss" scoped>
</style>