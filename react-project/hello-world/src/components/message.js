import React, {useState} from 'react';

function Message() {

    const [isSubscribed, setIsSubscribed] = useState(false);
   
    const handleClick = () => {
        setIsSubscribed(true);
    }

    return (
        <div>
            <h2>{isSubscribed? 'Thanks For Subscribe': 'Welcome Visitors'}</h2>
            <button onClick={handleClick}>subscribe</button>
        </div>
    )
}

export default Message