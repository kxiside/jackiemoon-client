import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { Container, Card } from 'react-bootstrap'
import messages from '../shared/AutoDismissAlert/messages'
import { getProductId } from '../../api/product'
import LoadingScreen from '../shared/load'

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
        return <LoadingScreen />
    }
    
    return (
        <>
            <Container className='m-2'>
                <Card>
                    <Card.Img variant="top" src="" />
                    <Card.Header>{ product.name }</Card.Header>
                    <Card.Body>
                        <Card.Text>
                            <div>Description: { product.description }</div>
                        </Card.Text>
                    </Card.Body>
                </Card>
            </Container>
        </>
    )
}

export default ProductShow