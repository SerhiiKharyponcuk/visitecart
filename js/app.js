const $ = (sel) => document.querySelector(sel);

const year = new Date().getFullYear();
$("#year").textContent = String(year);

// === LINKS (замінити) ===
const LINKS = {
  github: "https://github.com/SerhiiKharyponcuk",
  app: "https://serhiikharyponcuk.github.io/yacht-adventures-team-project/",
};


$("#btnGitHub").setAttribute("href", LINKS.github);
document.querySelectorAll('a[href="GITHUB_URL"]').forEach(a => a.href = LINKS.github);

$("#btnApp").setAttribute("href", LINKS.app);
document.querySelectorAll('a[href="APP_URL"]').forEach(a => a.href = LINKS.app);

// === i18n ===
const I18N = {
  nl: {
    nav_contact: "Contact",
    kicker: "Modern • Zakelijk • Clean",
    role: "Future Web Developer",
    lead: "Ik bouw moderne, snelle websites met een strakke uitstraling. Open voor projecten en samenwerking.",
    btn_app: "Open mijn site/app",
    about_title: "Over mij",
    about_text: "Leerling met focus op IT en webdevelopment. Ik bouw functionele websites met HTML, CSS en JavaScript.",
    links_title: "Snelle links",
    links_app_label: "Mijn app/site",
    links_app_meta: "Open de nieuwste versie",
    links_github_meta: "Projecten & code",
    contact_title: "Contact",
    school_phone_hint: "Schoolnummer",
  },
  en: {
    nav_contact: "Contact",
    kicker: "Modern • Business • Clean",
    role: "Future Web Designer",
    lead: "I build clean, fast, modern websites. Open for projects and collaboration.",
    btn_app: "Open my site/app",
    about_title: "About",
    about_text: "Student focused on IT and web design. I like clean layouts, strong typography, and smooth UI details.",
    links_title: "Quick links",
    links_app_label: "My app/site",
    links_app_meta: "Open the latest build",
    links_github_meta: "Projects & code",
    contact_title: "Contact",
    school_phone_hint: "School phone",
  }
};

function applyLang(lang){
  const dict = I18N[lang] || I18N.nl;
  document.documentElement.lang = lang;

  document.querySelectorAll("[data-i18n]").forEach(el => {
    const key = el.getAttribute("data-i18n");
    if (dict[key]) el.textContent = dict[key];
  });

  $("#langPill").textContent = lang.toUpperCase();
  localStorage.setItem("lang", lang);
}

const saved = localStorage.getItem("lang");
applyLang(saved || "nl");

$("#langToggle").addEventListener("click", () => {
  const current = localStorage.getItem("lang") || "nl";
  applyLang(current === "nl" ? "en" : "nl");
});
