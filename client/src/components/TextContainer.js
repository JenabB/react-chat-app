import React from 'react';

import onlineIcon from '../icons/onlineIcon.png';

const TextContainer = ({ users }) => (
  <div className="bg-blue-800 rounded-lg m-4 p-4 text-white">
    {users ? (
      <div>
        <h1>People currently chatting:</h1>
        <div className="activeContainer">
          <h2>
            {users.map(({ name }) => (
              <div key={name} className="activeItem">
                {name}
                <img alt="Online Icon" src={onlineIcon} />
              </div>
            ))}
          </h2>
        </div>
      </div>
    ) : null}
  </div>
);

export default TextContainer;
