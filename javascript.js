// below I can search car by typing its name in into the search bar. If its in the database it will appear on the screen. If not it will show info about missing this car in my database.

const form = document.getElementById("form");
form.addEventListener("submit", function(e) {
e.preventDefault(); // Don't reload page, thank you!

// output html element with id=result
const output = document.getElementById("output-search-car-by-name");
const OutputAvaiable = document.getElementById("output-avaiable");
output.innerHTML = ""; // Removing old search results
let found = false


// getting user input from form
const searchtext = document.getElementById("searchtext").value

// start of iteration
for (const Car of Carslist) {

    // Selektion: looking for a match between user input and firstname on memberlist
    if (Car.firstname === searchtext) { 
        output.insertAdjacentHTML("beforeend", "Name: " + Car.firstname  +"<br>"+ "Persons: " +Car.Persons + "<br> " +"Suitcases: "+ Car.Suitcases + "<br>");



    // if car is avaiable,  text "Avaiable" will be in green
        if (Car.Avaiable === "Yes" ){
        
            OutputAvaiable.innerText = "Avaiable " +"💚"
            found = true
            OutputAvaiable.style.color = "green";
     // if car is not avaiable,  text "Avaiable" will be in red
        } else if (Car.Avaiable === "No") {
            OutputAvaiable.innerText = "Not avaiable " +"💔"
            OutputAvaiable.style.color = "red";
            found = true 
        }




       



    } // end of selektion 
  

} // end of iteration
if (found != true){ // found stays fault, car wasn't found
    output.innerHTML = ""; //  Removing old search results
    OutputAvaiable.innerText = "Sorry, we don't have this car " +"💔"
    OutputAvaiable.style.color = "red";
}
}) // end of addeventlistener




// below small animation of cars

const image = document.getElementById("red-car");

// Eventhandler for image onmouseover
function action() {
    image.classList.add("rotate-scale-up");
}






//  below I tried to create function that when I would set number of people and suitcases, click submit, certain  text car would appear.
//I only manage to connect number of People with Jeep result. 




function getSelectedValue(){ // how I link drop down list with javascript

    const SelectedValue = document.getElementById("Persons").value;
    
    console.log(SelectedValue )


if (SelectedValue <= "5"){ 
const SearchOutPut = document.getElementById("output-of-search-by-properties");
SearchOutPut.innerText= "Name: Jeep "+"<br>"+"Persons: 1-5"+"<br>"+"Suitcases:0-6"}


}


