import { useState } from 'react'
import { createProduct } from '../../api/product'
import { createProductSuccess, createProductFailure } from '../shared/AutoDismissAlert/messages'
import { Container, Card, Header } from 'react-bootstrap'
import ProductForm from '../shared/ProductForm'

const ProductCreate = (props) => {
    const { user, msgAlert} = props
    const [prod, setProd] = useState({
        name: '',
        description: '',
        category: '',
        price: '',
        image: '',
    })

    const onChange = (e) => {
        e.persist()

        setProd(prev => {
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

    return (
        <>
            <Container>
                <Card>
                    <Card.Header>
                        <ProductForm 
                            prod={prod}
                            handleChange={onChange}
                            handleSubmit={null}
                            heading="Add a New Design"
                        />
                    </Card.Header>
                </Card>
            </Container>
        </>
    )
}

export default ProductCreate