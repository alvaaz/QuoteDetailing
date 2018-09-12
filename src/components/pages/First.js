import React from 'react'
import Card from '../Card'
// import styled from 'styled-components'
import gql from 'graphql-tag'
import { graphql } from 'react-apollo'

// const Main = styled.div`

// `

// <Main>
// <h4>Cotiza con nosotros</h4>
// <h1>{props.stepName}</h1>
//   {Cars}

// </Main>


//   export const First = (props) => {
//     const cardList = props.cards.carTypes.map((item, idx) =>{
//       return (
//         <Card isSelect={props.selectedCar === item} image={item.image} onClick={type => props.handleCarSelection(type)} name={item.name} key={idx} type={item}/>
//       )
//     })
//     return(
//       <Main>
//         <h4>Cotiza con nosotros</h4>
//         <h1>{props.stepName}</h1>
//         <section style={{display: 'flex', justifyContent: 'space-around', padding: '0 8vw'}}>
//           {cardList}
//         </section>
//       </Main>
//     )
//   }

const Cars = ({ data: { loading, error, cars}, selectedCar, handleCarSelection}) => {
    if (error) return <h1>Error al adquirir los autos</h1>
    if (!loading) {
      return (
        <section style={{display: 'flex', justifyContent: 'space-around', padding: '0 8vw'}}>
          {cars.map(car =>(
            <Card
              isSelect={selectedCar === car}
              image={`https://media.graphcms.com/${car.coverImage.handle}`}
              handleSelection={type => handleCarSelection(type)}
              name={car.title}
              key={car.id}
              type={car}
            />
          ))}
        </section>
      )
    }
    return <h2>Cargando autos...</h2>
  }

export const cars = gql`
  query cars {
    cars {
      id
      title
      coverImage {
        handle
      }
    }
  }
`

export default graphql(cars)(Cars)