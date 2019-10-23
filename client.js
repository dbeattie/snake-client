const net = require('net');

/**
 * Establishes connection with the game server
 */

const connect = function() {
  const conn = net.createConnection({ 
    host: '172.46.2.204',
    port: 50541
  });
  // interpret incoming data as text
  conn.on('connect', function() {
    console.log('Successfully connected to game server...')
  });
  conn.write("Name: DSB");
  conn.on('close', function() {
    console.log('you ded');
  });
  conn.setEncoding('utf8'); 

  return conn;
}

module.exports = {
  connect };