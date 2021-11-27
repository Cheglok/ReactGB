import React, {useEffect, useState} from 'react';
import './App.css';
import {MessageList} from './components/MessageList';
import {MessageForm} from './components/MessageForm';
import Container from "@mui/material/Container";
import {ChatList} from "./components/ChatsList";
import Box from "@mui/material/Box";

function App() {
    const [messages, setMessages] = useState([]);
    const [title, setTitle] = useState('');

    const addMessage = (title) => {
        const newMessage = {
            id: Date.now(),
            title: title,
            botComment: "",
        }
        setMessages(prevState => [newMessage, ...prevState]);
    };

    const chats = [
        {
            name: "Lexy",
            id: 1
        },
        {
            name: "Riley",
            id: 2
        },
        {
            name: "Dakota",
            id: 3
        },
        {
            name: "Holly",
            id: 4
        },
    ];

    const createBotComment = (id) => {
        setMessages(prevState => {
            return prevState.map(message => {
                if (message.id === id) {
                    message.botComment = "Ваше сообщение принято. Бот-автоответчик";
                }
                return message;
            })
        })
    }

    useEffect(() => {
        if (messages[0] && messages[0].botComment === "") { //Пришлось делать проверку на пустоту массива на первый рендер
            setTimeout(createBotComment, 1500, messages[0].id);
        }
    }, [messages])

    const changeHandler = (event) => {
        setTitle(event.target.value);
    };

    const keyPressHandler = (event) => {
        if (event.key === 'Enter') {
            addMessage(title);
            setTitle('');
        }
    };

    const buttonHandler = () => {
        addMessage(title);
        setTitle('');
    }



    return (
        <div className="App">
            <Box sx={{ display: 'flex' }}>
                    <ChatList chats={chats}/>
                <Container maxWidth={"md"}>
                    <MessageForm
                        title={title}
                        changeHandler={changeHandler}
                        keyPressHandler={keyPressHandler}
                        buttonHandler={buttonHandler}
                    />
                    <MessageList messages={messages}/>
                </Container>
            </Box>
        </div>

    )
}

export default App;