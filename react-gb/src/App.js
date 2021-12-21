import * as React from "react";
import {Routes, Route} from "react-router-dom";
import './App.css';
import {Messenger} from "./components/Messenger";
import {Profile} from "./components/Profile";
import {ChatOne} from "./components/ChatOne";
import Main from "./components/Main"
import {GistsList} from "./components/GistList";
import {SignUp} from "./components/SignUp";
import {useEffect, useState} from "react";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import {Login} from "./components/Login";
require('./helpers/firebase');

const Info = () => {
    return (
        <main>
            <h2>Главная страница</h2>
            <p>Какая-то информация о социальной сети</p>
        </main>
    )
}

function App() {
    const auth = getAuth();
    onAuthStateChanged(auth, (user) => {
        if (user) {
            // User is signed in, see docs for a list of available properties
            // https://firebase.google.com/docs/reference/js/firebase.User
            const uid = user.uid;
            // ...
        } else {
            // User is signed out
            // ...
        }
    });

    console.log(auth);

    return (
        <div className="App">
            <Routes>
                <Route path="/" element={<Main/>}>
                    <Route index element={<Info/>}/>
                    <Route path="signup" element={<SignUp />} />
                    <Route path="login" element={<Login />} />
                    <Route path="profile" element={<Profile />} />
                    <Route path="chats" element={<Messenger/>} >
                        <Route index element={<h2>Чат не выбран</h2>}/>
                        <Route path=":chatId" element={<ChatOne/>}/>
                    </Route>
                    <Route path="gists" element={<GistsList/>} />
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