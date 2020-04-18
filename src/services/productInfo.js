import Axios from "axios";
import Nprogress from"nprogress";

const apiClient = Axios.create({
    baseURL: `http://localhost:3000`,
    withCredentials: false,
    headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
    }
})

export default {
    getProduct() {
        return apiClient.get('/products')
    },
    postProduct(product) {
        return apiClient.post('/products', product)
    }
}