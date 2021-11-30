import {Chats} from "./components/Chats";
import * as React from "react";
import { Routes, Route, Link } from "react-router-dom";
import './App.css';


function Home() {
    return (
        <>
            <main>
                <h2>Главная страница</h2>
            </main>
            <nav>
                <ul>
                    <li><Link to="/profile">Профиль</Link></li>
                    <li><Link to="/chats">Чаты</Link></li>
                </ul>
            </nav>
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


function App() {
    return (
        <div className="App">
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/profile" element={<Profile />} />
                <Route path="chats" element={<Chats />} />
            </Routes>
        </div>
    );
}

export default App;