const root = document.querySelector(':root');
const logoImg = document.querySelector('#btn-theme');
const btnTheme = document.querySelector('.btn-theme');

function toggleTheme(){
  const bgColor = root.style.getPropertyValue('--background');

  if(bgColor === '#fff' || !bgColor){
    logoImg.src = '/assets/logo.svg';
    btnTheme.src = '/assets/dark-mode.svg';
    btnNext.src = '/assets/arrow-right-light.svg';
    btnPrev.src = '/assets/arrow-left-light.svg';
    btnCloseModal.src = '/assets/close.svg';
    root.style.setProperty('--background', '#1B2028');
    root.style.setProperty('--input-color', '#3E434D');
    root.style.setProperty('--text-color', '#fff');
    root.style.setProperty('--bg-secondary', '#2D3440');
    root.style.setProperty('--bg-modal', '#2D3440');
    return;
  }
  logoImg.src = '/assets/logo-dark.png';
  btnTheme.src = '/assets/light-mode.svg';
  btnNext.src = '/assets/arrow-right-dark.svg';
  btnPrev.src = '/assets/arrow-left-dark.svg';
  btnCloseModal.src = '/assets/close-dark.svg';
  root.style.setProperty('--background', '#fff');
  root.style.setProperty('--input-color', '#979797');
  root.style.setProperty('--text-color', '#1b2028');
  root.style.setProperty('--bg-secondary', '#ededed');
  root.style.setProperty('--bg-modal', '#ededed');
}

btnTheme.addEventListener('click', ()=>{
  toggleTheme();
})
