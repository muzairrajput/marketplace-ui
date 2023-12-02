import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './ChatRoom.css';
import { useLocation, useNavigate } from 'react-router-dom';

const Message = ({message}) => {
    return (
        <div style={{ backgroundColor: '#e6ffe6', padding: '10px', marginBottom: '10px' }}>
            <p>User: {message.Content}</p>
        </div>
    );
};

const ChatroomDetail = ({ chatroomId}) => {
  const navigate = useNavigate();
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const orderId = queryParams.get('orderId');
  const [selectedChatRoomMessages, setSelectedChatRoomMessages] = useState([]);
  const handleInsertMessage = (e) => {
    e.preventDefault();
    if (e.target.elements[0].value === '') return;
    var url = `https://souq-marketplace-api.onrender.com/message`;
    var requestModel = {chatroomId: chatroomId, senderId: 1, content: e.target.elements[0].value};
    axios.post(url, requestModel)
        .then(response => {
          console.log(response);
        })
        .catch(error => {
          console.error('There was an error inserted messags', error);
        });
    e.target.elements[0].value = '';
  }

  useEffect(() => {
    const intervalId = setInterval(() => {
      var url = `https://souq-marketplace-api.onrender.com/message/${chatroomId}`;
      axios.get(url)
          .then(response => {
            setSelectedChatRoomMessages(response.data);
          })
          .catch(error => {
            console.error('There was an error getting messages', error);
          });
    }, 3000);

    return () => {
      clearInterval(intervalId);
    };
    
  }, [chatroomId]);

  return (
    <div style={{ flex: 4, backgroundColor: '#fff', padding: '20px' }}>
        <div style={{display: 'flex', alignItems: 'center'}}>
          <h1 style={{marginRight: 'auto'}}>ChatRoom</h1>
        </div>
        <div style={{ overflowY: 'scroll', height: 'calc(100vh - 200px)' }}>
            {selectedChatRoomMessages.map((msg) => (
                <Message message={msg} />
            ))}
        </div>
        <form style={{ display: 'flex' }} onSubmit={handleInsertMessage}>
          <input type="text" name="message" placeholder="Type a message..." style={{ flex: 1, padding: '10px' }} />
          <button className="register-button mt-0">Send</button>
        </form>
      </div>
  );
};

const MerchantChatRoom = () => {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const merchantId = queryParams.get('merchantId');

  const [selectedChatroomId, setSelectedChatroomId] = useState(1);
  const [chatRooms, setChatRooms] = useState([]);
  
  const handleSelectChatroom = (chatroomId) => {
    setSelectedChatroomId(chatroomId);
  };

  useEffect(() => {
    // GET request using axios inside useEffect React hook
    axios.get(`https://souq-marketplace-api.onrender.com/chatroom?merchantId=${merchantId}`)
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
                <button className='register-button mt-0' key={chatroom.ChatRoom_ID} 
                  onClick={() => handleSelectChatroom(chatroom.ChatRoom_ID)}>
                        ChatRoom {chatroom.ChatRoom_ID}
                </button>
            ))}
        </ul>
      </div>
      <ChatroomDetail chatroomId={selectedChatroomId} />
    </div>
  );
};

export default MerchantChatRoom;