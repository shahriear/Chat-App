import React, { useEffect, useState } from 'react';
import { FiSearch, FiMenu, FiX, FiPlus } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import ConversationList from '../Components/ConversationList';
import { useDispatch, useSelector } from 'react-redux';
import { formatDistanceToNow } from '../utilis/dateUtils';
import {
  addConversation,
  fetchConversation,
  selectConversation,
} from '../store/slices/conversationSlice';
import { initSocket, socket } from '../services/socket';

const Chat = () => {
  const dispatch = useDispatch();

  const userData = useSelector(state => state.authSlice.user);
  const { conversation, selectedConversation, messages } = useSelector(
    state => state.conversationSlice,
  );

  const [activeUsers, setActiveUsers] = useState([]);
  const [mobileView, setMobileView] = useState('list');
  const [menuOpen, setMenuOpen] = useState(false);
  const [showAddModal, setShowAddModal] = useState(false);
  const [contactEmail, setContactEmail] = useState('');

  
  const [showEmailInput, setShowEmailInput] = useState(false);

  /* fetch conversation */
  useEffect(() => {
    dispatch(fetchConversation());
  }, [messages]);

  /* socket active users */
  useEffect(() => {
    initSocket();
    socket.on('active_users', res => setActiveUsers(res));
  }, []);

  /* join rooms */
  useEffect(() => {
    conversation.forEach(item => {
      socket.emit('join_room', item._id);
    });
  }, [conversation.length]);

  /* select chat */
  const handelSelect = item => {
    dispatch(selectConversation(item));
    setMobileView('chat');
  };

  /* add conversation */
  const handleAddConversation = e => {
    e.preventDefault();
    dispatch(addConversation(contactEmail));
    setContactEmail('');
    setShowAddModal(false);
  };

  return (
    <div className="flex min-h-[100dvh] overflow-hidden bg-[#F5F3FF]">
      {/* DESKTOP SIDEBAR */}
      <aside className="hidden md:flex w-64 bg-indigo-200 flex-col justify-between p-4 border-r">
        <div>
          <Link to="/chat/profile">
            <h2 className="text-xl font-bold capitalize mb-6">
              {userData?.fullName}
            </h2>
          </Link>

          
          <div className="flex justify-between pt-5 mb-10 text-2xl">
            <p className="font-stretch-semi-condensed">Conversation</p>
            <span
              className="bg-blue-600 rounded-full px-2 text-white cursor-pointer"
              onClick={() => setShowEmailInput(!showEmailInput)}
            >
              +
            </span>
          </div>
          {showEmailInput && (
            <form className="mt-4" onSubmit={handleAddConversation}>
              <input
                type="email"
                placeholder="Enter email..."
                // value={newEmail}
                onChange={e => setContactEmail(e.target.value)}
                className="w-full px-3 py-2 rounded border border-gray-400 text-sm mb-2"
                required
              />
              <div className="flex justify-between mb-7">
                <button
                  type="submit"
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
            </form>
          )}
          <nav className="space-y-4 text-gray-700 mb-6">
            <p className="cursor-pointer hover:text-blue-600">💬 Chat</p>
            <p className="cursor-pointer hover:text-blue-600">👥 Group</p>
            <p className="cursor-pointer hover:text-blue-600">📇 People</p>
          </nav>
        </div>

        <div className="flex items-center justify-between">
          <Link to={'/chat/profile'}>
            <div className="flex items-center gap-3">
              <div className="w-fit h-13 rounded-full bg-blue-500 text-white flex items-center justify-center font-bold text-xl">
                {userData?.avatar ? (
                  <img
                    src={userData.avatar}
                    alt="avatar"
                    className="w-fit h-13 rounded-full object-cover"
                  />
                ) : (
                  userData?.fullName?.charAt(0).toUpperCase()
                )}
              </div>

              <div>
                <p className="text-sm font-semibold capitalize">
                  {userData?.fullName}
                </p>

                <p className="text-xs text-gray-500">Online</p>
              </div>
            </div>
          </Link>
          <Link to="/login" className="text-blue-600 font-semibold">
            Logout
          </Link>
        </div>
      </aside>

      {/* MOBILE MENU */}
      {menuOpen && (
        <div className="fixed inset-0 bg-black/40 z-40 md:hidden">
          <div className="bg-white w-64 h-full p-5 space-y-6">
            <button onClick={() => setMenuOpen(false)}>
              <FiX size={22} />
            </button>

            <Link to="/chat/profile" className="block font-semibold">
              Profile
            </Link>

            <p>💬 Chat</p>
            <p>👥 Group</p>
            <p>📇 People</p>

            <Link
              to="/login"
              className="text-blue-600 block pt-5 font-semibold"
            >
              Logout
            </Link>
          </div>
        </div>
      )}

      {/* CHAT LIST */}
      <section
        className={`flex flex-col bg-indigo-200 border-r p-4
        ${mobileView === 'chat' ? 'hidden md:flex md:w-80' : 'flex w-full md:w-80'}`}
      >
        {/* MOBILE TOP BAR */}
        <div className="flex justify-between items-center mb-3 md:hidden">
          <button onClick={() => setMenuOpen(true)}>
            <FiMenu size={22} />
          </button>

          {/* <div>
            <Link to="/chat/profile" className="font-semibold">
              {userData?.fullName}
            </Link>
          </div> */}
          <Link to={'/chat/profile'}>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-blue-500 text-white flex items-center justify-center font-bold overflow-hidden">
                {userData?.avatar ? (
                  <img
                    src={userData.avatar}
                    alt="avatar"
                    className="w-fit h-13 rounded-full object-cover"
                  />
                ) : (
                  userData?.fullName?.charAt(0).toUpperCase()
                )}
              </div>

              <div>
                <p className="text-sm font-semibold capitalize">
                  {userData?.fullName}
                </p>

                <p className="text-xs text-gray-500">Online</p>
              </div>
            </div>
          </Link>
        </div>

        <h2 className="text-lg font-bold text-blue-600 mb-3">Chats</h2>

        {/* SEARCH */}
        <div className="flex items-center bg-gray-100 px-3 py-2 rounded-full mb-4">
          <FiSearch />
          <input
            type="text"
            placeholder="Search"
            className="bg-transparent outline-none text-[16px] flex-1 ml-2"
          />
        </div>

        {/* LIST */}
        <div className="space-y-3 overflow-y-auto flex-1">
          {conversation.map(item => {
            const user =
              item.creator._id === userData._id
                ? item.participent
                : item.creator;

            return (
              <div
                key={item._id}
                onClick={() =>
                  handelSelect({ ...user, conversationId: item._id })
                }
                className="flex items-center gap-3 p-2 rounded-lg cursor-pointer hover:bg-blue-100"
              >
                <div className="relative w-10 h-10 bg-blue-500 rounded-full text-white flex items-center justify-center font-bold">
                  {user.avatar ? (
                    <img src={user.avatar} className="rounded-full" />
                  ) : (
                    user.fullName.charAt(0)
                  )}

                  {activeUsers.includes(user._id) && (
                    <span className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 border-2 border-white rounded-full" />
                  )}
                </div>

                <div className="flex-1">
                  <div className="flex justify-between">
                    <h3 className="font-semibold capitalize">
                      {user.fullName}
                    </h3>

                    {item.lastMessage && (
                      <span className="text-xs text-gray-500">
                        {formatDistanceToNow(item.lastMessage.updatedAt)}
                      </span>
                    )}
                  </div>

                  {item.lastMessage && (
                    <p className="text-xs text-gray-600 truncate">
                      {item.lastMessage.content}
                    </p>
                  )}
                </div>
              </div>
            );
          })}
        </div>

        {/* MOBILE FLOAT BUTTON */}
        <button
          onClick={() => setShowAddModal(true)}
          className="fixed bottom-20 right-5 md:hidden bg-blue-600 text-white p-4 rounded-full shadow-lg hover:scale-105 transition"
        >
          <FiPlus />
        </button>
      </section>

      {/* CHAT AREA */}
      <main
        className={`flex-1 bg-[url('/image/wp.jpg')] bg-cover bg-center ${mobileView === 'list' ? 'hidden md:flex' : 'flex'}`}
      >
        {selectedConversation ? (
          <ConversationList onBack={() => setMobileView('list')} />
        ) : (
          <div className="flex-1 flex items-center justify-center font-semibold text-amber-50">
            Select a conversation or start a new one
          </div>
        )}
      </main>
      {/* {selectedConversation ? (
        <ConversationList selectedUser={selectedUser} />
      ) : (
        <main className="bg-[url('/image/wp.jpg')] bg-cover bg-center flex-1 flex items-center justify-center text-amber-50 font-semibold">
          Select a conversation or start a new one
        </main>
      )} */}

      {/* ADD CONVERSATION MODAL */}
      {showAddModal && (
        <div className="fixed inset-0 bg-black/40 z-50 flex items-center justify-center">
          <div className="bg-white w-[90%] max-w-sm rounded-2xl p-6 shadow-xl animate-scaleIn">
            <h2 className="text-lg font-bold mb-4 text-center">
              Add Conversation
            </h2>

            <form onSubmit={handleAddConversation} className="space-y-3">
              <input
                type="email"
                placeholder="Enter email address"
                value={contactEmail}
                onChange={e => setContactEmail(e.target.value)}
                className="w-full border px-4 py-2 rounded-lg outline-none focus:ring-2 focus:ring-blue-400"
                required
              />

              <div className="flex gap-3">
                <button
                  type="button"
                  onClick={() => setShowAddModal(false)}
                  className="flex-1 border py-2 rounded-lg hover:bg-gray-100"
                >
                  Cancel
                </button>

                <button
                  type="submit"
                  className="flex-1 bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700"
                >
                  Add
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default Chat;
