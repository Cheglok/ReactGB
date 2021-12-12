import * as React from "react";
import {Routes, Route} from "react-router-dom";
import './App.css';
import {Messenger} from "./components/Messenger";
import {Profile} from "./components/Profile";
import {ChatOne} from "./components/ChatOne";
import Main from "./components/Main"
//lesson 7

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
                <Route path="/" element={<Main/>}>
                    <Route index element={<Info/>}/>
                    <Route path="profile" element={<Profile />} />
                    <Route path="chats" element={<Messenger/>} >
                        <Route index element={<h2>Чат не выбран</h2>}/>
                        <Route path=":chatId" element={<ChatOne/>}/>
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