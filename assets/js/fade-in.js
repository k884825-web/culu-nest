/* ==========================================================================
   fade-in.js
   --------------------------------------------------------------------------
   スクロールで画面内に入った要素を、ふわっと表示するだけのシンプルな
   演出用スクリプトです。

   仕組み：
   1. HTML側で data-reveal 属性を付けた要素を全て取得する
   2. IntersectionObserver で「画面内に入ったかどうか」を監視する
   3. 画面内に入ったら is-visible クラスを付与する（CSSはcomponents.css参照）
   4. 一度表示された要素は監視をやめる（アニメーションの繰り返しを防止）

   ★ 演出を増やしたい場合は、対象のHTML要素に data-reveal 属性を追加する
     だけで、このスクリプトが自動的に対象にしてくれます。
   ========================================================================== */
(function () {
  "use strict";

  var targets = document.querySelectorAll("[data-reveal]");
  if (!targets.length) return;

  // 「アニメーションを減らす」設定のユーザーには、演出なしで即表示する
  var prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  if (prefersReducedMotion || !("IntersectionObserver" in window)) {
    targets.forEach(function (el) { el.classList.add("is-visible"); });
    return;
  }

  var observer = new IntersectionObserver(
    function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.12, rootMargin: "0px 0px -8% 0px" }
  );

  targets.forEach(function (el) { observer.observe(el); });
})();
