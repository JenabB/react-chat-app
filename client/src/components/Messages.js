import React from 'react';
import Message from './Message';

const Messages = ({ messages, name }) => {
  return (
    <div>
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
