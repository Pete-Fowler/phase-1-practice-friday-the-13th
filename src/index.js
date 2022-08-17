const addImages = (movies) => {
  const list = document.querySelector('#movie-list');
  movies.forEach(movie => {
    const img = document.createElement('img');
    img.src = movie.image;
    list.append(img);
    img.addEventListener('click', () => addDetails(movie));
  });
}

const addDetails = (movie) => {
  const img = document.querySelector('#detail-image');
  const title = document.querySelector('#title');
  const year = document.querySelector('#year-released');
  const description = document.querySelector('#description');

  img.src = movie.image;
  title.textContent = movie.title;
  year.textContent = movie.release_year;
  description.textContent = movie.description;
}

const getMovies = () => {
  fetch(`http://localhost:3000/movies`)
  .then(res => res.json())
  .then(data => {
    addImages(data);
    addDetails(data[0]);
  });

}

const init = (() => {
  getMovies();

})();