import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './ChatRoom.css';
import { useLocation } from 'react-router-dom';

const Message = ({message}) => {
    return (
        <div style={{ backgroundColor: '#e6ffe6', padding: '10px', marginBottom: '10px' }}>
            <p>User: {message.Content}</p>
        </div>
    );
};

const ChatroomDetail = ({ chatroomId }) => {
  const [selectedChatRoomMessages, setSelectedChatRoomMessages] = useState([]);
  const handleInsertMessage = (e) => {
    e.preventDefault();
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
        <h1>ChatRoom</h1>
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

const ChatRoom = () => {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const customerId = queryParams.get('customerId');
  const merchantId = queryParams.get('merchantId');

  const [selectedChatroomId, setSelectedChatroomId] = useState(1);
  const [chatRooms, setChatRooms] = useState([]);
  
  const handleSelectChatroom = (chatroomId) => {
    setSelectedChatroomId(chatroomId);
  };

  useEffect(() => {
    // GET request using axios inside useEffect React hook
    axios.get(`https://souq-marketplace-api.onrender.com/chatroom?customerId=${customerId}&merchantId=${merchantId}`)
        .then(response => {
          if (response.data.length > 0)
            setChatRooms(response.data);
          else {
            var chatRoomRequest = {
              Customer_ID: customerId, 
              Merchant_ID : merchantId
            };
            axios.post(`https://souq-marketplace-api.onrender.com/chatroom`, chatRoomRequest)
            .then(resp => {
              axios.get(`https://souq-marketplace-api.onrender.com/chatroom?customerId=${customerId}&merchantId=${merchantId}`)
              .then(response => {
                console.log('Again create fetch')
                setChatRooms(response.data);
              })
              .catch(error => {
                console.error('There was an error!', error);
              });
            })
            .catch(error => {
              console.error('There was an error creating chatroom', error);
            });
          }
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