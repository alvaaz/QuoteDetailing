import React from 'react'
import Indicator from './Indicators'
import styled from 'styled-components'

const CardContainer = styled.article`
  border: ${props => props.select ? `2px solid ${props.theme.main}` : `2px solid ${props.theme.mainSoft}`};
  border-radius: 6px;
  cursor: pointer;
  width: fit-content;
  padding: 2rem;
  transition: all .2s ease-in-out;
  display: inline-block;
  text-align: initial;
  color: ${props => props.select ? props.theme.main : props.theme.darkSoft}
  &:hover {
    box-shadow: 0 0 0 2px ${props => props.theme.mainSoft};
  }
`

const CardTitle = styled.h2`
  font-family: 'Raleway', sans-serif;
  font-size: 16px;
  color: inherit;
  text-align: center;
`

const CardImg = styled.img`
  opacity: ${props => props.select ? '1' : '0.45'};
  transition: all .2s ease-in-out;
`

const Card = (props) => {
  return (
    <CardContainer
      select={props.isSelect}
      onClick={() => {props.handleSelection(props.type)}}
    >
      <Indicator checked={props.isSelect} />
        <CardImg select={props.isSelect} src={props.image} alt=""/>
          <CardTitle>
            {props.name}
          </CardTitle>
    </CardContainer>
  )
}

export default Card
