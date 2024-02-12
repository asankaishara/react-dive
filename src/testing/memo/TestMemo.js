import {memo} from 'react';
import {initialItems} from '../utils.js'
import React, {useState, useEffect, useMemo} from "react";
function TestMemo(props) {

    const [items] = useState(initialItems);
    const selectedItem = useMemo( () => items.find( item => item.isSelected ) , [items]);

    console.log("Test component 2 loaded..");
    return (
        <div>
            Selected Item: {selectedItem?.id}
            Test Component 2 label: {props.diviation}
        </div>
    );
}

export default memo(TestMemo)