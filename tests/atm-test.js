const chai = require('chai');
const { atm } = require('..');
const expect = chai.expect;

describe('test atm machine', () => {
  it('it exists', () => {
    expect(atm).to.exist;
  });

  describe('non valid amounts', () => {
    it('returns 0€ for null amount', () => {
      const input = null;
      const output = atm(input);

      expect(output).to.be.deep.equal({});
    });

    it('returns 0€ for undefined amount', () => {
      const input = undefined;
      const output = atm(input);

      expect(output).to.be.deep.equal({});
    });

    it('returns 0€ for Object amount', () => {
      const input = {};
      const output = atm(input);

      expect(output).to.be.deep.equal({});
    });

    it('returns 0€ for negative amount', () => {
      const input = -5;
      const output = atm(input);

      expect(output).to.be.deep.equal({});
    });

    it('returns 0€ for empty amount', () => {
      const output = atm();

      expect(output).to.be.deep.equal({});
    });

    it('returns 0€ for non multiples of 5', () => {
      const input = 7;
      const output = atm(input);

      expect(output).to.be.deep.equal({});
    });
  });

  describe('exact amount', () => {
    it('returns 5€', () => {
      const input = 5;
      const output = atm(input);

      expect(output).to.be.deep.equal({ 5: 1 });
    });

    it('returns 10€', () => {
      const input = 10;
      const output = atm(input);

      expect(output).to.be.deep.equal({ 10: 1 });
    });

    it('returns 20€', () => {
      const input = 20;
      const output = atm(input);

      expect(output).to.be.deep.equal({ 20: 1 });
    });

    it('returns 50€', () => {
      const input = 50;
      const output = atm(input);

      expect(output).to.be.deep.equal({ 50: 1 });
    });
  });

  describe('multiple bills', () => {
    it('returns 165€', () => {
      const input = 165;
      const output = atm(input);

      expect(output).to.be.deep.equal({ 5: 1, 10: 1, 50: 3 });
    });

    it('returns 85€', () => {
      const input = 85;
      const output = atm(input);

      expect(output).to.be.deep.equal({ 5: 1, 20: 1, 10: 1, 50: 1 });
    });
  });
});
