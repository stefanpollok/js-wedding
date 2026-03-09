(function () {
  var STORAGE_KEY = "site-lang";
  var DEFAULT_LANG = "en";

  function storageSave(lang) {
    try { localStorage.setItem(STORAGE_KEY, lang); } catch (e) {}
  }

  function storageLoad() {
    try { return localStorage.getItem(STORAGE_KEY); } catch (e) { return null; }
  }

  function setLang(lang) {
    document.documentElement.setAttribute("data-lang", lang);
    storageSave(lang);
    document.querySelectorAll(".lang-btn").forEach(function (btn) {
      btn.classList.toggle("lang-btn--active", btn.dataset.lang === lang);
    });
  }

  function init() {
    var saved = storageLoad() || DEFAULT_LANG;
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
