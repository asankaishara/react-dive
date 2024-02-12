import {makeStyles} from "@mui/styles";
import React, {useState, useEffect, useMemo} from "react";
import TestContextParent from "./context/TestContextParent.tsx";
import TestRef from "./ref/TestRef.tsx";
import TestFetch from "./fetch/TestFetch.tsx";
import TestDebounce from "./debounce/TestDebounce.js";

const useStyles = makeStyles((theme) => ({
    toolbar: theme.mixins.toolbar,
    content: {
        flexGrow: 1,
        padding: theme.spacing(3),
    }
}));

export default function(props) {

    const classes = useStyles(props);

    const [count, setCount] = useState(0);

    return (
        <main className={classes.content}>
            <div className={classes.toolbar}/>
            Count: {count}
            <button onClick={ () => setCount(count+1) }>Increment</button>
            <br/>
            {/*<TestMemo diviation={count}/>*/}
            {/*<TestContextParent/>*/}
            {/*<TestRef/>*/}
            {/*<TestFetch/>*/}
            <TestDebounce/>
        </main>
    )
}