import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { Container, Card } from 'react-bootstrap'
import messages from '../shared/AutoDismissAlert/messages'
import { getProductId } from '../../api/product'

const ProductShow = (props) => {
    const [product, setProduct] = useState(null)
    const { id } = useParams()
    const { user, msgAlert } = props

    useEffect(() => {
        getProductId(id)
            .then(res => setProduct(res.data.product))
            .catch(err => {
                msgAlert({
                    heading: 'Error',
                    message: messages.showProductFailure,
                    variant: 'danger'
                    
                })
            })
    }, [])

    if(!product) {
        return <p>Loading...</p>
    }

    return (
        <>
            <Container className='m-2'>
                <Card>
                    <Card.Header>{ product.name }</Card.Header>
                </Card>
            </Container>
        </>
    )
}

export default ProductShow