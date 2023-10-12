import apiUrl from '../apiConfig'
import axios from 'axios'

// Read -> Index
export const getProducts = () => {
    return axios(`${apiUrl}/products`)
}

// Read -> Show
export const getProductId = (id) => {
    return axios(`${apiUrl}/products/${id}`)
}

// Create -> Add Product
export const createProduct = (user, newProd) => {
    return axios({
        url: `${apiUrl}/products`,
        method: 'POST',
        headers: {
            Authorization: `Token token=${user.token}`
        },
        data: { product: newProd }
    })
}
// Update -> Change Product
// Delete -> Remove Product