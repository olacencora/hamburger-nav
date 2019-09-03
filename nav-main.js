const line = document.querySelector(".hamburger-item");

const nav = document.querySelector(".navigation");

const button = document.querySelector(".hamburger");

const onClick = () => {
  console.log("dziala");
  line.classList.toggle("hamburger-item-active");
  nav.classList.toggle("navigation-active");
  button.classList.toggle("hamburger-active");
};

// line.addEventListener("click", onClick);

button.onclick = onClick;
