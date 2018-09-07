import React from 'react'
import styled from 'styled-components'

const Number = styled.div`
    @import url('https://fonts.googleapis.com/css?family=Raleway:700');
    width: 32px;
    height: 32px;
    background: #F9FAFD;
    border-radius: 32px;
    font-family: 'Raleway', sans-serif;
    font-size: 14px;
    text-align: center;
    line-height: 24px;
    cursor: pointer;
    border: ${props => props.current ? '2px solid #FD3939' : '2px solid #FCD4D4'};
    color: ${props => props.current ? '#FD3939' : '#FCD4D4'};
    font-weight: ${props => props.current ? 'bold' : 'regular'};
    box-sizing: border-box;
    margin-right: 0.4rem;
`

const Checked = styled(Number)`
    border: ${props => props.check ? 'none' : '2px solid #FCD4D4'};
    background-color: ${props => props.check ? '#FD3939' : '#FF1744'};
    color: white;
    background-repeat: no-repeat;
    background-position: center center;
    background-image: ${props => props.check ? 'url(data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz48c3ZnIHdpZHRoPSIxNXB4IiBoZWlnaHQ9IjExcHgiIHZpZXdCb3g9IjAgMCAxNSAxMSIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIj4gICAgICAgIDx0aXRsZT5QYXRoIDU8L3RpdGxlPiAgICA8ZGVzYz5DcmVhdGVkIHdpdGggU2tldGNoLjwvZGVzYz4gICAgPGRlZnM+PC9kZWZzPiAgICA8ZyBpZD0iUGFnZS0xIiBzdHJva2U9Im5vbmUiIHN0cm9rZS13aWR0aD0iMSIgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiPiAgICAgICAgPGcgaWQ9ImlQaG9uZS02cyIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTg5LjAwMDAwMCwgLTM1LjAwMDAwMCkiIGZpbGwtcnVsZT0ibm9uemVybyIgc3Ryb2tlPSIjRkZGRkZGIiBzdHJva2Utd2lkdGg9IjMuMiI+ICAgICAgICAgICAgPGcgaWQ9InByb2dyZXNzIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSg4MC4wMDAwMDAsIDI0LjAwMDAwMCkiPiAgICAgICAgICAgICAgICA8ZyBpZD0iR3JvdXAtNCI+ICAgICAgICAgICAgICAgICAgICA8cG9seWxpbmUgaWQ9IlBhdGgtNSIgcG9pbnRzPSIxMSAxNi42MjAxMTcgMTQuNTgxODA0NiAyMCAyMiAxMyI+PC9wb2x5bGluZT4gICAgICAgICAgICAgICAgPC9nPiAgICAgICAgICAgIDwvZz4gICAgICAgIDwvZz4gICAgPC9nPjwvc3ZnPg==)' : ''};
`

const Indicator = ({ checked, name, number, isCurrent }) => (
        <React.Fragment>
            {checked ?
                <div style={{display: 'flex', alignItems: 'center', marginBottom: '0.8rem'}}>
                    <Checked check={checked}/>
                    <div>{name}</div>
                </div>
                : <div style={{display: 'flex', alignItems: 'center', marginBottom: '0.8rem'}}>
                    <Number current={isCurrent}>
                        <span>
                            {number}
                        </span>
                    </Number>
                    <div>{name}</div>
                </div>
            }
        </React.Fragment>
)

export default Indicator