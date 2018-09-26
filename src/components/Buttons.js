import React from 'react'
import styled from 'styled-components'

const Button = styled.button`
    margin: 2rem;
    padding: 0.8rem;
    text-transform: uppercase;
    background-color: ${props => props.disabled || props.type ? '#ffffff': '#FD3939'};
    border: none;
    border-radius: 4px;
    color: ${props => props.disabled || props.type ? '#9E9E9E' : 'white'}
    font-family: inherit;
    font-size: 12px;
    cursor: pointer;
`

const Buttons = (props) => {
    return <Button onClick={() => props.onClick(props.value)} type={props.type} disabled={props.disabled}>{props.value}</Button>
}

Buttons.defaultProps = {
    value: 'Siguiente',
    disabled: false
}

export default Buttons