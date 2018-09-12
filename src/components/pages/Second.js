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

const Prints = ({ data: { loading, error, prints}, selectedPrint, handlePrintSelection}) => {
    if (error) return <h1>Error al adquirir los autos</h1>
    if (!loading) {
      return (
        <ContainerCard>
          {prints.map(print =>(
            <Card
              isSelect={selectedPrint === print}
              image={`https://media.graphcms.com/${print.image.handle}`}
              handleSelection={x => handlePrintSelection(x)}
              name={print.condition}
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
      condition
      image {
        handle
      }
    }
  }
`

export default graphql(prints)(Prints)