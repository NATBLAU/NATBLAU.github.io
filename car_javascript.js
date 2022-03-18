function myFunction (){
  document.getElementById("container-for-being-sorry").style.display= "none" ;
  let numberOfPeople = document.getElementById("persons")
 
  let Jeep = document.getElementById("container-for-jeep")
  let Trabant =  document.getElementById("container-for-trabant")
  let miniCooper =  document.getElementById("container-for-mini-cooper")

 

 
  
  if(numberOfPeople.value <= 2 ) {

    Jeep.style.display = "grid"; 
    Trabant.style.display = "grid"; 
    miniCooper.style.display = "grid";  

  } else if (numberOfPeople.value >= 3 && numberOfPeople.value <=5 ){

    Jeep.style.display = "grid"; 
    Trabant.style.display = "grid"; 


  } else if (numberOfPeople.value == 6 ) {
    Jeep.style.display = "grid"; 

  } 

  else if (numberOfPeople.value == 7 ) {
      document.getElementById("container-for-being-sorry").style.display = "grid"; 

    } 






 
}
  




