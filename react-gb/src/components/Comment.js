import './Comment.css';

function Avatar({avatarUrl, alt}) {
    return <div>
        <img
            className="Avatar"
            src={avatarUrl}
            alt={alt}
        />
    </div>
}

function UserInfo({user}) {
    return <div className="UserInfo">
        <Avatar avatarUrl={user.avatarUrl} alt={user.name}/>
        <div className="UserInfo-name">Hello {user.name}</div>
    </div>
}

export const Comment = ({author, date, text}) => {
    return <div className="Comment">
        <UserInfo user={author}/>
        <div className="Comment-text">{text}</div>
        <div className="Comment-date">{date}</div>
    </div>
}
export default Comment;