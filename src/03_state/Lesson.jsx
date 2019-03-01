import React, { Component } from 'react';

//Modern
class CounterButton extends Component {
    state = {
        counter: 0,
    }

    handleClick = () => {
        this.setState({
            counter: 2,
        })
    }

    render() {
        const { counter } = this.state;
        //
        return (
            <div>
            <div>{counter}</div>
                <button onClick={this.handleClick}>+1</button>
            </div>
        );
    }
}

export default CounterButton;