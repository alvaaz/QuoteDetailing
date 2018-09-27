import React from 'react'
import styled, { css } from 'styled-components'

const Button = styled.button`
    margin: 2rem;
    padding: 0.8rem;
    text-transform: uppercase;
    border: none;
    border-radius: 4px;
    font-family: inherit;
    font-size: 12px;
    cursor: pointer;
    transition: .4s all ease-in-out;
    ${props => props.link && css`
        color: hsl(0, 0%, 62%);
        background-color: transparent;
        &:hover {
            color: hsl(0, 0%, 50%);
        }
    `}
    ${props => props.primary && css`
        color: white;
        background-color: ${props => props.theme.main};
        &:hover {
            background-color: hsl(0,100%,50%);
        }
    `}
`

const Buttons = (props) => {
    return <Button
                onClick={() => props.onClick(props.value)}
                disabled={props.disabled}
                primary={props.primary}
                link={props.link}
                >
                {props.value}
            </Button>
}

Buttons.defaultProps = {
    value: 'Siguiente',
    disabled: false
}

export default Buttons