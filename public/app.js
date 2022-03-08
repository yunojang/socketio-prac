import EnterRoomForm from './EnterRoomForm.js';
import ChatRoom from './ChatRoom.js';
import NickNameForm from './NickNameForm.js';
import HomePage from './HomePage.js';

const socket = io();

new HomePage(socket);
new NickNameForm(socket);
new EnterRoomForm(socket);
new ChatRoom(socket);
