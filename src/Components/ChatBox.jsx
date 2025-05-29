// import React from 'react';
// import { formatTime } from '../utils/dateUtils';

// function ChatBox({ conversation, currentUser }) {
//   //static messages for design purposes
//   const messages = [
//     {
//       id: 'm1',
//       text: 'Hello there',
//       sender: conversation?.user,
//       timestamp: new Date().getTime() - 360000,
//     },
//     {
//       id: 'm2',
//       text: 'how are you ',
//       sender: currentUser,
//       timestamp: new Date().getTime() - 380000,
//     },
//     {
//       id: 'm3',
//       text: 'Hello hiii',
//       sender: conversation?.user,
//       timestamp: new Date().getTime() - 350000,
//     },
//     {
//       id: 'm4',
//       text: 'where are doing now',
//       sender: currentUser,
//       timestamp: new Date().getTime() - 340000,
//     },
//   ];

//   if (!conversation) {
//     return (
//       <div className="chat-box empty-chat">
//         <div className="no-conversation-selected">
//           <p>selected a conversation or start a new one</p>
//         </div>
//       </div>
//     );
//   }
//   const handleSubmit = e => {
//     e.preventDefault();
//     if (!messageText.trim()) return;
//     // Here you can add logic to send the message
//     console.log('Sending:', messageText);
//     setMessageText('');
//   };

//   return (
//     <div className="chat-box">
//       <div className="chat-header">
//         <div className="chat-user-info">
//           <div className="avatar">
//             {conversation.user.name.charAt(0).toUpperCase()}
//           </div>
//           <div className="user-details">
//             <h3>{conversation.user.name}</h3>
//             <p>{conversation.user.email}</p>
//           </div>
//         </div>
//       </div>
//       <div className="messages-container">
//         {messages.map(message => (
//           <div
//             key={message.id}
//             className={`message ${
//               message.sender.id === currentUser.id ? 'sent' : 'received'
//             }`}
//           >
//             <div className="message-content">
//               <p>{message.text}</p>
//               <span className="message-time">
//                 {formatTime(message.timestamp)}
//               </span>
//             </div>
//           </div>
//         ))}
//       </div>
//       <form className="message-input-form" onSubmit={handleSubmit}>
//         <input
//           type="text"
//           placeholder="Type a message..."
//           value={messageText}
//           onChange={e => setMessageText(e.target.value)}
//         />
//         <button type="submit">Send</button>
//       </form>
//     </div>
//   );
// }

// export default ChatBox;

// // const ChatBox = ({ conversation, currentUser }) => {

// // export default ChatBox;
