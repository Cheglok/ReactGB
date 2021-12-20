import React from "react";
import { Route, Routes, useNavigate,} from "react-router-dom";

export default function PublicRoute({ authenticated, ...rest }) {
    let navigate = useNavigate();
    return !authenticated ? <Route {...rest} /> : navigate('/chats')}
