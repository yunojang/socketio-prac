import { leaveRoom } from './utils.js';

class ChatRoom {
  constructor(socket) {
    this.socket = socket;

    const room = document.querySelector('.room');
    const back = room.querySelector('.back');
    const chatForm = room.querySelector('.chat-form');
    const input = room.querySelector('input');

    chatForm.addEventListener('submit', e => {
      e.preventDefault();
      const msg = input.value;

      if (!msg) return;

      socket.emit('new-chat', msg, () => {
        this.appendChat(`You: ${msg}`);
        input.value = '';
      });
    });

    back.addEventListener('click', () => {
      socket.emit('leave-room', leaveRoom);
    });

    socket.on('chat', ({ username, msg }) => {
      this.appendChat(`${username}: ${msg}`);
    });

    socket.on('enter', ({ username }) => {
      this.appendChat(`[${username}]님이 참여했습니다.`);
    });

    socket.on('leave', ({ username }) => {
      this.appendChat(`[${username}]님이 나갔습니다.`);
    });
  }

  appendChat(msg) {
    const chatList = document.querySelector('.chat-list');
    const chat = document.createElement('li');
    chat.innerText = msg;

    chatList.append(chat);
  }
}

export default ChatRoom;
