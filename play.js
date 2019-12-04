// play.js
const { connect } = require('./client');
const { setupInput } = require('./input');
console.log('Connecting ...');
connect();
setupInput();

// DON'T KNOW WHAT THIS WAS PREVIOUSLY FROM...
// const { connect } = require('./client');
// const { setupInput } = require('./input');

// console.log('Connecting ...');
// const conn = connect();
// setupInput(conn);