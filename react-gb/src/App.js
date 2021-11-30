import {ChatsList} from "./components/ChatsList";
import * as React from "react";
import { Routes, Route, Link, Outlet } from "react-router-dom";
import './App.css';
import Chat from "./components/Chat";


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

function Home() {
    return (
        <>
            <nav>
                <ul>
                    <li><Link to="/">На главную</Link></li>
                    <li><Link to="/profile">Профиль</Link></li>
                    <li><Link to="/chats">Чаты</Link></li>
                </ul>
            </nav>
            <Outlet/>
        </>
    );
}

function Profile() {
    return (
        <>
            <main>
                <h2>Страница профиля</h2>
                <p>
                    Пока оставляю пустой
                </p>
            </main>
            <nav>
                <ul>
                    <li><Link to="/">На главную</Link></li>
                    <li><Link to="/chats">Чаты</Link></li>
                </ul>
            </nav>
        </>
    );
}

const Info = () => {
    return (
        <main>
            <h2>Главная страница</h2>
        </main>
    )
}


function App() {
    return (
        <div className="App">
            <Routes>
                <Route path="/" element={<Home />}>
                    <Route path="" element={<Info />}/>
                    <Route path="profile" element={<Profile />} />
                    <Route path="chats" element={<ChatsList chats={chats}/>} >
                        <Route path="" element={<h2>Выберите чат</h2>}/>
                        <Route path=":chatId" element={<Chat/>}/>
                    </Route>
                    <Route
                        path="*"
                        element={
                            <main style={{ padding: "1rem" }}>
                                <p>There's nothing here!</p>
                            </main>
                        }
                    />
                </Route>
            </Routes>
        </div>
    );
}

export default App;