const { connect } = require('./client');
const { setupInput } = require('./input');

console.log('Connecting ...');
const conn = connect();
setupInput(conn);

// play.js SECOND ATTEMPT DIDN'T SEEM TO WORK THE SAME WAY SOME OF THE TIME
// const { connect } = require('./client');
// const { setupInput } = require('./input');

// console.log('Connecting ...');
// connect();

// setupInput(conn);