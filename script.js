document.addEventListener('DOMContentLoaded', () => {
  const toggle = document.querySelector('.nav-toggle');
  const links = document.querySelector('.nav-links');
  if (toggle && links) {
    toggle.addEventListener('click', () => {
      links.classList.toggle('open');
    });
    links.querySelectorAll('a').forEach(a => {
      a.addEventListener('click', () => links.classList.remove('open'));
    });
  }

  // Contact form: no backend yet, so hand off to WhatsApp / mail gracefully.
  const form = document.querySelector('#contact-form');
  if (form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const name = form.name.value.trim();
      const message = form.message.value.trim();
      const body = encodeURIComponent(`Hi Subtle Flex, I'm ${name}.\n\n${message}`);
      window.location.href = `https://wa.me/2340000000000?text=${body}`;
    });
  }
});
