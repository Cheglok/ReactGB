import './App.css';
import Message from './Message.js';

const ConstComponent = ({constComponentText}) => {
    return <div>{constComponentText}</div>
}

function App(props) {

    const message = "Текст сообщения для компонента Message, константа, переданная через пропсы";
    // const message = "";
    const textForConstComponent = "Этот компонент весь создан через константу";

    return (
        <div className="App">
            <Message text={message}/>
            <ConstComponent constComponentText={textForConstComponent}/>
            <header className="App-header">
                My First React App
                <h3>Hello, {props.name}</h3>
            </header>
        </div>
    );
}

export default App;