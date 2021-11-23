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
        <div className="App-chat-input-wrapper">
            <label className="App-chat-input-label" htmlFor="title">Input your message</label><br/>
            <div>
                <textarea
                    autoFocus
                    className="App-chat-input-input"
                    onChange={changeHandler}
                    value={title}
                    id="title"
                    onKeyPress={keyPressHandler}
                />
                <br/>
                <button onClick={buttonHandler}>Отправить</button>
            </div>
        </div>
    )
}