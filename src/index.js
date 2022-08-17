// Cache DOM elements

const img = document.querySelector('#detail-image');
const title = document.querySelector('#title');
const year = document.querySelector('#year-released');
const description = document.querySelector('#description');
const watchedBtn = document.querySelector('#watched');
const input = document.querySelector('#blood-amount');
const amount = document.querySelector('#amount');
const form = document.querySelector('form');
let movies;
let current;

const blood = (e) => {
  e.preventDefault();
  current.blood_amount += parseInt(input.value);
  amount.textContent = current.blood_amount;
  input.value = '';
}

const addImages = (movies) => {
  const list = document.querySelector('#movie-list');
  movies.forEach(movie => {
    const img = document.createElement('img');
    img.src = movie.image;
    list.append(img);
    img.addEventListener('click', () => addDetails(movie));
  });
}

const toggle = () => {
    if(watchedBtn.textContent === 'Watched') {
      watchedBtn.textContent = 'Unwatched';
      current.watched = false;
    } else if(watchedBtn.textContent === 'Unwatched') {
      watchedBtn.textContent = 'Watched';
      current.watched = true;
    }
}
const addDetails = (movie) => {
  current = movie;
  img.src = movie.image;
  title.textContent = movie.title;
  year.textContent = movie.release_year;
  description.textContent = movie.description;
  amount.textContent = movie.blood_amount;
  if(movie.watched === true) {
    watchedBtn.textContent = 'Watched';
  } else {
    watchedBtn.textContent = 'Unwatched';
  }

  // Add click event to toggle watched button
  watchedBtn.removeEventListener('click', toggle);
  watchedBtn.addEventListener('click', toggle);
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
  form.addEventListener('submit', blood);
})();