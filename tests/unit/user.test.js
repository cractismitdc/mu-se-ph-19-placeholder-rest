const request = require('supertest')
const app = require('../../src/app')
const fixture = require('../fixtures/user.fixture')
const httpStatus = require('http-status')

describe('User Endpoints', () => {
  test('should create a new user', async () => {
    const res = await request(app)
      .post('/v1/user/signup')
      .send(fixture.user)
    expect(res.status).toEqual(httpStatus.CREATED)
  })
  test('should return user lists', async () => {
    const res = await request(app)
      .get('/v1/user/lists')
    expect(res.status).toEqual(httpStatus.OK)
  })
})
