const menuButton = document.querySelector('.menu-toggle');
const nav = document.querySelector('.main-nav');

menuButton.addEventListener('click', () => {
  const isOpen = nav.classList.toggle('open');
  menuButton.setAttribute('aria-expanded', String(isOpen));
  menuButton.textContent = isOpen ? '×' : '☰';
});

document.querySelectorAll('.main-nav a').forEach(link => {
  link.addEventListener('click', () => {
    nav.classList.remove('open');
    menuButton.setAttribute('aria-expanded', 'false');
    menuButton.textContent = '☰';
  });
});

document.getElementById('year').textContent = new Date().getFullYear();

document.getElementById('contact-form').addEventListener('submit', event => {
  event.preventDefault();
  const form = event.currentTarget;
  const data = new FormData(form);
  const subject = encodeURIComponent('Consulta para Torogato Editorial');
  const body = encodeURIComponent(
    `Nombre: ${data.get('name')}\nCorreo: ${data.get('email')}\n\nMensaje:\n${data.get('message')}`
  );
  const status = form.querySelector('.form-status');
  status.textContent = 'La maqueta está lista. Para recibir mensajes reales, conecta este formulario a un correo o servicio de formularios.';
  // Cuando tengas el correo oficial, puedes activar esta línea:
  // window.location.href = `mailto:TU_CORREO@EJEMPLO.COM?subject=${subject}&body=${body}`;
});
