const password = document.getElementById("password");
const background = document.querySelector(".background");

password.addEventListener("input", () => {
  if (password.value.length > 0) {
    background.style.filter = `blur(${8 - password.value.length}px)`;
  }
});
