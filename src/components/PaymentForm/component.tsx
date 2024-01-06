import { FormEvent, useState } from 'react'
import { useSelector } from 'react-redux'
import { StripeCardElement } from '@stripe/stripe-js'
import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js'

import { BUTTON_TYPE_CLASSES } from '../Button'
import { selectCartTotal } from 'src/store/cart/selectors'
import { selectCurrentUser } from 'src/store/user/selectors'
import { PaymentFormContainer, FormContainer, PaymentButton } from './styled'

const isValidCardElement = (
  card: StripeCardElement | null
): card is StripeCardElement => card !== null

const PaymentForm = () => {
  const stripe = useStripe()
  const elements = useElements()
  const amount = useSelector(selectCartTotal)
  const currentUser = useSelector(selectCurrentUser)
  const [isProcessingPayment, setIsProcessingPayment] = useState(false)

  const paymentHandler = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    if (!stripe || !elements) return

    setIsProcessingPayment(true)

    const response = await fetch('/.netlify/functions/create-payment-intent', {
      method: 'post',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ amount: amount * 100 }),
    }).then(res => res.json())

    const {
      paymentIntent: { client_secret },
    } = response

    const cardDetails = elements.getElement(CardElement)

    if (!isValidCardElement(cardDetails)) return

    const paymentResult = await stripe.confirmCardPayment(client_secret, {
      payment_method: {
        card: cardDetails,
        billing_details: {
          name: currentUser ? currentUser.displayName : 'Guest',
        },
      },
    })

    setIsProcessingPayment(false)

    if (paymentResult.error) {
      alert(paymentResult.error)
    } else if (paymentResult.paymentIntent.status === 'succeeded') {
      alert('Payment Successful')
    }
  }

  return (
    <PaymentFormContainer>
      <FormContainer onSubmit={paymentHandler}>
        <h2>Credit Card Payment:</h2>
        <CardElement />
        <PaymentButton
          buttonType={BUTTON_TYPE_CLASSES.inverted}
          isLoading={isProcessingPayment}
        >
          Pay now
        </PaymentButton>
      </FormContainer>
    </PaymentFormContainer>
  )
}

export default PaymentForm
