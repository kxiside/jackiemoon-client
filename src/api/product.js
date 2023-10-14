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
export const editProduct = (user, updateProd) => {
    return axios({
        url: `${apiUrl}/products/${updateProd._id}`,
        method: 'PATCH',
        headers: {
            Authorization: `Token token=${user.token}`
        },
        data: { product: updateProd }
    })
}

// Delete -> Remove Product