(() => {
  const yearSelect = document.getElementById('practice-year');
  const results = document.getElementById('practice-results');

  if (!(yearSelect instanceof HTMLSelectElement) || !results) return;

  const practiceLinks = {
    '2023': [
      {
        label: '2023-HKACE-Mock-ICT-P1A',
        filename: 'hkace-2023-p1a.html',
      },
    ],
  };

  yearSelect.addEventListener('change', () => {
    results.replaceChildren();

    if (!yearSelect.value) {
      const message = document.createElement('p');
      message.textContent = '請選擇年份以查看可用的練習。';
      results.append(message);
      return;
    }

    const links = practiceLinks[yearSelect.value];
    if (!links) {
      const message = document.createElement('p');
      message.textContent = `${yearSelect.value} 年暫未提供線上練習。`;
      results.append(message);
      return;
    }

    for (const link of links) {
      const anchor = document.createElement('a');
      anchor.className = 'passpaper-document';
      anchor.href = `${yearSelect.dataset.practiceBase || 'online%20test/'}${link.filename}`;
      anchor.textContent = link.label;
      results.append(anchor);
    }
  });
})();
