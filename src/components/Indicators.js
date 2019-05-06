import React from 'react'
import styled, { css } from 'styled-components'
import PropTypes from 'prop-types';


const Container = styled.div`
    width: 2rem;
    height: 2rem;
    border-radius: 2rem;
    background-color: #F9FAFD;
    font-size: 14px;
    text-align: center;
    &__hola {

    }
    line-height: 24px;
    cursor: pointer;
    border: ${props => props.current || props.check ? `2px solid ${props.theme.success}` : `2px solid ${props.theme.mainSoft}`};
    color: ${props => props.current ? props.theme.success : props.theme.mainSoft};
    font-weight: ${props => props.current ? 'bold' : 'regular'};
    box-sizing: border-box;
    margin-right: 0.4rem;
    transition: .2s all ease-in-out;
    background-repeat: no-repeat;
    background-position: center center;
    background-image: url(data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz48c3ZnIHdpZHRoPSIxNXB4IiBoZWlnaHQ9IjExcHgiIHZpZXdCb3g9IjAgMCAxNSAxMSIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIj4gICAgICAgIDx0aXRsZT5QYXRoIDU8L3RpdGxlPiAgICA8ZGVzYz5DcmVhdGVkIHdpdGggU2tldGNoLjwvZGVzYz4gICAgPGRlZnM+PC9kZWZzPiAgICA8ZyBpZD0iUGFnZS0xIiBzdHJva2U9Im5vbmUiIHN0cm9rZS13aWR0aD0iMSIgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiPiAgICAgICAgPGcgaWQ9ImlQaG9uZS02cyIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTg5LjAwMDAwMCwgLTM1LjAwMDAwMCkiIGZpbGwtcnVsZT0ibm9uemVybyIgc3Ryb2tlPSIjRkZGRkZGIiBzdHJva2Utd2lkdGg9IjMuMiI+ICAgICAgICAgICAgPGcgaWQ9InByb2dyZXNzIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSg4MC4wMDAwMDAsIDI0LjAwMDAwMCkiPiAgICAgICAgICAgICAgICA8ZyBpZD0iR3JvdXAtNCI+ICAgICAgICAgICAgICAgICAgICA8cG9seWxpbmUgaWQ9IlBhdGgtNSIgcG9pbnRzPSIxMSAxNi42MjAxMTcgMTQuNTgxODA0NiAyMCAyMiAxMyI+PC9wb2x5bGluZT4gICAgICAgICAgICAgICAgPC9nPiAgICAgICAgICAgIDwvZz4gICAgICAgIDwvZz4gICAgPC9nPjwvc3ZnPg==);
    ${props => props.check && css`
        background-color: ${props => props.complete ? props.theme.success : ''};
    `}
    ${props => props.checked && css`
        background-color: ${props.theme.main};
        border: none;
    `}
`

const Indicator = (props) => {
    return <Container {...props}>{props.number}</Container>
}

Indicator.propTypes = {
    check: PropTypes.bool,
    backgroundColor: PropTypes.string,
    number: PropTypes.number,
    current: PropTypes.bool,
}

export default Indicator