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
  conn.setEncoding('utf8');

  conn.on('connect', function() {
        console.log('Successfully connected to game server...')
      });

  conn.write("Name: DSB");

  conn.on('data', (data) => {
    console.log('Server Says:', data);
  });

  return conn;
}


//OLD CODE FROM MY FIRST ATTEMPT - SECOND ATTEMPT WENT BETTER
// const net = require('net');
// const { IP, PORT } = require('./constants');
// /**
//  * Establishes connection with the game server
//  */

// const connect = function() {
//   const conn = net.createConnection({ 
//    host: IP,
//    port: PORT
//   });
//   // interpret incoming data as text
//   conn.on('connect', function() {
//     console.log('Successfully connected to game server...')
//   });
//   conn.write("Name: DSB");
//   conn.on('close', function() {
//     console.log('you ded');
//   });
//   conn.setEncoding('utf8'); 

//   return conn;
// }

module.exports = {
  connect };