import io from 'socket.io-client';
import store from '../store';
import { newMessage } from '../store/slices/conversationSlice';

let socket;
const initSocket = () => {
  socket = io.connect(import.meta.env.VITE_API_BASE_URL);

  socket.on('new_message', res => {
    // console.log(res);

    store.dispatch(newMessage(res));
    // console.log(res);
  });

  socket.on('connect', () => console.log('Socket connected with server'));
  socket.emit('join_user', store.getState().authSlice.user._id);
};

export { initSocket, socket };
