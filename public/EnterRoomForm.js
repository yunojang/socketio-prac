import { joinRoom } from './utils.js';

class EnterRoomForm {
  constructor(socket) {
    this.socket = socket;

    const roomForm = document.querySelector('.room-form');
    const input = roomForm.querySelector('input');

    roomForm.addEventListener('submit', e => {
      e.preventDefault();

      const roomName = input.value;

      if (!roomName) return;

      this.enter(roomName);
      input.value = '';
    });
  }

  enter(roomName) {
    const { socket } = this;

    socket.emit('room-enter', roomName, joinRoom);
  }
}

export default EnterRoomForm;
