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
    - store those items as incomplete
        - incomplete = false
        - complete = true
        - let status_arr = [""]

3. Complete incomplete items (choice === 2)
    - prompt the user for the number that is the same as the number in the to do list that we are trying to mark as complete
    - conditional to check completion status
*/

console.log("\nWelcome to the To-Do List Manager Application!\n")
console.log("Select an action: ")
console.log("[1] Create to-do item.")
console.log("[2] Complete to-do item.")
console.log("[3] Exit the application.")
let choice = Number(prompt("> "));

let items = [""]; // Our list of to-do items. The quotes are to take the "0" index
let status_arr = [""];

while(choice !== 3){
    if (choice === 1){
        // console.log("\nCreate a new item: \n");
        let answer = prompt("Please enter an item: ");
        items.push(answer);
        status_arr.push(false);

        print_list();
        select_choice();
    } else if (choice === 2){
        console.log("\nSelect item to complete: \n");
        let index_choice = Number(prompt("Item number: "));

        while(index_choice > status_arr.length - 1){
            console.log("Choose a number that corresponds with the list.");
            index_choice = Number(prompt("Item number: "));
        }
        if (status_arr[index_choice] === false){
            status_arr[index_choice] = true;
        }

        print_list();
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
function print_list(){
    console.log("\n==============================\n")
    console.log("\nCurrent To-Do List\n")
    let status = "";
    for(let i = 1; i < items.length; i++){
        if (status_arr[i] === false){
            status = "[incomplete]";
        } else if (status_arr[i] === true){
            status = "[complete]";
        }
        console.log(`${i}. ${status} ${items[i]}`)
    }
    console.log("");
}