// スクロール時のやわらかな表示演出。HTMLの構造や文字の可読性には影響しません。
const targets = document.querySelectorAll(
  ".storyTitle,.storyBody,.textureCard,.creamImage,.creamCopy,.sectionHead,.flavorCard,.craftIntro,.processPhoto,.steps li,.giftCopy,.giftImage"
);

targets.forEach((target) => target.classList.add("js-reveal"));

if ("IntersectionObserver" in window && !window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12, rootMargin: "0px 0px -7%" });
  targets.forEach((target) => observer.observe(target));
} else {
  targets.forEach((target) => target.classList.add("is-visible"));
}
