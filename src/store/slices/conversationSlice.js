// import { createSlice } from '@reduxjs/toolkit';

// const conversationSlice = createSlice({
//   name: 'auth',
//   initialState: {
//     user: JSON.parse(localStorage.getItem('loggedUser')) || null,
//   },

//   reducers: {
//     getConversation: (state, actions) => {
//       state.conversation = actions.payload;
//     },
//   },
// });

// export const { getConversation } = conversationSlice.actions;
// export default conversationSlice.reducer;

import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { chatServices } from '../../services/api';

export const fetchConversation = createAsyncThunk(
  '/chat/conversationList',
  async () => {
    try {
      const res = await chatServices.listConversation();
      // console.log(res);

      return res;
    } catch (error) {
      return error;
    }
  }
);

const conversationSlice = createSlice({
  name: 'conversation',
  initialState: {
    conversation: [],
    selectedConversation: null,
    status: 'active',
    error: null,
  },

  reducers: {
    selectConversation: (state, actions) => {
      console.log('Selected payload:', actions.payload);
      state.selectedConversation = actions.payload;
    },

    // getConversation: state => {
    // fetchConversation();
    // },
    // getConversation: async state => {
    //   (async () => {
    //     try {
    //       const res = await chatServices.listConversation();
    //     } catch (error) {
    //       console.log(error);
    //     }
    //   })();
    // },
  },
  extraReducers: builder => {
    builder
      .addCase(fetchConversation.pending, state => {
        state.status = 'loading';
      })
      .addCase(fetchConversation.fulfilled, (state, action) => {
        state.status = 'succeeded';
        // console.log(action);

        state.conversation = action.payload;
      })
      .addCase(fetchConversation.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error;
      });
  },
});

export const { selectConversation } = conversationSlice.actions;
export default conversationSlice.reducer;
