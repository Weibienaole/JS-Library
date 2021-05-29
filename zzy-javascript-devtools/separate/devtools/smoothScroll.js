export default function smoothScroll(el) {
  document.querySelector(el).scrollIntoView({
    behavior: 'smooth'
  });
}