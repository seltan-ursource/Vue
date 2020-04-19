<template>
    <div>
        <label v-if="label">{{label}}</label>
        <select :value="value" @input="updateValue" v-bind="$attrs">
            <option v-for="option in options" :key="option">{{ option }}</option>
        </select>
    </div>
</template>

<script>
    export default {
        inheritAttrs: false,
        props:{
            options:{
                type: Array,
                required : true
            },
            label:{
                type : String,
                default : ''
            },
            value:[String, Number]
        },
        methods:{
            updateValue(product){
                this.$emit('input', product.target.value)
            }
        }
    }
</script>

<style lang="scss" scoped>

</style>
