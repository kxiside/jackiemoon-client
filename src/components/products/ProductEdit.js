import React, { useState } from 'react'
import { Modal } from 'react-bootstrap'
import ProductForm from '../shared/ProductForm'
import messages from '../shared/AutoDismissAlert/messages'

const ProdEdit = (props) => {
    const { user, show, handleClose, editProduct, msgAlert} = props

    const [product, setProduct] = useState(props.product)

    const onChange = (e) => {
        e.persist()

        setProduct(prev => {
            const newName = e.target.name
            let newValue = e.target.value

            if (e.target.type === 'number') {
                newValue = parseInt(e.target.value)
            }

            if (e.target.type === 'file') {
                newValue = e.target.files[0]
            }

            const updatedProd = { [newName] : newValue }

            return {
                ...prev, ...updatedProd
            }
        })
    }

    return (
        <Modal show={show} onHide={handleClose}>
            <Modal.Header />
            <Modal.Body>
                <ProductForm 
                    prod={product}
                    handleChange={onChange}
                    handleSubmit={null}
                    heading="Update Design"
                />
            </Modal.Body>
        </Modal>
    )
}

export default ProdEdit