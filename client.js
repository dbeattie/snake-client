const net = require('net');
const { IP, PORT } = require('./constants');
/**
 * Establishes connection with the game server
 */

const connect = function() {
  const conn = net.createConnection({ 
   host: IP,
   port: PORT
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