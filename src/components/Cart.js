import React from 'react'
import styled from 'styled-components'

const Image = styled.div`
    display: inline-block;
    margin: 0px;
    line-height: 30px;
`

export const Cart = props => {
    let cartItems
    cartItems = props.product.map((product, index) => {
        return(
            <div key={index}>
                <Image >
                    <img style={{background: '#EBEBEB', borderRadius: '6px', width: '60px', height: '60px'}} alt={product.__typename} src={`https://media.graphcms.com/${product.image.handle}`}/>
                    <div style={{display: 'inline-block'}}>
                        <p>{props.stages[index].name}</p>
                        <p>{product.title}</p>
                        <span>{product.price}</span>
                        <button onClick={() => props.changeProduct(index)}>E</button>
                    </div>
                </Image>
            </div>
        )
    })
    return (
        <div>
            {cartItems}
            <div>
                <h4>Total</h4>
                <span>{props.totalAmount}</span>
            </div>

        </div>
    )
}