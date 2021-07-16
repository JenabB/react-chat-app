import { useState } from 'react';
import { Link } from 'react-router-dom';
const Join = () => {
  const [name, setName] = useState('');
  const [room, setRoom] = useState('');

  return (
    <div>
      <div
        className="bg-blue-600 lg:w-2/5 w-full rounded-lg mx-auto my-20 py-20 text-center"
        style={{ height: '400px' }}
      >
        <h1c className="text-white text-2xl">Join</h1c>
        <div>
          <input
            placeholder="Name"
            className="my-4 p-2 rounded-3xl"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div>
          <input
            placeholder="Room"
            className="my-2 p-2 rounded-3xl"
            type="text"
            value={room}
            onChange={(e) => setRoom(e.target.value)}
            required
          />
        </div>
        <Link
          onClick={(e) => (!name || !room ? e.preventDefault() : null)}
          to={`/chat?name=${name}&room=${room}`}
        >
          <button
            className="bg-white text-blue-600 font-bold py-2 px-4 rounded-3xl mt-4"
            type="submit"
          >
            Sign In
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Join;
