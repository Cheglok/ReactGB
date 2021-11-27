import React, {useEffect, useState} from 'react';
import './App.css';
import {MessageList} from './components/MessageList';
import {MessageForm} from './components/MessageForm';
import Container from "@mui/material/Container";
import {ChatList} from "./components/ChatsList";
import { createTheme, ThemeProvider, styled } from '@mui/material/styles';
import {useTheme} from "@mui/material";

const theme = createTheme({
    palette: {
        type: 'light',
        primary: {
            main: '#b263c7',
            light: '#0d1c73',
            dark: '#611575',
        },
        secondary: {
            main: '#f50057',
            light: '#cb2661',
            dark: '#9e043a',
        },
        text: {
            disabled: 'rgba(88,54,54,0.38)',
            primary: '#11114e',
        },
        background: {
            default: '#d2d296',
        },
        warning: {
            main: '#f59406',
            light: '#f1aa42',
            dark: '#925a09',
        },
        info: {
            main: '#178dea',
            light: '#278ee0',
            dark: '#0f5287',
            contrastText: '#ecdede',
        },
    },
});


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
        <ThemeProvider theme={theme}>
        <div className="App" style={{display: 'flex'}}>
            <ChatList chats={chats}/>
            <Container maxWidth={"md"}>
                <MessageForm
                    title={title}
                    changeHandler={changeHandler}
                    keyPressHandler={keyPressHandler}
                    buttonHandler={buttonHandler}
                />
                <MessageList messages={messages} theme={theme}/>
            </Container>
        </div>
        </ThemeProvider>
    )
}

export default App;