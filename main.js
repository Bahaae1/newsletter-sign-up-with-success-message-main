const newsletter = document.querySelector('.newsletter');
const form = document.querySelector('.newsletter .text-side form');
const span = document.querySelector('.newsletter .text-side form .email span');
const email = document.querySelector('.newsletter .text-side form .email input');

// let emailValue = email.value ;

const message = document.querySelector(".success-message");
const btnMessage = document.querySelector(".success-message button");

form.addEventListener('submit' , (e) => {
    e.preventDefault()
    
    let valid = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/ ;

    if( email.value === ''  ){
        span.style.display = 'block';
        email.style.border =' 2px solid hsl(4, 100%, 67%)';
        email.style.color ='hsl(4, 100%, 67%)';
        
    }   else if(!email.value.match(valid)){
        span.style.display = 'block';
        email.style.border =' 2px solid hsl(4, 100%, 67%)';
        email.style.color ='hsl(4, 100%, 67%)';
        
    }else{
        newsletter.style.display = 'none';
        message.style.display = 'flex';
        email.value = ''
    }
})
btnMessage.addEventListener('click' , () => {
    newsletter.style.display = 'block';
    message.style.display = 'none';
    
})