import React, { Component } from 'react';
import store from './store/index'
import { GlobalStyle } from './style'
import { IconfontGlobalStyle } from './static/iconfont/iconfont'
import { Provider } from 'react-redux'
import { BrowserRouter, Route } from 'react-router-dom'
import Home from './pages/home'
import Homepage from './pages/homepage'
import Article from './pages/ariticle'
import Summary from './pages/summary'
// import Detail from './pages/detail'
// import Header from './common/header'

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <BrowserRouter basename="/blog">
          <GlobalStyle />
          <IconfontGlobalStyle />
          <Route path="/summary" exact component={Summary}></Route>
          <Route path="/article" exact component ={Article}></Route>
          <Route path="/homepage" exact component={Homepage}></Route>
          <Route path="/" exact component={Home}></Route>
        </BrowserRouter>
      </Provider>

    )
  }
}

export default App;
