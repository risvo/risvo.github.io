const today = new Date();
const present_year = today.getFullYear();
document
  .querySelector(".f-credits")
  .querySelector(
    "span"
  ).innerHTML = `&copy;${present_year}, tutti i diritti riservati`;
