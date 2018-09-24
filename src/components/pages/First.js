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

const isSelected = (car, selected) => {
 if(selected){
    return car.id === selected.id
 }else{
   return false;
 }
}

const Cars = ({ data: { loading, error, cars}, selectedItems, handleClassSelection}) => {
    if (error) return <h1>Error al adquirir los autos</h1>
    if (!loading) {
      return (
        <ContainerCard>
          {cars.map(car =>(
            <Card
              isSelect={isSelected(car, selectedItems)}
              image={`https://media.graphcms.com/${car.image.handle}`}
              handleSelection={item => handleClassSelection(item)}
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
      image {
        handle
      }
    }
  }
`

export default graphql(cars)(Cars)