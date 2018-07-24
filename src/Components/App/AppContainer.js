import React, { Component } from "react";
import AppPresenter from "./AppPresenter";
import Store from "store";

class AppContainer extends Component {
  constructor(props) {
    super(props);
    //함수는 콘스럭터 안에 있어야 함
    this.state = {
      notifications: {
        "1": {
          id: 1,
          text: "Someting",
          seen: true
        },
        "2": {
          id: 2,
          text: "Something else",
          seen: false
        },
        "3": {
          id: 2,
          text: "Something else but diffrent",
          seen: false
        }
      }
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
