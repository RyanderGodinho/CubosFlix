const movies = document.querySelectorAll('.movie');
const btnNext = document.querySelector('.btn-next');
const btnPrev = document.querySelector('.btn-prev');
const inputSearch = document.querySelector('.input');
let contador = 0;
let inputFocus = false;

carrosselBuscador();

function forMovies(moviesApi){
  for(let movie of movies){
    const movieTitle = movie.querySelector('.movie__title');
    const movieRating = movie.querySelector('.movie__rating span');
    const movieId = movie.querySelector('.hidden');
    movie.style.background = `url('${moviesApi[contador].poster_path}')`;
    movie.style.backgroundSize = 'cover';
    movieTitle.textContent = moviesApi[contador].title;
    movieRating.textContent = moviesApi[contador].vote_average.toFixed(1);
    movieId.textContent = moviesApi[contador].id;
    contador++;
  }
}
function setarContador(valorContador){
  contador = valorContador;
  inputSearch.value = '';
  inputFocus = false;
  carrosselBuscador();
}

async function carrosselBuscador(){
  try {
    if(!inputSearch.value && !inputFocus){
      const response = await api.get('/discover/movie?language=pt-BR&include_adult=false');
      const moviesApi = response.data.results;
      forMovies(moviesApi);
      return;
    }
    if(inputFocus){
      const response = await api.get(`/search/movie?language=pt-BR&include_adult=false&query=${inputSearch.value}`);
      const moviesApi = response.data.results;
      forMovies(moviesApi);
      return;
    }
  } catch (error) {
    setarContador(0);
  }
};

btnNext.addEventListener('click', ()=>{
  if(contador >= 0 && contador <= 6){
    setarContador(6);
    return;
  }
  if(contador >= 7 && contador <= 12){
    setarContador(12);
    return;
  }
  setarContador(0);
})

btnPrev.addEventListener('click', ()=>{
  if(contador >= 0 && contador <= 6){
    setarContador(12);
    return;
  }
  if(contador >= 7 && contador <= 12){
    setarContador(0);
    return;
  }
  setarContador(6);
})

inputSearch.addEventListener('keypress', (event)=>{
  if(event.key !== 'Enter'){
    return;
  }
  if(!inputSearch.value){
    setarContador(0);
    return;
  }
  contador = 0;
  inputFocus = true;
  carrosselBuscador();
  inputSearch.value = '';
  inputFocus = false;
})