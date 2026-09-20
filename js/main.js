// main.js
document.addEventListener("DOMContentLoaded", () => {
  const burgerBtn = document.querySelector(".burger-btn");
  const closeBtn = document.querySelector(".mobile-close-btn");
  const mobileMenu = document.querySelector(".mobile-menu");

  const openMenu = () => {
    mobileMenu.classList.add("is-open");
    document.body.style.overflow = "hidden";
  };

  const closeMenu = () => {
    mobileMenu.classList.remove("is-open");
    document.body.style.overflow = "";
  };

  burgerBtn.addEventListener("click", openMenu);
  closeBtn.addEventListener("click", closeMenu);

  // Закрытие по клику на пункт меню (переход по якорю)
  document.querySelectorAll(".mobile-nav-link").forEach((link) => {
    link.addEventListener("click", closeMenu);
  });

  // Закрытие по Escape
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && mobileMenu.classList.contains("is-open")) {
      closeMenu();
    }
  });
});
