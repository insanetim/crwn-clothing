import { SpinnerContainer, SpinnerOverlay } from './styled'

const Spinner = () => {
  return (
    <SpinnerOverlay data-testid='spinner'>
      <SpinnerContainer />
    </SpinnerOverlay>
  )
}

export default Spinner
