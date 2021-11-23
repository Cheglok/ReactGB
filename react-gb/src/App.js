import React, {useEffect, useState} from 'react';
import './App.css';
import {MessageInput} from './components/MessageInput';
import {MessageList} from './components/MessageList';

function App() {
    const [messages, setMessages] = useState([]);

    const addHandler = (title) => {
        const newMessage = {
            id: Date.now(),
            title: title,
            isCommented: false,
            botComment: "",
        }
        setMessages(prevState => [newMessage, ...prevState]);
    };

    const removeMessage = (id) => {
        setMessages(prevState =>
            prevState.filter(message => message.id !== id))
    };

    const delay = (id) => {
        setTimeout( createBotComment, 1500, id);
    }

    const createBotComment = (id) => {
        setMessages(prevState => {
            return prevState.map(message => {
                if(message.id === id) {
                    message.botComment = "Ваше сообщение принято. Бот-автоответчик";
                    message.isCommented = true;
                }
                return message;
            })
        })
    }

    useEffect(() => {
           if(messages[0] && messages[0].isCommented === false) {
               delay(messages[0].id);
           }
    }, [messages])

    return (
        <div className="App">
            <header className="App-header">
                <MessageInput onAdd={addHandler}/>
                <MessageList
                    messages={messages}
                    onRemove={removeMessage}
                    />
            </header>
        </div>
    );
}


export default App;