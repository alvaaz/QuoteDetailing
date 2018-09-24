import React from 'react'
import Card from '../Card'
import styled from 'styled-components'
import gql from 'graphql-tag'
import { graphql } from 'react-apollo'

const ContainerCard = styled.section`
  display: flex;
  justify-content: space-around;
  padding: 0 8vw;
`
const isSelected = (print, selected) => {
  if(selected){
     return print.id === selected.id
  }else{
    return false;
  }
 }

const Prints = ({ data: { loading, error, prints}, selectedItems, handleClassSelection}) => {
    if (error) return <h1>Error al adquirir los autos</h1>
    if (!loading) {
      return (
        <ContainerCard>
          {prints.map(print =>(
            <Card
              isSelect={isSelected(print, selectedItems)}
              image={`https://media.graphcms.com/${print.image.handle}`}
              handleSelection={x => handleClassSelection(x)}
              name={print.title}
              key={print.id}
              type={print}
              price={print.price}
            />
          ))}
        </ContainerCard>
      )
    }
    return <h2>Cargando pinturas...</h2>
  }

export const prints = gql`
  query prints {
    prints {
      id
      title
      image {
        handle
      }
    }
  }
`

export default graphql(prints)(Prints)