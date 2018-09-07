import React, { Component } from 'react';
import { initialState } from './initial-state'
import {First, Second, Third} from './components/Steps'
import { SideBar } from './components/SideBar'
import data from './data.json'
import Buttons from './components/Buttons'

class App extends Component {
  state = initialState
  handleCarSelection = (car) => {
    this.setState({
      selectedCar: car
    })
  }
  renderCurrentStep = () => {
    switch(this.state.currentSlot) {
      case 0:
        return <First
          handleCarSelection={(car) => this.handleCarSelection(car)}
          selectedCar={this.state.selectedCar}
          cards={data}
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
