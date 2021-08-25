const net = require('net');

const server = net.createServer();

server.listen(3000, () => {
  console.log('Server listening on port 3000!');
});

server.on('connection', (user) => {
  console.log('New user connected!');
  user.write('Welcome' + user);
})

server.on('data', (data) => {
  console.log('User has sent us this data: ', data);
})