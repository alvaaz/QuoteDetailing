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

const Cars = ({ data: { loading, error, cars}, selectedCar, handleCarSelection}) => {
    if (error) return <h1>Error al adquirir los autos</h1>
    if (!loading) {
      return (
        <ContainerCard>
          {cars.map(car =>(
            <Card
              isSelect={selectedCar === car}
              image={`https://media.graphcms.com/${car.coverImage.handle}`}
              handleSelection={x => handleCarSelection(x)}
              name={car.title}
              key={car.id}
              type={car}
              price={car.price}
            />
          ))}
        </ContainerCard>
      )
    }
    return <h2>Cargando autos...</h2>
  }

export const cars = gql`
  query cars {
    cars {
      id
      title
      price
      coverImage {
        handle
      }
    }
  }
`

export default graphql(cars)(Cars)