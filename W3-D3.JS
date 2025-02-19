const myform = document.querySelector("form");
myform.addEventListener("submit", (e) => {
  e.preventDefault();
  console.log("invio del form");
});
