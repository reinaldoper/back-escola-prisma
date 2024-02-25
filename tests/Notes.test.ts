import { dataBoardNotes } from './mock/dataBoardNotes';
import chai from 'chai';
import { Response } from 'superagent';
import chaiHttp from 'chai-http';
import app from '../src/index';
const expect = chai.expect;


chai.use(chaiHttp);
let responseHttp: Response;

describe('Testes da API Notes', () => {
  it('Deve retornar lista de Notes.', async () => {
    responseHttp = await chai
      .request(app)
      .get('/api/notas')
      .send(dataBoardNotes)
    const { status, body } = responseHttp;
    expect(status).to.be.equal(200);
    expect(body.message).to.deep.equal(dataBoardNotes);
  });

  it('Deve retornar Notes.', async () => {
    const id = 2
    responseHttp = await chai
      .request(app)
      .get(`/api/notas/${id}`)
      .send(dataBoardNotes[0])
    const { status, body } = responseHttp;
    
    expect(status).to.be.equal(200);
    expect(body.message).to.deep.equal(dataBoardNotes[0]);
  });

  it('Deve retornar Notes error.', async () => {
    const id = 85
    responseHttp = await chai
      .request(app)
      .get(`/api/notas/${id}`)

    const { status, body } = responseHttp;
    expect(status).to.be.equal(404);
    
    expect(body.error).to.deep.equal('Nota not found');
  });

  it('Deve retornar Invalid type id.', async () => {
    const id = 'f'
    responseHttp = await chai
      .request(app)
      .get(`/api/notas/${id}`)

    const { status, body } = responseHttp;
    expect(status).to.be.equal(400);
    expect(body.error).to.deep.equal("Invalid type id");
  });
});
