import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types';

const Number = styled.div`
    width: 2rem;
    height: 2rem;
    background-color: ${props => props.backgroundColor};
    border-radius: 2rem;
    font-size: 14px;
    text-align: center;
    line-height: 24px;
    cursor: pointer;
    border: ${props => props.current ? '2px solid #6EC10A' : '2px solid #FCD4D4'};
    color: ${props => props.current ? '#6EC10A' : '#FCD4D4'};
    font-weight: ${props => props.current ? 'bold' : 'regular'};
    box-sizing: border-box;
    margin-right: 0.4rem;
`

const Checked = styled(Number)`
    border: ${props => props.check ? 'none' : '2px solid #FCD4D4'};
    color: white;
    background-repeat: no-repeat;
    background-position: center center;
    background-image: ${props => props.check ? 'url(data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz48c3ZnIHdpZHRoPSIxNXB4IiBoZWlnaHQ9IjExcHgiIHZpZXdCb3g9IjAgMCAxNSAxMSIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIj4gICAgICAgIDx0aXRsZT5QYXRoIDU8L3RpdGxlPiAgICA8ZGVzYz5DcmVhdGVkIHdpdGggU2tldGNoLjwvZGVzYz4gICAgPGRlZnM+PC9kZWZzPiAgICA8ZyBpZD0iUGFnZS0xIiBzdHJva2U9Im5vbmUiIHN0cm9rZS13aWR0aD0iMSIgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiPiAgICAgICAgPGcgaWQ9ImlQaG9uZS02cyIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTg5LjAwMDAwMCwgLTM1LjAwMDAwMCkiIGZpbGwtcnVsZT0ibm9uemVybyIgc3Ryb2tlPSIjRkZGRkZGIiBzdHJva2Utd2lkdGg9IjMuMiI+ICAgICAgICAgICAgPGcgaWQ9InByb2dyZXNzIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSg4MC4wMDAwMDAsIDI0LjAwMDAwMCkiPiAgICAgICAgICAgICAgICA8ZyBpZD0iR3JvdXAtNCI+ICAgICAgICAgICAgICAgICAgICA8cG9seWxpbmUgaWQ9IlBhdGgtNSIgcG9pbnRzPSIxMSAxNi42MjAxMTcgMTQuNTgxODA0NiAyMCAyMiAxMyI+PC9wb2x5bGluZT4gICAgICAgICAgICAgICAgPC9nPiAgICAgICAgICAgIDwvZz4gICAgICAgIDwvZz4gICAgPC9nPjwvc3ZnPg==)' : ''};
`

const number = (props) => {
    return (
        <Number {...props}>{props.number}</Number>
    )
}

const check = (props) => {
    return (
        <Checked {...props}/>
    )
}

check.propTypes = {
    check: PropTypes.bool.isRequired,
    backgroundColor: PropTypes.string
}

number.propTypes = {
    number: PropTypes.number.isRequired,
    current: PropTypes.bool.isRequired,
}

number.defaultProps = {
    backgroundColor: '#F9FAFD'
}

export default {number, check}