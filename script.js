const buttonSubmit = document.querySelector("button");
const warning = document.querySelector(".warning");

const changeColorOrange = () => {
  buttonSubmit.style.backgroundColor = "#c84b31";
};

const changeColorBlue = () => {
  buttonSubmit.style.background = "#2d4263";
};

buttonSubmit.addEventListener("mouseover", changeColorOrange);
buttonSubmit.addEventListener("mouseout", changeColorBlue);
buttonSubmit.addEventListener("mouseup", changeColorOrange);
buttonSubmit.addEventListener("mousedown", changeColorBlue);

// const checkPassword = () => {
//   const password = document.querySelector("#password");
//   const confirmPassword = document.querySelector("#confirm_password");
//   if (password.value != confirmPassword.value) {
//     const warningContent = document.createElement("p");
//     warningContent.classList.add("content");
//     warningContent.textContent = "Password doesn't match";
//     warning.appendChild(warningContent);
//   }
// };

// buttonSubmit.addEventListener("mouseup", checkPassword);
