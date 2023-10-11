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
// Update -> Change Product
// Delete -> Remove Product