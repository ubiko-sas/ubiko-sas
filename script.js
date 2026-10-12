const loader = document.getElementById("page-loader");
const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

// Keep the loading screen short and show it on every page visit.
window.addEventListener("load", () => {
  const delay = reduceMotion ? 120 : 1050;
  window.setTimeout(() => loader?.classList.add("loader-hidden"), delay);
  window.setTimeout(() => loader?.remove(), delay + 600);
});

const menuButton = document.querySelector(".menu-toggle");
const nav = document.querySelector(".nav-links");
const navLinks = document.querySelectorAll(".nav-link");

menuButton?.addEventListener("click", () => {
  const isOpen = nav.classList.toggle("open");
  menuButton.setAttribute("aria-expanded", String(isOpen));
  menuButton.setAttribute("aria-label", isOpen ? "Cerrar menú" : "Abrir menú");
});
navLinks.forEach(link => link.addEventListener("click", () => {
  nav?.classList.remove("open");
  menuButton?.setAttribute("aria-expanded", "false");
}));

const revealItems = document.querySelectorAll(".reveal");
if ("IntersectionObserver" in window) {
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });
  revealItems.forEach(item => observer.observe(item));
} else revealItems.forEach(item => item.classList.add("visible"));

const bubble = document.getElementById("mascot-bubble");
const helpButton = document.getElementById("kito-help");
const toast = document.getElementById("kito-toast");
const greetings = [
  "¡Hola! Soy Kito 👋",
  "¿Buscamos estacionamiento? 🚗",
  "¡Menos vueltas, más camino!",
  "Tip: probá el prototipo de Ubiko ✨",
  "¡Hecho con identidad correntina! 💙💚",
  "¡Vamos por buen camino!"
];
let greetingIndex = 0;
let toastTimeout;
function greetKito() {
  greetingIndex = (greetingIndex + 1) % greetings.length;
  if (bubble) bubble.textContent = greetings[greetingIndex];
  if (toast) {
    toast.textContent = greetings[greetingIndex];
    toast.classList.add("show");
    clearTimeout(toastTimeout);
    toastTimeout = setTimeout(() => toast.classList.remove("show"), 3200);
  }
}
helpButton?.addEventListener("click", greetKito);
bubble?.addEventListener("click", greetKito);

const backTop = document.querySelector(".back-top");
backTop?.addEventListener("click", event => {
  event.preventDefault();
  window.scrollTo({top: 0, behavior: reduceMotion ? "auto" : "smooth"});
});
