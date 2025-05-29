import React from 'react';
import {
  FiPhone,
  FiVideo,
  FiMoreVertical,
  FiImage,
  FiSmile,
} from 'react-icons/fi';

const ConversationList = ({ selectedUser }) => {
  if (!selectedUser) {
    return (
      <main className="bg-[url('/image/wp.jpg')] bg-cover bg-center flex-1 flex items-center justify-center text-amber-50 font-semibold">
        Select a user to start chatting.
      </main>
    );
  }

  return (
    <main className="flex-1 flex flex-col  bg-[url('/images/bkg.avif')] bg-repeat bg-cover">
      {/* Header */}
      <div className="flex items-center justify-between border-b border-gray-300 px-6 py-4">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-blue-500 text-white flex items-center justify-center font-bold">
            {selectedUser.name.charAt(0).toUpperCase()}
          </div>
          <div>
            <h3 className="font-semibold capitalize">{selectedUser.name}</h3>
            <p className="text-xs text-gray-500">Online</p>
          </div>
        </div>
        <div className="flex gap-4 text-xl text-gray-600">
          <FiPhone className="cursor-pointer hover:text-blue-600" />
          <FiVideo className="cursor-pointer hover:text-blue-600" />
          <FiMoreVertical className="cursor-pointer hover:text-blue-600" />
        </div>
      </div>

      {/* Messages wp.jpg */}
      <div className="bg-[url('/image/wp.jpg')] bg-cover bg-center flex-1 p-6 overflow-y-auto space-y-4">
        <div className="flex justify-start">
          <div className=" mt-4 bg-white px-4 py-2 rounded-2xl max-w-sm text-sm shadow-sm">
            <p>Hey! Are you free tomorrow?</p>
            <span className="bottom- text-[11px] text-gray-400 mt-1">
              {selectedUser.time}
            </span>
          </div>
        </div>
        <div className="flex justify-end">
          <div className=" mt-4 bg-[#C4B5FD] px-4 py-2 rounded-2xl max-w-sm text-sm shadow-sm">
            <p>Yes! What time works for you?</p>
            <span className=" text-[11px] text-gray-500 mt-1">
              {selectedUser.time}
            </span>
          </div>
        </div>
      </div>

      {/* Input */}
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
    </main>
  );
};

export default ConversationList;
