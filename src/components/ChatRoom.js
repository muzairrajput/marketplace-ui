import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './ChatRoom.css';

const Message = ({message}) => {
    return (
        <div style={{ backgroundColor: '#e6ffe6', padding: '10px', marginBottom: '10px' }}>
            <p>User: {message.Content}</p>
        </div>
    );
};

const ChatroomDetail = ({ chatroomId }) => {
  const [selectedChatRoomMessages, setSelectedChatRoomMessages] = useState([]);
  const [messageContent, setMessageContent] = useState("");
  const handleInsertMessage = (e) => {
    e.preventDefault();
    console.log(`chatroomId: ${chatroomId} message: ${messageContent}`);
    var url = `https://souq-marketplace-api.onrender.com/message`;
    axios.post(url, {chatroomId: {chatroomId}, senderId: 1, content: messageContent, timesent: new Date().toUTCString()})
        .then(response => {
        })
        .catch(error => {
          console.error('There was an error inserted messags', error);
        });
        setMessageContent("");
  }

  useEffect(() => {
    // GET request using axios inside useEffect React hook
    var url = `https://souq-marketplace-api.onrender.com/message/${chatroomId}`;
    axios.get(url)
        .then(response => {
          console.log('Messages');
          console.log(response.data);
          setSelectedChatRoomMessages(response.data);
        })
        .catch(error => {
          console.error('There was an error getting messages', error);
        });
  }, [chatroomId]);
  return (
    <div style={{ flex: 4, backgroundColor: '#fff', padding: '20px' }}>
        <h1>ChatRoom</h1>
        <div style={{ overflowY: 'scroll', height: 'calc(100vh - 200px)' }}>
            {selectedChatRoomMessages.map((msg) => (
                <Message message={msg} />
            ))}
        </div>
        <form style={{ display: 'flex' }}>
          <input type="text" placeholder="Type a message..." style={{ flex: 1, padding: '10px' }} 
                onChange={e => setMessageContent(e.target.value)}/>
          <button style={{ padding: '10px' }} onClick={(e) => handleInsertMessage(e)}>Send</button>
        </form>
      </div>
  );
};

const ChatRoom = () => {
  const [selectedChatroomId, setSelectedChatroomId] = useState(1);
  const [chatRooms, setChatRooms] = useState([]);
  
  const handleSelectChatroom = (chatroomId) => {
    console.log('selected old '+selectedChatroomId);
    setSelectedChatroomId(chatroomId);
  };

  useEffect(() => {
    // GET request using axios inside useEffect React hook
    axios.get('https://souq-marketplace-api.onrender.com/chatroom')
        .then(response => {
          setChatRooms(response.data);
        })
        .catch(error => {
          console.error('There was an error!', error);
        });
  }, []);
  
  return (
    <div style={{ display: 'flex', height: '100vh' }}>
      <div style={{ flex: 1, backgroundColor: '#f2f2f2', padding: '20px' }}>
        <h1>Chatrooms</h1>
        <ul>
            {chatRooms.map((chatroom) => (
                <button className='selectedChatRoom' key={chatroom.ChatRoom_ID} 
                  onClick={() => handleSelectChatroom(chatroom.ChatRoom_ID)}>
                        ChatRoom {chatroom.ChatRoom_ID}
                </button>
            ))}
        </ul>
      </div>
      <ChatroomDetail chatroomId={selectedChatroomId}/>
    </div>
  );
};

export default ChatRoom;