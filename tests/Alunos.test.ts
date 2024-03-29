
import chai from 'chai';
import { Response } from 'superagent';
import chaiHttp from 'chai-http';
import app from '../src/index';
const expect = chai.expect;

import { dataBoard, dataBoardId, dataBoardPostStudent, dataBoardPutError } from './mock/dataBoardAlunos';

chai.use(chaiHttp);
let responseHttp: Response;


describe('Testes da API Alunos', () => {
   it('Deve retornar lista de Alunos.', async () => {
     responseHttp = await chai
       .request(app)
       .get('/api/aluno')
       .send(dataBoard)
     const { status, body } = responseHttp;
     const result = body.message;
     expect(status).to.be.equal(200);
     expect(body.message).to.deep.equal(result);
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
 
   it('Deve retornar Invalid parameters.', async () => {
     
     responseHttp = await chai
       .request(app)
       .post('/api/aluno/')
       .send(dataBoardPostStudent)
 
     const { status, body } = responseHttp;
     expect(status).to.be.equal(400);
     expect(body.error).to.deep.equal("Invalid parameters");
   });
 
   it('Deve retornar Invalid parameters.', async () => {
     const id = 8
     responseHttp = await chai
       .request(app)
       .put(`/api/aluno/${id}`)
       .send(dataBoardPutError)
 
     const { status, body } = responseHttp;
     
     expect(status).to.be.equal(400);
     expect(body.error).to.deep.equal("Invalid parameters");
   });
});
