import React, { Component } from 'react';
import { initialState } from './initial-state'
import { SideBar } from './components/SideBar'
import Buttons from './components/Buttons'
import styled from 'styled-components'
import Routes from './components/Routes'
import { Route } from 'react-router-dom'
import First from './components/pages/First'
import Second from './components/pages/Second'



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
        currentSlot: slot,
        totalAmount: 0
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
          submitted: true
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

  render() {
    const stages = [
      {
        path: "/",
        exact: true,
        sidebar: () => <div>Tipo de automovil</div>,
        name: 'Tipo de vehículo',
        main: () => (<First handleClassSelection={y => this._handleOptionSelection(y)}
          selectedItems={this.state.cart[this.state.currentSlot]}
          stepName={stages[0].name}
            />
        )
      },
      {
        path: "/pintura",
        sidebar: () => <div>Tipo de pintura</div>,
        name: 'Estado Pintura',
        main: () => (<Second handleClassSelection={y => this._handleOptionSelection(y)}
          selectedItems={this.state.cart[this.state.currentSlot]}
          stepName={stages[1].name}
            />
        )
      },
      {
        path: "/Ruedas",
        sidebar: () => <div>Tipo de ruedas</div>,
        main: () => <h2>Ruedas</h2>,
        name: 'Tercera'
      }
    ];
    return (
      <React.Fragment>
        <Main>
          {stages.map((route, index) => (
            <Route
            key={index}
            path={route.path}
            exact={route.exact}
            component={route.main}
            />
          ))}
        </Main>
        <SideBar
          handleCarSelection={y => this._handleOptionSelection(y)}
          selectedItems={this.state.cart}
          stages={stages}
          currentSlot={this.state.currentSlot}
          changeProduct={w => this.changeProduct(w)}
          totalAmount={this.state.totalAmount}
        />
      </React.Fragment>
    )
  }
}

export default App
