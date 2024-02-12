import {createContext, useContext} from "react";
import {User} from "./TestContextParent";

export const UserContext = createContext<User | undefined>(undefined);

export function useUserContext() {
    const user = useContext(UserContext);
    if( user === undefined) {
        throw new Error("useContext must be used with UserContext.Provider")
    }
    return user;
}