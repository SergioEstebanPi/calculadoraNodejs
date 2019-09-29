let chai = require('chai');
let chaiHttp = require('chai-http');
const expect = require('chai').expect;

chai.use(chaiHttp);
const url= 'http://localhost:3000';

describe('Calcula las operaciones basicas de los elementos en un array', () => {
	it('Debe retornar la suma con valor 10', (done) => {
        let entrada = "[1,2,3,4]";
        chai.request(url)
            .post('/test')
            .set('content-type', "text/plain")
            .send(entrada)
			.end(function(err,res){
                expect(res).to.have.status(200);
                expect(res.body.data).to.have.property('suma').to.be.equal(10);
                expect(res.body.errors).to.be.eql([]);
				done();
			});
    });
	it('Debe retornar la resta con valor -13', (done) => {
        let entrada = "[1,2,3,4,5]";
        chai.request(url)
            .post('/test')
            .set('content-type', "text/plain")
            .send(entrada)
			.end(function(err,res){
                expect(res).to.have.status(200);
                expect(res.body.data).to.have.property('resta').to.be.equal(-13);
                expect(res.body.errors).to.be.eql([]);
				done();
			});
    });
	it('Debe retornar la multiplicacion con valor 720', (done) => {
        let entrada = "[1,2,3,4,5,6]";
        chai.request(url)
            .post('/test')
            .set('content-type', "text/plain")
            .send(entrada)
			.end(function(err,res){
                expect(res).to.have.status(200);
                expect(res.body.data).to.have.property('multiplicacion').to.be.equal(720);
                expect(res.body.errors).to.be.eql([]);
				done();
			});
    });
	it('Debe retornar la division con valor 0.0001984126984126984', (done) => {
        let entrada = "[1,2,3,4,5,6,7]";
        chai.request(url)
            .post('/test')
            .set('content-type', "text/plain")
            .send(entrada)
			.end(function(err,res){
                expect(res).to.have.status(200);
                expect(res.body.data).to.have.property('division').to.be.equal(0.0001984126984126984);
                expect(res.body.errors).to.be.eql([]);
				done();
			});
    });    
});

describe('Valida la peticion de entrada', () => {
	it('Debe retornar codigo error 422 (invalid_data_format)', (done) => {
        let entrada = "[1,2,3,4,a,b,f]";
        chai.request(url)
            .post('/test')
            .set('content-type', "text/plain")
            .send(entrada)
			.end(function(err,res){
                expect(res).to.have.status(422);
                expect(res.body.data).to.be.equal('');
                expect(res.body.errors).to.be.eql(['invalid_data_format']);
				done();
			});
    });
	it('Debe retornar codigo error 500 (internal_server_error)', (done) => {
        let entrada = "[]";
        chai.request(url)
            .post('/test')
            .set('content-type', "text/plain")
            .send(entrada)
			.end(function(err,res){
                expect(res).to.have.status(500);
                expect(res.body.data).to.be.equal('');
                expect(res.body.errors).to.be.eql(['internal_server_error']);
				done();
			});
    });
	it('Debe retornar codigo error 404 (url_not_found)', (done) => {
        let entrada = "[1,2,3]";
        chai.request(url)
            .post('/test/test')
            .set('content-type', "text/plain")
            .send(entrada)
			.end(function(err,res){
                expect(res).to.have.status(404);
                expect(res.body.data).to.be.equal('');
                expect(res.body.errors).to.be.eql(['url_not_found']);
				done();
			});
    });
});