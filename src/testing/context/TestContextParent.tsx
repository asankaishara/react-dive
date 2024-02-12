import {useState} from 'react';
// @ts-ignore
import {UserContext} from "./UserContext.tsx";
// @ts-ignore
import TestContextChild1 from "./TestContextChild1.tsx";

export interface User {
    isSubscribe: boolean;
    uname: string;
}

export default function TestContextParent() {

    console.log("TestContextParent loaded..")

    const [user, setUser] = useState<User>({isSubscribe: true, uname: 'Ishara'});

    return (
        <>
            <UserContext.Provider value={user}>
                <TestContextChild1/>
            </UserContext.Provider>
        </>
    );
}