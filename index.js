const menuClosed = document.querySelector(".menu-icon--closed");
const menuOpened = document.querySelector(".menu-icon--opened");
const menu = document.querySelector(".nav");
const subMenus = [...document.querySelectorAll(".sub-menu")];

const menuLinks = [...document.querySelectorAll(".menu__link")];

menuClosed.addEventListener("click", () => {
  const active = menuClosed.classList.contains("active");

  if (active) {
    menuClosed.classList.remove("active");
    menuOpened.classList.add("active");
    menu.classList.add("active");
  }
});
menuOpened.addEventListener("click", () => {
  const active = menuOpened.classList.contains("active");

  if (active) {
    menuOpened.classList.remove("active");
    menuClosed.classList.add("active");
    menu.classList.remove("active");
    resetSubMenus();
  }
});

menuLinks.forEach((menuLink) => {
  menuLink.addEventListener("click", () => {
    const subMenu = menuLink.nextElementSibling;
    if (!!subMenu) {
      console.log(subMenu);
      subMenu.classList.add("active");
    }
  });
});

function resetSubMenus() {
  subMenus.forEach((subMenu) => {
    subMenu.classList.remove("active");
  });
}
