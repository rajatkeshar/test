import React from 'react';

function Greet(props) {
    //let name = props.name;
    return (
        <div>
            <h3>Hey Happy Birthday {props.name}</h3>
            {props.children}
        </div>
    )
}

export default Greet;