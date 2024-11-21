import chai from 'chai';
import chaiHttp from 'chai-http';
import app from '../src/app.js';

chai.use(chaiHttp);
const { expect } = chai;

describe('Sessions API', () => {
  it('should register a new user', (done) => {
    chai.request(app)
      .post('/api/sessions/register')
      .send({ first_name: 'Test', last_name: 'User', email: 'testuser@example.com', password: 'testpass' })
      .end((err, res) => {
        expect(res).to.have.status(200);
        done();
      });
  });

  it('should login a user', (done) => {
    chai.request(app)
      .post('/api/sessions/login')
      .send({ email: 'testuser@example.com', password: 'testpass' })
      .end((err, res) => {
        expect(res).to.have.status(200);
        done();
      });
  });
});