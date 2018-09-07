import React from 'react'
// import styled from 'styled-components'
import Buttons from './Buttons'

const First = () => (
    <div style={{width: '80vw'}}>Primero</div>
)

const Second = () => (
    <div style={{width: '80vw'}}>Segundo</div>
)

const Third = () => (
    <div style={{width: '80vw'}}>Tercero</div>
)

const Main = (props) => (
    <div>
        {props.stage === 0 && <First></First>}
        <Buttons></Buttons>
    </div>
)

export default Main