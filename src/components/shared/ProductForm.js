import { Form, Button, Container } from 'react-bootstrap'

const ProductForm = (props) => {
    const { prod, handleChange, handleSubmit, heading } = props

    return (
        <Container className="justify-content-center">
            <h2>{heading}</h2>
            <Form onSubmit={handleSubmit}>
                <Form.Group className="m-3">
                    <Form.Label>Name</Form.Label>
                    <Form.Control 
                        placeholder="Whats the name of your creation?"
                        id="name"
                        name="name"
                        value={prod.name}
                        onChange={handleChange}
                    />
                </Form.Group>
                <Form.Group className="m-3">
                    <Form.Label>Description</Form.Label>
                    <Form.Control 
                        placeholder="Please give a short description"
                        id="description"
                        name="description"
                        value={prod.description}
                        onChange={handleChange}
                    />
                </Form.Group>
                <Form.Group className="m-3">
                    <Form.Label>Price</Form.Label>
                    <Form.Control
                        type="number" 
                        placeholder="Cash value"
                        id="price"
                        name="price"
                        value={prod.price}
                        onChange={handleChange}
                    />
                </Form.Group>
                <Form.Group className="m-3">
                    <Form.Select aria-label="Default select example">
                        <option>Select a catergory</option>
                        <option value="Art">Art</option>
                        <option value="Accessories">Accessories</option>
                        <option value="Clothing">Clothing</option>
                    </Form.Select>
                </Form.Group>
                <Form.Group controlId="formFile" className="mb-3">
                    <Form.Label>Default file input example</Form.Label>
                    <Form.Control 
                    type="file"
                    placeholder="Insert File" 
                    />
                </Form.Group>
                <Button className="m-2" type="submit">Submit</Button>
            </Form>
        </Container>
    )
}

export default ProductForm