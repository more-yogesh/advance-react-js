import { useState } from 'react';
import './App.css';

const Counter = () => {
    const [count, setCounter] = useState(0);

    const decrementValue = () => {
        setCounter(count - 1);
    }

    const incrementValue = () => {
        setCounter(count + 1);
    }
    return (<div className={'c100  big p' + count}>
        <span>{count}%</span>
        <div className="slice">
            <div className="bar"></div>
            <div className="fill"></div>
        </div>
        <button onClick={decrementValue}>-</button>
        <button onClick={incrementValue}>+</button>
    </div>);
}

export default Counter;