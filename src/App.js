import React, { Component } from 'react';
import { createStore } from "redux";
import { Provider } from "react-redux";

import './App.css';
import PersonInfo from "./Components/PersonInfo";
import reducer from "./Reducer";

import InitalState from "./InitialState";
const store = createStore(reducer,InitalState);

class App extends Component {
  render() {
    return (
      <div className="app">
          <Provider store = {store} >
            <PersonInfo />
          </Provider>
      </div>
    );
  }
}

export default App;
