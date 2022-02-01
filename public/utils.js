const setting = document.querySelector('.setting');
const room = document.querySelector('.room');
const chatList = room.querySelector('.chat-list');

export const joinRoom = roomName => {
  const h = room.querySelector('h2');

  setting.hidden = true;
  room.hidden = false;
  h.textContent = `Channel - ${roomName}`;

  chatList.innerHTML = '';
};

export const leaveRoom = () => {
  setting.hidden = false;
  room.hidden = true;
};
