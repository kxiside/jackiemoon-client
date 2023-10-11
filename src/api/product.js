import apiUrl from '../apiConfig'
import axios from 'axios'

// Read -> Index
export const getProducts = () => {
    return axios(`${apiUrl}/products`)
}

// Read -> Show
// Create -> Add Product
// Update -> Change Product
// Delete -> Remove Product