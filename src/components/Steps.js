import React from 'react'
import Card from './Card'
import styled from 'styled-components'

const Main = styled.div`

`

export const First = (props) => {
  const cardList = props.cards.carTypes.map((item, idx) =>{
    return (
      <Card isSelect={props.selectedCar === item} image={item.image} onClick={type => props.handleCarSelection(type)} name={item.name} key={idx} type={item}/>
    )
  })
  return(
    <Main>
      <h4>Cotiza con nosotros</h4>
      <h1>{props.stepName}</h1>
      <section style={{display: 'flex', justifyContent: 'space-around', padding: '0 8vw'}}>
        {cardList}
      </section>
    </Main>
  )
}

export const Second = (props) => {
  return (
    <div>
      <h4>Cotiza con nosotros</h4>
      <h1>{props.stepName}</h1>
    </div>
  );
}

export const Third = (props) => {
  return (
    <div>
      <h4>Cotiza con nosotros</h4>
      <h1>{props.stepName}</h1>
    </div>
  );
}