import React from 'react';
import Message from './Message';

const Messages = ({ messages, name }) => {
  return (
    <div
      className="bg-gray-200 overflow-y-scroll p-2"
      style={{ height: '500px' }}
    >
      {messages &&
        messages.map((message, i) => (
          <div>
            <Message message={message} name={name} />
          </div>
        ))}
    </div>
  );
};

export default Messages;
