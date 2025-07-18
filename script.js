console.log("Welcome Vikas! Resume Website Loaded✅")

const checkbox= document.getElementById('toggle-dark');

checkbox.addEventListener('change',() =>{
    document.body.classList.toggle('dark');
})


