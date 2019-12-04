// play.js
// const { connect } = require('./client');
// const { setupInput } = require('./input');

// console.log('Connecting ...');
// connect();

// setupInput(conn);

// OLD CODE WORKED BETTER FROM...
const { connect } = require('./client');
const { setupInput } = require('./input');

console.log('Connecting ...');
const conn = connect();
setupInput(conn);