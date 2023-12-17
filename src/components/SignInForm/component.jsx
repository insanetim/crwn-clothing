import { useState } from 'react'

import {
  signInWithGooglePopup,
  signInAuthUserWithEmailAndPassword,
} from '../../utils/firebase'

import FormInput from '../FormInput'
import Button from '../Button'
import './styles.scss'

const defaultFormFields = {
  email: '',
  password: '',
}

const SignInForm = () => {
  const [formFields, setFormFields] = useState(defaultFormFields)
  const { email, password } = formFields

  const handleChange = event => {
    const { name, value } = event.target

    setFormFields({ ...formFields, [name]: value })
  }

  const resetFormFields = () => {
    setFormFields(defaultFormFields)
  }

  const handleSubmit = async event => {
    event.preventDefault()

    try {
      await signInAuthUserWithEmailAndPassword(email, password)
      resetFormFields()
    } catch (error) {
      if (error.code === 'auth/invalid-credential') {
        alert('Wrong email or password')
      } else {
        console.log(error)
      }
    }
  }

  const signInWithGoogle = async () => {
    await signInWithGooglePopup()
  }

  return (
    <div className='sign-in-container'>
      <h2>Already have an account?</h2>
      <span>Sign in with your email and password</span>
      <form onSubmit={handleSubmit}>
        <FormInput
          label='Email'
          type='email'
          name='email'
          value={email}
          onChange={handleChange}
          required
        />

        <FormInput
          label='Password'
          type='password'
          name='password'
          value={password}
          onChange={handleChange}
          required
        />

        <div className='buttons-container'>
          <Button type='submit'>Sign In</Button>
          <Button
            type='button'
            buttonType='google'
            onClick={signInWithGoogle}
          >
            Google sign in
          </Button>
        </div>
      </form>
    </div>
  )
}

export default SignInForm
