import React, { useState } from 'react';
import ChildComponentTwo from './ChildComponentTwo'
import ChildComponentOne from './ChildComponentOne'

function ParentComponent() {
    const [value, setValue] = useState('');
    const [chnageByChild, setChangeByChild] = useState(true);

    const handleParentInputValue = (e) => {
        setValue(e.target.value);
        setChangeByChild(true)
    }

    const sentDataToParent = (data) => {
        console.log("Data from child 2: ", data);
        setValue(data);
        setChangeByChild(false)
    }

    return(
         <div>
            Prent:
            <input type="text" value={value} placeholder="Enter text here" onChange={handleParentInputValue} />
            <ChildComponentOne username = {value} IschnageByChild={chnageByChild} />
            <ChildComponentTwo username = {value} onSendData= {sentDataToParent}/>
         </div>
    )
}

export default ParentComponent;