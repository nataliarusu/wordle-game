export const customizeHandler=(ev)=>{
    const formContainer = document.querySelector('#custom-form');
    const closeBtn = formContainer.querySelector('.close-btn');
    formContainer.classList.add('visible');  
    closeBtn.addEventListener('click', ()=>{
        document.querySelector('#custom-form').classList.remove('visible');
    }) 
}