import React from 'react';
import axios from 'axios';

import './Clock.css';

const getValidTimeZones = () => {
    const url = "http://worldtimeapi.org/api/timezone";

    return axios({
        url
    });
};

const getLocationsForArea = area => {
    const url = `http://worldtimeapi.org/api/timezone/${area}`;
    return axios({
        url
    });
};

class Clock extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            time: new Date()
        };
    }

    componentDidMount(){
        console.log('Clock componentDidMount');
        (async () => {
            let locations = [];
            try {
                locations = (await getLocationsForArea('Europe')).data
            }
            catch (e) {
                console.error(e.message + '\n' + e.stack);
            }
            console.log("locations: ", locations);


            // Tick
/*
            this.intervalId = window.setInterval(() => {
                this.setState({
                    time: new Date()
                });
            }, 1000);
*/
        })();
    }

    componentWillUnmount(){
        console.log('Clock componentWillUnmount');
        window.clearInterval(this.intervalId);
    }


    render() {
        return (
            <div className="clock">
                <div className="clock__location">Oradea</div>
                <div className="clock__time">{this.state.time.toLocaleString('ro-RO')}</div>
            </div>
        );
    }
}

export default Clock;
