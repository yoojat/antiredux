import React, { Component } from "react";
import AppPresenter from "./AppPresenter";
import Store from "store";

class AppContainer extends Component {
  constructor(props) {
    super(props);
    //함수는 콘스럭터 안에 있어야 함
    this._changeMessage = () => {
      if (this.state.message === "Hello") {
        this.setState({
          message: "Bye bye"
        });
      } else {
        this.setState({
          message: "Hello"
        });
      }
    };
    this.state = {
      message: "Hello",
      changeMessage: this._changeMessage
    };
  }
  render() {
    return (
      <Store.Provider value={this.state}>
        <AppPresenter />
      </Store.Provider>
    );
  }
}

export default AppContainer;
