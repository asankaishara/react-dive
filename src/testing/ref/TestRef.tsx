import {useEffect, useRef} from "react";

export default function TestRef() {

    const inputRef = useRef<HTMLInputElement|null>(null);

    useEffect( ()=> {
        inputRef?.current?.focus()
    }, [])

    return (
        <>
            Ref component..
            <input ref={inputRef} name="firstName" placeholder='This is input text..'/>
            <br/>
            <input name="lastName" placeholder='This is input text..'/>
        </>
    );
}