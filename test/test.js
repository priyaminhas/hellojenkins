var request = require('supertest');
var app = require('../app.js');
 
describe('GET /', function() {
  it('respond with hello priya', function(done) {
    request(app).get('/').expect('hello priya', done);
  });
});
