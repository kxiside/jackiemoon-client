import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { Container, Card, Button} from 'react-bootstrap'
import messages from '../shared/AutoDismissAlert/messages'
import { getProductId, editProduct } from '../../api/product'
import LoadingScreen from '../shared/load'
import ProdEdit from './ProductEdit'

const ProductShow = (props) => {
    const [product, setProduct] = useState(null)
    const [editModal, setEditModal] = useState(false)
    const [updated, setUpdated] = useState(false)
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
                    <Card.Footer>
                        {
                          product.owner && user && product.owner.id === user.id
                          ?
                          <>
                            <Button 
                            className="m-2"
                             variant="link"
                             onClick={() => setEditModal(true)}
                             >Update</Button>
                            <Button className="m-2" variant="link">Delete</Button>
                          </>  
                          : null
                        }
                    </Card.Footer>
                </Card>
            </Container>
            <ProdEdit 
                user={user}
                show={editModal}
                editProduct={editProduct}
                handleClose={() => setEditModal(false)}
                product={product}
                msgAlert={msgAlert}
                triggerRefresh={() => setUpdated(prev => !prev)}
                
            />
        </>
    )
}

export default ProductShow