import {useDeferredValue, useState} from "react";
import SlowList from "./SlowList.tsx";

export default function UseDeferredValue() {

    const [query, setQuery] = useState('');
    const deferredValue = useDeferredValue(query);

    return (
        <div>
            <input type='text' value={query} placeholder='Search..' onChange={ (e) => setQuery(e.target.value) }/>
            <SlowList text={deferredValue}/>
        </div>
    );
}