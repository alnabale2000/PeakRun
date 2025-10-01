// // سكربت بسيط لتفعيل الأكورديون والسايز تشارت
// document.addEventListener('DOMContentLoaded', () => {
//   const accordions = document.querySelectorAll('[data-accordion]');
//   accordions.forEach(acc => {
//     const btn = acc.querySelector('button');
//     const panel = acc.querySelector('[class$="__panel"]');
//     if (!btn || !panel) return;
//     btn.addEventListener('click', () => {
//       const expanded = btn.getAttribute('aria-expanded') === 'true';
//       btn.setAttribute('aria-expanded', !expanded);
//       panel.hidden = expanded;
//       const icon = btn.querySelector('.PEI-accordion__icon');
//       if (icon) icon.textContent = expanded ? '+' : '−';
//     });
//   });

//   const sizecharts = document.querySelectorAll('[data-sizechart]');
//   sizecharts.forEach(sc => {
//     const btn = sc.querySelector('button');
//     const panel = sc.querySelector('[class$="__panel"]');
//     if (!btn || !panel) return;
//     btn.addEventListener('click', () => {
//       const expanded = btn.getAttribute('aria-expanded') === 'true';
//       btn.setAttribute('aria-expanded', !expanded);
//       panel.hidden = expanded;
//     });
//   });
// });