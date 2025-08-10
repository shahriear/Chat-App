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
      return Promise.reject(error);
    }
  }
);
export const addConversation = createAsyncThunk(
  '/chat/createconversation',
  async participentEmail => {
    try {
      const res = await chatServices.addConversation(participentEmail);
      // console.log(res);

      return res;
    } catch (error) {
      console.log(error);

      return Promise.reject(error);
    }
  }
);
// --------------------------
export const fetchMessages = createAsyncThunk(
  '/chat/getmessage',
  async conversationId => {
    try {
      // console.log(conversationId);

      const res = await chatServices.getmessage(conversationId);
      // console.log(res);

      return res;
    } catch (error) {
      return Promise.reject(error);
    }
  }
);
export const sendMessage = createAsyncThunk('/chat/send', async data => {
  try {
    // console.log(conversationId);

    const res = await chatServices.sendMessage(data);
    // console.log(res);

    return res;
  } catch (error) {
    return Promise.reject(error);
  }
});

const conversationSlice = createSlice({
  name: 'conversation',
  initialState: {
    conversation: [],
    selectedConversation: null,
    messages: [],
    status: 'active',
    error: null,
  },

  reducers: {
    selectConversation: (state, actions) => {
      // console.log('Selected payload:', actions.payload);
      state.selectedConversation = actions.payload;
    },
    newMessage: (state, actions) => {
      state.messages.push(actions.payload);
    },
    // joinRoom: (state, actions) => {
    //   state.conversation.forEach(item => {
    //     socket.emit('join_room', item._id);
    //   });
    // },

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
      // Conversation logic
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
        // console.log(action.error);

        localStorage.setItem('loggedUser', null);
        localStorage.setItem('token', null);
      })
      .addCase(addConversation.fulfilled, (state, action) => {
        state.conversation.unshift(action.payload);
      })
      // Messages logic
      .addCase(fetchMessages.fulfilled, (state, action) => {
        state.messages = action.payload;
      });
    // .addCase(sendMessage.fulfilled, (state, action) => {
    //   console.log(action.payload);

    //   state.messages.push(action.payload);
    // });
  },
});

export const { selectConversation, newMessage } = conversationSlice.actions;
export default conversationSlice.reducer;
