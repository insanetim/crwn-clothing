import { useState } from 'react'
import { useDispatch } from 'react-redux'

import { googleSignInStart, emailSignInStart } from 'src/store/user/actions'
import FormInput from '../FormInput'
import Button, { BUTTON_TYPE_CLASSES } from '../Button'
import { SignInContainer, Buttons } from './styled'

const defaultFormFields = {
  email: '',
  password: '',
}

const SignInForm = () => {
  const dispatch = useDispatch()
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
      dispatch(emailSignInStart(email, password))
      resetFormFields()
    } catch (error) {
      console.log('user sign in failed', error)
    }
  }

  const signInWithGoogle = async () => {
    dispatch(googleSignInStart())
  }

  return (
    <SignInContainer>
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

        <Buttons>
          <Button type='submit'>Sign In</Button>
          <Button
            type='button'
            buttonType={BUTTON_TYPE_CLASSES.google}
            onClick={signInWithGoogle}
          >
            Google sign in
          </Button>
        </Buttons>
      </form>
    </SignInContainer>
  )
}

export default SignInForm
