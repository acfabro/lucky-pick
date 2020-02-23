/**
 * This is the lambda function handler for the lucky pick app
 */

const app = require('./actions-on-google/app').default;

exports.fulfillment = app;