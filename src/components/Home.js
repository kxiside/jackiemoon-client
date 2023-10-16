import { Container, Card } from "react-bootstrap"
import { Link } from "react-router-dom"
import "./Style/Home.css"

const Home = (props) => {
	 const { msgAlert, user } = props

	return (
		<>
		<Container className='mx-auto' style={{ textAlign: 'center', margin: 40}}>
			<Card.Header><h1>Welcome to the showcase!</h1></Card.Header>
			<Link to={'/products'}>
				Click Here
			</Link>
		</Container>
		</>

	)
}

export default Home
