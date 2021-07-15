import React from 'react';

const Input = ({ message, setMessage, sendMessage }) => {
  return (
    <form>
      <input
        type="text"
        value={message}
        placeholder="type message"
        onChange={(e) => setMessage(e.target.value)}
        //     onKeyPress={(e) => (e.key === 'Enter' ? sendMessage(e) : null)}
      />
      <button className="" onClick={(e) => sendMessage(e)}>
        Send
      </button>
    </form>
  );
};

export default Input;
