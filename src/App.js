import React, { Component } from 'react';
import './App.css';
import ReduxStyle from './Containers/ReduxStyle';
// this component needs to know about our redux state, enter connect (the glue)




class App extends Component {
  render() {
    return (
      <div className="App">
        <ReduxStyle />
        
      </div>
    );
  }
}


export default App;
