(() => {
  const mount = document.getElementById('site-navigation');
  const script = document.currentScript;

  if (!mount || !script) return;

  const navigationUrl = new URL('navigation.html', script.src);

  fetch(navigationUrl)
    .then((response) => {
      if (!response.ok) throw new Error(`Navigation request failed: ${response.status}`);
      return response.text();
    })
    .then((markup) => {
      mount.innerHTML = markup;

      const currentPage = window.location.pathname.split('/').pop() || 'index.html';
      mount.querySelectorAll('.nav-submenu a').forEach((link) => {
        if (link.getAttribute('href') === currentPage) {
          link.setAttribute('aria-current', 'page');
        }
      });
    })
    .catch((error) => console.error('Could not load the shared navigation.', error));

  document.addEventListener('click', (event) => {
    mount.querySelectorAll('.nav-dropdown[open]').forEach((menu) => {
      if (!menu.contains(event.target)) menu.removeAttribute('open');
    });
  });
})();