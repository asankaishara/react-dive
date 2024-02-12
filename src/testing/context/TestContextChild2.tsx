
// @ts-ignore
import {useUserContext} from "./UserContext.tsx";

export default function () {
    const user = useUserContext();
    return (
        <>
            Child 2..
            <br/>
            User Name: {user.uname}
            <br/>
            User status: {user.isSubscribe}
        </>
    );
}