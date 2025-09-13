import React, { useEffect } from 'react';


function ChildComponentTwo(props) {
    const [value, setValue] = React.useState('');

    useEffect(() => {
        setValue(props.username);
    }, [props.username])

    const handleUserName = (e) => {
        setValue(e.target.value);
        props.onSendData(e.target.value);
    }
    return (
        <div style={{ marginTop: '20px' }}>
            child2:
            <input type="text" onChange={handleUserName} value={value} placeholder="Child Component Two Input" />
        </div>
    )
}

export default ChildComponentTwo;