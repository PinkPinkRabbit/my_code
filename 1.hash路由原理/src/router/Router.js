import React, { Component, createContext } from "react";

export const RouterContext = createContext();

export default class Router extends Component {
  state = {
    path: "/",
  };

  getPath() {
    let path = window.location.hash;
    if (path) {
      path = path.replace("#", "");
    } else {
      path = "/";
    }
    this.setState({ path });
  }

  componentDidMount() {
    // 先解析第一次的hash值
    this.getPath();

    // 之后hash值的变化
    window.onhashchange = (ev) => {
      console.log('change....');
      this.getPath();
    };
  }

  render() {
    return (
      <RouterContext.Provider
        value={{
          path: this.state.path,
        }}
      >
        {this.props.children}
      </RouterContext.Provider>
    );
  }
}
