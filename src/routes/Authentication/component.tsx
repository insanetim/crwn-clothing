import SignInForm from 'src/components/SignInForm'
import SignUpForm from 'src/components/SignUpForm'
import { AuthenticationContainer } from './styled'

const Authentication = () => {
  return (
    <AuthenticationContainer>
      <SignInForm />
      <SignUpForm />
    </AuthenticationContainer>
  )
}

export default Authentication
