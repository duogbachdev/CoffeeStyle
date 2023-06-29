const topMenu = document.getElementById("ct-top-menu");
const topMenuIcon = document.getElementById("ct-top-menu-icon");

document.addEventListener("click", (e) => {
  if (topMenuIcon.contains(e.target)) {
    // click o nut icon
    topMenu.classList.toggle('ct-topmenu-expanded')
    topMenu.classList.toggle('hidden')
  } else {
    // click o ngoai nut icon
    if (topMenu.classList.contains('ct-topmenu-expanded')) {
        topMenu.classList.remove('ct-topmenu-expanded')
        topMenu.classList.add('hidden')
    }
  }
});