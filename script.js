function openModal(id) {
  const modal = document.getElementById(id);
  if (!modal) return;

  modal.setAttribute("aria-hidden", "false");
  document.body.style.overflow = "hidden";
}

function closeModal(id) {
  const modal = document.getElementById(id);
  if (!modal) return;

  modal.setAttribute("aria-hidden", "true");
  document.body.style.overflow = "";
}

/* Close modal on ESC */

document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") {
    document.querySelectorAll(".modal").forEach(modal => {
      modal.setAttribute("aria-hidden", "true");
    });
    document.body.style.overflow = "";
  }
});

/* Close modal on background click */
document.querySelectorAll(".modal").forEach(modal => {
  modal.addEventListener("click", (e) => {
    if (e.target === modal) {
      modal.setAttribute("aria-hidden", "true");
      document.body.style.overflow = "";
    }
  });
});

/* Mobile menu toggle */

const hamburger = document.querySelector(".hamburger");
const mobileMenu = document.querySelector(".mobile-menu");

hamburger.addEventListener("click", (e) => {
  e.stopPropagation();
  mobileMenu.classList.toggle("open");
  hamburger.textContent = mobileMenu.classList.contains("open") ? "✕" : "☰";
});

dokument.addEventListener("click", () => {
  mobileMenu.classList.remove("open");
  hamburger.textContent = "☰";
});

mobileMenu.addEventListener("click", (e) => {
  e.stopPropagation();
});


document.querySelectorAll('.mobile-menu button, .mobile-menu a').forEach(item => {
    item.addEventListener('click', () => {
        mobileMenu.classList.remove("open");
    });
});
