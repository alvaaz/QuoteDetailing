import React, { Component } from 'react';
import { initialState } from './initial-state'
import First from './components/pages/First'
import Second from './components/pages/Second'
import {Third} from './components/Steps'
import { SideBar } from './components/SideBar'
import Buttons from './components/Buttons'
import styled from 'styled-components'

const Main = styled.main`
  text-align: center;
  width: 80vw
`

class App extends Component {
  state = initialState

  _handleCarSelection = (car) => {
    this.setState({
      selectedCar: car,
      currentSlot: 0
    })
  }
  _handlePrintSelection = (print) => {
    this.setState({
      selectedPrint: print,
      currentSlot: 1
    })
  }
  _handleClick = (x) => {
    if(x === 'next') {
      if(this.state.selectedCar && this.state.currentSlot <= this.state.stages.length - 1){
        this.setState({
          currentSlot: this.state.currentSlot + 1,
          complete: this.state.currentSlot === this.state.stages.length - 1 ? true : false,
        })
      }
    } else {
      this.setState({
        currentSlot: this.state.currentSlot - 1,
        complete: this.state.currentSlot === this.state.stages.length - 1 ? true : false,
      })
    }
  }

  renderCurrentStep = () => {
    switch(this.state.currentSlot) {
      case 0:
        return <First
          handleCarSelection={y => this._handleCarSelection(y)}
          selectedCar={this.state.selectedCar}
          stepName={this.state.stages[0].name}
        />
      case 1:
        return <Second
          selectedPrint={this.state.selectedPrint}
          handlePrintSelection={y => this._handlePrintSelection(y)}
          stepName={this.state.stages[1].name}
        />
      case 2:
        return <Third stepName={this.state.stages[2].name}/>
      default:
        return ('Etapa inválida')
    }
  }

  render() {
    return (
      <React.Fragment>
        <Main>
          { this.renderCurrentStep() }
          <Buttons onClick={(action) => this._handleClick(action)} disabled={this.state.currentSlot === 0} value='prev'></Buttons>
          <Buttons onClick={(action) => this._handleClick(action)} value="next"></Buttons>
        </Main>
        <SideBar
          handleCarSelection={y => this._handleCarSelection(y)}
          selectedCar={this.state.selectedCar}
          stages={this.state.stages}
          currentSlot={this.state.currentSlot}
        />
      </React.Fragment>
    )
  }
}

export default App
