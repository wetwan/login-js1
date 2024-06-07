
const btn = document.querySelector(".button")
const login = document.querySelector("#login")
const filled =document.querySelector('.h3')
const button = document.querySelector('.sgnbtn')
const signup = document.querySelector('#signup')
const tabs = document.querySelectorAll('.login')
const panels = document.querySelectorAll('.form')

btn.addEventListener('click',(e)=>{
    e.preventDefault()

    const username = document.querySelector('#name').value.trim()
    const password = document.querySelector('#password').value.trim()
    filled.style.display = "block"
    if(username ==='' || password === ''){
        filled.style.color = "red"
        filled.textContent = 'plase fill the form'
        setTimeout (()=>{
            filled.style.display ='none'
        }, 3000)
     
    }
   
    else{
        login.style.display = "none"
        filled.style.color = "green"
        filled.textContent = `Welcome ${username}`
    }
    
})


button.addEventListener('click',(e)=>{
    e.preventDefault()

    const firstName = document.querySelector('#first-name').value.trim()
    const lastName = document.querySelector('#last-name').value.trim()
    const email = document.querySelector('#email').value.trim()
    const dob = document.querySelector('#DOB').value.trim()
    const usernames = document.querySelector('#usernames').value.trim()
    const password = document.querySelector('#passwords').value.trim()


    filled.style.display = "block"


    if(usernames ==='' || password === ''|| firstName ===''|| lastName ===''|| email ==='' ){
        filled.style.color = "red"
        filled.textContent = 'plase fill the form'
        setTimeout (()=>{
            filled.style.display ='none'
        }, 3000)
     
    }
   
    else{
        signup.style.display = "none"
        filled.style.color = "green"
        filled.textContent = `Welcome ${firstName} ${lastName}`
    }
    
})


tabs.forEach(tab => {
    tab.addEventListener('click', function() {
        tabs.forEach(tab => tab.classList.remove('active'));
        this.classList.add('active');

     
        panels.forEach(panel => panel.classList.remove('active'));
        const targetPanel = document.querySelector(this.dataset.target);
        targetPanel.classList.add('active');
    });
});



