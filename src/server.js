import http from 'http';
import express from 'express';
import socketIO from 'socket.io';

const PORT = 3000;

const app = express();

app.set('view engine', 'pug');
app.set('views', process.cwd() + '/views');
app.use('/public', express.static(process.cwd() + '/public'));

app.get('/*', (req, res) => res.render('home'));

const server = http.createServer(app);
const io = socketIO(server);

io.on('connection', socket => {
  socket.username = '익명';

  socket.onAny(event => {
    console.log('###on Eventname : ' + event);
  });

  socket.on('name-change', (name, done) => {
    socket.username = name;

    done();
  });

  socket.on('room-enter', (roomName, done) => {
    socket.join(roomName);

    const { username } = socket;

    socket.to(roomName).emit('enter', { username });
    done(roomName);
  });

  socket.on('leave-room', done => {
    leaveRoom();
    done();
  });

  socket.on('new-chat', (msg, done) => {
    socket.rooms.forEach(room =>
      socket.to(room).emit('chat', { msg, username: socket.username })
    );

    done();
  });

  const leaveRoom = () => {
    const { username } = socket;

    socket.rooms.forEach(room => socket.to(room).emit('leave', { username }));
  };

  socket.on('disconnecting', leaveRoom);
});

server.listen(PORT, () => console.log(`Open server http://localhost:${PORT}`));
