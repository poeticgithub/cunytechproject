var chai = require('chai');
var chaiHttp = require('chai-http');
var server = require('../../app');
var expect = chai.expect;

chai.use(chaiHttp);

describe('Users', function() {
  it('should display the homepage on / GET', (done) => {
    chai.request(server)
      .get('/')
      .end((err,res) => {
        expect(res.status).to.equal(200);
		expect(res.text).to.include('Welcome ');
        done();
  });
  it('should display the name of pet entered by user on /:slug GET');
  it('should login successfully if credentials are valid');
  it('should reject user if credentials are not valid');
  it('should display validation errors if credientials are not valid');
  it('should redirect to (BLANK_PAGE) if credientials are valid');
  it('should add user to database if credentials are valid');
  it('should check if user is unique');
  it('should check if required fields are not empty');
  it('should redirect to (BLANK_PAGE) if registration is successfully');
});
