
let buttonFromSecondPage = document.getElementById("button-from-second-page")

buttonFromSecondPage.addEventListener("click", function (event) {
    event.preventDefault();


    document.location.href = "third-page.html";


}



 placeForTransferedData.innerHTML = "<p>Number of people: " + sessionStorage.getItem('persons')
 + "<p>Number of suitcases: " + sessionStorage.getItem('suitcases');
 
 

 
 placeForTransferPickUpDate.innerHTML = "<p>Pick up date: " + sessionStorage.getItem('Pick-up');
 placeForTransferHandkInDate.innerHTML = "<p>Hand in date: " + sessionStorage.getItem('Hand-in');

 


   
 

