import { dataBoardDiretor } from './mock/dataBoardDiretor';
import chai from 'chai';
import { Response } from 'superagent';
import chaiHttp from 'chai-http';
import app from '../src/index';
const expect = chai.expect;


chai.use(chaiHttp);
let responseHttp: Response;

describe('Testes da API Diretor', () => {
  it('Deve retornar lista de Diretor.', async () => {
    responseHttp = await chai
      .request(app)
      .get('/api/diretor')
      .send(dataBoardDiretor)
    const { status, body } = responseHttp;
    expect(status).to.be.equal(200);
    expect(body.message).to.deep.equal(dataBoardDiretor);
  });

  it('Deve retornar status 404 para uma rota inexistente', (done) => {
    chai.request(app)
      .get('/rota-inexistente')
      .end((err, res) => {
        expect(res).to.have.status(404);
        done();
      });
  });

  it('Deve retornar Diretor.', async () => {
    const id = 1
    responseHttp = await chai
      .request(app)
      .get(`/api/diretor/${id}`)
      .send(dataBoardDiretor[0])
    const { status, body } = responseHttp;
    expect(status).to.be.equal(200);
    expect(body.message).to.deep.equal(dataBoardDiretor[0]);
  });

  it('Deve retornar Diretor message null.', async () => {
    const id = 85
    responseHttp = await chai
      .request(app)
      .get(`/api/diretor/${id}`)

    const { status, body } = responseHttp;
    expect(status).to.be.equal(200);
    expect(body.message).to.deep.equal(null);
  });

  it('Deve retornar Invalid type id.', async () => {
    const id = 'f'
    responseHttp = await chai
      .request(app)
      .get(`/api/diretor/${id}`)

    const { status, body } = responseHttp;
    expect(status).to.be.equal(400);
    expect(body.error).to.deep.equal("Invalid id type");
  });
});
