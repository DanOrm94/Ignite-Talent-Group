(() => {
  const nav = document.querySelector('.primary-nav');
  if (!nav) return;

  const order = ['Sales', 'Legal', 'Tech', 'Engineering', 'Construction'];
  const links = [...nav.querySelectorAll('a')];

  order.forEach(label => {
    const link = links.find(item => item.textContent.trim() === label);
    if (link) nav.appendChild(link);
  });

  nav.classList.add('live-style-menu');

  const cta = document.querySelector('.header-cta');
  if (cta) cta.remove();
})();
