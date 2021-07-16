import React from 'react';

const Input = ({ message, setMessage, sendMessage }) => {
  return (
    <form className="w-full">
      <input
        className="p-2"
        style={{ width: '90%' }}
        type="text"
        value={message}
        placeholder="type message"
        onChange={(e) => setMessage(e.target.value)}
        //     onKeyPress={(e) => (e.key === 'Enter' ? sendMessage(e) : null)}
      />
      <button
        className="p-2 bg-green-400 text-white font-bold"
        style={{ width: '10%' }}
        onClick={(e) => sendMessage(e)}
      >
        Send
      </button>
    </form>
  );
};

export default Input;
