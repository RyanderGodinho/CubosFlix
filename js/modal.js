const modal = document.querySelector('.modal');
const modalTitle = document.querySelector('.modal__title');
const modalBg = document.querySelector('.modal__img');
const modalDescription = document.querySelector('.modal__description');
const modalGenre = document.querySelector('.modal__genres');
const modalVotes = document.querySelector('.modal__average');
const btnCloseModal = document.querySelector('.modal__close');

async function modalContent(idMovie){
  try {
    const response = await api.get(`movie/${idMovie}?language=pt-BR`)
    const movieContent = response.data;
    const movieGenres = movieContent.genres;
    
    modalBg.src = movieContent.backdrop_path;
    modalTitle.textContent = movieContent.title;
    modalDescription.textContent = movieContent.overview;
    modalVotes.textContent = movieContent.vote_average.toFixed(1);

    movieGenres.forEach((genre, index)=>{
      if(index < movieGenres.length){
        let spanNovo = document.createElement('span');
        let lastChild = modalGenre.lastChild;
        modalGenre.insertBefore(spanNovo, lastChild);
        
        spanNovo.classList.add('modal__genre');
        spanNovo.textContent = genre.name;
      }
    });
  } catch (error) {
  }
}

function clearModal(){
  modalGenre.textContent = '';
  modalBg.src = '';
  modalTitle.textContent = '';
  modalDescription.textContent = '';
  modalVotes.textContent = '';
}

for(let movie of movies){
  movie.addEventListener('click', ()=>{
    clearModal();

    modal.classList.remove('hidden');

    const idMovie = movie.querySelector('.hidden').textContent;
    modalContent(idMovie);
    
    modal.addEventListener('click', (event)=>{
      event.stopPropagation();
      modal.classList.add('hidden')
    })
    btnCloseModal.addEventListener('click', (event)=>{
      event.stopPropagation();
      modal.classList.add('hidden');
    })
  })  
}