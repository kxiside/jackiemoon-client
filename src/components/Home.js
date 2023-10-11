import ProductsIndex from "./products/ProductsIndex"
import { Container } from "react-bootstrap"

const Home = (props) => {
	 const { msgAlert, user } = props

	return (
		<Container>
			<h2>All Designs</h2>
			<ProductsIndex msgAlert={msgAlert} />
		</Container>
	)
}

export default Home
