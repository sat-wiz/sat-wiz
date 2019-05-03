const request = require('supertest');

const server = 'http://localhost:8000';

describe('Route integration', () => {
    describe('/', () => {
      describe('GET', () => {
        it('responds with 200 status and text/html content type', () => {
          return request(server)
            .get('/')
            .expect('Content-Type', /text\/html/)
            .expect(200);
        });
      });
    });


        describe('/add', () => {
        describe('GET', () => {
            it('responds with 200 status and text/html content type', () => {
            return request(server)
                .get('/')
                .expect('Content-Type', /text\/html/)
                .expect(200);
            });
        });
    });
    describe('POST /users', () => {
      it('responds with json', (done) => {
        request(server)
          .post('/users')
          .send({firstname: 'john', lastname: 'smith' })
          .set('Accept', 'application/json')
          .expect('Content-Type', /json/)
          .expect(201)
          .end(function(err, res) {
            if (err) return done(err);
            done();
          });
      });
    });
});
