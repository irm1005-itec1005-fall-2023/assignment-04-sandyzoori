/* Assignment 04: Finishing a Todo List App
 *
 * 
 *
 */


//
// Variables
//

// Constants
const appID = "app";
const headingText = "To do. To done. ✅";

// DOM Elements
let appContainer = document.getElementById(appID);

//
// Functions
//

// Add a heading to the app container
function inititialise() {
  // If anything is wrong with the app container then end
  if (!appContainer) {
    console.error("Error: Could not find app contianer");
    return;
  }

  // Create an h1 and add it to our app
  const h1 = document.createElement("h1");
  h1.innerText = headingText;
  appContainer.appendChild(h1);

  // Init complete
  console.log("App successfully initialised");
}

//
// Inits & Event Listeners
//
inititialise();
// Constants
const appContainer = document.getElementById("app");
const todoListContainer = document.getElementById("todoList");
const TomorrowListContainer = document.getElementById("TomorrowList");
const FutureListContainer = document.getElementById("todoListFuture");


// Arrays for Todo Items
let todoList = [];
let Tomorrowtodo = [];
let Futuretodo = [];
let Todaytodo = [];


// Adding a New Todo for today
function addTodayItem(event) {
  event.preventDefault();


  const newItemInput = document.getElementById("newItem");
  const newItemValue = newItemInput.value.trim();


  if (newItemValue !== "") {
    const newItem = {
      text: newItemValue,
      completed: false,
    };


    Todaytodo.push(newItem);
    newItemInput.value = "";


    renderTodayTodo();
  }
}


// Adding a New Todo for tomorrow
function addTomorrowItem(event) {
  event.preventDefault();


  const newItemTomorrowInput = document.getElementById("newItemTomorrow");
  const newItemTomorrowValue = newItemTomorrowInput.value.trim();


  if (newItemTomorrowValue !== "") {
    const newItemTomorrow = {
      text: newItemTomorrowValue,
      completed: false,
    };


    Tomorrowtodo.push(newItemTomorrow);
    newItemTomorrowInput.value = "";


    renderTomorrowTodo();
  }
}


// Adding a New Todo for future
function addFutureItem(event) {
  event.preventDefault();


  const newItemFutureInput = document.getElementById("newItemFuture");
  const newItemFutureValue = newItemFutureInput.value.trim();


  if (newItemFutureValue !== "") {
    const newItemFuture = {
      text: newItemFutureValue,
      completed: false,
    };


    Futuretodo.push(newItemFuture);
    newItemFutureInput.value = "";


    renderFutureTodo();
  }
}


// Function to delete a todo for today
function deleteItem(index) {
  Todaytodo.splice(index, 1);
  renderTodayTodo();
}


// Function to delete a todo for tomorrow
function deleteTomorrowItem(index) {
  Tomorrowtodo.splice(index, 1);
  renderTomorrowTodo();
}


// Function to delete a todo for future
function deleteTodayItem(index) {
  Futuretodo.splice(index, 1);
  renderFutureTodo();
}


// Function to mark a today todo as complete or incomplete
function toggleComplete(index) {
  Todaytodo[index].completed = !Todaytodo[index].completed;
  renderTodayTodo();
}


// Function to mark a tomorrow todo as complete or incomplete
function toggleTomorrowComplete(index) {
  Tomorrowtodo[index].completed = !Tomorrowtodo[index].completed;
  renderTomorrowTodo();
}


// Function to mark a tomorrow todo as complete or incomplete
function toggleFutureComplete(index) {
  Futuretodo[index].completed = !Futuretodo[index].completed;
  renderFutureTodo();
}


// Function to render the today todo list
function renderTodayTodo() {
  todoListContainer.innerHTML = "";


  Todaytodo.forEach((item, index) => {
    const listItem = document.createElement("li");
    listItem.innerHTML = `
      <span class="${item.completed ? 'completed' : ''}">${item.text}</span>
      <button onclick="toggleComplete(${index})" class="delete-button">✅</button>
      <button onclick="deleteItem(${index})" class="delete-button">❌</button>
    `;


    if (item.completed) {
      listItem.classList.add("completed");
    }


    todoListContainer.appendChild(listItem);


    // Add a fade-out animation when deleting an item
    setTimeout(() => {
      listItem.style.opacity = "1";
    }, 10);
  });
  console.log(Todaytodo);
}


// Function to render the tomorrow todo list
function renderTomorrowTodo() {
  TomorrowListContainer.innerHTML = "";


  Tomorrowtodo.forEach((item, index) => {
    const listItem = document.createElement("li");
    listItem.innerHTML = `
      <span class="${item.completed ? 'completed' : ''}">${item.text}</span>
      <button onclick="toggleTomorrowComplete(${index})" class="delete-button">✅</button>
      <button onclick="deleteTomorrowItem(${index})" class="delete-button">❌</button>
    `;


    if (item.completed) {
      listItem.classList.add("completed");
    }


    TomorrowListContainer.appendChild(listItem);


   


  });
  console.log(Todaytodo);
}


// Function to render the future todo list
function renderFutureTodo() {
  FutureListContainer.innerHTML = "";


  Futuretodo.forEach((item, index) => {
    const listItem = document.createElement("li");
    listItem.innerHTML = `
      <span class="${item.completed ? 'completed' : ''}">${item.text}</span>
      <button onclick="toggleFutureComplete(${index})" class="delete-button">✅</button>
      <button onclick="deleteTodayItem(${index})" class="delete-button">❌</button>
    `;


    if (item.completed) {
      listItem.classList.add("completed");
    }


    FutureListContainer.appendChild(listItem);
   
  });
  console.log(Futuretodo);
}












// Adding a New Todo for future
function addFutureItem(event) {
  event.preventDefault();


  const newItemFutureInput = document.getElementById("newItemFuture");
  const newItemFutureValue = newItemFutureInput.value.trim();


  if (newItemFutureValue !== "") {
    const newItemFuture = {
      text: newItemFutureValue,
      completed: false,
    };


    Futuretodo.push(newItemFuture);
    newItemFutureInput.value = "";


    renderFutureTodo();
  }  
console.log(Futuretodo);
}


// Enter key handling
document.addEventListener("DOMContentLoaded", function () {
  let todayForm = document.getElementById("todayform");
  todayForm.addEventListener("submit", function (event) {
      event.preventDefault();
      addTodayItem(event);
  });


  let tomorrowForm = document.getElementById("tomorrowform");
  tomorrowForm.addEventListener("submit", function (event) {
      event.preventDefault();
      addTomorrowItem(event);
  });


  let futureForm = document.getElementById("futureform");
  futureForm.addEventListener("submit", function (event) {
      event.preventDefault();
      addFutureItem(event);
  });
});






function handleKeyPressTomorrow(event) {
  if (event.key === "Enter") {
    event.preventDefault();
    document.getElementById("addbtntomorrow").click(); // For Tomorrow
  }
}


function handleKeyPressFuture(event) {
  if (event.key === "Enter") {
    event.preventDefault();
    document.getElementById("addbtnFuture").click(); // For Future
  }
}


// Form submit handling
let todayForm = document.getElementById("todayform");
todayForm.addEventListener("submit", addTodayItem);


let tomorrowForm = document.getElementById("tomorrowform");
tomorrowForm.addEventListener("submit", addTomorrowItem);


let futureForm = document.getElementById("futureform");
futureForm.addEventListener("submit", addFutureItem);
