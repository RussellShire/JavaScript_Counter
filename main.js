// A variable that creates a list of all the html elements with the data- action attribute ( in this case buttons)
const actions = Array.from(
    document.querySelectorAll('[data-action]'));

/* a variable to store the counter, this will need to be applied to the html counter to appear on page
checks if local storage is assigned so 'save' works across sessions OR uses 0*/
let counter = localStorage.getItem('counter') || 0 ;

// assigns the counter variable to the counter-value element within the html so it appears on page
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
                break;
            case 'save':
                localStorage.setItem('counter', counter);
                break;
            case 'load':
                /* added an if statement to check for if 'counter' wasn't asigned, 
                 else number disappears if user selects 'load' before 'save'*/
                if (localStorage.getItem('counter') != null) {
                    counter = localStorage.getItem('counter')}
                break;
            case 'clear':
                localStorage.clear();
                counter = 0;
                break;
        }

        // Reassigns the counter to the html after the switch has manipulated the variable within JS
        document.querySelector(".counter-value").innerText = counter;
    });
});