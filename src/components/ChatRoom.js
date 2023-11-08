import React, { useState } from 'react';

const ChatroomList = ({ chatrooms, onSelectChatroom }) => {
  return (
    <div>
        <div style={{ display: 'flex', height: '100vh' }}>
            <div style={{ flex: 1, backgroundColor: '#f2f2f2', padding: '20px' }}>
                <h1>Chatrooms</h1>
                <ul>
                {chatrooms.map((chatroom) => (
                    <li key={chatroom.id} onClick={() => onSelectChatroom(chatroom.id)}>
                            {chatroom.name}
                    </li>
                ))}
                </ul>
            </div>
            <div style={{ flex: 4, backgroundColor: '#fff', padding: '20px' }}></div>
        </div>
    </div>
  );
};

const Message = ({message}) => {
    return (
        <div style={{ backgroundColor: '#e6ffe6', padding: '10px', marginBottom: '10px' }}>
            <p>User: {message.text}</p>
        </div>
    );
};

const ChatroomDetail = ({ chatroom }) => {
  return (
    <div style={{ flex: 4, backgroundColor: '#fff', padding: '20px' }}>
        <h1>{chatroom.name}</h1>
        <div style={{ overflowY: 'scroll', height: 'calc(100vh - 200px)' }}>
            {chatroom.messages.map((msg) => (
                <Message message={msg} />
            ))}
        </div>
        <form style={{ display: 'flex' }}>
          <input type="text" placeholder="Type a message..." style={{ flex: 1, padding: '10px' }} />
          <button style={{ padding: '10px' }}>Send</button>
        </form>
      </div>
  );
};

const ChatRoom = () => {
  const [selectedChatroomId, setSelectedChatroomId] = useState(null);

  const chatrooms = [
    { id: 1, name: 'Chatroom 1', messages: [{ id: 1, text: 'Message 1' }, { id: 2, text: 'Message 2' }] },
    { id: 2, name: 'Chatroom 2', messages: [{ id: 3, text: 'Message 3' }, { id: 4, text: 'Message 4' }] },
    { id: 3, name: 'Chatroom 3', messages: [{ id: 5, text: 'Message 5' }, { id: 6, text: 'Message 6' }] },
  ];

  const handleSelectChatroom = (chatroomId) => {
    setSelectedChatroomId(chatroomId);
  };

  const selectedChatroom = chatrooms.find((chatroom) => chatroom.id === selectedChatroomId);
  return (
    <div style={{ display: 'flex', height: '100vh' }}>
      <div style={{ flex: 1, backgroundColor: '#f2f2f2', padding: '20px' }}>
        <h1>Chatrooms</h1>
        <ul>
            {chatrooms.map((chatroom) => (
                <li key={chatroom.id} onClick={() => handleSelectChatroom(chatroom.id)}>
                        {chatroom.name}
                </li>
            ))}
        </ul>
      </div>
      <ChatroomDetail chatroom={selectedChatroom}/>
    </div>
  );
};

export default ChatRoom;