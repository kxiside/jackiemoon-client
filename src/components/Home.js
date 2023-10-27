
import { Link } from "react-router-dom"
import "./Style/Home.css"
import { Parallax, ParallaxLayer } from "@react-spring/parallax"

const Home = (props) => {
	 const { msgAlert, user } = props

	return (
		<div>
			<Parallax pages ={2} style={{ top: '0', left: '0' }} class="animation">
				<ParallaxLayer offset={0} speed={2.5}>
					<div class="animation_layer parallax" id=""></div>
				</ParallaxLayer>
				<ParallaxLayer offset={0} speed={2.5}>
					<div class="animation_layer parallax" id=""></div>
				</ParallaxLayer>
			</Parallax>
		</div>

	)
}

export default Home
