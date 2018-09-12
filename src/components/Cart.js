import React from 'react'
import styled from 'styled-components'

const ContainerImg = styled.div`
    background: #EBEBEB;
    border-radius: 6px;
    line-height: 60px;
    text-align: center;
    display: inline-block;
    height: 60px;
    width: 60px;
`

export const Cart = ({selectedCar, handleSelection, selectedPrint}) => {
    if(selectedCar){
        return (
          <div>
            <ContainerImg>
              <img src={`https://media.graphcms.com/resize=w:50/${selectedCar.coverImage.handle}`} alt=""/>
            </ContainerImg>
            <span>{selectedCar.title}</span>
            <button onClick={() => {handleSelection(null)}}>Cambiar</button>

            <h4>Total</h4>
              <p>{selectedCar.price}</p>
          </div>
        )
    } else {
      return(<h4>Debes seleccionar un tipo de auto</h4>)
    }
}