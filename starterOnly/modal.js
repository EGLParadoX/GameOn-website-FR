function editNav() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

// DOM Elements
const modalbg = document.querySelector(".bground");
const modalBtn = document.querySelectorAll(".modal-btn");
const closeModalBtn = document.querySelectorAll(".close");
const closeSubBtn = document.querySelectorAll(".close-submit");
const formData = document.querySelectorAll(".formData");

// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// close modal event
closeModalBtn.forEach((span) => span.addEventListener("click", closeModal));

// close modal after submit event
closeSubBtn.forEach((close) => close.addEventListener("click", closeModal))


// launch modal form
function launchModal() {
  modalbg.style.display = "block";
}

// close modal form
function closeModal() {
  modalbg.style.display = "none";
}


// initialisation des différentes variables


var validation = document.getElementById("validation_button");






function validate(){

  if (valideSurname() && valideName() && valideEmail() && valideNumber() && valideDate() && isConditionChecked()) {

    // && isLocationChecked() tu vas retravailler cette validation et tu la remettras dans le if 
    console.log("success");
    let formsection = document.getElementById("form-section");
    let successmessage = document.getElementById("success-message");
    
    formsection.style.display = "none";
    successmessage.style.display = "block";
    return false;
  } else {
    console.log("success false");
    return false;
  }

}

function valideSurname(){

  var first = document.getElementById("first");
  var m_first = document.getElementById("missing_first");
  var regexSurname = /^([A-Za-z]{3,9})?([-]{0,1})?([A-Za-z]{3,10})$/

  if (!regexSurname.test(first.value))
  {
    m_first.textContent = "Veuillez entrer 2 caractères ou plus pour le champ du prénom.*";
    m_first.style.color = "red";
    m_first.style.fontSize = "13.5px";
    return false;
  }
  else
  {
    m_first.textContent = "";
    return true;
    
  }
  

}

function valideName(){

  var last = document.getElementById("last");
  var m_last = document.getElementById("missing_last");
  var regexName = /^([A-Za-z]{3,20})?([-]{0,1})?([A-Za-z]{3,20})$/;
  

  if(!regexName.test(last.value))
  {
    m_last.textContent = "Veuillez entrer 2 caractères ou plus pour le champ du nom.*";
    m_last.style.color = "red";
    m_last.style.fontSize = "14px";
    return false;
  }
  else
  {
    m_last.textContent = "";
    return true;
  }


}

function valideEmail(){

  var email = document.getElementById("email");
  var e_email = document.getElementById("error_email");
  var regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

  if(regex.test(email.value))
  {
    e_email.textContent = "";
    return true;
    
  }
  else 
  {
    e_email.textContent = "Veuillez saisir une adresse mail correct.*"; 
    e_email.style.color = "red";
    e_email.style.fontSize = "14px";
    return false;
  }

  


}

function valideDate(){

  // vérification de la date d'anniversaire

  var birthdate = document.getElementById("birthdate")
  var m_birthdate = document.getElementById("missing_birthdate")

  const d = new Date(birthdate.value);
  const d1 = new Date();

  console.log(d1.getFullYear());

  if((d1.getFullYear() - d.getFullYear()) < 3)
  {
    m_birthdate.textContent = "Veuillez saisir une date d'anniversaire correct.*";
    m_birthdate.style.color = "red";
    m_birthdate.style.fontSize = "14px";
    return false;
  }
  else
  {
    m_birthdate.textContent = " ";
    return true;
  }

}

function valideNumber(){

  var number = document.getElementById("quantity");
  var regexNumber= /^[0-9]/;
  var m_number = document.getElementById("missing_number");

  if(!regexNumber.test(number.value))
  {
    m_number.textContent = "Veuillez définir un nombre entre 0 et 99*";
    m_number.style.color = "red";
    m_number.style.fontSize = "14px";
    return false;
  }
  else
  {
    m_number.textContent = " ";
    return true;
  }
   
  
}

function isLocationChecked(){


  var checkboxlocation = document.getElementsByName("location");
  var m_checkboxlocation = document.getElementById("missing_checkbox");

  for(i=0; i < checkboxlocation.length; i++)
  {
    if(checkboxlocation.item(i).checked)
    {
      m_checkboxlocation.textContent = ""; 
      break;

    }
    else
    {
      m_checkboxlocation.textContent = "Vous devez chosir une option.*";
      m_checkboxlocation.style.color = "red";
      m_checkboxlocation.style.fontSize = "14px";
      return false;
    }
      
  }

  

}

function isConditionChecked(){

  var checkboxconditions = document.getElementById("checkbox1");
  var m_conditions = document.getElementById("missing_conditions");


  if(!checkboxconditions.checked)
  {
    m_conditions.textContent = "Vous devez vérifier que vous acceptez les termes et conditions.*";
    m_conditions.style.color = "red";
    m_conditions.style.fontSize = "13px";
    return false;
  }
  else
  {
    m_conditions.textContent = " ";
    return true;
  } 


}








  




