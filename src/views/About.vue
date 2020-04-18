<template>
  <div>
    <h1>Add a new Product</h1>
    <h3>{{product.name}}</h3>
    <h3>{{product.id}}</h3>
    <p>There are mainly {{cateroyLength}} Types of Products</p>
    <ol>
      <li v-for="category in categories" :key="category">{{category}}</li>
    </ol>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  computed: mapState({
    cateroyLength() {
      return this.$store.state.categories.length
    },
    ...mapState(["categories", "product"])
  })
};
</script>

<style lang="scss" scoped>
</style>
