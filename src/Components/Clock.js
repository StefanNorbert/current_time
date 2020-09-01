import React from 'react';
import axios from 'axios';

import './Clock.css';

const getValidTimeZones = () => {
    const url = "http://worldtimeapi.org/api/timezone";

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
            let validTimeZones = [];
            try {
                validTimeZones = (await getValidTimeZones()).data
            }
            catch (e) {
                console.error(e.message + '\n' + e.stack);
            }
            finally {
                console.log('finally');
            }
            validTimeZones = validTimeZones.filter(
                // tz => !(tz.toLowerCase()).startsWith("africa")
                //     && !(tz.toLowerCase()).startsWith("america")
                //     && !(tz.toLowerCase()).startsWith("antarctica")
                //     && !(tz.toLowerCase()).startsWith("asia")
                //     && !(tz.toLowerCase()).startsWith("australia")
                //     && !(tz.toLowerCase()).startsWith("atlantic")
                tz => tz.toLowerCase().indexOf('bucharest') > -1
                // Europe/Bucharest
            );
            console.log("validTimeZones: ", validTimeZones);
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
