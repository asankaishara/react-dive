import {TextField} from "@mui/material";
import {useEffect, useState} from "react";
import {fetchUsers, User} from "../utils.tsx";
import {useDebounce} from "./hooks.ts";

export default function TestDebounce() {

    const [search, setSearch] = useState("");
    const [loading, setLoading] = useState(false);
    const [users, setUsers] = useState<User[]>([]);
    const debouncedSearch= useDebounce(search);

    useEffect( () => {
        const loadUsers = async () => {
            setLoading(true)
            const users = await fetchUsers(debouncedSearch);
            setUsers(users);
            setLoading(false);
        };

        loadUsers();

    }, [debouncedSearch] );

    return (
        <>
            <TextField onChange={ (e) => setSearch(e.target.value) } placeholder="Search for name.."/>
            <br/>
            {loading && <div>Loading..</div>}
            {!loading &&
                users.map( (user) => {
                    return <div key={user.id}>{user.name}</div>;
                })
            }
        </>
    );
}