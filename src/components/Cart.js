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
    cursor: pointer;

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

const ButtonChange = styled.button`
    background-repeat: no-repeat;
    background-position: center;
    border: none;
    background-color: transparent;
    transition: .2s all ease-in-out;
    width: 22px;
    height: 22px;
    cursor: pointer;
    border-radius: 22px;
    background-image: url(data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz48c3ZnIHdpZHRoPSIxNXB4IiBoZWlnaHQ9IjE1cHgiIHZpZXdCb3g9IjAgMCAxNSAxNSIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIj4gICAgICAgIDx0aXRsZT5Hcm91cCAxMjwvdGl0bGU+ICAgIDxkZXNjPkNyZWF0ZWQgd2l0aCBTa2V0Y2guPC9kZXNjPiAgICA8ZGVmcz48L2RlZnM+ICAgIDxnIGlkPSJQYWdlLTEiIHN0cm9rZT0ibm9uZSIgc3Ryb2tlLXdpZHRoPSIxIiBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCI+ICAgICAgICA8ZyBpZD0iQ3JlYXItbnVldmEtbm90aWNpYS0xLUNvcHktMyIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTEyNDUuMDAwMDAwLCAtMzIzLjAwMDAwMCkiIHN0cm9rZT0iI0FEQjFDMSIgc3Ryb2tlLXdpZHRoPSIxLjUiPiAgICAgICAgICAgIDxnIGlkPSJHcm91cC0xMyIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMTI0MS4wMDAwMDAsIDMxOS4wMDAwMDApIj4gICAgICAgICAgICAgICAgPGcgaWQ9Ikdyb3VwLTE0Ij4gICAgICAgICAgICAgICAgICAgIDxnIGlkPSJHcm91cC0xMiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoNC4wMDAwMDAsIDUuMDAwMDAwKSI+ICAgICAgICAgICAgICAgICAgICAgICAgPHBhdGggZD0iTTUuNjQ1NzcyMSwxMi4zODA5NTI0IEM2LjYwMjY3Njk3LDExLjM4MDUzMzcgNy4xOTA0NzYxOSwxMC4wMjQxMzM1IDcuMTkwNDc2MTksOC41MzA0NDU1MyBDNy4xOTA0NzYxOSw1LjQ1MzQzMDQ5IDQuNjk2MDYyNjUsMi45NTkwMTY5NiAxLjYxOTA0NzYyLDIuOTU5MDE2OTYiIGlkPSJPdmFsLTctQ29weS04IiB0cmFuc2Zvcm09InRyYW5zbGF0ZSg0LjQwNDc2MiwgNy42Njk5ODUpIHJvdGF0ZSgtMTgwLjAwMDAwMCkgdHJhbnNsYXRlKC00LjQwNDc2MiwgLTcuNjY5OTg1KSAiPjwvcGF0aD4gICAgICAgICAgICAgICAgICAgICAgICA8cGF0aCBkPSJNOS45MjE4NTcyOCwwLjIyMzYwNTQxMSBDOC41MjY2MTk2NCwxLjIzNjE0NDk4IDcuNjE5Mjk3ODgsMi44ODAwMDY3NiA3LjYxOTI5Nzg4LDQuNzM1Nzg0ODkgQzcuNjE5Mjk3ODgsNy44MTI3OTk5MyAxMC4xMTM3MTE0LDEwLjMwNzIxMzUgMTMuMTkwNzI2NSwxMC4zMDcyMTM1IiBpZD0iUGF0aCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMTAuNDA1MDEyLCA1LjI2NTQwOSkgcm90YXRlKDE3NS4wMDAwMDApIHRyYW5zbGF0ZSgtMTAuNDA1MDEyLCAtNS4yNjU0MDkpICI+PC9wYXRoPiAgICAgICAgICAgICAgICAgICAgICAgIDxwb2x5bGluZSBpZD0iUGF0aC04IiBzdHJva2UtbGluZWpvaW49InJvdW5kIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgzLjIzNDgxMCwgMi45MzMzMjYpIHJvdGF0ZSgzMy4wMDAwMDApIHRyYW5zbGF0ZSgtMy4yMzQ4MTAsIC0yLjkzMzMyNikgIiBwb2ludHM9IjEuMDg3NDA1ODIgNC4wMDcwMjgzMSAzLjIzNDgwOTU5IDEuODU5NjI0NTMgNS4zODIyMTMzNyA0LjAwNzAyODMxIj48L3BvbHlsaW5lPiAgICAgICAgICAgICAgICAgICAgICAgIDxwb2x5bGluZSBpZD0iUGF0aC04LUNvcHkiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDExLjM1MDM5NCwgMTAuMjk3NDAxKSByb3RhdGUoLTEzOC4wMDAwMDApIHRyYW5zbGF0ZSgtMTEuMzUwMzk0LCAtMTAuMjk3NDAxKSAiIHBvaW50cz0iOS4yMDI5ODk5IDExLjM3MTEwMjYgMTEuMzUwMzkzNyA5LjIyMzY5ODg2IDEzLjQ5Nzc5NzUgMTEuMzcxMTAyNiI+PC9wb2x5bGluZT4gICAgICAgICAgICAgICAgICAgIDwvZz4gICAgICAgICAgICAgICAgPC9nPiAgICAgICAgICAgIDwvZz4gICAgICAgIDwvZz4gICAgPC9nPjwvc3ZnPg==);
    ${ProductContainer}:hover & {
        background-color: #EBEBEB;
    }
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
                <ButtonChange onClick={() => props.changeProduct(index)}></ButtonChange>
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