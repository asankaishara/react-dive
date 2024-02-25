import Counter, {CounterRef} from "./Counter.tsx";
import {useRef} from "react";

export default function ImperativeHandle() {

    const counterRef = useRef<CounterRef>(null);

    return (
        <div>
            <Counter ref={counterRef}/>
            <button onClick={ () => counterRef.current?.reset()}>Reset from parent</button>
        </div>
    );
}