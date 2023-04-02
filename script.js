const buttonLang = document.querySelector(".header__lang");
const buttonList = document.querySelector(".header__langs");

function handleButtonClick() {
  if (buttonList.style.display === "block") {
    buttonList.style.display = "none";
    return;
  }
  buttonList.style.display = "block";
}

buttonLang.addEventListener("click", handleButtonClick);



const buttonDropdown = document.querySelectorAll(".button-dropdown");
// const buttonDropdownTop = document.querySelector(".button-dropdown__top");

// console.log(buttonDropdown);

function handleButtonDropdownClick(event) { 
    // console.dir(event.currentTarget);
    event.currentTarget.classList.toggle("button-dropdown_active");
}
buttonDropdown.forEach((el) => el.addEventListener("click", handleButtonDropdownClick));




