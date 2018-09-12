import React, { Component } from 'react';
import { initialState } from './initial-state'
import First from './components/pages/First'
import {Second, Third} from './components/Steps'
import { SideBar } from './components/SideBar'
import Buttons from './components/Buttons'

class App extends Component {
  state = initialState
  _handleCarSelection = (car) => {
    this.setState({
      selectedCar: car
    })
  }
  renderCurrentStep = () => {
    switch(this.state.currentSlot) {
      case 0:
        return <First
          handleCarSelection={(car) => this._handleCarSelection(car)}
          selectedCar={this.state.selectedCar}
          stepName={this.state.stages[0].name}
        />
      case 1:
        return <Second stepName={this.state.stages[1].name}/>
      case 2:
        return <Third stepName={this.state.stages[2].name}/>
      default:
        return ('Etapa inválida')
    }
  }
  handleClick = () => {
    this.setState({
      currentSlot: this.state.currentSlot === this.state.stages.length
      ? this.state.stages[0].stage
      : this.state.currentSlot + 1,
      complete: this.state.currentSlot === this.state.stages.length - 1 ? true : false,
    })
  }
  render() {
    return (
      <div>
        <div style={{display: 'flex'}}>
          <div style={{textAlign: 'center', width: '80vw'}}>
            { this.renderCurrentStep() }
            <Buttons disabled={true} value='Anterior'></Buttons>
            <Buttons onClick={() => this.handleClick()}></Buttons>
          </div>
          <SideBar stages={this.state.stages} currentSlot={this.state.currentSlot}/>
        </div>
      </div>
    );
  }
}

export default App;
