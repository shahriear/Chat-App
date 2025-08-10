// import React, { useEffect, useState } from 'react';
// import {
//   FiPhone,
//   FiVideo,
//   FiMoreVertical,
//   FiImage,
//   FiSmile,
//   FiSearch,
// } from 'react-icons/fi';
// import { chatServices } from '../services/api';
// import { useSelector } from 'react-redux';
// import { LuLamp } from 'react-icons/lu';
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

// const ConversationList = ({ selectedUser, setSelectedUser }) => {
//   const userData = useSelector(state => state.user);
//   const [conversation, setConversation] = useState([]);

//   useEffect(() => {
//     (async () => {
//       try {
//         const res = await chatServices.listConversation();
//         setConversation(res);
//         console.log(res);
//       } catch (error) {
//         console.log(error.response);
//       }
//     })();
//   }, []);

//   return (
//     <div className="flex h-full">
//       {/* Sidebar */}
//       <div className="w-80 bg-indigo-200 border-r border-gray-300 p-4 flex flex-col">
//         <div className="flex items-center justify-between mb-4">
//           <h2 className="text-lg font-bold text-blue-600">Chats</h2>
//           <button className="cursor-pointer border px-2 py-1 text-xs">
//             Add
//           </button>
//         </div>
//         <div className="flex items-center space-x-2 bg-gray-100 px-3 py-2 rounded-full mb-4">
//           <FiSearch className="text-gray-500" />
//           <input
//             type="text"
//             placeholder="Search"
//             className="bg-transparent outline-none text-sm flex-1"
//           />
//         </div>
//         <div className="space-y-4 overflow-y-auto">
//           {users.map((user, i) => (
//             <div
//               key={i}
//               onClick={() => setSelectedUser(user)} // set selected user
//               className="flex items-center gap-3 p-2 rounded-lg hover:bg-blue-300 cursor-pointer"
//             >
//               <div className="w-10 h-10 rounded-full bg-blue-500 text-white flex items-center justify-center font-bold">
//                 {user.name.charAt(0).toUpperCase()}
//               </div>
//               <div className="flex-1">
//                 <div className="flex justify-between">
//                   <p className="font-semibold capitalize">{user.name}</p>
//                   <span className="text-xs text-gray-500">
//                     {user.lastActive}
//                   </span>
//                 </div>
//                 <p className="text-xs text-gray-600 truncate">
//                   {user.lastMessage}
//                 </p>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>

//       {/* Chat Area */}
//       <div className="flex-1 flex flex-col bg-[url('/images/bkg.avif')] bg-repeat bg-cover">
//         {selectedUser ? (
//           <>
//             {/* Header */}
//             <div className="flex items-center justify-between border-b border-gray-300 px-6 py-4">
//               <div className="flex items-center gap-3">
//                 <div className="w-10 h-10 rounded-full bg-blue-500 text-white flex items-center justify-center font-bold">
//                   {selectedUser.name.charAt(0).toUpperCase()}
//                 </div>
//                 <div>
//                   <h3 className="font-semibold capitalize">
//                     {selectedUser.name}
//                   </h3>
//                   <p className="text-xs text-gray-500">Online</p>
//                 </div>
//               </div>
//               <div className="flex gap-4 text-xl text-gray-600">
//                 <FiPhone className="cursor-pointer hover:text-blue-600" />
//                 <FiVideo className="cursor-pointer hover:text-blue-600" />
//                 <FiMoreVertical className="cursor-pointer hover:text-blue-600" />
//               </div>
//             </div>

//             {/* Messages */}
//             <div className="bg-[url('/image/wp.jpg')] bg-cover bg-center flex-1 p-6 overflow-y-auto space-y-4">
//               <div className="flex justify-start">
//                 <div className="mt-4 bg-white px-4 py-2 rounded-2xl max-w-sm text-sm shadow-sm">
//                   <p>Hey! Are you free tomorrow?</p>
//                   <span className="text-[11px] text-gray-400 mt-1">
//                     {selectedUser.time}
//                   </span>
//                 </div>
//               </div>
//               <div className="flex justify-end">
//                 <div className="mt-4 bg-[#C4B5FD] px-4 py-2 rounded-2xl max-w-sm text-sm shadow-sm">
//                   <p>Yes! What time works for you?</p>
//                   <span className="text-[11px] text-gray-500 mt-1">
//                     {selectedUser.time}
//                   </span>
//                 </div>
//               </div>
//             </div>

//             {/* Input */}
//             <div className="p-4 border-t border-gray-300 flex items-center gap-2">
//               <button className="text-xl text-black hover:text-blue-600">
//                 <FiSmile />
//               </button>
//               <button className="text-xl text-black hover:text-blue-600">
//                 <FiImage />
//               </button>
//               <input
//                 type="text"
//                 placeholder="Type a message..."
//                 className="flex-1 border border-black px-4 py-2 rounded-full text-sm outline-none"
//               />
//               <button className="bg-blue-600 text-white px-4 py-2 rounded-full hover:bg-blue-700 text-sm">
//                 Send
//               </button>
//             </div>
//           </>
//         ) : (
//           <div className="flex-1 flex items-center justify-center text-amber-50 font-semibold">
//             Select a user to start chatting.
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

import React, { useEffect, useRef, useState } from 'react';
import {
  FiPhone,
  FiVideo,
  FiMoreVertical,
  FiImage,
  FiSmile,
} from 'react-icons/fi';
import { chatServices } from '../services/api';
import { useDispatch, useSelector } from 'react-redux';
import { LuLamp } from 'react-icons/lu';
import { fetchMessages, sendMessage } from '../store/slices/conversationSlice';

const ConversationList = () => {
  const chatContainer = useRef(null);
  const dispatch = useDispatch();
  const { selectedConversation, messages } = useSelector(
    state => state.conversationSlice
  );
  const [content, setContent] = useState('');

  //
  // const user = useSelector(state => state.authSlice.user);
  // console.log('Redux user data:', user);

  // const userData = useSelector(state => state.user);
  // const [conversation, setConversation] = useState([]);

  // useEffect(() => {
  //   (async () => {
  //     try {
  //       const res = await chatServices.listConversation();

  //       console.log(res);
  //     } catch (error) {
  //       console.log(error.response);
  //     }
  //   })();
  // }, []);

  useEffect(() => {
    dispatch(fetchMessages(selectedConversation.conversationId));
  }, [selectedConversation]);

  useEffect(() => {
    const container = chatContainer.current;
    if (container) {
      container.scrollTop = container.scrollHeight;
    }
  }, [messages]);

  // console.log(selectedConversation);
  // console.log(messages);
  const handelSendMessage = e => {
    e.preventDefault();
    // console.log(content);
    // console.log(selectedConversation._id);
    // console.log(selectedConversation.conversationId);
    dispatch(
      sendMessage({
        content,
        reciverId: selectedConversation._id,
        conversationId: selectedConversation.conversationId,
      })
    );
    setContent('');
  };

  return (
    <div className="flex-1 flex flex-col h-full bg-[url('/image/wp.jpg')] bg-cover bg-center">
      {/* Header */}
      <div className="flex items-center justify-between border-b border-gray-300 px-6 py-4 bg-white bg-opacity-60 backdrop-blur-md">
        <div className="flex items-center gap-3">
          <div className="w-10 h-12 rounded-full bg-blue-500 text-white flex items-center justify-center font-bold overflow-hidden">
            {selectedConversation?.avatar ? (
              <img
                src={selectedConversation.avatar}
                alt="avatar"
                className="w-full h-fit object-cover"
              />
            ) : (
              selectedConversation?.fullName?.charAt(0).toUpperCase()
            )}
          </div>
          <div>
            <h3 className="font-semibold capitalize">
              {selectedConversation?.fullName}
            </h3>
            <p className="text-xs text-gray-600">
              {selectedConversation?.email}
            </p>
          </div>
        </div>
        <div className="flex gap-4 text-xl text-gray-600">
          <FiPhone className="cursor-pointer hover:text-blue-600" />
          <FiVideo className="cursor-pointer hover:text-blue-600" />
          <FiMoreVertical className="cursor-pointer hover:text-blue-600" />
        </div>
      </div>

      {/* Messages */}
      <div ref={chatContainer} className="flex-1 overflow-y-auto p-4 space-y-4">
        {messages && messages.length > 0 ? (
          messages.map((msg, index) => (
            <div
              key={index}
              className={`flex ${
                msg.sender === selectedConversation._id
                  ? 'justify-start'
                  : 'justify-end'
              }`}
            >
              <div
                className={`px-4 py-2 rounded-2xl max-w-sm text-sm shadow ${
                  msg.sender === selectedConversation._id
                    ? 'bg-white text-black'
                    : 'bg-[#C4B5FD] text-black'
                }`}
              >
                <p>{msg.content}</p>
                <span className="text-[11px] text-gray-500 block mt-1 text-right">
                  {new Date(msg.updatedAt).toLocaleTimeString([], {
                    hour: '2-digit',
                    minute: '2-digit',
                  })}
                </span>
              </div>
            </div>
          ))
        ) : (
          <p className="text-sm text-center text-white font-semibold">
            No messages yet
          </p>
        )}
      </div>

      {/* Message Input */}
      <form
        onSubmit={handelSendMessage}
        className="p-4 border-t border-gray-300 bg-white bg-opacity-70 backdrop-blur-md flex items-center gap-2"
      >
        <button
          type="button"
          className="text-xl text-black hover:text-blue-600"
        >
          <FiSmile />
        </button>
        <button
          type="button"
          className="text-xl text-black hover:text-blue-600"
        >
          <FiImage />
        </button>
        <input
          value={content}
          type="text"
          onChange={e => setContent(e.target.value)}
          placeholder="Type a message..."
          className="flex-1 border border-gray-400 px-4 py-2 rounded-full text-sm outline-none focus:ring-2 focus:ring-blue-400"
          required
        />
        <button
          type="submit"
          className="bg-blue-600 text-white px-4 py-2 rounded-full hover:bg-blue-700 text-sm"
        >
          Send
        </button>
      </form>
    </div>
    // 57:18
    // -------------------------------------------------
    // return (
    //   <div className="bg-[url('/image/wp.jpg')] bg-cover bg-center flex-1 p-6 overflow-y-auto space-y-4">
    //     {/* Header */}
    //     <div className="flex items-center justify-between border-b border-gray-300 px-6 py-4">
    //       <div className="flex items-center gap-3">
    //         <div className="w-9 h-10 rounded-full bg-blue-500 text-white flex items-center justify-center font-bold">
    //           {selectedConversation?.avatar ? (
    //             <img
    //               src={selectedConversation.avatar}
    //               alt="avatar"
    //               className="w-fit h-fit rounded-full object-cover"
    //             />
    //           ) : (
    //             selectedConversation?.fullName?.charAt(0).toUpperCase()
    //           )}
    //         </div>
    //         <div>
    //           <h3 className="font-semibold capitalize">
    //             {selectedConversation?.fullName}
    //           </h3>
    //           <p className="text-xs text-gray-500">
    //             {selectedConversation?.email}
    //           </p>
    //         </div>
    //       </div>
    //       <div className="flex gap-4 text-xl text-gray-600">
    //         <FiPhone className="cursor-pointer hover:text-blue-600" />
    //         <FiVideo className="cursor-pointer hover:text-blue-600" />
    //         <FiMoreVertical className="cursor-pointer hover:text-blue-600" />
    //       </div>
    //     </div>
    //     {messages && messages.length > 0 ? (
    //       messages.map((msg, index) => (
    //         <div
    //           key={index}
    //           className={`flex ${
    //             msg.sender === selectedConversation._id
    //               ? 'justify-start'
    //               : 'justify-end'
    //           }`}
    //         >
    //           <div
    //             className={`mt-2 px-4 py-2 rounded-2xl max-w-sm text-sm shadow-sm ${
    //               msg.sender === selectedConversation._id
    //                 ? 'bg-white text-black'
    //                 : 'bg-[#C4B5FD] text-black'
    //             }`}
    //           >
    //             <p>{msg.content}</p>
    //             <span className="text-[11px] text-gray-500 block mt-1">
    //               {new Date(msg.updatedAt).toLocaleTimeString([], {
    //                 hour: '2-digit',
    //                 minute: '2-digit',
    //               })}
    //             </span>
    //           </div>
    //         </div>
    //       ))
    //     ) : (
    //       <p className="text-sm text-center text-amber-50 font-semibold ">
    //         No messages yet
    //       </p>
    //     )}
    //     {/* Input */}
    //     //{' '}
    //     <div className="p-4 border-t border-gray-300 flex items-center gap-2">
    //       <button className="text-xl text-black hover:text-blue-600">
    //         <FiSmile />
    //       </button>
    //       <button className="text-xl text-black hover:text-blue-600">
    //         <FiImage />
    //       </button>
    //       <input
    //         type="text"
    //         placeholder="Type a message..."
    //         className="flex-1 border border-black px-4 py-2 rounded-full text-sm outline-none"
    //       />
    //       <button className="bg-blue-600 text-white px-4 py-2 rounded-full hover:bg-blue-700 text-sm">
    //         Send
    //       </button>
    //     </div>
    //   </div>

    // <main className="flex-1 flex flex-col  bg-[url('/images/bkg.avif')] bg-repeat bg-cover">
    //   {/* Header */}

    //   <div className="flex items-center justify-between border-b border-gray-300 px-6 py-4 bg-white bg-opacity-60 backdrop-blur-md">
    //     <div className="flex items-center gap-3">
    //       <div className="w-10 h-10 rounded-full bg-blue-500 text-white flex items-center justify-center font-bold overflow-hidden">
    //         {selectedConversation?.avatar ? (
    //           <img
    //             src={selectedConversation.avatar}
    //             alt="avatar"
    //             className="w-full h-full object-cover"
    //           />
    //         ) : (
    //           selectedConversation?.fullName?.charAt(0).toUpperCase()
    //         )}
    //       </div>
    //       <div>
    //         <h3 className="font-semibold capitalize">
    //           {selectedConversation?.fullName}
    //         </h3>
    //         <p className="text-xs text-gray-600">
    //           {selectedConversation?.email}
    //         </p>
    //       </div>
    //     </div>
    //     <div className="flex gap-4 text-xl text-gray-600">
    //       <FiPhone className="cursor-pointer hover:text-blue-600" />
    //       <FiVideo className="cursor-pointer hover:text-blue-600" />
    //       <FiMoreVertical className="cursor-pointer hover:text-blue-600" />
    //     </div>
    //   </div>

    //   {/* Messages*/}

    //   <div className="flex-1 overflow-y-auto p-4 space-y-4">
    //     {messages && messages.length > 0 ? (
    //       messages.map((msg, index) => (
    //         <div
    //           key={index}
    //           className={`flex ${
    //             msg.sender === selectedConversation._id
    //               ? 'justify-start'
    //               : 'justify-end'
    //           }`}
    //         >
    //           <div
    //             className={`px-4 py-2 rounded-2xl max-w-sm text-sm shadow ${
    //               msg.sender === selectedConversation._id
    //                 ? 'bg-white text-black'
    //                 : 'bg-[#C4B5FD] text-black'
    //             }`}
    //           >
    //             <p>{msg.content}</p>
    //             <span className="text-[11px] text-gray-500 block mt-1 text-right">
    //               {new Date(msg.updatedAt).toLocaleTimeString([], {
    //                 hour: '2-digit',
    //                 minute: '2-digit',
    //               })}
    //             </span>
    //           </div>
    //         </div>
    //       ))
    //     ) : (
    //       <p className="text-sm text-center text-white font-semibold">
    //         No messages yet
    //       </p>
    //     )}
    //   </div>

    //   {/* Input */}
    //   <form className="p-4 border-t border-gray-300 bg-white bg-opacity-70 backdrop-blur-md flex items-center gap-2">
    //     <button
    //       type="button"
    //       className="text-xl text-black hover:text-blue-600"
    //     >
    //       <FiSmile />
    //     </button>
    //     <button
    //       type="button"
    //       className="text-xl text-black hover:text-blue-600"
    //     >
    //       <FiImage />
    //     </button>
    //     <input
    //       type="text"
    //       onChange={e => setContent(e.target.value)}
    //       placeholder="Type a message..."
    //       className="flex-1 border border-gray-400 px-4 py-2 rounded-full text-sm outline-none focus:ring-2 focus:ring-blue-400"
    //       required
    //     />
    //     <button
    //       type="submit"
    //       className="bg-blue-600 text-white px-4 py-2 rounded-full hover:bg-blue-700 text-sm"
    //     >
    //       Send
    //     </button>
    //   </form>
    // </main>
  );
};

export default ConversationList;

// import { useEffect, useState } from 'react';
// import { formatDistanceToNow } from '../utilis/dateUtils';
// import { useDispatch, useSelector } from 'react-redux';

// function ConversationList({ activeUsers }) {
//   const userData = useSelector(state => state.user);
//   const [conversation, setConversation] = useState([]);

//   if (!conversation || conversation.length === 0) {
//     return (
//       <div className="empty-conversations">
//         <p>No conversations yet</p>
//         <p>Start a new conversation using the button above</p>
//       </div>
//     );
//   }

//   return (
//     <div className="conversation-list">
//       {conversation.map(item =>
//         item.creator._id === userData._id ? (
//           <div
//             key={item._id}
//             onClick={() =>
//               handelSelect({ ...item.participent, conversationID: item._id })
//             }
//             className={`conversation-item
//               ${activeUsers.includes(item.participent._id) && 'active'}
//                ${
//                  selectedConversation?.conversationID === item._id
//                    ? 'selected'
//                    : ''
//                }`}
//           >
//             <div className="avatar">
//               {item.participent.avatar ? (
//                 <img src={item.participent.avatar} alt="user" />
//               ) : (
//                 item.participent.fullName.charAt(0).toUpperCase()
//               )}
//             </div>
//             <div className="conversation-details">
//               <div className="conversation-header">
//                 <h3>{item.participent.fullName}</h3>
//                 {item.lastMessage && (
//                   <span className="time">
//                     {formatDistanceToNow(item.lastMessage.updatedAt)}
//                   </span>
//                 )}
//               </div>
//               {item.lastMessage && (
//                 <p className="last-message">{item.lastMessage.content}</p>
//               )}
//             </div>
//           </div>
//         ) : (
//           <div
//             onClick={() =>
//               handelSelect({ ...item.creator, conversationID: item._id })
//             }
//             key={item._id}
//             className={`conversation-item
//                ${activeUsers.includes(item.creator._id) && 'active'}
//               ${
//                 selectedConversation?.conversationID === item._id
//                   ? 'selected'
//                   : ''
//               }`}
//           >
//             <div className="avatar">
//               {item.creator.avatar ? (
//                 <img src={item.creator.avatar} alt="" />
//               ) : (
//                 item?.creator?.fullName.charAt(0).toUpperCase()
//               )}
//             </div>
//             <div className="conversation-details">
//               <div className="conversation-header">
//                 <h3>{item.creator.fullName}</h3>
//                 {item.lastMessage && (
//                   <span className="time">
//                     {formatDistanceToNow(item.lastMessage.updatedAt)}
//                   </span>
//                 )}
//               </div>
//               {item.lastMessage && (
//                 <p className="last-message">{item.lastMessage.content}</p>
//               )}
//             </div>
//           </div>
//         )
//       )}
//     </div>
//   );
// }

// export default ConversationList;

/*

import React, { useEffect, useState } from 'react';
import {
  FiPhone,
  FiVideo,
  FiMoreVertical,
  FiImage,
  FiSmile,
} from 'react-icons/fi';
import { chatServices } from '../services/api';
import { useSelector } from 'react-redux';

const ConversationList = ({ conversations, selectedId }) => {
  // const user = useSelector(state => state.auth.user);
  // console.log('Redux user data:', user);
  const userData = useSelector(state => state.user);
  const [conversation, setConversation] = useState([]);
  useEffect(() => {
    (async () => {
      try {
        const res = await chatServices.listConversation();
        setConversation(res);
        console.log(res);
      } catch (error) {
        console.log(error);
      }
    })();
  }, []);
  if (!conversations || conversations.length == 0) {
    return (
      <main className="bg-[url('/image/wp.jpg')] bg-cover bg-center flex-1 flex items-center justify-center text-amber-50 font-semibold">
        Select a user to start chatting.
      </main>
    );
  }

  return (
    <div className="conversation-list">
      {conversation.map(
        // conversation => console.log(conversation)

        <div
          key={conversation.id}
          className={`conversation-item ${
            selectedId === conversation.id ? 'selected' : ''
          }`}
        >
          <div className="avatar">
            {conversation.user.name.charAt(0).toUpperCase()}
          </div>

          <div className="conversation-details">
            <div className="conversation-header">
              <h3>{conversation.user.name}</h3>
              {conversation.lastMessage && (
                <span className="time">
                  {formatDistanceToNow(conversation.lastMessage.timestamp)}
                </span>
              )}
            </div>

            {conversation.lastMessage && (
              <p className="last-message">{conversation.lastMessage.text}</p>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default ConversationList;
 */
