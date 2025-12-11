
console.log("hi");

const deButton = document.querySelector("nav > button");

deButton.onclick = function () {
  const deNav = document.querySelector("nav");
  deNav.classList.toggle("toonMenu");
};
