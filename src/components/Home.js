import ProductsIndex from "./products/ProductsIndex"
import { Container, Card } from "react-bootstrap"
import { Link } from "react-router-dom"

const Home = (props) => {
	 const { msgAlert, user } = props

	return (
		<>
		<Container style={{ textAlign: 'center' }}>
			<Card.Header><h1>Welcome to the showcase!</h1></Card.Header>
			<Link to={'/products'}>
				Showcase
			</Link>
		</Container>
		</>

	)
}

export default Home
