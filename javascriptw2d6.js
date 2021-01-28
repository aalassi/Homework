
        /*
        
        You are about to create your own Task List.
        The user might be able to:
        - Create new tasks by writing them in a text box and pressing a button to add them
        - Mark a task as completed by clicking on it. The element should look different when completed
        - Restore a completed task by clicking on it. 
        - Have a checkbox to show only "non-completed" tasks
        - Add a button to clear the list


        Hints:
        - Create the list elements using the createElement function
        - Add the event to them and pass the event to the function that should handle it
        - Rememeber that from the event you can access to the element that generated it using the .target property

        */
    




        
// funtion add tasks starts here 

function addTask() {

    let newTask = document.createElement("li") //create element
newTask.classList.add("pushed") // add class name to the newly created listed item
let newText = document.getElementById("writehere").value // create element for new task text
newTask.innerText = newText // moving new text to the new task


let ul = document.querySelector("#listhere") // searching for parent
ul.appendChild(newTask) // adding newtask to the list 



}

// function add task ends here 






// adding color to selected tasks 

let tasklist = document.querySelectorAll("#listhere")  // select all listed items and managing new items
 

for (let i=0; i < tasklist.length; i++){
    // loop to each listed task and add event listener for click event

    tasklist[i].addEventListener("click", (eventProps) => {
        console.log(eventProps)
        let markedTask = eventProps.target // selecting the clicked ones 
       
       /* firth method to add colors but only one click 
       markedTask.classList.add("marked") 
       // now playing to change the clicked ones */

        markedTask.classList.toggle("marked") // when click again and gain add and then remove color 
    })
}
// adding colors ends here 




// show non completed tasks function starts 




function showNon() {
    let checkLio = document.querySelectorAll(".marked")// select all listed items with class name of marked
 
    for (let i=0; i < checkLio.length; i++){
        // loop to each listed marked task and add another toggle class name and then change that in css 
        checkLio[i].classList.toggle("noncomplete") 

     
        
    
 
    }
}


    // show uncompleted tasks ends here 




    // function clear list starts here 

    function resetAll(){
        let resetMe = document.querySelectorAll(".pushed") // searching for all listed things by user 

        for (let i =0; i < resetMe.length ; i++){
            resetMe[i].classList.add("clear") //looping it all since its array then adding class
        }

    }

    // function clear list ends here 