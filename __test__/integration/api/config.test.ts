/* eslint-disable no-underscore-dangle */
/* eslint-disable jest/valid-expect-in-promise */
/* eslint-disable jest/expect-expect */
import supertest from 'supertest';
import expres from 'express';
import server from '../../../src/app';

let app: expres.Application;
let request: supertest.SuperTest<supertest.Test>;
const baseUri = '/api/admin';


beforeAll(() => {
  app = server.app;
  request = supertest(app);
});

// list
it('should get list configs', async () => {
  const response = await request.get(baseUri)
  expect(response.status).toBe(200);
  expect(response.body).toBeInstanceOf(Array);
});


// update
describe('should update a config', () => {
  it('should update with 200 status', async () => {
    const id: string = '602af24346ed1e87d01331f1'; // verify that this id exist in your database
    const config = {
      default: 6
    };
    
    const response = await request.put(`${baseUri}/${id}`)
      .send(config);
    expect(response.status).toBe(200);
    expect(response.body.default).toEqual(config.default);
  });

  it('should fail with 404 status', async () => {
    const id = '5fe0287346956c638f701bd2';
    const response = await request.put(`${baseUri}/${id}`)
      .send({ 
        default: 6
      });
    expect(response.status).toBe(404);
    expect(response.body.default).toBeUndefined();
  });
});
