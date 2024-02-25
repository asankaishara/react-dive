import {forwardRef, Ref, useImperativeHandle, useState} from 'react';

interface CounterProps {}

export type CounterRef = {
    reset: () => void;
};

function Counter (props: CounterProps, ref: Ref<CounterRef>) {

    console.log("Props:" + props);
    const [count, setCount] = useState(0);

    const increment = () => {
        setCount(count + 1);
    }

    const decrement = () => {
        setCount(count - 1);
    }

    const reset = () => {
        setCount(0);
    }

    useImperativeHandle(ref, () => ({
        reset,
    }));

    return (
        <div>
            <h1>Count: {count}</h1>
            <button onClick={decrement}>Decrement</button>
            <button onClick={increment}>Increment</button>
        </div>
    );
}

export default forwardRef(Counter)

