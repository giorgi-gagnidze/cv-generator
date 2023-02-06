// Input and write same time

function getFirstName() {
  let txt = document.getElementById("firstName");
  let txtValue = txt.value;

  let result = document.getElementById("fName");
  result.innerText = txtValue;
}

function getLastName() {
  let txt = document.getElementById("lastName");
  let txtValue = txt.value;

  let result = document.getElementById("lName");
  result.innerText = txtValue;
}

function getAbout() {
  let txt = document.getElementById("about");
  let txtValue = txt.value;

  let result = document.getElementById("aboutText");
  result.innerText = txtValue;
}

function getEmail() {
  let txt = document.getElementById("email");
  let txtValue = txt.value;

  let result = document.getElementById("emailText");
  result.innerText = txtValue;
}

function getPhone() {
  let txt = document.getElementById("phone");
  let txtValue = txt.value;

  let result = document.getElementById("phoneText");
  result.innerText = txtValue;
}

// Photo upload

const display = document.querySelector("#img-display");
const input = document.querySelector("#photo-upload");
let img = document.querySelector("img");

input.addEventListener("change", () => {
  let reader = new FileReader();
  reader.readAsDataURL(input.files[0]);
  reader.addEventListener("load", () => {
    display.innerHTML = `<img src=${reader.result} alt="" />`;
  });
});

// First Name and Last Name validation

let fName = document.getElementById("firstName");

function validateFirstName() {
  let name = document.getElementById("firstName").value;
  let novalid = document.getElementById("novalid-01");
  let letters = /^[ა-ჰ]+$/;

  if (name.length > 1 && name.match(letters)) {
    fName.style.borderColor = "#98E37E";
    fName.classList.add("input-background");
    novalid.style.display = "none";
    return false;
  } else {
    fName.style.borderColor = "#EF5050";
    fName.classList.remove("input-background");
    novalid.style.display = "block";
    return true;
  }
}

let lName = document.getElementById("lastName");

function validateLastName() {
  let name = document.getElementById("lastName").value;
  let novalid = document.getElementById("novalid-02");
  let letters = /^[ა-ჰ]+$/;

  if (name.length > 1 && name.match(letters)) {
    lName.style.borderColor = "#98E37E";
    lName.classList.add("input-background");
    novalid.style.display = "none";
    return false;
  } else {
    lName.style.borderColor = "#EF5050";
    lName.classList.remove("input-background");
    novalid.style.display = "block";
    return true;
  }
}

// Email validation

function validateEmail() {
  let emailAddress = document.getElementById("email").value; // Email address from input
  let at = emailAddress.indexOf("@");
  let domain = emailAddress.split("@")[1]; // Saves user input after the @ (at)
  let novalid = document.getElementById("novalid-03"); // Novalid icon

  if (at < 1 || domain != "redberry.ge") {
    // Second test checks if the user entered a domain (example.com) after @
    email.style.borderColor = "#EF5050";
    email.classList.remove("input-background");
    novalid.style.display = "block";
    return false;
  } else {
    email.style.borderColor = "#98E37E";
    email.classList.add("input-background");
    novalid.style.display = "none";
    return true;
  }
}

// Phone number validation

function validatePhone() {
  var phoneNumber = document.getElementById("phone").value;
  var phoneno = /^\+(995)\s\d{3}\s\d{2}\s\d{2}\s\d{2}$/; // Regex for number validation
  let novalid = document.getElementById("novalid-04"); // Novalid icon
  if (phoneNumber.match(phoneno)) {
    phone.style.borderColor = "#98E37E";
    phone.classList.add("input-background");
    novalid.style.display = "none";
    console.log("True");
    return true;
  } else {
    phone.style.borderColor = "#EF5050";
    phone.classList.remove("input-background");
    novalid.style.display = "block";
    console.log("False");
    return false;
  }
}

// Add space in phone number betveen charachters

phone.addEventListener("keyup", function () {
  txt = this.value;
  if (
    txt.length == 4 ||
    txt.length == 8 ||
    txt.length == 11 ||
    txt.length == 14
  )
    this.value = this.value + " ";
});
