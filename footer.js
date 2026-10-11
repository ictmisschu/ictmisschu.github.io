(() => {
  const mount = document.getElementById('site-footer');
  const script = document.currentScript;

  if (!mount || !script) return;

  const footerUrl = new URL('footer.html', script.src);

  fetch(footerUrl)
    .then((response) => {
      if (!response.ok) throw new Error(`Footer request failed: ${response.status}`);
      return response.text();
    })
    .then((markup) => {
      mount.innerHTML = markup;
    })
    .catch((error) => console.error('Could not load the shared footer.', error));
})();
