// Add event listener to navigation links
document.querySelectorAll("nav a").forEach((link) => {
  link.addEventListener("click", (event) => {
    event.preventDefault();
    const target = document.querySelector(link.getAttribute("href"));
    target.scrollIntoView({ behavior: "mooth" });
  });
});

// Add event listener to navbar toggler
document.querySelector(".navbar-toggler").addEventListener("click", () => {
  document.querySelector(".navbar-nav").classList.toggle("active");
  document.querySelector(".navbar-toggler").classList.toggle("active");
});
