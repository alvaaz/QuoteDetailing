import React from 'react'
import styled from 'styled-components'

const ProductStage = styled.h3`
    @import url('https://fonts.googleapis.com/css?family=Raleway:700');
    color: #313442;
    font-size: 0.85rem;
    font-family: 'Raleway', sans-serif;
    font-weight: bold;
    letter-spacing: 0;
    margin: 0;
    padding-bottom: 0.5rem
`

const ProductTitle = styled.h4`
    @import url('https://fonts.googleapis.com/css?family=Raleway:700');
    color: #ABABAB;
    font-size: 0.75rem;
    font-family: 'Raleway', sans-serif;
    font-weight: bold;
    letter-spacing: 0;
    margin: 0;
`

const ProductCover = styled.div`
    background: #EBEBEB;
    border-radius: 6px;
    width: 60px;
    height: 60px;
    margin-right: 0.75rem;
`

const ProductContainer = styled.div`
    display: flex;
    align-items: center;
    padding-bottom: 0.75rem
`
const ProductImage = styled.img`
    width: 100%;
    height: 100%;
    object-fit: contain;
`

const CartTotal = styled.span`
    color: #FD3939;
    font-size: 1rem;
    @import url('https://fonts.googleapis.com/css?family=Raleway:700');
    font-family: 'Raleway', sans-serif;
    font-weight: bold;
    letter-spacing: 0;
`

export const Cart = props => {
    let cartItems
    cartItems = props.product.map((product, index) => {
        return(
            <ProductContainer key={index}>
                <ProductCover>
                    <ProductImage alt={product.__typename} src={`https://media.graphcms.com/${product.image.handle}`}/>
                </ProductCover>
                <div>
                    <ProductStage>{props.stages[index].name}</ProductStage>
                    <ProductTitle>{product.title}</ProductTitle>
                </div>
                <button onClick={() => props.changeProduct(index)}>E</button>
            </ProductContainer>
        )
    })
    return (
        <React.Fragment>
            {cartItems}
            <div style={{borderBottom: '2px solid #FCD4D4'}}>
                <span style={{float: 'left'}}>Total</span>
                <CartTotal style={{float: 'right'}}>{props.totalAmount}</CartTotal>
            </div>

        </React.Fragment>
    )
}