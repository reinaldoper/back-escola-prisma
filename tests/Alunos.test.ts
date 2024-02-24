import chai from 'chai';
import { Response } from 'superagent';
import chaiHttp from 'chai-http';
import app from '../src/index';
const expect = chai.expect;
import { dataBoard, dataBoardId } from './mock/dataBoardAlunos';

chai.use(chaiHttp);
let responseHttp: Response;

describe('Testes da API Alunos', () => {
  it('Deve retornar lista de Alunos.', async () => {
    responseHttp = await chai
      .request(app)
      .get('/api/aluno')
      .send(dataBoard)
    const { status, body } = responseHttp;
    expect(status).to.be.equal(200);
    expect(body.message).to.deep.equal(dataBoard);
  });

  it('Deve retornar status 404 para uma rota inexistente', (done) => {
    chai.request(app)
      .get('/rota-inexistente')
      .end((err, res) => {
        expect(res).to.have.status(404);
        done();
      });
  });

  it('Deve retornar Aluno.', async () => {
    const id = 8
    responseHttp = await chai
      .request(app)
      .get(`/api/aluno/${id}`)
      .send(dataBoardId)
    const { status, body } = responseHttp;
    expect(status).to.be.equal(200);
    expect(body.message).to.deep.equal(dataBoardId);
  });

  it('Deve retornar Aluno not Found.', async () => {
    const id = 85
    responseHttp = await chai
      .request(app)
      .get(`/api/aluno/${id}`)

    const { status, body } = responseHttp;
    expect(status).to.be.equal(404);
    expect(body.error).to.deep.equal("Aluno not found");
  });

  it('Deve retornar Invalid type id.', async () => {
    const id = 'f'
    responseHttp = await chai
      .request(app)
      .get(`/api/aluno/${id}`)

    const { status, body } = responseHttp;
    expect(status).to.be.equal(400);
    expect(body.error).to.deep.equal("Invalid id type");
  });
});
