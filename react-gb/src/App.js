import './App.css';
import Message from './Message.js';

function App(props) {

    const message = "Текст сообщения для компонента Message, константа, переданная через пропсы";
    // const message = "";

    return (
        <div className="App">
            <Message text={message}/>
            <header className="App-header">
                My First React App
                <h3>Hello, {props.name}</h3>
            </header>
        </div>
    );
}

export default App;