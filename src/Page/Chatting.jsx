import React, { useEffect, useState } from 'react';
import { FiSearch } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import ConversationList from '../Components/ConversationList';
import { useDispatch, useSelector } from 'react-redux';
import Log from './Log';
import { chatServices } from '../services/api';
// import { formatDistanceToNow } from '../utilis/dateUtils';
import { formatDistanceToNow, formatTime } from '../utilis/dateUtils';
import {
  addConversation,
  fetchConversation,
  selectConversation,
} from '../store/slices/conversationSlice';
import { initSocket, socket } from '../services/socket';
// import { getConversation } from '../store/slices/conversationSlice';

// const currentUser = 'shuvo';

// const users = [
//   {
//     name: 'Nipa',
//     lastMessage: 'See you soon!',
//     lastActive: '2m ago',
//     time: '10:17 AM',
//   },
//   {
//     name: 'shuvo',
//     lastMessage: 'That sounds great!',
//     lastActive: '10m ago',
//     time: '12:10 AM',
//   },
//   {
//     name: 'Charlie',
//     lastMessage: 'Let’s catch up tomorrow.',
//     lastActive: '1h ago',
//     time: '9:27 AM',
//   },
// ];

const Chat = () => {
  const [activeUsers, setActiveUsers] = useState([]);
  const userData = useSelector(state => state.authSlice.user);

  const { conversation, selectedConversation, messages, status } = useSelector(
    state => state.conversationSlice
  );

  const [contactEmail, setContactEmail] = useState('');
  // console.log('Full Redux State:', userData);
  // console.log(userData);
  // console.log(userData);

  const [showEmailInput, setShowEmailInput] = useState(false);
  const [newEmail, setNewEmail] = useState('');
  // const [selectedUser, setSelectedUser] = useState(null); // <-- New

  const selectedUser = useSelector(
    state => state.conversationSlice.selectedConversation
  );

  // const [conversation, setConversation] = useState([]);
  const dispatch = useDispatch();
  // useEffect(() => {
  //   const fetchConversations = async () => {
  //     try {
  //       const res = await chatServices.listConversation();
  //       setConversation(res);
  //       console.log('Fetched conversations:', res);
  //     } catch (error) {
  //       console.error('Failed to fetch conversations:', error);
  //     }
  //   };

  //   fetchConversations();
  // }, []);

  useEffect(() => {
    dispatch(fetchConversation());
    // (async () => {
    //   try {
    //     const res = await chatServices.listConversation();
    //     setConversation(res);
    //     // console.log(res);
    //   } catch (error) {
    //     console.log(error);
    //   }
    // })();
  }, [messages]);

  // useEffect(() => {
  //   socket.on('active_users', res => console.log(res));
  // }, []);

  // const selectedConversation = conversation[0];

  const handleAddConversation = async e => {
    e.preventDefault();
    // return console.log(contactEmail);

    try {
      // await chatServices.addConversation(contactEmail);
      dispatch(addConversation(contactEmail));
    } catch (error) {
      console.log(error.response.data.error);
    }
    // if (newEmail) {
    //   alert(`New conversation added with: ${newEmail}`);
    //   setNewEmail('');
    //   setShowEmailInput(false);
    // }
  };

  // if (status === 'loading') {
  //   return <p>Loading...</p>;
  // }
  // if (!conversation || conversation.length === 0) {
  //   return (
  //     <div className="text-amber-50 font-semibold">
  //       <p>No conversation yet</p>
  //       <p>Start a new conversation using the button above</p>
  //     </div>
  //   );
  // }

  const handelSelect = item => {
    // console.log('Selected item for dispatch:', item);
    if (item?.conversationId !== selectedConversation?.conversationId) {
      dispatch(selectConversation(item));
    }
  };

  const size = conversation.length;

  useEffect(() => {
    initSocket();
    socket.on('active_users', res => setActiveUsers(res));
  }, []);

  useEffect(() => {
    conversation.forEach(item => {
      socket.emit('join_room', item._id);
    });
  }, [size]);

  // console.log(conversation);

  return (
    <div className="flex h-screen bg-[#F5F3FF]">
      {/* Left Sidebar */}
      <aside className="w-64 bg-indigo-200  flex flex-col justify-between shadow-md p-4 border-r-2 border-blue-50">
        <div>
          <div className="flex flex-col mb-10">
            <div className="flex justify-between">
              <Link to={'/chat/profile'}>
                <div>
                  <h4 className="text-xl capitalize">{userData?.fullName}</h4>
                </div>
              </Link>
              <Link to="/login" className="text-blue-600">
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
              <form className="mt-4" onSubmit={handleAddConversation}>
                <input
                  type="email"
                  placeholder="Enter email..."
                  // value={newEmail}
                  onChange={e => setContactEmail(e.target.value)}
                  className="w-full px-3 py-2 rounded border border-gray-400 text-sm mb-2"
                  required
                />
                <div className="flex justify-between">
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

        {/* <div className="space-y-4 overflow-y-auto">
          {conversation.map(item =>
            item.creator._id === userData._id ? (
              <div
                key={item._id}
                onClick={() => setSelectedUser(item.participent)} // <-- Select user on click
                className=" flex items-center gap-3 p-2 rounded-lg hover:bg-blue-300 cursor-pointer"
              >
                <div className="w-10 h-10 bg-blue-500 rounded-full text-white flex items-center justify-center font-bold">
                  {item.participent.avatar ? (
                    <img
                      className="w-fit h-fit rounded-full object-cover"
                      src={item.participent.avatar}
                      alt="avater"
                    />
                  ) : (
                    item.participent.fullName.charAt(0).toUpperCase()
                  )}
                </div>
                <div className="flex-1">
                  <div className="flex justify-between">
                    <h3 className="font-semibold capitalize">
                      {item.participent.fullName}
                    </h3>
                    {item.lastMessage && (
                      <span className="text-xs text-gray-500">
                        {formatDistanceToNow(item.lastMessage.updatedAt)}
                      </span>
                    )}
                  </div>
                  {item?.lastMessage && (
                    <p className="text-xs text-gray-600 truncate">
                      {item.lastMessage.content}
                    </p>
                  )}
                </div>
              </div>
            ) : (
              <div
                key={item._id}
                onClick={() => setSelectedUser(item.creator)} // <-- Select user on click
                className="flex items-center gap-3 p-2 rounded-lg hover:bg-blue-300 cursor-pointer"
              >
                <div className="w-10 h-10 rounded-full bg-blue-500 text-white flex items-center justify-center font-bold">
                  {item.creator.avatar ? (
                    <img
                      className="w-fit h-fit rounded-full object-cover"
                      src={item.creator.avatar}
                      alt="avater"
                    />
                  ) : (
                    item.creator.fullName.charAt(0).toUpperCase()
                  )}
                </div>
                <div className="flex-1">
                  <div className="flex justify-between">
                    <h3 className="font-semibold capitalize">
                      {item.creator.fullName}
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
            )
          )}
        </div> */}
        <div className="space-y-4 overflow-y-auto flex-1">
          {!conversation || conversation.length === 0 ? (
            <div className="text-center text-amber-800 font-semibold text-sm space-y-1">
              <p>No conversation yet</p>
              <p>Start a new conversation using the + button</p>
            </div>
          ) : (
            conversation.map(item =>
              item.creator._id === userData._id ? (
                <div
                  key={item._id}
                  onClick={() => {
                    handelSelect({
                      ...item.participent,
                      conversationId: item._id,
                    });
                  }}
                  // onClick={() => setSelectedUser(item.participent)}
                  className={`flex items-center gap-3 p-2 rounded-lg cursor-pointer transition ${
                    selectedConversation?.conversationId === item._id
                      ? 'bg-blue-300  ring-blue-500'
                      : 'hover:bg-blue-100'
                  }`}
                >
                  <div className="relative  w-10 h-10 bg-blue-500 rounded-full text-white flex items-center justify-center font-bold">
                    {item.participent.avatar ? (
                      <img
                        className="w-fit h-fit rounded-full object-cover"
                        src={item.participent.avatar}
                        alt="avatar"
                      />
                    ) : (
                      item?.participent?.fullName.charAt(0).toUpperCase()
                    )}

                    {/* Active status dot */}

                    {activeUsers.includes(item.participent._id) && (
                      <span className="absolute bottom-0 right-0 block w-3 h-3 bg-green-500 border-2 border-white rounded-full"></span>
                    )}
                  </div>
                  <div className="flex-1">
                    <div className="flex justify-between">
                      <h3 className="font-semibold capitalize">
                        {item.participent.fullName}
                      </h3>
                      {item.lastMessage && (
                        <span className="text-xs text-gray-500">
                          {formatDistanceToNow(item.lastMessage.updatedAt)}
                        </span>
                      )}
                    </div>
                    {item?.lastMessage && (
                      <p className="text-xs text-gray-600 truncate">
                        {item.lastMessage.content}
                      </p>
                    )}
                  </div>
                </div>
              ) : (
                <div
                  key={item._id}
                  onClick={() => {
                    handelSelect({
                      ...item.creator,
                      conversationId: item._id,
                    });
                  }}
                  // onClick={() => setSelectedUser(item.creator)}
                  className={`flex items-center gap-3 p-2 rounded-lg cursor-pointer transition ${
                    selectedConversation?.conversationId === item._id
                      ? 'bg-blue-300  ring-blue-500'
                      : 'hover:bg-blue-100'
                  }`}
                >
                  <div className="relative w-10 h-10 bg-blue-500 rounded-full text-white flex items-center justify-center font-bold">
                    {item.creator.avatar ? (
                      <img
                        className="w-fit h-fit rounded-full object-cover"
                        src={item.creator.avatar}
                        alt="avatar"
                      />
                    ) : (
                      item?.creator?.fullName.charAt(0).toUpperCase()
                    )}
                    {/* Active status dot */}

                    {activeUsers.includes(item.creator._id) && (
                      <span className="absolute bottom-0 right-0 block w-3 h-3 bg-green-500 border-2 border-white rounded-full"></span>
                    )}
                  </div>
                  <div className="flex-1">
                    <div className="flex justify-between">
                      <h3 className="font-semibold capitalize">
                        {item.creator.fullName}
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
              )
            )
          )}
        </div>
      </section>
      {/* Chat Area */}
      {selectedConversation ? (
        <ConversationList selectedUser={selectedUser} />
      ) : (
        <main className="bg-[url('/image/wp.jpg')] bg-cover bg-center flex-1 flex items-center justify-center text-amber-50 font-semibold">
          Select a conversation or start a new one
        </main>
      )}
    </div>
  );
};

export default Chat;

/*
{conversation.map(conv => {
          if (conv.creator._id !== userData._id) return null;

          return (
            <div
              key={conv._id}
              onClick={() => setSelectedUser(conv.participent)}
              className="flex items-center gap-3 p-2 rounded-lg hover:bg-blue-300 cursor-pointer"
            >
              <div className="w-10 h-10 rounded-full bg-blue-500 text-white flex items-center justify-center font-bold">
                {conv.participent.avatar ? (
                  <img
                    className="w-10 h-10 rounded-full object-cover"
                    src={conv.participent.avatar}
                    alt="avater"
                  />
                ) : (
                  conv.participent?.fullName?.charAt(0).toUpperCase()
                )}
              </div>
              <div className="flex-1">
                <div className="flex justify-between">
                  <p className="font-semibold capitalize">
                    {conv.participent?.fullName}
                  </p>
                  <span className="text-xs text-gray-500">
                    {formatDistanceToNow(new Date(conv.updatedAt).getTime())}
                  </span>
                </div>
                <p className="text-xs text-gray-600 truncate">
                  Start conversation
                </p>
              </div>
            </div>
          );
        })}*/

//Full Update------------->>>>>>
// import React, { useEffect, useState } from 'react';
// import { FiSearch } from 'react-icons/fi';
// import { Link } from 'react-router-dom';
// import ConversationList from '../Components/ConversationList';
// import { useDispatch, useSelector } from 'react-redux';
// import { chatServices } from '../services/api';
// import { formatDistanceToNow } from '../utilis/dateUtils';
// import {
//   fetchConversation,
//   selectConversation,
// } from '../store/slices/conversationSlice';

// const Chat = () => {
//   const dispatch = useDispatch();
//   const userData = useSelector(state => state.authSlice.user);
//   const { conversation, status } = useSelector(state => state.conversationSlice);
//   const selectedConversation = useSelector(
//     state => state.conversationSlice.selectedConversation
//   );

//   const [contactEmail, setContactEmail] = useState('');
//   const [showEmailInput, setShowEmailInput] = useState(false);

//   useEffect(() => {
//     dispatch(fetchConversation());
//   }, [dispatch]);

//   const handleAddConversation = async e => {
//     e.preventDefault();
//     try {
//       await chatServices.addConversation(contactEmail);
//       dispatch(fetchConversation());
//     } catch (error) {
//       console.log(error?.response?.data?.error || error.message);
//     }
//   };

//   const handelSelect = item => {
//     dispatch(selectConversation(item));
//   };

//   return (
//     <div className="flex h-screen bg-[#F5F3FF]">
//       {/* Left Sidebar */}
//       <aside className="w-64 bg-indigo-200 flex flex-col justify-between shadow-md p-4 border-r-2 border-blue-50">
//         <div>
//           <div className="flex flex-col mb-10">
//             <div className="flex justify-between">
//               <Link to="/chat">
//                 <h4 className="text-xl capitalize">{userData?.fullName}</h4>
//               </Link>
//               <Link to="/login" className="text-blue-600">
//                 logOut
//               </Link>
//             </div>

//             <div className="flex justify-between pt-5 text-2xl">
//               <p className="font-stretch-semi-condensed">Conversation</p>
//               <span
//                 className="bg-blue-600 rounded-full px-2 text-white cursor-pointer"
//                 onClick={() => setShowEmailInput(!showEmailInput)}
//               >
//                 +
//               </span>
//             </div>

//             {showEmailInput && (
//               <form className="mt-4" onSubmit={handleAddConversation}>
//                 <input
//                   type="email"
//                   placeholder="Enter email..."
//                   onChange={e => setContactEmail(e.target.value)}
//                   className="w-full px-3 py-2 rounded border border-gray-400 text-sm mb-2"
//                   required
//                 />
//                 <div className="flex justify-between">
//                   <button
//                     type="submit"
//                     className="bg-blue-500 text-white text-sm px-9 p-1.5 rounded hover:bg-green-700"
//                   >
//                     Add
//                   </button>
//                   <button
//                     type="button"
//                     className="text-black border text-sm px-9 py-1 rounded bg-zinc-200 hover:bg-teal-400 hover:text-amber-50"
//                     onClick={() => setShowEmailInput(false)}
//                   >
//                     Cancel
//                   </button>
//                 </div>
//               </form>
//             )}
//           </div>

//           <nav className="space-y-4 text-gray-700">
//             <div className="flex items-center gap-3 hover:text-blue-600 cursor-pointer">💬 Chat</div>
//             <div className="flex items-center gap-3 hover:text-blue-600 cursor-pointer">👥 Group</div>
//             <div className="flex items-center gap-3 hover:text-blue-600 cursor-pointer">📇 People</div>
//           </nav>
//         </div>

//         <Link to="/chat">
//           <div className="flex items-center gap-3">
//             <img
//               src={userData?.avatar || '/default-avatar.png'}
//               alt="avatar"
//               className="w-12 h-12 rounded-full"
//             />
//             <div>
//               <p className="text-sm font-semibold capitalize">{userData?.fullName}</p>
//               <p className="text-xs text-gray-500">Online</p>
//             </div>
//           </div>
//         </Link>
//       </aside>

//       {/* Middle Sidebar */}
//       <section className="w-80 bg-indigo-200 border-r border-gray-300 p-4 flex flex-col">
//         <div className="flex items-center justify-between mb-4">
//           <h2 className="text-lg font-bold text-blue-600">Chats</h2>
//           <button className="cursor-pointer border px-2 py-1 text-xs">Add</button>
//         </div>
//         <div className="flex items-center space-x-2 bg-gray-100 px-3 py-2 rounded-full mb-4">
//           <FiSearch className="text-gray-500" />
//           <input
//             type="text"
//             placeholder="Search"
//             className="bg-transparent outline-none text-sm flex-1"
//           />
//         </div>

//         <div className="space-y-4 overflow-y-auto flex-1">
//           {status === 'loading' ? (
//             <p className="text-center text-gray-600 text-sm">Loading.......</p>
//           ) : !conversation || conversation.length === 0 ? (
//             <div className="text-center text-amber-800 font-semibold text-sm space-y-1">
//               <p>No conversation yet</p>
//               <p>Start a new conversation using the + button</p>
//             </div>
//           ) : (
//             conversation.map(item => {
//               const partner =
//                 item.creator._id === userData._id ? item.participent : item.creator;

//               return (
//                 <div
//                   key={item._id}
//                   onClick={() =>
//                     handelSelect({ ...partner, conversationId: item._id })
//                   }
//                   className={`flex items-center gap-3 p-2 rounded-lg hover:bg-blue-300 cursor-pointer ${
//                     selectedConversation?.conversationId === item._id
//                       ? 'bg-blue-300'
//                       : ''
//                   }`}
//                 >
//                   <div className="w-10 h-10 bg-blue-500 rounded-full text-white flex items-center justify-center font-bold">
//                     {partner.avatar ? (
//                       <img
//                         className="w-fit h-fit rounded-full object-cover"
//                         src={partner.avatar}
//                         alt="avatar"
//                       />
//                     ) : (
//                       partner.fullName?.charAt(0).toUpperCase()
//                     )}
//                   </div>
//                   <div className="flex-1">
//                     <div className="flex justify-between">
//                       <h3 className="font-semibold capitalize">
//                         {partner.fullName}
//                       </h3>
//                       {item.lastMessage && (
//                         <span className="text-xs text-gray-500">
//                           {formatDistanceToNow(item.lastMessage.updatedAt)}
//                         </span>
//                       )}
//                     </div>
//                     {item.lastMessage && (
//                       <p className="text-xs text-gray-600 truncate">
//                         {item.lastMessage.content}
//                       </p>
//                     )}
//                   </div>
//                 </div>
//               );
//             })
//           )}
//         </div>
//       </section>

//       {/* Chat Area */}
//       <ConversationList />
//     </div>
//   );
// };

// export default Chat;
