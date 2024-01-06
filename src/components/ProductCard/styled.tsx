import styled from 'styled-components'

import {
  BaseButton,
  GoogleSignInButton,
  InvertedButton,
} from '../Button/styled'

const footerHeight = '25px'

export const ProductCardContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  height: 350px;
  align-items: center;
  position: relative;

  img {
    display: block;
    width: 100%;
    height: calc(100% - ${footerHeight});
    object-fit: cover;
  }

  ${BaseButton},
  ${GoogleSignInButton},
  ${InvertedButton} {
    display: flex;
    position: absolute;
    top: 255px;
    width: 80%;
    opacity: 0.9;

    @media screen and (max-width: 800px) {
      min-width: unset;
      padding: 0 10px;
    }
  }

  @media screen and (hover: hover) {
    ${BaseButton},
    ${GoogleSignInButton},
    ${InvertedButton} {
      opacity: 0.7;
      display: none;
    }

    &:hover {
      img {
        opacity: 0.8;
      }

      ${BaseButton},
      ${GoogleSignInButton},
      ${InvertedButton} {
        opacity: 0.85;
        display: flex;
      }
    }
  }
`

export const Footer = styled.div`
  width: 100%;
  height: ${footerHeight};
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 18px;
`
