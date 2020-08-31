import React from 'react';
import './App.css';

import Clock from './Components/Clock';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    componentDidMount(){
       console.log('App componentDidMount');
    }

    componentWillUnmount(){
       console.log('App componentWillUnmount');
    }


  render() {
    return (
      <Clock/>
    );
  }
}

export default App;
