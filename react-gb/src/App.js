import React, {useEffect, useState} from 'react';
import './App.css';
import {MessageInput} from './components/MessageInput';
import {MessageList} from './components/MessageList';
import {Header} from './components/Header';
import Button from '@mui/material/Button';

function App() {
    const [messages, setMessages] = useState([]);

    const addMessage = (title) => {
        const newMessage = {
            id: Date.now(),
            title: title,
            botComment: "", //Здесь будет появляться ответ.
            // Сколько бы сообщений в секунду не поступило, ответ будет у каждого свой
        }
        setMessages(prevState => [newMessage, ...prevState]);
    };

    const removeMessage = (id) => {                                    //Скопировал из разбора ДЗ Эмиля чтобы понять
        setMessages(prevState =>
            prevState.filter(message => message.id !== id))
    };

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
           if(messages[0] && messages[0].botComment === "") { //Пришлось делать проверку на пустоту массива на первый рендер
               setTimeout( createBotComment, 1500, messages[0].id);
           }
    }, [messages])

    return (
        <div className="App">
            <Header/>
            <Button variant="contained">Hello World</Button>;
            <div className="App-chat">
                <MessageInput onAdd={addMessage}/>
                <MessageList
                    messages={messages}
                    onRemove={removeMessage}
                    />
            </div>
        </div>
    );
}


export default App;