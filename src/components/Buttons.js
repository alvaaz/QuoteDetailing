

import React from 'react'
import styled from 'styled-components'

const Button = styled.button`
    @import url('https://fonts.googleapis.com/css?family=Raleway:700');
    margin: 2rem;
    padding: 0.8rem;
    text-transform: uppercase;
    background-color: ${props => props.disabled ? '#ffffff': '#FD3939'};
    border: none;
    border-radius: 4px;
    color: ${props => props.disabled ? '#9E9E9E' : 'white'}
    font-family: 'Raleway', sans-serif;
    font-size: 12px;
    cursor: pointer;
`

const Buttons = (props) => {
    return <Button onClick={() => props.onClick(props.value)} disabled={props.disabled}>{props.value}</Button>
}

Buttons.defaultProps = {
    value: 'Siguiente',
    disabled: false
}

export default Buttons