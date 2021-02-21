import React, { Component, createContext } from 'react'

export const RouterContext = createContext();


export default class Router extends Component {

  state = {
    path: '/'
  }

  changePathAction = (path) => {
    this.setState({path});
  }

  componentDidMount(){
    //第一次解析地址
    this.changePathAction(window.location.pathname);

    // 监听
    window.onpopstate = ()=>{
      console.log('onpopstate....');
      this.changePathAction(window.location.pathname);
    }
  }

  

  render() {
    return (
      <RouterContext.Provider value={{
        path: this.state.path,
        changePathAction: this.changePathAction
      }}>
        {this.props.children}
      </RouterContext.Provider>
    )
  }
}
