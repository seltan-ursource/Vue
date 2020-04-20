export const formFieldMixin ={
    inheritAttrs: false,
    props:{
        label:{
            type: String,
            default: ''
        },
        value: [String, Number]
    },
    methods:{
        updateValue(product){
            this.$emit('input', product.target.value)
        }
    }
}