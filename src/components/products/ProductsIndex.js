import { useState, useEffect } from 'react'
import { Card } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { getProducts } from '../../api/product'
import messages from '../shared/AutoDismissAlert/messages'

const cardContainerLayout = {
    display: 'flex',
    flexFlow: 'column wrap',
    justifyContent: 'center'
}

const ProductsIndex = (props) => {
    const [products, setProducts] = useState(null)
    const [error, setError] = useState(false)
    const { msgAlert } = props

    useEffect(() => {
        getProducts()
            .then(res => {
                console.log('the products', res.data.products)
                setProducts(res.data.products)
            })
            .catch(err => {
                msgAlert({
                    heading: 'error getting product',
                    message: messages.indexProductsFailure,
                    variant: 'danger'
                })
                setError(true)
            })
    }, [])

    if (error) {
        return <p>Error</p>
    }

    if (!products) {
        return <p>Loading...</p>
    } else if (products.length === 0) {
        return <p>No designs yet! go create something!</p>
    }

    const productCards = products.map(product => (
        <Card key={ product._id } style={{ width: '35%', margin: 6}}>
            <Link to={`/products/${product._id}`} className='btn'>
            <Card.Img variant="top" src="{product. image}" />
            <Card.Header>
                
                    { product.name }
                
            </Card.Header>
            <Card.Body>
                <Card.Text>Category: { product.category}</Card.Text>
                <Card.Text>Price: ${ product.price}</Card.Text>
            </Card.Body>
            </Link>
        </Card>
        
        
    ))
    return (
        <div className="container-md" style= { cardContainerLayout}>
            { productCards }
        </div>
    )
}

export default ProductsIndex