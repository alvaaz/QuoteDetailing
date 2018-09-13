import React from 'react'
import Indicator from './Indicators'
import styled from 'styled-components'

const CardContainer = styled.article`
  border: ${props => props.select ? '2px solid #FF1744' : '2px solid #FCD4D4'};
  border-radius: 6px;
  cursor: pointer;
  width: fit-content;
  padding: 2rem;
  transition: all .2s ease-in-out;
  display: inline-block;
  text-align: initial;
  &:hover {
    box-shadow: 0 0 0 2px #FCD4D4;
  }
`

const CardTitle = styled.h2`
  font-family: 'Raleway', sans-serif;
  font-size: 16px;
  color: #9E9E9E;
  letter-spacing: 0;
  text-align: center;
`

const CardImg = styled.img`
  opacity: ${props => props.select ? '1' : '0.45'};
  transition: all .2s ease-in-out;
`

const Card = (props) => {
  return (
    <CardContainer select={props.isSelect} onClick={() => {props.handleSelection(props.type)}}>
      <Indicator.check check={props.isSelect} backgroundColor={props.isSelect ? '#FF1744' : ''}/>
        <CardImg select={props.isSelect} src={props.image} alt=""/>
          <CardTitle>
            {props.name}
          </CardTitle>
    </CardContainer>
  )
}

export default Card
