/* 
form. addEventListener( 'submit', function(event) {
    event.preventDefault( );
    console.log( 'Envoi du form detecté !')
})
 */

let form = document.querySelector('form')

let email = document.querySelector("#email");
let pseudo = document.querySelector("#pseudo");
let password = document.querySelector("#password");
let password2 = document.querySelector("#password2");

let errorContainer = document.querySelector(".message-error");
let errorList = document.querySelector(".message-error ul");

errorList.innerHTML = "";
errorContainer.classList.remove("visible");

let passCheck = new RegExp(
  "^( ?= ,*[a-z])( ?=.* [A-Z])( ?=.* \\d)( ?=.* [-+ _! @#$%*6 *. , ?]).+$"
);

form.addEventListener("submit", function (event) {
  event.preventDefault();

  if (email.value == "") {
    errorContainer.classList.add("visible");
    email.classList.remove("message-success");

    errorContainer.classList.add("visible");
    email.classList.remove("success");

    let err = document.createElement("li");
    err.innerText = "Le champ email ne peut pas être vide";

    errorList.appendChild(err);
  } else {
    email.classList.add("success");
  }

  if (pseudo.value.length < 6) {
    errorContainer.classList.add("visible");
    pseudo.classList.remove("success");

    let err = document.createElement("li");
    err.innerText = "Le champ pseudo doit contenir au moins 6 caractères";

    errorList.appendChild(err);
  } else {
    pseudo.classList.add("success");
  }

  if (password.value.length < 10 || passCheck.test(password.value) == false) {
    errorContainer.classList.add("visible");
    password.classList.remove("success");

    let err = document.createElement("li");
    err.innerText =
      "Le mot de passe doit faire 10 caractères minimum, contenir minuscule, majuscule, chiffre, caractère spécial";

    errorList.appendChild(err);
  } else {
    password.classList.add("success");
  }

  if (password.value != password2.value) {
    errorContainer.classList.add("visible");
    password2.classList.remove("success");

    let err = document.createElement("li");
    err.innerText = "Les mots de passes sont differents";

    errorList.appendChild(err);
  } else {
    password2.classList.add("success");
  }

  let successContainer = document.querySelector(".message-success");
  successContainer.classList.remove("visible");

  if (
    pseudo.classListcontains("success") &&
    email.classList.contains("success") &&
    password.classList.contains("success") &&
    password2.classList.contains("success")
  ) {
    successContainer.classList.add("visible");
  }
});
