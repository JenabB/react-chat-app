import React from 'react';
import ReactEmoji from 'react-emoji';

const Message = ({ message: { user, text }, name }) => {
  let isSentByCurrentUser = false;

  const trimedName = name.trim().toLowerCase();

  if (user === trimedName) {
    isSentByCurrentUser = true;
  }

  return (
    <div>
      {isSentByCurrentUser ? (
        <div>
          <p>{trimedName}</p>
          <div>
            <p>{ReactEmoji.emojify(text)}</p>
          </div>
        </div>
      ) : (
        <div>
          <div>
            <p>{ReactEmoji.emojify(text)}</p>
          </div>
          <p>{trimedName}</p>
        </div>
      )}
    </div>
  );
};

export default Message;
