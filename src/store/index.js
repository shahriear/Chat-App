import { configureStore } from '@reduxjs/toolkit';
import authSlice from './slices/authSlice';
import conversationSlice from './slices/conversationSlice';
const store = configureStore({
  reducer: { authSlice, conversationSlice },
});

export default store;
// import { configureStore } from '@reduxjs/toolkit';
// import authSlice from './slices/authSlice';
// const store = configureStore({
//   reducer: {
//     auth: authSlice,
//   },
// });

// export default store;
