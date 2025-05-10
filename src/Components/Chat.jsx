import React from 'react';
import {
  FiSearch,
  FiPhone,
  FiVideo,
  FiMoreVertical,
  FiPlus,
  FiImage,
  FiSmile,
} from 'react-icons/fi';

const users = [
  {
    name: 'Alice',
    avatar: 'https://i.pravatar.cc/150?img=5',
    lastMessage: 'See you soon!',
    lastActive: '2m ago',
  },
  {
    name: 'Bob',
    avatar: 'https://i.pravatar.cc/150?img=12',
    lastMessage: 'That sounds great!',
    lastActive: '10m ago',
  },
  {
    name: 'Charlie',
    avatar: 'https://i.pravatar.cc/150?img=9',
    lastMessage: 'Let’s catch up tomorrow.',
    lastActive: '1h ago',
  },
];

const Chat = () => {
  return (
    <div className="flex h-screen bg-gray-100">
      {/* Left Sidebar */}
      <aside className="w-64 bg-violet-200 flex flex-col justify-between shadow-md p-4 border-r border-gray-400">
        <div>
          <h1 className="text-xl font-bold text-blue-600 mb-10">💬 ChatApp</h1>
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
          <img
            src="https://i.pravatar.cc/100?img=22"
            alt="User"
            className="w-10 h-10 rounded-full"
          />
          <div>
            <p className="text-sm font-semibold">You</p>
            <p className="text-xs text-gray-500">Online</p>
          </div>
        </div>
      </aside>

      {/* Middle Sidebar */}
      <section className="w-80 bg-violet-200 border-r border-gray-400 p-4 flex flex-col">
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
              className="flex items-center gap-3 p-2 rounded-lg hover:bg-gray-100 cursor-pointer"
            >
              <img
                src={user.avatar}
                alt={user.name}
                className="w-10 h-10 rounded-full"
              />
              <div className="flex-1">
                <div className="flex justify-between">
                  <p className="font-semibold">{user.name}</p>
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
      <main className="flex-1 bg-violet-200 flex flex-col">
        {/* Chat Header */}
        <div className="flex items-center justify-between border-b border-gray-300  px-6 py-4 ">
          <div className="flex items-center gap-3">
            <img
              src="https://i.pravatar.cc/100?img=9"
              className="w-10 h-10 rounded-full"
              alt="chat user"
            />
            <div>
              <h3 className="font-semibold">Charlie</h3>
              <p className="text-xs text-gray-500">Online</p>
            </div>
          </div>
          <div className="flex gap-4 text-xl text-gray-600">
            <FiPhone className="cursor-pointer hover:text-blue-600" />
            <FiVideo className="cursor-pointer hover:text-blue-600" />
            <FiMoreVertical className="cursor-pointer hover:text-blue-600" />
          </div>
        </div>

        {/* Messages */}
        <div className="flex-1  flex flex-col">
          <div className="flex-1 p-6 overflow-y-auto space-y-4 bg-blue-200">
            <div className="flex justify-start">
              <div className="bg-gray-200 px-4 py-2 rounded-2xl max-w-sm text-sm">
                Hey! Are you free tomorrow?
              </div>
            </div>
            <div className="flex justify-end">
              <div className="bg-blue-300 px-4 py-2 rounded-2xl max-w-sm text-sm">
                Yes! What time works for you?
              </div>
            </div>
          </div>

          {/* Input with Emoji + Gallery */}
          <div className="p-4 border-t border-gray-300 flex items-center gap-2">
            <button className="text-xl text-black hover:text-blue-600">
              <FiSmile />
            </button>
            <button className="text-xl text-black hover:text-blue-600">
              <FiImage />
            </button>
            <input
              type="text"
              placeholder="Type a message..."
              className="flex-1 border border-black px-4 py-2 rounded-full text-sm outline-none"
            />
            <button className="bg-blue-600 text-white px-4 py-2 rounded-full hover:bg-blue-700 text-sm">
              Send
            </button>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Chat;
