import React, { use, useEffect, useState } from 'react';


function ChildComponentOne(props) {
    const [value, setValue] = useState('');

    useEffect(()=>{
       props.IschnageByChild?  setValue(props.username):"";
    },[props.username])

   const handleChildOneValue = (e) => {
        setValue(e.target.value);
    }
    return (
        <div style={{marginTop: '20px'}}>
            child1: 
            <input type="text" value={value} placeholder="Child Component One Input" 
            onChange={handleChildOneValue}/>
        </div>
    )
}

export default ChildComponentOne;