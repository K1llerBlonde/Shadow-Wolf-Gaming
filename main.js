document.addEventListener('DOMContentLoaded', () => {
  const toggle = document.querySelector('.nav-toggle');
  const navLinks = document.getElementById('navLinks');

  if (toggle && navLinks) {
    toggle.addEventListener('click', () => {
      navLinks.classList.toggle('open');
    });

    navLinks.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        navLinks.classList.remove('open');
      });
    });
  }

  const filterBtns = document.querySelectorAll('.filter-btn[data-panel]');
  const panels = document.querySelectorAll('.roster-panel');

  if (filterBtns.length && panels.length) {
    filterBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        filterBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');

        const panelId = 'panel-' + btn.dataset.panel;
        panels.forEach(panel => {
          panel.hidden = panel.id !== panelId;
        });
      });
    });
  }
});
