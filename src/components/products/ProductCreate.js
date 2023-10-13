import { useState } from 'react'
import { createProduct } from '../../api/product'
import { createProductSuccess, createProductFailure } from '../shared/AutoDismissAlert/messages'
import { Container, Card, Header } from 'react-bootstrap'
import ProductForm from '../shared/ProductForm'
import { useNavigate } from 'react-router-dom'

const ProductCreate = (props) => {
    const { user, msgAlert} = props
    const navigate = useNavigate()
    const [prod, setProd] = useState({
        name: '',
        description: '',
        category: '',
        price: '',
        image: ''
    })


    const onChange = (e) => {
        e.persist()

        setProd(prev => {
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

    const onFile = async (e) => {
        const file = e.target.files
        console.log(file)
    }

    const onSubmit = (e) => {
        e.preventDefault()

        createProduct(user, prod)
            .then(res => { navigate(`/products/${res.data.product._id}`)})
            .then(() => {
                msgAlert({
                    heading: 'Perfect!',
                    message: createProductSuccess,
                    variant: 'success'
                })
            })
            .catch(() => {
                msgAlert({
                    heading: 'Oops!',
                    message: createProductFailure,
                    variant: 'danger'
                })
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
                            handleSubmit={onSubmit}
                            handleFile={onFile}
                            heading="Add a New Design"
                        />
                    </Card.Header>
                </Card>
            </Container>
        </>
    )
}

export default ProductCreate