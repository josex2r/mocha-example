const chai = require('chai');
const sinon = require('sinon');
const sinonChai = require('sinon-chai');
const { createNumber } = require('..');
const expect = chai.expect;

chai.use(sinonChai);

describe('test createNumber function', () => {
  it('it exists', () => {
    expect(createNumber).to.exist;
  });

  describe('api', () => {
    it('returns and object', () => {
      const output = createNumber(0);

      expect(output).to.be.a('object');
    });

    it('returns and object with an "add()" function', () => {
      const output = createNumber(0);

      expect(output.add).to.be.a('function');
    });

    it('returns and object with an "subtract()" function', () => {
      const output = createNumber(0);

      expect(output.subtract).to.be.a('function');
    });

    it('is chainable', () => {
      const output = createNumber(0);

      expect(output.add().subtract).to.be.a('function');
      expect(output.subtract().add).to.be.a('function');
    });
  });

  describe('prints number', () => {
    let stub;

    beforeEach(function() {
      stub = sinon.stub(console, 'log').callsFake(() => {});
    });

    afterEach(function() {
      stub.restore();
    });

    it('prints the next number', () => {
      const number = 0;
      const output = createNumber(number).add();

      expect(stub).to.have.been.called;
      expect(stub).to.have.been.calledWith(number + 1);
    });

    it('prints the previous number', () => {
      const number = 0;
      const output = createNumber(number).subtract();

      expect(stub).to.have.been.called;
      expect(stub).to.have.been.calledWith(number - 1);
    });
  });
});
