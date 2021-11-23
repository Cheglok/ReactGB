import React, {useEffect, useState} from 'react';
import './App.css';
import {MessageInput} from './components/MessageInput';
import {MessageList} from './components/MessageList';
import {Header} from './components/Header';

function App() {
    const [messages, setMessages] = useState([]);

    const addHandler = (title) => {
        const newMessage = {
            id: Date.now(),
            title: title,
            botComment: "",
        }
        setMessages(prevState => [newMessage, ...prevState]);
    };

    const removeMessage = (id) => {
        setMessages(prevState =>
            prevState.filter(message => message.id !== id))
    };

    const answerDelay = (id) => {
        setTimeout( createBotComment, 1500, id);
    }

    const createBotComment = (id) => {
        setMessages(prevState => {
            return prevState.map(message => {
                if(message.id === id) {
                    message.botComment = "Ваше сообщение принято. Бот-автоответчик";
                }
                return message;
            })
        })
    }

    useEffect(() => {
           if(messages[0] && messages[0].botComment === "") {
               answerDelay(messages[0].id);
           }
    }, [messages])

    return (
        <div className="App">
            <Header/>
            <div className="App-chat">
                <MessageInput onAdd={addHandler}/>
                <MessageList
                    messages={messages}
                    onRemove={removeMessage}
                    />
            </div>
        </div>
    );
}


export default App;