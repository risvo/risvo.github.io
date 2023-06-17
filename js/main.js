/* HEADER */

const desktop_navbar = document.querySelector(".d-menu");
const navbar_items = [
  { text: "Chi siamo", link: "./pages/chi-siamo.html" },
  { text: "Cosa facciamo", link: "./pages/cosa-facciamo.html" },
  { text: "Open data", link: "./pages/open-data.html" },
  { text: "Media", link: "./pages/media.html" },
  { text: "Partners", link: "./pages/partners.html" },
];

/* FOOTER */
const today = new Date();
const present_year = today.getFullYear();
document
  .querySelector(".f-credits")
  .querySelector(
    "span"
  ).innerHTML = `&copy;${present_year}, tutti i diritti riservati`;
