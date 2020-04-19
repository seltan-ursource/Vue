<template>
  <div>
    <h1>Mutations & Actions Example</h1>
    <form @submit.prevent="createProduct">
      <BaseSelect label="Select a category" :options="categories" v-model="product.cqtegory"/>
      <h3>Name & describe your product</h3>
      <BaseInput label="Title" v-model="product.name"  type = "text" placeholder="Enter the Product Name" class="field"/>
      <BaseInput label="Description" v-model="product.description"  type = "text" placeholder="Add a description" class="field"/>
      <BaseInput label="Price" v-model="product.price"  type = "text" placeholder="Add product Price" class="field"/>
      <h3>Product Brand?</h3>
      <BaseInput label="Brand" v-model="product.brand"  type = "text" placeholder="Add product Brand" class="field"/>
      <input type="submit" value="Submit" />
    </form>
  </div>
</template>

<script>
import BaseInput from "../components/BaseInput";
import BaseSelect from "../components/BaseSelect";
export default {
  name: 'ParentComponent',
  components: {
    BaseInput,
    BaseSelect
  },
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