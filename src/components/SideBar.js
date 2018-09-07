import React from 'react'
import Indicator from './Indicator'
import styled from 'styled-components'

const Block = styled.div`
    height: 100vh;
    width: 20vw;
    background: #FFFAFB;
    box-shadow: 0 2px 2px 0 rgba(182,182,182,0.50);
`

export const SideBar = (props) => {
    return (
        <Block>
        {
          props.stages.map((stage, index) => {
            return <Indicator
              key={index}
              isCurrent={props.currentSlot === index}
              number={stage.stage}
              checked={index < props.currentSlot}
              name={stage.name}
            />
          })
        }
        </Block>
    )
}