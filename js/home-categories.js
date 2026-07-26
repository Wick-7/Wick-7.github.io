(function () {
  var categories = [
    { icon: '📝', name: '学习笔记', sub: 'Notes', url: '/categories/学习笔记/' },
    { icon: '💬', name: '闲言碎语', sub: 'Musings', url: '/categories/闲言碎语/' }
  ];

  var container;

  function insert() {
    if (location.pathname !== '/' && !location.pathname.startsWith('/page/')) return;
    if (document.querySelector('.home-categories-nav')) return;

    if (!container) {
      container = document.createElement('div');
      container.className = 'home-categories-nav';
      categories.forEach(function (cat) {
        var a = document.createElement('a');
        a.className = 'cat-nav-item';
        a.href = cat.url;

        var icon = document.createElement('span');
        icon.className = 'cat-nav-icon';
        icon.textContent = cat.icon;

        var text = document.createElement('span');
        text.className = 'cat-nav-text';
        text.innerHTML = '<span class="cat-nav-name">' + cat.name + '</span><span class="cat-nav-sub">' + cat.sub + '</span>';

        a.appendChild(icon);
        a.appendChild(text);
        container.appendChild(a);
      });
    }

    var contentInner = document.getElementById('content-inner');
    if (!contentInner) return;
    contentInner.parentNode.insertBefore(container, contentInner);
  }

  document.addEventListener('DOMContentLoaded', insert);
  document.addEventListener('pjax:complete', insert);
  insert();
})();
