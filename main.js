// A varibale that creates a list of all the html elements with the data- action attribute ( in this case buttons)
const actions = Array.from(
    document.querySelectorAll('[data-action]'));

// a variable to store the counter
let counter = 0;

// assigns the counter variable to the counter-value element within the html 
document.querySelector(".counter-value").innerText = counter;


actions.forEach(action => {
    action.addEventListener('click', () => {
        const type = action.dataset.action;
        console.log(type);
    })
})