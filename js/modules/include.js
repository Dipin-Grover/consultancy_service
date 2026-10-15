async function loadComponent(selector, path) {
  const element = document.querySelector(selector);
  if (!element) return;

  try {
    const response = await fetch(path);
    if (!response.ok) throw new Error(`Failed to load ${path}`);
    const html = await response.text();
    element.innerHTML = html;
  } catch (error) {
    console.error(error);
  }
}

async function initComponents() {
  await loadComponent("#navbar-placeholder", "components/navbar.html");
  await loadComponent("#footer-placeholder", "components/footer.html");

  setActiveNavLink();
  initNavbarBehavior();
}

function setActiveNavLink() {
  const currentPage = document.body.dataset.page;
  if (!currentPage) return;

  const activeLink = document.querySelector(`[data-page="${currentPage}"]`);
  if (activeLink) {
    activeLink.classList.add("active");
  }
}

function initNavbarBehavior() {
  const navbar = document.querySelector(".mmd-navbar");
  if (!navbar) return;

  window.addEventListener("scroll", () => {
    navbar.classList.toggle("shadow", window.scrollY > 20);
  });

  const dropdowns = document.querySelectorAll(".nav-item.dropdown");
  dropdowns.forEach((dropdown) => {
    dropdown.addEventListener("mouseenter", () => {
      if (window.innerWidth >= 992) {
        const menu = dropdown.querySelector(".dropdown-menu");
        if (menu) menu.classList.add("show");
      }
    });

    dropdown.addEventListener("mouseleave", () => {
      if (window.innerWidth >= 992) {
        const menu = dropdown.querySelector(".dropdown-menu");
        if (menu) menu.classList.remove("show");
      }
    });
  });
}

document.addEventListener("DOMContentLoaded", initComponents);