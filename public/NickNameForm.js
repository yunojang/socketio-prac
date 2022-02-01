class NickNameForm {
  constructor(socket) {
    this.socket = socket;

    const nameForm = document.querySelector('.nickname-form');
    const input = nameForm.querySelector('input');
    const dpName = nameForm.querySelector('.name');

    nameForm.addEventListener('submit', e => {
      e.preventDefault();
      const name = input.value;

      if (!name) return;

      socket.emit('name-change', name, () => {
        dpName.textContent = name;
        input.value = '';
      });
    });
  }
}

export default NickNameForm;
