/* ==========================================================================
   main.js
   --------------------------------------------------------------------------
   ページ共通の細かい動作をまとめたスクリプトです。
   ① スマホ用ハンバーガーメニューの開閉
   ② ヘッダーのスクロール状態（下線表示のON/OFF）
   （よくある質問の開閉は <details> 要素の標準機能を使っているため、
     JavaScriptは使用していません）
   ========================================================================== */
(function () {
  "use strict";

  /* ------------------------------------------------------------------
     ① ハンバーガーメニューの開閉
     ------------------------------------------------------------------ */
  var navToggle = document.getElementById("navToggle");
  var siteNav = document.getElementById("siteNav");

  if (navToggle && siteNav) {
    var closeMenu = function () {
      navToggle.setAttribute("aria-expanded", "false");
      siteNav.classList.remove("is-open");
    };
    var openMenu = function () {
      navToggle.setAttribute("aria-expanded", "true");
      siteNav.classList.add("is-open");
    };

    navToggle.addEventListener("click", function () {
      var isOpen = navToggle.getAttribute("aria-expanded") === "true";
      isOpen ? closeMenu() : openMenu();
    });

    // メニュー内のリンクをクリックしたら自動で閉じる（アンカー移動と両立させるため）
    siteNav.querySelectorAll("a").forEach(function (link) {
      link.addEventListener("click", closeMenu);
    });

    // Escキーでも閉じられるようにする
    document.addEventListener("keydown", function (e) {
      if (e.key === "Escape") closeMenu();
    });
  }

  /* ------------------------------------------------------------------
     ② ヘッダーのスクロール状態
     少しでもスクロールしたら is-scrolled クラスを付け、下線を表示する
     ------------------------------------------------------------------ */
  var header = document.getElementById("siteHeader");
  if (header) {
    var updateHeaderState = function () {
      header.classList.toggle("is-scrolled", window.scrollY > 4);
    };
    updateHeaderState();
    window.addEventListener("scroll", updateHeaderState, { passive: true });
  }

  /* ------------------------------------------------------------------
     ③ スマホ用フローティングLINEボタンの自動非表示
     ページ最下部の「お問い合わせ」セクション（本来のCTA）が画面内に
     入ったら、フローティングボタンがそれと重ならないよう一時的に隠す
     ------------------------------------------------------------------ */
  var floatingCta = document.querySelector(".floating-cta");
  var contactSection = document.getElementById("contact");
  if (floatingCta && contactSection && "IntersectionObserver" in window) {
    var contactObserver = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          floatingCta.classList.toggle("is-hidden", entry.isIntersecting);
        });
      },
      { threshold: 0.15 }
    );
    contactObserver.observe(contactSection);
  }
})();
