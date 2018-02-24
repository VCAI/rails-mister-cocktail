import Typed from 'typed.js';

function loadDynamicBannerText() {
  new Typed('#banner-typed-text', {
    strings: ["Mix Your Ingredients", "Create New Cocktails"],
    typeSpeed: 120,
    loop: true
  });
}

export { loadDynamicBannerText };
