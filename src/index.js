

const getMovies = () => {
  fetch(`http://localhost:3000/movies`)
  .then(res => res.json());
  // .then(data => addImages(data))
  // .then(data => addDetails(data))

}

const init = (() => {
  getMovies();
})();