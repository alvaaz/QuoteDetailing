import React from 'react'
import Indicator from './Indicators'
import styled from 'styled-components'
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
  color: ${props => props.theme.darkSoft};
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
    background-color: ${props => props.theme.mainSoft};
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

`

const StageName = styled.span`
  color: ${props => props.current || props.complete ? props.theme.success : props.theme.dark}
`

export const SideBar = (props) => {
    return (
        <Block>
          <IndicatorsContainer>
            {
              props.stages.map((stage, index) => {
                let current = props.currentSlot === index
                let complete = props.currentSlot > index
                  return (
                    <StageContainer key={index}>
                      {
                        complete ?
                        <Indicator
                          check
                          complete={complete}
                        />
                        : <Indicator
                          number={index + 1}
                          current={current}
                        />
                      }
                      <StageName current={current} complete={complete} >{stage.name}</StageName>
                    </StageContainer>
                  )
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