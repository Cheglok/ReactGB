import React, {useState} from 'react';

export const MessageInput = ({onAdd}) => {

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

    const buttonHandler = () => {
        onAdd(title);
        setTitle('');
    }

    return (
        <div>
            <label htmlFor="title">Input your message</label><br/>
            <input
                onChange={changeHandler}
                value={title}
                type="text"
                id="title"
                onKeyPress={keyPressHandler}
                />

            <button onClick={buttonHandler}>Отправить</button>
        </div>
    )
}