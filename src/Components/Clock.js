import React from 'react';
import axios from 'axios';

import './Clock.css';

/*
const getValidTimeZones = () => {
    const url = "http://worldtimeapi.org/api/timezone";

    return axios({
        url
    });
};
*/

const getLocationsForArea = area => {
    const url = `http://worldtimeapi.org/api/timezone/${area}`;
    return axios({
        url
    });
};

const getCurrentTime = location => {
    const url = `http://worldtimeapi.org/api/timezone/${location}`;
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
            try {
                const locations = (await getLocationsForArea('Europe')).data;
                console.log("locations: ", locations);

                const currentTime = (await getCurrentTime(this.props.location)).data.datetime;
                console.log("currentTime: ", currentTime);
                this.setState({
                    time: new Date(currentTime)
                });

                // Tick
/*
                this.intervalId = window.setInterval(() => {
                    this.setState({
                        time: new Date()
                    });
                }, 1000);
*/

            }
            catch (e) {
                console.error(e.message + '\n' + e.stack);
            }
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
                <div className="clock__time">{this.state.time.toLocaleString('ro-RO', {timeZone: this.props.location})}</div>
            </div>
        );
    }
}

export default Clock;
