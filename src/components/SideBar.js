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
  color: #ADB1C1;
  letter-spacing: 0;
  text-transform: uppercase;
`

const CartContainer = styled.div`
  padding-top: 8rem;
`

const IndicatorsContainer = styled.div`
`

export const SideBar = (props) => {
    return (
        <Block>
          <IndicatorsContainer>
            {
              props.stages.map((stage, index) => {
                  if (index >= props.currentSlot){
                    return (
                      <div key={index} style={{display: 'flex', alignItems: 'center', marginBottom: '0.8rem'}}>
                        <Indicator.number
                          number={index + 1}
                          current={props.currentSlot === index}
                        />
                        <span>{stage.name}</span>
                      </div>
                    )
                  } else {
                    return (
                      <div key={index} style={{display: 'flex', alignItems: 'center', marginBottom: '0.8rem'}}>
                        <Indicator.check
                          check={true}
                          backgroundColor='#6EC10A'
                        />
                        <span>{stage.name}</span>
                      </div>
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