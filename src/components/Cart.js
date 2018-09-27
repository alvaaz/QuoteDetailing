import React from 'react'
import styled from 'styled-components'

const ProductStage = styled.h3`
    color: ${props => props.theme.dark};
    font-size: 0.85rem;
    font-weight: bold;
    letter-spacing: 0;
    margin: 0;
    padding-bottom: 0.5rem
`

const ProductTitle = styled.h4`
    color: ${props => props.theme.darkSoft};
    font-size: 0.75rem;
    font-weight: bold;
    margin: 0;
`

const ProductText = styled.div`
    margin-right: 0.75rem;
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
    padding-bottom: 0.75rem;

`
const ProductImage = styled.img`
    width: 100%;
    height: 100%;
    object-fit: contain;
`
const CartTotal = styled.span`
    color: ${props => props.theme.darkSoft};
    font-size: 0.75rem;
    font-weight: bold;
    text-transform: uppercase;
`

const CartTotalAmount = styled.span`
    color: ${props => props.theme.main};
    font-size: 1rem;
    font-weight: bold;
`

export const Cart = props => {
    let cartItems
    cartItems = props.product.map((product, index) => {
        return(
            <ProductContainer key={index}>
                <ProductCover>
                    <ProductImage alt={product.__typename} src={`https://media.graphcms.com/${product.image.handle}`}/>
                </ProductCover>
                <ProductText>
                    <ProductStage>{props.stages[index].name}</ProductStage>
                    <ProductTitle>{product.title}</ProductTitle>
                </ProductText>
                <button onClick={() => props.changeProduct(index)}>E</button>
            </ProductContainer>
        )
    })
    return (
        <React.Fragment>
            {cartItems}
            <div style={{borderTop: '2px solid #FCD4D4', paddingTop: '0.75rem'}}>
                <CartTotal style={{float: 'left'}}>Total</CartTotal>
                <CartTotalAmount style={{float: 'right'}}>{props.totalAmount}</CartTotalAmount>
            </div>
        </React.Fragment>
    )
}