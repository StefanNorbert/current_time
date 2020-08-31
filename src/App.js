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
            <div className="container">
                <Clock/>
                <Clock/>
                <Clock/>
                <Clock/>
                <Clock/>
            </div>
        );
    }
}

export default App;
