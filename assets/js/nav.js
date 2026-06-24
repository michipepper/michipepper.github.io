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
