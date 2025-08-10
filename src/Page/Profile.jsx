// import React, { useState } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { Link } from 'react-router-dom';
// import { updateUserThunk } from '../store/slices/authSlice';

// const UserProfile = () => {
//   const dispatch = useDispatch();
//   const [editMode, setEditMode] = useState(false);
//   const user = useSelector(state => state.authSlice.user);

//   const [userEditData, setUserEditData] = useState({
//     fullName: user.fullName,
//     password: '',
//     avatar: '',
//   });
//   // console.log(userEditData);
//   const handelUpdate = () => {
//     // console.log(userEditData);
//     dispatch(updateUserThunk(userEditData));
//     setEditMode(false);
//   };

//   return (
//     <>
//       <div className="min-h-screen bg-gray-100 px-6 py-6 flex flex-col justify-between">
//         {/* Top Section with Back + Profile */}
//         <div>
//           {/* Back Button */}
//           <Link
//             to="/chat"
//             className="inline-block mb-6 px-4 py-2 bg-blue-600 text-white rounded-md shadow hover:bg-blue-700 transition duration-200"
//           >
//             ← Back
//           </Link>

//           {/* Profile Card */}
//           <div className="flex items-center justify-center">
//             <div className="bg-white p-8 rounded-2xl shadow-md w-full max-w-sm">
//               {/* <div className="relative w-32 h-32 mx-auto">
//                 <button
//                   onClick={() => setEditMode(!editMode)}
//                   className="absolute top-2 right-2 px-3 py-1 text-xs font-medium bg-cyan-600 text-white rounded-md shadow hover:bg-blue-700 transition duration-200 "
//                 >
//                   Edit
//                 </button>
//                 <img
//                   src={user?.avatar}
//                   className="w-32 h-32 rounded-full border-4 border-blue-500 object-cover"
//                 />
//                 <label
//                   htmlFor="avatar "
//                   className="absolute bottom-2 left-1/2 transform -translate-x-1/2 px-3 py-1 text-xs font-medium bg-gray-800 bg-opacity-70 text-white rounded-md cursor-pointer hover:bg-opacity-90 transition"
//                 >
//                   Change Photo
//                   <input id="avatar" type="file" className="hidden" />
//                 </label>
//               </div> */}
//               <div className="relative w-32 h-32 mx-auto">
//                 <img
//                   src={user?.avatar}
//                   alt="User Avatar"
//                   className="w-32 h-32 rounded-full border-4 border-blue-500 object-cover"
//                 />

//                 <button
//                   onClick={() => setEditMode(!editMode)}
//                   className="absolute top-2 right- px-3 py-1 text-xs font-medium bg-cyan-600 text-white rounded-md shadow hover:bg-blue-700 transition duration-200"
//                 >
//                   Edit
//                 </button>

//                 <label
//                   htmlFor="avatar"
//                   className="absolute bottom-2 left-1/2 transform -translate-x-1/2 px-3 py-1 text-xs font-medium bg-gray-800 bg-opacity-70 text-white rounded-md cursor-pointer hover:bg-opacity-90 transition"
//                 >
//                   Change Photo
//                   <input id="avatar" type="file" className="hidden" />
//                 </label>
//               </div>

//               <input
//                 onChange={e =>
//                   setUserEditData(prv => ({ ...prv, fullName: e.target.value }))
//                 }
//                 type="text"
//                 value={editMode ? userEditData.fullName : user?.fullName}
//                 className="mt-6 mb-2 w-full text-center text-2xl font-semibold text-gray-800 bg-transparent outline-none border-b-2 border-gray-300 focus:border-blue-500 transition duration-200"
//               />
//               <input
//                 readOnly
//                 type="text"
//                 value={user?.email}
//                 className=" w-full text-center text-gray-500 outline-none"
//               />

//               {editMode && (
//                 <input
//                   onChange={e =>
//                     setUserEditData(prv => ({
//                       ...prv,
//                       password: e.target.value,
//                     }))
//                   }
//                   type="password"
//                   placeholder="Enter password "
//                   className="mt-4 w-full text-center text-gray-500 bg-transparent outline-none border-b border-gray-200 focus:border-blue-400 transition duration-200"
//                 />
//               )}
//               {editMode && (
//                 <div>
//                   <button
//                     onClick={handelUpdate}
//                     className="mt-6 w-full px-4 py-2 bg-green-500 text-white font-medium rounded-lg shadow hover:bg-green-600 transition duration-200"
//                   >
//                     Save
//                   </button>
//                   <button
//                     onClick={() => setEditMode(false)}
//                     className="mt-2 w-full px-4 py-2  text-black font-medium rounded-lg shadow hover:bg-red-400 transition duration-200"
//                   >
//                     Cancel
//                   </button>
//                 </div>
//               )}
//             </div>
//           </div>
//         </div>

//         {/* Bottom Animation - Wave */}
//         <div className="mt-12">
//           <svg
//             className="w-full"
//             viewBox="0 0 1440 320"
//             xmlns="http://www.w3.org/2000/svg"
//           >
//             <path
//               fill="#3b82f6"
//               fillOpacity="1"
//               d="M0,224L30,192C60,160,120,96,180,90.7C240,85,300,139,360,165.3C420,192,480,192,540,176C600,160,660,128,720,138.7C780,149,840,203,900,224C960,245,1020,235,1080,224C1140,213,1200,203,1260,208C1320,213,1380,235,1410,245.3L1440,256L1440,320L1410,320C1380,320,1320,320,1260,320C1200,320,1140,320,1080,320C1020,320,960,320,900,320C840,320,780,320,720,320C660,320,600,320,540,320C480,320,420,320,360,320C300,320,240,320,180,320C120,320,60,320,30,320L0,320Z"
//             ></path>
//           </svg>
//         </div>
//       </div>
//     </>

//     // <div className="profile-container">
//     //   <div className="profile-card">
//     //     <img
//     //       src="https://t3.ftcdn.net/jpg/05/16/27/58/360_F_516275801_f3fsp17x6HQk0xQgDQEELoTuERO4SsWv.jpg"
//     //       alt="Profile"
//     //       className="profile-picture"
//     //     />
//     //     <h2 className="profile-name">Name</h2>
//     //     <p className="profile-email">Email</p>
//     //   </div>
//     // </div>
//   );
// };

// export default UserProfile;

import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { updateUserThunk } from '../store/slices/authSlice';

const UserProfile = () => {
  const dispatch = useDispatch();
  const [editMode, setEditMode] = useState(false);
  const user = useSelector(state => state.authSlice.user);

  const [userEditData, setUserEditData] = useState({
    fullName: user.fullName,
    password: '',
    avatar: '',
  });
  // console.log(userEditData);
  const handelUpdate = () => {
    // console.log(userEditData);
    dispatch(updateUserThunk(userEditData));
    setEditMode(false);
    setUserEditData({
      fullName: user.fullName,
      password: '',
      avatar: '',
    });
  };
  // console.log(userEditData);

  return (
    <>
      <div className="profile-container Edit_Card relative">
        {/* Back Button */}
        <Link
          to="/chat"
          className="absolute top-4 left-4 px-4 py-2 bg-blue-600 text-white rounded-md shadow hover:bg-blue-700 transition duration-200 z-10"
        >
          ← Back
        </Link>

        {/* Profile Card */}
        <div className="profile-card">
          {/* Edit Button */}
          <button
            onClick={() => setEditMode(!editMode)}
            className="editbtn absolute top-4 right-4 px-3 py-1 text-xs font-medium bg-cyan-600 text-white rounded-md shadow hover:bg-blue-700 transition duration-200"
          >
            Edit
          </button>

          {/* Avatar Section */}
          <div
            className="profile-avatar"
            style={{ position: 'relative', overflow: 'hidden', margin: 'auto' }}
          >
            <img src={user?.avatar} alt="Profile" style={{ width: '100%' }} />
            {editMode &&
              (userEditData.avatar ? (
                <img
                  className="absolute top-0 left-0 w-full"
                  src={URL.createObjectURL(userEditData.avatar)}
                  alt=""
                />
              ) : (
                <label className="avatar_upload" htmlFor="avatar">
                  <span>Upload +</span>
                  <input
                    onChange={e =>
                      setUserEditData(prv => ({
                        ...prv,
                        avatar: e.target.files[0],
                      }))
                    }
                    name="avatar"
                    id="avatar"
                    type="file"
                  />
                </label>
              ))}
          </div>

          {/* Name Field */}
          <input
            onChange={e =>
              setUserEditData(prv => ({ ...prv, fullName: e.target.value }))
            }
            type="text"
            value={editMode ? userEditData.fullName : user.fullName}
            className="profile-name"
          />

          {/* Email */}
          <input type="text" value={user?.email} className="profile-email" />

          {/* Password */}
          {editMode && (
            <input
              onChange={e =>
                setUserEditData(prv => ({ ...prv, password: e.target.value }))
              }
              type="password"
              placeholder="New Password"
              className="profile-email"
            />
          )}

          {/* Save / Cancel Buttons */}
          {editMode && (
            <div className="profile-btm-btn">
              <button onClick={handelUpdate} className="savebtn">
                Save
              </button>
              <button onClick={() => setEditMode(false)} className="cancelbtn">
                Cancel
              </button>
            </div>
          )}
        </div>
      </div>
    </>
    // ---------------------------------------------------------

    // <>
    //   <div className="profile-container Edit_Card">
    //     <Link
    //       className="inline-block mt-5 ml-4 mb-6 px-4 py-2 bg-blue-600 text-white rounded-md shadow hover:bg-blue-700 transition duration-200"
    //       to="/chat"
    //     >
    //       ← Back
    //     </Link>
    //     <div className="profile-card">
    //       <button
    //         onClick={() => setEditMode(!editMode)}
    //         className="editbtn  top-2 right- px-3 py-1 text-xs font-medium bg-cyan-600 text-white rounded-md shadow hover:bg-blue-700 transition duration-200"
    //       >
    //         Edit
    //       </button>
    //       <div
    //         className="profile-avatar"
    //         style={{ position: 'relative', overflow: 'hidden', margin: 'auto' }}
    //       >
    //         <img src={user?.avatar} alt="Profile" style={{ width: '100%' }} />
    //         {editMode && (
    //           <label className="avatar_upload" htmlFor="avatar">
    //             <span>Upload +</span>
    //             <input
    //               onChange={e =>
    //                 setUserEditData(prv => ({
    //                   ...prv,
    //                   avatar: e.target.files[0],
    //                 }))
    //               }
    //               name="avatar"
    //               id="avatar"
    //               type="file"
    //             />
    //           </label>
    //         )}
    //       </div>
    //       <input
    //         onChange={e =>
    //           setUserEditData(prv => ({ ...prv, fullName: e.target.value }))
    //         }
    //         type="text"
    //         value={editMode ? userEditData.fullName : user.fullName}
    //         className="profile-name"
    //       />
    //       <input type="text" value={user?.email} className="profile-email" />
    //       {editMode && (
    //         <input
    //           onChange={e =>
    //             setUserEditData(prv => ({ ...prv, password: e.target.value }))
    //           }
    //           type="password"
    //           placeholder="New Password"
    //           className="profile-email"
    //         />
    //       )}

    //       {editMode && (
    //         <div className="profile-btm-btn">
    //           <button onClick={handelUpdate} className="savebtn">
    //             Save
    //           </button>
    //           <button onClick={() => setEditMode(false)} className="cancelbtn">
    //             Cancel
    //           </button>
    //         </div>
    //       )}
    //     </div>
    //   </div>
    // </>
  );
};

export default UserProfile;
