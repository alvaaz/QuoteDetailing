import React, { Component } from 'react';
import { initialState } from './initial-state'
import First from './components/pages/First'
import Second from './components/pages/Second'
import {Third} from './components/Steps'
import { SideBar } from './components/SideBar'
import Buttons from './components/Buttons'
import styled, { injectGlobal } from 'styled-components'

injectGlobal`
    @import url('https://fonts.googleapis.com/css?family=Raleway:700');
    body {
        padding: 0;
        margin: 0;
        font-family: 'Raleway', sans-serif;
    }
`

const Main = styled.main`
  text-align: center;
  width: 80vw
`

class App extends Component {
  state = initialState

  sumTotalAmount() {
    let total = 0
    let cart = this.state.cart
    for (let i = 0; i < cart.length; i++) {
      total += cart[i].price
    }
    this.setState({
      totalAmount: total
    })
  }

  _handleOptionSelection = (type) => {
    let cartItem = this.state.cart
    let currentSlot = this.state.currentSlot
    if(this.checkProduct(type)){
      console.log('ya existe')
    }else {
      cartItem.splice(currentSlot, 1, type)
      this.setState({
        enableStep: true,
        cart: cartItem
      })
    }
    this.sumTotalAmount(this.state.cart)
  }

  changeProduct = (slot) => {
    if(slot < this.state.currentSlot) {
      this.setState({
        cart: [],
        currentSlot: slot
      })
    } else {
      this.setState({
        currentSlot: slot
      })
    }
  }
  checkProduct(product) {
    if(product === undefined) {
      return false
    } else {
      return this.state.cart.some((item) => {
        return item.id === product.id
      })
    }

  }
  _handleClick = (x) => {
    let cart = this.state.cart
    let currentSlot = this.state.currentSlot
    if(x === 'next') {
      if(this.checkProduct(cart[currentSlot])){
        this.setState({
          currentSlot: currentSlot + 1,
          enableStep: false,
          complete: currentSlot === this.state.stages.length - 1 ? true : false,
        })
      } else {
        console.log('No se puede avanzar')
      }
    } else {
      this.setState({
        currentSlot: currentSlot - 1,
        enableStep: true,
        complete: currentSlot === this.state.stages.length - 1 ? true : false,
      })
    }
  }

  renderCurrentStep = () => {
    let cart = this.state.cart
    let currentSlot = this.state.currentSlot
    switch(currentSlot) {
      case 0:
        return <First
          handleClassSelection={y => this._handleOptionSelection(y)}
          selectedItems={cart[currentSlot]}
          stepName={this.state.stages[0].name}
        />
      case 1:
        return <Second
          handleClassSelection={y => this._handleOptionSelection(y)}
          selectedItems={cart[currentSlot]}
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
          <Buttons onClick={(action) => this._handleClick(action)} type={true} disabled={this.state.currentSlot === 0} value='prev'></Buttons>
          <Buttons onClick={(action) => this._handleClick(action)} value="next"></Buttons>
        </Main>
        <SideBar
          handleCarSelection={y => this._handleOptionSelection(y)}
          selectedItems={this.state.cart}
          stages={this.state.stages}
          currentSlot={this.state.currentSlot}
          changeProduct={w => this.changeProduct(w)}
          totalAmount={this.state.totalAmount}
        />
      </React.Fragment>
    )
  }
}

export default App
