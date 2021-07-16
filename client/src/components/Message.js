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
        <div className="text-right bg-blue-400 text-white p-3 m-2 rounded-xl">
          <p className="bg-white text-blue-700 inline p-1 rounded px-2">
            {trimedName}
          </p>
          <div>
            <p>{ReactEmoji.emojify(text)}</p>
          </div>
        </div>
      ) : (
        <div className="text-left bg-white text-blue-700 p-3 shadow-lg m-2 rounded-xl">
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
