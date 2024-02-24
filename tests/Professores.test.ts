import { dataBoardTeachers, dataBoardTeacherId } from './mock/dataBoardTeachers';
import chai from 'chai';
import { Response } from 'superagent';
import chaiHttp from 'chai-http';
import app from '../src/index';
const expect = chai.expect;


chai.use(chaiHttp);
let responseHttp: Response;

describe('Testes da API Professores', () => {
  it('Deve retornar lista de Professores.', async () => {
    responseHttp = await chai
      .request(app)
      .get('/api/professor')
      .send(dataBoardTeachers)
    const { status, body } = responseHttp;
    expect(status).to.be.equal(200);
    expect(body.message).to.deep.equal(dataBoardTeachers);
  });

  it('Deve retornar status 404 para uma rota inexistente', (done) => {
    chai.request(app)
      .get('/rota-inexistente')
      .end((err, res) => {
        expect(res).to.have.status(404);
        done();
      });
  });

  it('Deve retornar Professor.', async () => {
    const id = 4
    responseHttp = await chai
      .request(app)
      .get(`/api/professor/${id}`)
      .send(dataBoardTeacherId)
    const { status, body } = responseHttp;
    expect(status).to.be.equal(200);
    expect(body.message).to.deep.equal(dataBoardTeacherId);
  });

  it('Deve retornar Professor not Found.', async () => {
    const id = 85
    responseHttp = await chai
      .request(app)
      .get(`/api/professor/${id}`)

    const { status, body } = responseHttp;
    expect(status).to.be.equal(404);
    expect(body.error).to.deep.equal("Teacher not found");
  });

  it('Deve retornar Invalid type id.', async () => {
    const id = 'f'
    responseHttp = await chai
      .request(app)
      .get(`/api/professor/${id}`)

    const { status, body } = responseHttp;
    expect(status).to.be.equal(400);
    expect(body.error).to.deep.equal("Invalid id type");
  });

  it('Deve retornar Invalid type id for delete.', async () => {
    const id = 'f'
    responseHttp = await chai
      .request(app)
      .delete(`/api/professor/${id}`)

    const { status, body } = responseHttp;
    expect(status).to.be.equal(400);
    expect(body.error).to.deep.equal("Invalid id type");
  });

  it('Deve retornar Error "Teacher with students associated.".', async () => {
    const id = 4
    responseHttp = await chai
      .request(app)
      .delete(`/api/professor/${id}`)
      
    const { status, body } = responseHttp;
    expect(status).to.be.equal(500);
    expect(body).to.deep.equal({
      "error": "Teacher with students associated."
    });
  });
});
