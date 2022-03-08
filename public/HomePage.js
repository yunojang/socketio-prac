class HomePage {
  constructor(socket) {
    this.socket = socket;

    const ct = document.querySelector('.room-list');
    const roomList = ct.querySelector('ul');
    const count = ct.querySelector('.count');

    socket.on('connection', (rooms) => {
      if (rooms.length) {
        count.innerText = `- ${rooms.length}`
      }

      if (!rooms.length) {
        const alert = document.createElement('div');
        alert.innerText = '아무 방도 없습니다.';

        roomList.append(alert);
        return;
      }

      rooms.forEach(room => {
        const li = document.createElement('li');
        li.innerText = room;

        roomList.append(li);
      })
    })
  }
}

export default HomePage;