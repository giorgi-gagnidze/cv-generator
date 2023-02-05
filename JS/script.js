function getFirstName() {
  let txt = document.getElementById("firstName");
  let txtValue = txt.value;

  let result = document.getElementById("fName");
  result.innerText = txtValue;
}

// Input and write same time

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
