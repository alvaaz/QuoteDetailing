import React from 'react'
import Indicator from './Indicators'
import styled, { css } from 'styled-components'
import { Cart } from './Cart'

const Block = styled.aside`
  height: 100vh;
  width: 20vw;
  background: #FFFAFB;
  box-shadow: 0 2px 2px 0 rgba(182,182,182,0.50);
  padding: 1rem 2rem;
`
const CartTitle = styled.h4`
  font-size: 12px;
  color: #ADB1C1;
  letter-spacing: 0;
  text-transform: uppercase;
`

const CartContainer = styled.div`
  padding-top: 8rem;
`

const IndicatorsContainer = styled.div`
  position: relative;
  z-index: 0;
  &:after {
    position: absolute;
    width: 2px;
    height: 100%;
    background-color: #FCD4D4;
    left: 1rem;
    top: -2rem;
    content: '';
    z-index: -1;
  }
`

const StageContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 0.8rem;
  ${props => props.current && css`
    color: #6EC10A
  `}
  ${props => props.complete && css`
    color: #6EC10A
  `}
`

export const SideBar = (props) => {
    return (
        <Block>
          <IndicatorsContainer>
            {
              props.stages.map((stage, index) => {
                  if (index >= props.currentSlot){
                    return (
                      <StageContainer key={index} current={props.currentSlot === index}>
                        <Indicator.number
                          number={index + 1}
                          current={props.currentSlot === index}
                        />
                        <span>{stage.name}</span>
                      </StageContainer>
                    )
                  } else {
                    return (
                      <StageContainer key={index} complete={props.currentSlot > index}>
                        <Indicator.check
                          check={true}
                          backgroundColor='#6EC10A'
                        />
                        <span>{stage.name}</span>
                      </StageContainer>
                    )
                  }
              })
            }
          </IndicatorsContainer>
          <CartContainer >
            <CartTitle>Resumen pedido</CartTitle>
            <Cart totalAmount={props.totalAmount} changeProduct={item => props.changeProduct(item)} stages={props.stages} product={props.selectedItems}/>
          </CartContainer>
        </Block>
    )
}