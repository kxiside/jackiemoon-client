import React, { useState } from 'react'
import { Modal } from 'react-bootstrap'
import ProductForm from '../shared/ProductForm'
import { editProduct } from '../../api/product'
import {updateProductSuccess, updateProductFailure} from '../shared/AutoDismissAlert/messages'

const ProdEdit = (props) => {
    const { user, show, handleClose, editProduct, msgAlert, triggerRefresh} = props

    const [product, setProduct] = useState(props.product)
    const [prod, setProd] = useState({
        name: '',
        description: '',
        category: '',
        price: '',
        image: ''
    })

    const onChange = (e) => {
        e.persist()

        setProduct(prev => {
            const newName = e.target.name
            let newValue = e.target.value

            if (e.target.type === 'number') {
                newValue = parseInt(e.target.value)
            }

            const updatedProd = { [newName] : newValue }

            return {
                ...prev, ...updatedProd
            }
        })
    }

    const onFile = (e) => {
        const file = e.target.files[0]
        setImage(file)
    }

    const setImage = (file) => {
        const reader = new FileReader()
        reader.readAsDataURL(file)
        reader.onloadend = () => {
            setProd(reader.result)
        }
    }

    const onSubmit = (e) => {
        e.preventDefault()

        editProduct(user, product)
        .then(() => handleClose())
        .then(() => {
            msgAlert({
                heading: 'Nice work!',
                message: updateProductSuccess,
                variant: 'success'
            })
        })
        .then(() => triggerRefresh())
        .catch(() => {
            msgAlert({
                heading: 'Error occured',
                message: updateProductFailure,
                variant: 'danger'
            })
        })

    }

    return (
        <Modal show={show} onHide={handleClose}>
            <Modal.Header />
            <Modal.Body>
                <ProductForm 
                    prod={product}
                    handleChange={onChange}
                    handleSubmit={onSubmit}
                    handleFile={onChange}
                    heading="Update Design"
                />
            </Modal.Body>
        </Modal>
    )
}

export default ProdEdit