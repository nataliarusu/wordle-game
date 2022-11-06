export const customizeHandler=(ev)=>{
    const formContainer = document.querySelector('#custom-form');
    const closeBtn = formContainer.querySelector('.close-btn');
    formContainer.classList.add('visible');
    formContainer.querySelector('.form-wrapper').classList.add('animated');  
    closeBtn.addEventListener('click', ()=>{
        document.querySelector('#custom-form').classList.remove('visible');
        formContainer.querySelector('.form-wrapper').classList.remove('animated');  
    }); 
}