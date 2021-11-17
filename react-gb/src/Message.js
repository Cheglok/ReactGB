function Message(props) {
    return <div style={{padding: '25px', backgroundColor: 'lightgreen', paddingTop: '50px'}}>
             {props.text ? props.text : 'Сообщение пустое'}
           </div>
}

export default Message;