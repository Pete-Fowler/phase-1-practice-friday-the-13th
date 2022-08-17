const addImages = (movies) => {
  const list = document.querySelector('#movie-list');
  movies.forEach(movie => {
    const img = document.createElement('img');
    img.src = movie.image;
    list.append(img);
  });
}

const getMovies = () => {
  fetch(`http://localhost:3000/movies`)
  .then(res => res.json())
  .then(data => addImages(data));
  // .then(data => addDetails(data))

}

const init = (() => {
  getMovies();
})();