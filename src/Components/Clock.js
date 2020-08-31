import React from 'react';

import './Clock.css';

class Clock extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            time: new Date()
        };
    }

    componentDidMount(){
       console.log('Clock componentDidMount');
    }

    componentWillUnmount(){
       console.log('Clock componentWillUnmount');
    }


    render() {
        console.log("time: ", this.state.time, typeof this.state.time);
        return (
            <div className="clock">
                <div className="clock__location">Oradea</div>
                <div className="clock__time">{this.state.time.toLocaleString('ro-RO')}</div>
            </div>
        );
    }
}

export default Clock;
