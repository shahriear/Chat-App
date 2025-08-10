import io from 'socket.io-client';
import store from '../store';
import { newMessage } from '../store/slices/conversationSlice';

let socket;
const initSocket = () => {
  socket = io.connect('http://localhost:8000');

  socket.on('new_message', res => {
    // console.log(res);

    store.dispatch(newMessage(res));
    // console.log(res);
  });

  socket.on('connect', () => console.log('Socket connected with server'));
  socket.emit('join_user', store.getState().authSlice.user._id);
};

export { initSocket, socket };
