import React from 'react';
import './App.css';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    componentDidMount(){
       console.log('App componentDidMount');
    }

    shouldComponentUpdate(){
       console.log('App shouldComponentUpdate');
    }

    componentDidUpdate(){
       console.log('App componentDidUpdate');
    }

    componentWillUnmount(){
       console.log('App componentWillUnmount');
    }


  render() {
    return (
      <div></div>
    );
  }
}

export default App;
