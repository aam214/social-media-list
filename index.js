const topBar = document.querySelector(".top-bar");
const heading = document.querySelector(".top-bar h1");
const dropDown = document.querySelector(".drop-down");
const lists = document.querySelectorAll("li");


topBar.addEventListener("click", () => {
dropDown.classList.toggle("hidden");
topBar.classList.toggle("rotate");
});

lists.forEach(list => {
  list.addEventListener("click", () =>{
heading.innerHTML = list.innerHTML;
dropDown.classList.add("hidden");
  });
});