let chai = require('chai');
let chaiHttp = require('chai-http');
const expect = require('chai').expect;

chai.use(chaiHttp);
const url= 'http://localhost:3000';

describe('Calcula la suma de los elementos en un array', () => {
	it('Debe retornar la suma 10', (done) => {
        let entrada = "[1,2,3,4]";
        console.log(typeof(entrada));
        chai.request(url)
            //.get('/')
            .post('/test')
            //.set('content-type', 'application/x-www-form-urlencoded')
            .set('content-type', "text/plain")
            //.set('content-type', 'application/json')
            .send(entrada)
            //.set('content-type', 'application/x-www-form-urlencoded')
			.end(function(err,res,body){
                console.log(res.body);
                expect(res).to.have.status(200);
                //expect(res.data.suma).to.have.property('suma').to.be.equal(10);
				done();
			});
	});
});