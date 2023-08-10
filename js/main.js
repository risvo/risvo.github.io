const mobileTabletWidth = window.matchMedia("(max-width: 850px)");

/* const logo_path = page_id === "index" ? "./media/logos/" : "../media/logos/"; */
const logo_path = "./media/logos/";
const logo_img = "risvo-rect-color.svg";
/* const navbar_path = page_id === "index" ? "./pages/" : "./"; */
const navbar_path = "./";
const navbar_items = [
  { page_id: "chi-siamo", text: "Chi siamo", link: "chi-siamo.html" },
  {
    page_id: "cosa-facciamo",
    text: "Cosa facciamo",
    link: "cosa-facciamo.html",
  },
  { page_id: "open-data", text: "Open data", link: "open-data.html" },
  /* { page_id: "", text: "Media", link: "media.html" },
  { page_id: "", text: "Partners", link: "partners.html" }, */
];

/* const footer_path = page_id === "index" ? "./pages/" : "./"; */

const footer_path = "./";

const activeElem = (elem, text) => {
  elem.classList.add("menu-active-item");
  elem.innerHTML = text;
};

const createLink = (item) => {
  let link = document.createElement("a");
  link.href = navbar_path + item.link;
  link.text = item.text;
  return link;
};

const renderNavItem = (item, index, viewport = "desktop") => {
  let li = document.createElement("li");
  if ((viewport == "desktop") & (index === 0)) {
    li.className = "pr-1 ptb-1";
  } else if (index === navbar_items.length - 1) {
    li.className = "pl-1 ptb-1";
  } else {
    li.className = "plr-1 ptb-1";
  }
  item.page_id === page_id
    ? activeElem(li, item.text)
    : li.appendChild(createLink(item));
  return li;
};

const scrollToElem = (url, selector, yOffset = 0) => {
  window.location.href = url;
  const el = document.querySelector(selector);
  const y = el.getBoundingClientRect().top + window.pageYOffset + yOffset;
  window.scrollTo({ top: y, behavior: "smooth" });
};

window.addEventListener("DOMContentLoaded", () => {
  /* HEADER */
  const desktop_navbar = document.querySelector(".d-menu").querySelector("ul");
  const mobile_navbar = document.querySelector(".m-menu").querySelector("ul");

  if (page_id === "index") {
    document.querySelector(".logo").innerHTML = `
      <img src="${logo_path}${logo_img}" alt="Logo Risvo" width="100%" height="100%">
      `;
  } else {
    document.querySelector(".logo").innerHTML = `
                                              <a href="./index.html">
                                                <img src="${logo_path}${logo_img}" alt="Logo Risvo" width="100%" height="100%">
                                              </a>
                                                `;
  }

  if (mobileTabletWidth.matches) {
    navbar_items.forEach((item, index) => {
      mobile_navbar.appendChild(renderNavItem(item, index, "mobile"));
    });
  } else {
    navbar_items.forEach((item, index) => {
      desktop_navbar.appendChild(renderNavItem(item, index));
    });
  }

  /* FOOTER */
  const today = new Date();
  const present_year = today.getFullYear();
  const footer = document.querySelector("footer");
  footer.innerHTML = `
                      <section class="footer pt-7">
                      <div class="footer-col f-credits text-center pr-1 m-plr-0">
                          <h5>Risvo</h5>
                          &copy;${present_year}, tutti i diritti riservati
                      </div>
                      <div class="footer-col text-center plr-1 m-plr-0">
                          <h5>Contatti</h5>
                          <a href="mailto:federico.monaco@unipr.it">federico.monaco@unipr.it</a>
                          SIM.LAB Laboratorio didattico per la simulazione in Medicina - Dipartimento di Medicina e Chirurgia -
                          Università di Parma
                      </div>
                      <div class="footer-col text-left plr-1 m-plr-0">
                          <h5>Policy</h5>
                          <ul>
                              <li><a href="${footer_path}privacy-policy.html">Privacy</a></li>
                              <li><a href="${footer_path}crediti.html">Crediti</a></li>
                          </ul>
                      </div>
                      <div class="footer-col text-left pl-1 m-plr-0">
                          <h5>Social</h5>
                          <ul class="f-social">
                              <li><a href="https://github.com/risvo" target="_blank" rel="noopener noreferrer">Github</a></li>
                              <li><a href="https://www.youtube.com/watch?v=1DvkMKSjWRc" target="_blank"
                                      rel="noopener noreferrer">Youtube</a></li>
                              <li><a href="http://" target="_blank" rel="noopener noreferrer">Instagram</a></li>
                              <li><a href="https://discord.com/channels/1110201669154787328/1110201671423901826" target="_blank"
                                      rel="noopener noreferrer">Discord</a></li>
                          </ul>
                      </div>
                    </section>  
                    `;
});
