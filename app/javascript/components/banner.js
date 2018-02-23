import Typed from 'typed.js';

function loadDynamicBannerText() {
  new Typed('#banner-typed-text', {
    strings: ["Mix your Ingredients", "Create new Cocktails"],
    typeSpeed: 50,
    loop: true
  });
}

export { loadDynamicBannerText };
