(function () {
  var STORAGE_KEY = "site-lang";
  var DEFAULT_LANG = "en";

  function setLang(lang) {
    document.documentElement.setAttribute("data-lang", lang);
    localStorage.setItem(STORAGE_KEY, lang);
    document.querySelectorAll(".lang-btn").forEach(function (btn) {
      btn.classList.toggle("lang-btn--active", btn.dataset.lang === lang);
    });
  }

  function init() {
    var saved = localStorage.getItem(STORAGE_KEY) || DEFAULT_LANG;
    setLang(saved);

    document.querySelectorAll(".lang-btn").forEach(function (btn) {
      btn.addEventListener("click", function () {
        setLang(btn.dataset.lang);
      });
    });
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();
