import './App.css'
import Box from '@mui/material/Box';
import {Button, Rating, TextField, Typography} from "@mui/material";
import {useState} from "react";
import TestRef from "./testing/ref/TestRef.tsx";
import TestDebounce from "./testing/debounce/TestDebounce.tsx";
import ImperativeHandle from "./testing/imperative-handle/ImperativeHandle.tsx";
import UseTransition from "./testing/useTransition/UseTransition.tsx";
import UseDeferredValue from "./testing/deferred-value/UseDeferredValue.tsx";
import LocalStorageIndex from "./testing/localStorage/LocalStorageIndex.tsx";

function App() {
    const [ratingValue, setRatingValue] = useState<number | null>(null);
    const [comment, setComment] = useState("");
    const isDisabled = ratingValue === null || comment === "";

    return (
        <Box sx={{p: 2, display:"flex", flexDirection:"column"}}>
            {/*<Typography>How would you rate me?</Typography>
            <Rating value={ratingValue} onChange={ (_, v) => setRatingValue(v) }/>
            <Typography>Tell me more..</Typography>
            <TextField multiline maxRows={4} value={comment} onChange={ (e) => setComment(e.target.value) } />
            <Button disabled={isDisabled} variant="contained">Submit</Button>*/}
            {/*<TestRef/>*/}
            {/*<TestDebounce/>*/}
            {/*<ImperativeHandle/>*/}
            {/*<UseTransition/>*/}
            {/*<UseDeferredValue/>*/}
            <LocalStorageIndex/>
        </Box>
    )
}

export default App
