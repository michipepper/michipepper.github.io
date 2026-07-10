// Toggle the "Work" accordion in the right-side nav.
(function () {
  document.addEventListener('click', function (e) {
    var btn = e.target.closest('.nav-work');
    if (!btn) return;
    e.preventDefault();
    var list = document.getElementById('work-list');
    if (!list) return;
    var open = list.classList.toggle('open');
    btn.setAttribute('aria-expanded', open ? 'true' : 'false');
  });
})();

// Back-to-top chevron — appears once the user scrolls down and returns them
// to the start of the page (to the case title on project/detail pages).
(function () {
  var btn = document.createElement('button');
  btn.className = 'to-top';
  btn.type = 'button';
  btn.setAttribute('aria-label', 'Back to top');
  btn.innerHTML = '<svg viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M6 15l6-6 6 6" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>';
  document.body.appendChild(btn);

  var threshold = 400;
  function onScroll() {
    btn.classList.toggle('visible', window.pageYOffset > threshold);
  }
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  btn.addEventListener('click', function () {
    var title = document.querySelector('.case-title');
    if (title) {
      title.scrollIntoView({ behavior: 'smooth', block: 'start' });
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  });
})();
