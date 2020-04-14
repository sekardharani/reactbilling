import React from 'react'
import { connect } from 'react-redux';
import { increment, decrement } from "../store/action";

const Counter = (props) => {
    console.log(props)
    const incrementfn = () => {
        props.increment();
    };

    const decrementfn = () => {
        props.decrement();
    };
    return (
        <div className="counter">
            <h2>Counter</h2>
            <div>
                <button onClick={decrementfn}>-</button>
                <span className="count">{props.count}</span>
                <button onClick={incrementfn}>+</button>
            </div>
        </div>
    )
}

// Add this function:
function mapStateToProps(state) {
    return {
      count: state.count.count
    };
  }

  const mapDispatchToProps = {
    increment,
    decrement
  };


export default connect(mapStateToProps, mapDispatchToProps)(Counter);
