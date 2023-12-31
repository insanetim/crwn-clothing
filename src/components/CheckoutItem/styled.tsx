import styled from 'styled-components'

export const CheckoutItemContainer = styled.div`
  width: 100%;
  display: flex;
  min-height: 100px;
  border-bottom: 1px solid darkgrey;
  padding: 15px 0;
  font-size: 20px;
  align-items: center;
`

export const ImageContainer = styled.div`
  width: 23%;
  padding-right: 15px;

  img {
    width: 100%;
    height: 100%;
  }

  @media screen and (max-width: 800px) {
    width: 22%;
    padding-right: 10px;
  }
`

export const Name = styled.span`
  width: 23%;

  @media screen and (max-width: 800px) {
    width: 22%;
    padding-right: 10px;
  }
`

export const Quantity = styled.span`
  display: flex;
  width: 23%;

  @media screen and (max-width: 800px) {
    width: 22%;
  }
`

export const Price = styled.span`
  width: 23%;

  @media screen and (max-width: 800px) {
    width: 22%;
  }
`

export const Arrow = styled.span`
  cursor: pointer;
  user-select: none;
`

export const Value = styled.span`
  margin: 0 10px;
`

export const RemoveButton = styled.div`
  padding-left: 12px;
  cursor: pointer;
`
