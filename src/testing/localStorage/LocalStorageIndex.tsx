import {useState} from "react";
import UseLocalStorage from "./UseLocalStorage.tsx";

export default function LocalStorageIndex() {

    const [value, setValue] = useState('');

    const {setItem, getItem, removeItem} = UseLocalStorage('value');

    return(
        <>
            <input type='text' value={value} placeholder='Search..' onChange={(e) => setValue(e.target.value)}/>
            <div>
                <button onClick={ () => setItem(value) }>Set</button>
                <button onClick={ () => console.log(getItem()) }>Get</button>
                <button onClick={ () => removeItem() }>Remove</button>
            </div>
        </>
    );
}