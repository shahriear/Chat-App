import React, { useState } from 'react';
import { FiSearch } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import ConversationList from '../Components/ConversationList';
import { useSelector } from 'react-redux';

const currentUser = 'shuvo';

const users = [
  {
    name: 'Nipa',
    lastMessage: 'See you soon!',
    lastActive: '2m ago',
    time: '10:17 AM',
  },
  {
    name: 'shuvo',
    lastMessage: 'That sounds great!',
    lastActive: '10m ago',
    time: '12:10 AM',
  },
  {
    name: 'Charlie',
    lastMessage: 'Let’s catch up tomorrow.',
    lastActive: '1h ago',
    time: '9:27 AM',
  },
];

const Chat = () => {
  const userData = useSelector(state => state.user);
  const [showEmailInput, setShowEmailInput] = useState(false);
  const [newEmail, setNewEmail] = useState('');
  const [selectedUser, setSelectedUser] = useState(null); // <-- New

  const handleAddConversation = () => {
    if (newEmail) {
      alert(`New conversation added with: ${newEmail}`);
      setNewEmail('');
      setShowEmailInput(false);
    }
  };
  // console.log(userData.avatar);
  return (
    <div className="flex h-screen bg-[#F5F3FF]">
      {/* Left Sidebar */}
      <aside className="w-64 bg-indigo-200  flex flex-col justify-between shadow-md p-4 border-r-2 border-blue-50">
        <div>
          <div className="flex flex-col mb-10">
            <div className="flex justify-between">
              <div>
                <div>
                  <img src={userData?.avatar} alt="" />
                </div>
                <h4 className="text-xl capitalize">{userData.fullName}</h4>
              </div>
              <Link to="/log" className="text-blue-600">
                logOut
              </Link>
            </div>

            <div className="flex justify-between pt-5 text-2xl">
              <p className="font-stretch-semi-condensed">Conversation</p>
              <span
                className="bg-blue-600 rounded-full px-2 text-white cursor-pointer"
                onClick={() => setShowEmailInput(!showEmailInput)}
              >
                +
              </span>
            </div>
            {showEmailInput && (
              <div className="mt-4">
                <input
                  type="email"
                  placeholder="Enter email..."
                  value={newEmail}
                  onChange={e => setNewEmail(e.target.value)}
                  className="w-full px-3 py-2 rounded border border-gray-400 text-sm mb-2"
                />
                <div className="flex justify-between">
                  <button
                    onClick={handleAddConversation}
                    className="bg-blue-500 text-white text-sm px-9 p-1.5 rounded hover:bg-green-700"
                  >
                    Add
                  </button>
                  <button
                    className="text-black border text-sm px-9 py-1 rounded bg-zinc-200 hover:bg-teal-400 hover:text-amber-50"
                    onClick={() => setShowEmailInput(!showEmailInput)}
                  >
                    Cancel
                  </button>
                </div>
              </div>
            )}
          </div>

          <nav className="space-y-4 text-gray-700">
            <div className="flex items-center gap-3 hover:text-blue-600 cursor-pointer">
              💬 <span>Chat</span>
            </div>
            <div className="flex items-center gap-3 hover:text-blue-600 cursor-pointer">
              👥 <span>Group</span>
            </div>
            <div className="flex items-center gap-3 hover:text-blue-600 cursor-pointer">
              📇 <span>People</span>
            </div>
          </nav>
        </div>

        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-blue-500 text-white flex items-center justify-center font-bold">
            {currentUser.charAt(0).toUpperCase()}
          </div>
          <div>
            <p className="text-sm font-semibold capitalize">{currentUser}</p>
            <p className="text-xs text-gray-500">Online</p>
          </div>
        </div>
      </aside>
      {/* Middle Sidebar */}
      <section className="w-80 bg-indigo-200 border-r border-gray-300 p-4 flex flex-col">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-lg font-bold text-blue-600">Chats</h2>
          <button className="cursor-pointer border px-2 py-1 text-xs">
            Add
          </button>
        </div>
        <div className="flex items-center space-x-2 bg-gray-100 px-3 py-2 rounded-full mb-4">
          <FiSearch className="text-gray-500" />
          <input
            type="text"
            placeholder="Search"
            className="bg-transparent outline-none text-sm flex-1"
          />
        </div>
        <div className="space-y-4 overflow-y-auto">
          {users.map((user, i) => (
            <div
              key={i}
              onClick={() => setSelectedUser(user)} // <-- Select user on click
              className="flex items-center gap-3 p-2 rounded-lg hover:bg-blue-300 cursor-pointer"
            >
              <div className="w-10 h-10 rounded-full bg-blue-500 text-white flex items-center justify-center font-bold">
                {user.name.charAt(0).toUpperCase()}
              </div>
              <div className="flex-1">
                <div className="flex justify-between">
                  <p className="font-semibold capitalize">{user.name}</p>
                  <span className="text-xs text-gray-500">
                    {user.lastActive}
                  </span>
                </div>
                <p className="text-xs text-gray-600 truncate">
                  {user.lastMessage}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>
      {/* Chat Area */}
      <ConversationList selectedUser={selectedUser} /> {/* <-- Fixed */}
    </div>
  );
};

export default Chat;
