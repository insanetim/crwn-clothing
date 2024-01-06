import styled from 'styled-components'

export const SignInContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 380px;

  h2 {
    margin: 10px 0;
  }

  @media screen and (max-width: 800px) {
    width: 100%;
    margin-bottom: 30px;
  }
`

export const Buttons = styled.div`
  display: flex;
  justify-content: space-between;
`
