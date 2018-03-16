module.exports = function getFilm (id, adapter) {
  const url = `https://ghibliapi.herokuapp.com/films/${id}`;

  if (!id) {
    throw new Error('ID not exists');
  }

  return adapter(url).then((json) => {
    return json.title;
  });
};
