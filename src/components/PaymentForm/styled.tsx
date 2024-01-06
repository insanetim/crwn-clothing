import styled from 'styled-components'

import Button from '../Button'

export const PaymentFormContainer = styled.div`
  height: 300px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  @media screen and (max-width: 800px) {
    width: 100%;
  }
`

export const FormContainer = styled.form`
  height: 100px;
  min-width: 500px;

  @media screen and (max-width: 800px) {
    width: 100%;
    min-width: unset;
  }
`

export const PaymentButton = styled(Button)`
  margin-left: auto;
  margin-top: 30px;
`
