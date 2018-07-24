import React, { Component } from "react";
import AppPresenter from "./AppPresenter";
import Store from "store";

class AppContainer extends Component {
  constructor(props) {
    super(props);
    //함수는 콘스럭터 안에 있어야 함

    this._deleteNotification = id => {
      this.setState(currentState => {
        const newState = delete currentState.notifications[id];
        return newState;
      });
    };
    this._seeNotification = id => {
      this.setState(currentState => {
        return {
          ...currentState,
          notifications: {
            ...currentState.notifications,
            [id]: {
              ...currentState.notifications[id],
              seen: true
            }
          }
        };
      });
    };
    this.state = {
      notifications: {
        "1": {
          id: 1,
          text: "Someting",
          seen: false
        },
        "2": {
          id: 2,
          text: "Something else",
          seen: false
        },
        "3": {
          id: 3,
          text: "Something else but diffrent",
          seen: false
        }
      },
      deleteNotification: this._deleteNotification,
      seeNotification: this._seeNotification
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
