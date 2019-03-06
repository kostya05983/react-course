import React, {Component} from 'react';
import PropTypes from "prop-types";

const Counter = ({ counter, func, number, string }) => {
    console.log(counter, number)
    return <h1>{`Counter component. Counter value is: ${counter}`}</h1>
}

Counter.propTypes = {
    counter: PropTypes.number.isRequired,
    func: PropTypes.func,
    number: PropTypes.number,
    string: PropTypes.string,
}

Counter.defaultProps = {
    func: () => {},
    number: 0,
    string: '',
}

class CounterButton extends Component {
    state = {
        counter: 0,
    }

    onClick = () => {
        this.setState(({counter})=>({
            click: ++counter,
        }))
    }


    render(){
        const {counter} = this.state;

        return (
            <div>
                <div>{counter}</div>
                <Counter
                    counter={counter}
                />
                <button onClick={this.onClick}>+1</button>
            </div>
        )
    }
}

export default CounterButton;