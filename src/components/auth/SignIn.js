import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Card } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { signIn } from '../../api/auth'
import { signUp } from '../../api/auth'
import messages from '../shared/AutoDismissAlert/messages'

import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

const SignIn = (props) => {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    const navigate = useNavigate()

	const onSignIn = (event) => {
		event.preventDefault()
        console.log('the props', props)
		const { msgAlert, setUser } = props

        const credentials = {username, password}

		signIn(credentials)
			.then((res) => {
                setUser(res.data.user)
                const userJSON = JSON.stringify(res.data.user)
                localStorage.setItem('user', userJSON)
            })
			.then(() =>
				msgAlert({
					heading: 'Sign In Success',
					message: messages.signInSuccess,
					variant: 'success',
				})
			)
			.then(() => navigate('/'))
			.catch((error) => {
                setUsername('')
                setPassword('')
				msgAlert({
					heading: 'Sign In Failed with error: ' + error.message,
					message: messages.signInFailure,
					variant: 'danger',
				})
			})
	}

    return (
        <Card
        bg="info"
        text="black">
        <div className='row'>
            <div className='col-sm-10 col-md-8 mx-auto mt-5'>
                <h3>Sign In</h3>
                <Form 
                onSubmit={onSignIn}>
                    <Form.Group controlId='username'>
                        <Form.Label>Username</Form.Label>
                        <Form.Control
                            required
                            type='username'
                            name='username'
                            value={username}
                            placeholder='Enter username'
                            onChange={e => setUsername(e.target.value)}
                        />
                    </Form.Group>
                    <Form.Group controlId='password'>
                        <Form.Label>Password</Form.Label>
                        <Form.Control
                            required
                            name='password'
                            value={password}
                            type='password'
                            placeholder='Password'
                            onChange={e => setPassword(e.target.value)}
                        />
                    </Form.Group>
                    <Button variant='primary' type='submit'>
                        Submit
                    </Button>
                    <p>
                        Don't have an account? <Link to="/sign-up">Create account</Link>
                    </p>
                </Form>
            </div>
        </div>
        </Card>
    )
}

export default SignIn
