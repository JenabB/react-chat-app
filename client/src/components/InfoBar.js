import React from 'react';
import onlineIcon from '../icons/onlineIcon.png';
import closeIcon from '../icons/closeIcon.png';

const InfoBar = ({ room }) => {
  return (
    <div className="bg-blue-700 p-2 shadow-lg text-white font-bold flex justify-between">
      <img
        alt="online"
        width="15px"
        style={{ height: '15px' }}
        src={onlineIcon}
      />
      <h3>{room}</h3>
      <a href="/">
        <img src={closeIcon} alt="close" />
      </a>
    </div>
  );
};

export default InfoBar;
