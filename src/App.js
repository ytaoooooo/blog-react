import React, { Component } from 'react';
import store from './store/index'
import { GlobalStyle } from './style'
import { Provider } from 'react-redux'
import { BrowserRouter, Route } from 'react-router-dom'
import Home from './pages/home'
import Login from './pages/login'
import Write from './pages/write'
import Detail from './pages/detail'

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <BrowserRouter>
          <GlobalStyle />
          <Route path="/detail" exact component={Detail}></Route>
          <Route path="/write" exact component ={Write}></Route>
          <Route path="/login" exact component={Login}></Route>
          <Route path="/" exact component={Home}></Route>
        </BrowserRouter>
      </Provider>

    )
  }
}

export default App;
