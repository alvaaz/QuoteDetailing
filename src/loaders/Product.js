import React from "react";
import styled, { keyframes } from "styled-components"

const Product = styled.div`
  animation-duration: 600ms;
  animation-fill-mode: forwards;
  animation-iteration-count: infinite;
  animation-name: contentLoader;
  animation-timing-function: linear;
  border: 2px solid #FCD4D4;
  background: linear-gradient(to right, #eeeeee 8%, #dddddd 18%, #eeeeee 33%);
  background-size: 1000px 104px;
  height: 200px;
  position: relative;
  overflow: hidden;
  border-radius: 6px;
  .product-image {
    height: 168px;
    width: 168px;
    margin: 16px;
    background: rgba(255, 255, 255, 0.25);
  }
  .product-text {
    margin: 12px 16px;
    height: 16px;
    background: rgba(255, 255, 255, 0.25);
  }
  @keyframes contentLoader {
    0% {
      background-position: -420px 0;
    }
    100% {
      background-position: 420px 0;
    }
  }
`

const LoadingProduct = () => {
  return (
    <Product>
        <div className="product-image" />
        <div className="product-text" />
    </Product>
  );
};

export default LoadingProduct;