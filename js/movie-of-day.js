const containerFilme = document.querySelector('.highlight__video');
const filmeTitle = document.querySelector('.highlight__title');
const filmeRating = document.querySelector('.highlight__rating');
const linkFilme = document.querySelector('.highlight__video-link');
const generos = document.querySelector('.highlight__genres');
const filmeDate = document.querySelector('.highlight__launch');
const filmeDescription = document.querySelector('.highlight__description');

let currentDate = new Date();
let dataFormatada = currentDate.toLocaleDateString('pt-br',{
  year: "numeric",
  month: "long",
  day: "numeric",
  timeZone: "UTC",
});

async function movieOfDay(){
  try {
    const response = await api.get('/movie/436969?language=pt-BR');
    const response2 = await api.get('/movie/436969/videos?language=pt-BR');
    const bgFilme = response.data.backdrop_path;
    const showtitle = response.data.title;
    const rating = response.data.vote_average;
    const genres = response.data.genres;
    const videoLink = response2.data.results[0].key;
    const description = response.data.overview;

    filmeTitle.textContent = showtitle;
    linkFilme.href = `https://www.youtube.com/watch?v=${videoLink}`;
    containerFilme.style.backgroundImage = `url('${bgFilme}')`;
    containerFilme.style.backgroundSize = 'cover';
    filmeRating.textContent = rating.toFixed(1);
    generos.textContent = `${genres[0].name}, ${genres[1].name}, ${genres[2].name}`;
    filmeDate.textContent = dataFormatada;
    filmeDescription.textContent = description;
    
  } catch (error) {
    
  }
};
movieOfDay();