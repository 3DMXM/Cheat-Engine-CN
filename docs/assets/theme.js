// Cheat Engine 7.7 汉化版官网 — 主题切换（亮色 / 暗色）
(function () {
  var STORAGE_KEY = 'ce-cn-theme';
  var root = document.documentElement;

  function applyTheme(theme) {
    if (theme === 'light' || theme === 'dark') {
      root.setAttribute('data-theme', theme);
    } else {
      root.removeAttribute('data-theme');
    }
  }

  // 尽早应用已保存的主题，避免闪烁（此脚本以 defer 加载，
  // 但仍在渲染前尽快执行）
  var saved = null;
  try {
    saved = localStorage.getItem(STORAGE_KEY);
  } catch (e) {
    /* 无法访问 localStorage（隐私模式等），忽略 */
  }
  applyTheme(saved);

  function currentEffectiveTheme() {
    var explicit = root.getAttribute('data-theme');
    if (explicit) return explicit;
    return window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches
      ? 'dark'
      : 'light';
  }

  function toggleTheme() {
    var next = currentEffectiveTheme() === 'dark' ? 'light' : 'dark';
    applyTheme(next);
    try {
      localStorage.setItem(STORAGE_KEY, next);
    } catch (e) {
      /* 忽略 */
    }
  }

  document.addEventListener('DOMContentLoaded', function () {
    var btn = document.querySelector('.theme-toggle');
    if (btn) {
      btn.addEventListener('click', toggleTheme);
    }
  });
})();
