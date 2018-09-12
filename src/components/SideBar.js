import React from 'react'
import Indicator from './Indicator'
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
  @import url('https://fonts.googleapis.com/css?family=Raleway:700');
  font-family: 'Raleway', sans-serif;
  font-size: 12px;
  color: #ADB1C1;
  letter-spacing: 0;
  text-transform: uppercase;
`

const IndicatorsContainer = styled.div`
`

export const SideBar = (props) => {
    return (
        <Block>
          <IndicatorsContainer>
            {
              props.stages.map((stage, index) => {
                return <Indicator
                  key={index}
                  isCurrent={props.currentSlot === index}
                  number={stage.stage}
                  checked={index < props.currentSlot}
                  name={stage.name}
                  backgroundColor="#6EC10A"
                />
              })
            }
          </IndicatorsContainer>
          <div style={{paddingTop: '8rem'}}>
            <CartTitle>Resumen pedido</CartTitle>
            <Cart handleSelection={x => props.handleCarSelection(x)} selectedCar={props.selectedCar}/>
          </div>
        </Block>
    )
}