import React from "react";
import Product from "./Product";
import styled from "styled-components"

const Products = styled.div`
  display: flex;
  justify-content: space-around;
  padding: 0 8vw;
  & .product {
    min-height: 355px;
    flex-basis: calc(25% - 32px);
  }
`

const LoadingProducts = () => {
    return (
      <Products>
        <Product />
        <Product />
        <Product />
        <Product />
      </Products>
    );
}

export default LoadingProducts;