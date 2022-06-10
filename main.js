const prompt = require("prompt-sync")({sigint: true});


/*
1. Figure out the UI
    - console.log()
        - different user options
        - welcome message
    - prompts
        - check if they input 1 or 2
            1. adding an item
            2. completing an item

2. Store to do list items (choice === 1)
    - prompt user for to do list item
    - array to store prompts
    - store those items as incomplete
    - start todo list at 1 (instead of index 0)

3. Complete incomplete items (choice === 2)
    - prompt the user for the number that is the same as the number in the to do list that we are trying to mark as complete
    - conditional to check completion status
*/

console.log("Welcome to the To-Do List Manager Application!\n")

console.log("Select an action: ")
console.log("[1] Create to-do item.")
console.log("[2] Complete to-do item.")
console.log("[3] Exit the application.")
let choice = Number(prompt("> "));

while(choice !== 3){
    if (choice === 1){
        console.log("\nCreate a new item: \n");
        select_choice();
    } else if (choice === 2){
        console.log("\nSelect item to complete: \n");
        select_choice();
    } else {
        console.log("\nPlease choose a number between 1 and 3.\n");
        select_choice();
    }
}

function select_choice(){
    console.log("Select an action: ")
    console.log("[1] Create to-do item.")
    console.log("[2] Complete to-do item.")
    console.log("[3] Exit the application.")
    choice = Number(prompt("> "));
}