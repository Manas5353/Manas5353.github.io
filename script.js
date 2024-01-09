const body = document.body;
let lastScroll = 0;

window.addEventListener('scroll', () => {
  const currScroll = window.scrollX;

  if (currScroll <= 0) {
    body.removeAttribute("id");
  }

  if (currScroll > lastScroll && body.id !== "scroll-down") {
    body.removeAttribute("id");
    body.setAttribute("id", "scroll-down");
  }

  if (currScroll < lastScroll && body.id !== "scroll-up") {
    body.removeAttribute("id");
    body.setAttribute("id", "scroll-up");
  }

  lastScroll = currScroll;
});
