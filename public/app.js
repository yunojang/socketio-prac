import EnterRoomForm from './EnterRoomForm.js';
import ChatRoom from './ChatRoom.js';
import NickNameForm from './NickNameForm.js';

const socket = io();

new NickNameForm(socket);
new EnterRoomForm(socket);
new ChatRoom(socket);
