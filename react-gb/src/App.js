import * as React from "react";
import { Routes, Route, Link, Outlet } from "react-router-dom";
import './App.css';
import Chat from "./components/Chat";
import {Messenger} from "./components/Messenger";
import {ManageChats} from "./components/ManageChats";

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
        </>
    );
}

const Info = () => {
    return (
        <main>
            <h2>Главная страница</h2>
            <p>Какая-то информация о социальной сети</p>
        </main>
    )
}


function App() {
    return (
        <div className="App">
            <Routes>
                <Route path="/" element={<Home />}>
                    <Route index element={<Info />}/>
                    <Route path="profile" element={<Profile />} />
                    <Route path="chats" element={<Messenger/>} >
                        <Route index element={<ManageChats/>}/>
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