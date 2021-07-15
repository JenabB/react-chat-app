import React from 'react';
import onlineIcon from '../icons/onlineIcon.png';
import closeIcon from '../icons/closeIcon.png';

const InfoBar = ({ room }) => {
  return (
    <div>
      <div>
        <img alt="online" src={onlineIcon} />
        <h3>{room}</h3>
      </div>
      <div>
        <a href="/">
          <img src={closeIcon} alt="close" />
        </a>
      </div>
    </div>
  );
};

export default InfoBar;
