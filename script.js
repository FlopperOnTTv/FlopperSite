const year = document.getElementById("year");
year.textContent = new Date().getFullYear();

const io = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        io.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.14 }
);

document.querySelectorAll(".reveal").forEach((el) => io.observe(el));

const progress = document.querySelector(".scroll-progress span");
const navLinks = [...document.querySelectorAll(".nav a")];
const sections = [...document.querySelectorAll("section[id]")];

const setActive = () => {
  const y = window.scrollY + window.innerHeight * 0.35;
  let current = sections[0]?.id;

  for (const section of sections) {
    if (y >= section.offsetTop) current = section.id;
  }

  navLinks.forEach((link) => {
    link.classList.toggle("active", link.getAttribute("href") === `#${current}`);
  });
};

const onScroll = () => {
  const max = document.documentElement.scrollHeight - window.innerHeight;
  const pct = max > 0 ? (window.scrollY / max) * 100 : 0;
  progress.style.width = `${pct}%`;
  setActive();
};

window.addEventListener("scroll", onScroll, { passive: true });
window.addEventListener("resize", onScroll);
onScroll();
