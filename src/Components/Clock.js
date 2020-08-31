import React from 'react';

class Clock extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    componentDidMount(){
       console.log('Clock componentDidMount');
    }

    componentWillUnmount(){
       console.log('Clock componentWillUnmount');
    }


  render() {
    return (
      <div></div>
    );
  }
}

export default Clock;
