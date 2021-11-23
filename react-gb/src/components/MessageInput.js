import React, {useState} from 'react';

export const MessageForm = ({onAdd}) => {

    const [title, setTitle] = useState('');

    const changeHandler = (event) => {
        setTitle(event.target.value);
    };

    const keyPressHandler = (event) => {
        if(event.key === 'Enter') {
            onAdd(title);
            setTitle('');
        }
    };

    return (
        <div>
            <input
                onChange={changeHandler}
                value={title}
                type="text"
                id="title"
                onKeyPress={keyPressHandler}
                />
            <label htmlFor="title">Input your message</label>
        </div>
    )
}