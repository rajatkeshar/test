import React, {useState} from 'react';

function Forms() {
    const [username, setUsername] = useState('');
    const [password, setPasword] = useState('');
    const [age, setAge] = useState('');

    const HandleUsername = (event) => {
        setUsername(event.target.value);
    };

    const HandlePassword = (event) => {
        setPasword(event.target.value);
    };

    const HandleAge = (event) => {
        setAge(event.target.value);
    };

    const HandleSubmit = (event) => {
        event.preventDefault();
        alert(`${username}, ${password}, ${age}`);
    }

    console.log(username, password, age);
    return (
        <div>
            <form onSubmit={HandleSubmit}>
                <div>
                    <label>username: </label>
                    <textarea onChange={HandleUsername}/>
                </div>
                
                <div>
                    <label>password: </label>
                    <textarea onChange={HandlePassword}/>
                </div>

                <div>
                    <label>age: </label>
                    <select value={age} onChange={HandleAge}>
                        <option value="0">0</option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                    </select>
                </div>
                <div>
                    <button>Submit</button>
                </div>
            </form>
        </div>
    )
}

export default Forms