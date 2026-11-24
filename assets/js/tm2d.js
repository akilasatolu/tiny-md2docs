// tm2d: theme toggle, sidebar drawer, and the search box on narrow screens.
(function () {
  var d = document;
  var html = d.documentElement;

  var toggle = d.querySelector('[data-tm2d-theme-toggle]');
  if (toggle) {
    var label = function () {
      var dark = html.getAttribute('data-theme') === 'dark';
      toggle.setAttribute('aria-label', dark ? toggle.dataset.labelLight : toggle.dataset.labelDark);
    };
    label();
    toggle.addEventListener('click', function () {
      var next = html.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
      html.setAttribute('data-theme', next);
      try {
        localStorage.setItem('tm2d-theme', next);
      } catch (e) {}
      label();
    });
  }

  var menu = d.querySelector('[data-tm2d-menu]');
  var side = d.getElementById('tm2d-sidebar');
  var back = d.querySelector('[data-tm2d-backdrop]');
  if (menu && side) {
    var setMenu = function (open) {
      side.classList.toggle('is-open', open);
      if (back) back.hidden = !open;
      menu.setAttribute('aria-expanded', open ? 'true' : 'false');
      menu.setAttribute('aria-label', open ? menu.dataset.labelClose : menu.dataset.labelOpen);
      if (open) {
        var cur = side.querySelector('[aria-current="page"]') || side.querySelector('a, summary');
        if (cur) cur.focus();
      } else if (side.contains(d.activeElement)) {
        menu.focus();
      }
    };
    menu.addEventListener('click', function () {
      setMenu(!side.classList.contains('is-open'));
    });
    if (back) back.addEventListener('click', function () { setMenu(false); });
    d.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && side.classList.contains('is-open')) setMenu(false);
    });
    window.matchMedia('(min-width: 768px)').addEventListener('change', function (e) {
      if (e.matches) setMenu(false);
    });
  }

  var header = d.querySelector('.tm2d-header');
  var sbtn = d.querySelector('[data-tm2d-search-open]');
  if (header && sbtn) {
    var input = d.getElementById('tm2d-search-input');
    var setSearch = function (open) {
      header.classList.toggle('is-search-open', open);
      sbtn.setAttribute('aria-expanded', open ? 'true' : 'false');
      if (open && input) input.focus();
    };
    sbtn.addEventListener('click', function () {
      setSearch(!header.classList.contains('is-search-open'));
    });
    d.addEventListener('tm2d:search-open', function () {
      if (sbtn.offsetParent !== null) setSearch(true);
    });
    d.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && header.classList.contains('is-search-open') && !e.defaultPrevented) {
        setSearch(false);
        sbtn.focus();
      }
    });
  }
})();
