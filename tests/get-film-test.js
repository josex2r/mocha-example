const chai = require('chai');
const sinon = require('sinon');
const sinonChai = require('sinon-chai');
const { getFilm } = require('..');
const expect = chai.expect;

chai.use(sinonChai);

it('calls adapter with the url', () => {
  const id = 'foo';
  const promise = Promise.resolve();
  const stub = sinon.stub().returns(promise);

  getFilm(id, stub);

  expect(stub).to.have.been.called;
  expect(stub).to.have.been.calledWith(`https://ghibliapi.herokuapp.com/films/${id}`);
});

it('resolves with film title', () => {
  const id = 'foo';
  const promise = Promise.resolve({ title: id });
  const stub = sinon.stub().returns(promise);

  return getFilm(id, stub).then((title) => {
    expect(title).to.be.equal(id);
  });
});

it('rejects with error', () => {
  expect(() => getFilm()).to.throw(Error, 'ID not exists');
});
