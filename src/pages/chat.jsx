import React, { useEffect, useState } from "react";
import { BackButton, Userbar } from "../components";
import ChatStyle from "../styles/chat.module.css";
import employee from "../data/employee.json"

const getImgSrc = (username) => {
  // Since there are only 2 users 
  if(username === "Alex Doe"){
    return employee.collector.imgSrc
  }
  return employee.janitor.imgSrc
}

const ChatBubble = ({ connection, socket }) => {
  const [username, id] = connection.split("-") 
  const [toggle, setToggle] = useState(false)
  const [message, setMessage] = useState("Start chatting")
  const [log, setLog] = useState([])
  return toggle ?
    <ChatWindow setToggle={setToggle} 
      username={username} 
      id={id} 
      socket={socket}
      message={message}
      setMessage={setMessage}
      log={log}
      setLog={setLog}
      />
      :
    (
      <div className={ChatStyle.bubble} onClick={() => setToggle(true)}>
        <img src={getImgSrc(username)} alt="user avatar" />
        <div className={ChatStyle.bubble_info}>
          <h2>{username}</h2>
          <span>{log[log.length-1]}</span>
        </div>
      </div>
    )
};

const ChatWindow = ({setToggle, username, id, socket, message, setMessage, log, setLog}) => {
  // Handle send message
  const sendMessage = () => {
    // Add sent message  to logs 
    setLog([...log, `[${username}]: ${message}`])
    // Send to server
    socket.emit('privateChat', {
      username: username,
      to: id,
      message: message
    })
  }

  // Handle receive message
  socket.on("privateMessage", data => {
    setMessage("")
    setLog([...log, data.message])
  }) 
  // Handle enter message from input
  const changeMessage = (e) => {
    setMessage(e.target.value)
  }
  return (
    <div className={ChatStyle.chat_window}>
      <BackButton setState={setToggle}/>
      <span className={ChatStyle.chat_username}>{username}</span>
      <div className={ChatStyle.chat_space}>
        {log.map(message => (
          <p key={message}>{message}</p>
        ))}
      </div>
      <div className={ChatStyle.chat_action}>
        <input type="text" 
          placeholder="Enter a message"
          onChange={e => changeMessage(e)}
          />
        <button onClick={sendMessage}>Send</button>
      </div>
    </div>
  )
}

const ChatView = ({ activeList, socket}) => {
  return (
    <div className={ChatStyle.chat_view}>
      {activeList.map(connection => (
        <ChatBubble connection={connection} socket={socket} key={connection}/>
      ))}
    </div>
  );
};



const Chat = ({ user, socket}) => {
  const [activeList, setActiveList] = useState([])
  useEffect(()=>{
    socket.emit('getList')
    socket.on('returnList', (res)=>{
      res.map(conn => {
        const username = conn.split("-")[0]
        console.log(username)
        if(username != user.name){
          setActiveList([...activeList, conn])
        }
      })
    })
  },[])
  return (
    <div className={ChatStyle.container}>
      <Userbar user={user} />
      <ChatView activeList={activeList} socket={socket}/>
    </div>
  );
};

export default Chat;
