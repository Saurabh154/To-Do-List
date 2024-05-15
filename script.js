const inputBox = document.getElementById("input-box")
const listContainer = document.getElementById("list-container")


function addTask(){
    if(inputBox.value === ''){
        alert("You must write something!")
    } else{
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        listContainer.appendChild(li);
        
        //Adding icon of cross
        let span = document.createElement("span");
        span.innerHTML = "\u00d7" //code for adding x 
        li.appendChild(span);
    }
    inputBox.value = '';
    saveData(); // called and save the updated contain into the browser
}

listContainer.addEventListener('click', function(e){
    if(e.target.tagName === "LI"){
        e.target.classList.toggle('checked');
        saveData();
    }
    else if(e.target.tagName === 'SPAN'){
        e.target.parentElement.remove();
        saveData();
    }
}, false)

//localstorage - for adding data into browser
function saveData(){
    localStorage.setItem("data", listContainer.innerHTML); //In this localstorage.setItem we pass two parameter 1.data 2.Entire content of listContainer
}

//Display the data whenever we will open the website again
function showTask(){
    listContainer.innerHTML = localStorage.getItem("data");
} 
showTask();

