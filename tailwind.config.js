module.exports = {
  darkMode: 'class',
  content: [
    "../../*.php",
    "../../src/**/*.php",
    "../../modules/**/*.{php,twig.html}",
    "../../resources/templates/**/*.twig.html",
    "../../resources/assets/js/*.js",
    "../../themes/**/*.twig.html",
  ],
  safelist: [
      "grid-cols-1", "grid-cols-2", "grid-cols-3", "grid-cols-4", "grid-cols-5", "grid-cols-6",

      "w-1/2","w-1/3","w-1/4","w-1/5","w-1/6","w-1/7",

      "theme-purple", "theme-blue", "theme-indigo", "theme-sky", "theme-teal", "theme-green", "theme-yellow", "theme-orange", "theme-red", "theme-pink", "theme-fuchsia", "theme-gray",
  ],
};
