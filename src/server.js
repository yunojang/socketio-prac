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

io.on('connection', socket => {});

server.listen(PORT, () => console.log(`Open server http://localhost:${PORT}`));
