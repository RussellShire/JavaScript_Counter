// A varibale that creates a list of all the html elements with the data- action attribute ( in this case buttons)
const actions = Array.from(
    document.querySelectorAll('[data-action]'));

// a variable to store the counter
let counter = 0;

// assigns the counter variable to the counter-value element within the html 
document.querySelector(".counter-value").innerText = counter;

// arrow function that loops through the actions array and creates results for each button
actions.forEach(action => {
    action.addEventListener('click', () => {
        //loops through the names of the data-action names in the html
        const type = action.dataset.action;
        
        // a switch where the cases are matched to the types from the button names
        switch (type) {
            case 'increase':
                counter++;
                break;
            case 'decrease':
                counter --;
                break;
            case 'reset':
                counter = 0;
                break;}

        // Reassigns the counter to the html after the switch has manipulated the variable within JS
        document.querySelector(".counter-value").innerText = counter;
    });
});