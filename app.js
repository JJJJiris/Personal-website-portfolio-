const CONTACT_EMAIL = "hello@example.com";

const I18N = {
  zh: {
    "site.name": "你的名字",
    "doc.title": "作品集 · 个人简历",
    "meta.desc": "个人简历与作品集 — 平面、产品与空间设计",
    "nav.resume": "简历",
    "nav.work": "作品",
    "nav.contact": "联系",
    "hero.tag": "设计师 · 平面 / 产品 / 空间",
    "hero.title1": "用极简语言，",
    "hero.title2": "讲述清晰的设计叙事。",
    "hero.lead":
      "你好，我是一名跨媒介设计师，专注于品牌视觉、产品与展陈空间。这里汇总了我的履历与精选项目。",
    "section.resume": "简历",
    "section.work": "作品集",
    "section.contact": "联系",
    "btn.printResume": "导出 PDF 简历",
    "resume.printHint": "将打开打印窗口，请选择「存储为 PDF」或「Microsoft Print to PDF」。",
    "resume.experience": "经历",
    "resume.education": "教育",
    "resume.skills": "技能与工具",
    "filter.all": "全部",
    "filter.graphic": "平面",
    "filter.product": "产品",
    "filter.spatial": "空间",
    "filter.aria": "作品分类",
    "contact.line1": "合作或投递机会欢迎来信：",
    "contact.note": "将邮箱替换为你的真实邮箱即可。",
  },
  en: {
    "site.name": "Your Name",
    "doc.title": "Portfolio · Résumé",
    "meta.desc": "Résumé & portfolio — graphic, product, and spatial design",
    "nav.resume": "Résumé",
    "nav.work": "Work",
    "nav.contact": "Contact",
    "hero.tag": "Designer · Graphic / Product / Spatial",
    "hero.title1": "Minimal language,",
    "hero.title2": "clear design narratives.",
    "hero.lead":
      "I’m a cross-disciplinary designer focused on brand visuals, product, and exhibition spaces. Below is my résumé and selected projects.",
    "section.resume": "Résumé",
    "section.work": "Portfolio",
    "section.contact": "Contact",
    "btn.printResume": "Export résumé as PDF",
    "resume.printHint": "Opens the print dialog — choose “Save as PDF” (or similar) as the destination.",
    "resume.experience": "Experience",
    "resume.education": "Education",
    "resume.skills": "Skills & tools",
    "filter.all": "All",
    "filter.graphic": "Graphic",
    "filter.product": "Product",
    "filter.spatial": "Spatial",
    "filter.aria": "Portfolio categories",
    "contact.line1": "Collaborations and opportunities:",
    "contact.note": "Replace the email with your own address.",
  },
};

const RESUME = {
  experience: [
    {
      zh: {
        time: "2022 — 至今",
        role: "高级设计师 · 某工作室",
        detail: "品牌与空间视觉统筹，客户端从概念到落地。",
      },
      en: {
        time: "2022 — Present",
        role: "Senior Designer · Studio Name",
        detail: "Brand and spatial visual direction, concept through production.",
      },
    },
    {
      zh: {
        time: "2018 — 2022",
        role: "视觉设计师 · 某公司",
        detail: "平面与包装设计，参与产品线迭代与展会陈列。",
      },
      en: {
        time: "2018 — 2022",
        role: "Visual Designer · Company Name",
        detail: "Print and packaging design; product lines and fair displays.",
      },
    },
  ],
  education: [
    {
      zh: {
        time: "2014 — 2018",
        role: "设计学 学士",
        detail: "某某大学 · 视觉传达",
      },
      en: {
        time: "2014 — 2018",
        role: "B.A. in Design",
        detail: "University Name · Visual Communication",
      },
    },
  ],
  skills: {
    zh: "Adobe CC · Figma · Blender · Rhino · 印刷工艺 · 材料与打样协调",
    en: "Adobe CC · Figma · Blender · Rhino · Print production · Material & sampling coordination",
  },
};

/**
 * 作品集条目。
 * category: "graphic" | "product" | "spatial"
 * image: 可选；有值则显示封面图（相对本站根目录，如 "images/project-01.jpg"），无则保留空白占位区。
 */
const PROJECTS = [
  {
    category: "graphic",
    title: { zh: "品牌视觉系统", en: "Brand identity system" },
    description: {
      zh: "整套 VI 与延展应用，浅色极简主调。",
      en: "Full VI and applications with a light, minimal tone.",
    },
  },
  {
    category: "product",
    title: { zh: "消费电子产品包装", en: "Consumer electronics packaging" },
    description: {
      zh: "结构与印刷工艺一体化方案。",
      en: "Structure and print workflow in one scheme.",
    },
  },
  {
    category: "spatial",
    title: { zh: "展陈与动线", en: "Exhibition & circulation" },
    description: {
      zh: "小型 Popup 与展位灯光规划。",
      en: "Popup spaces and booth lighting planning.",
    },
  },
  {
    category: "graphic",
    title: { zh: "出版物编辑设计", en: "Publication design" },
    description: {
      zh: "文集与展览画册的版式与纸张选择。",
      en: "Layout and paper choices for books and exhibition catalogues.",
    },
  },
  {
    category: "product",
    title: { zh: "家具系列概念", en: "Furniture series concept" },
    description: {
      zh: "模块化构件与材质研究。",
      en: "Modular parts and material studies.",
    },
  },
  {
    category: "spatial",
    title: { zh: "工作室改造", en: "Studio retrofit" },
    description: {
      zh: "工作区与材料库一体化空间。",
      en: "Integrated workspace and materials library.",
    },
  },
];

const CATEGORY_CLASS = {
  graphic: "filter-icon--graphic",
  product: "filter-icon--product",
  spatial: "filter-icon--spatial",
};

const STORAGE_KEY = "portfolio-locale";

function getLocale() {
  const saved = localStorage.getItem(STORAGE_KEY);
  if (saved === "en" || saved === "zh") return saved;
  return "zh";
}

let locale = getLocale();

function t(key) {
  return (I18N[locale] && I18N[locale][key]) || I18N.zh[key] || key;
}

function applyI18n() {
  document.documentElement.lang = locale === "zh" ? "zh-CN" : "en";
  document.querySelectorAll("[data-i18n]").forEach((el) => {
    const key = el.getAttribute("data-i18n");
    el.textContent = t(key);
  });
  document.getElementById("doc-title").textContent = t("doc.title");
  const meta = document.getElementById("meta-desc");
  if (meta) meta.setAttribute("content", t("meta.desc"));
  const filters = document.querySelector(".filters");
  if (filters) filters.setAttribute("aria-label", t("filter.aria"));

  document.querySelectorAll(".lang-btn").forEach((btn) => {
    const active = btn.getAttribute("data-lang") === locale;
    btn.classList.toggle("active", active);
    btn.setAttribute("aria-pressed", String(active));
  });
}

function renderTimeline(containerId, items) {
  const ul = document.getElementById(containerId);
  ul.innerHTML = items
    .map((item) => {
      const copy = item[locale] || item.zh;
      return `<li>
        <span class="time">${escapeHtml(copy.time)}</span>
        <span class="role">${escapeHtml(copy.role)}</span>
        <span class="detail">${escapeHtml(copy.detail)}</span>
      </li>`;
    })
    .join("");
}

function renderResume() {
  renderTimeline("timeline-exp", RESUME.experience);
  renderTimeline("timeline-edu", RESUME.education);
  document.getElementById("resume-skills-text").textContent = RESUME.skills[locale] || RESUME.skills.zh;
}

function projectImageSrc(p) {
  if (p.image == null) return "";
  const s = String(p.image).trim();
  return s;
}

function renderProjects() {
  const grid = document.getElementById("project-grid");
  grid.innerHTML = PROJECTS.map((p) => {
    const title = p.title[locale] || p.title.zh;
    const desc = p.description[locale] || p.description.zh;
    const src = projectImageSrc(p);
    const alt = escapeHtml(title);
    const thumbInner =
      src !== ""
        ? `<div class="project-thumb project-thumb--img">
        <img src="${escapeHtml(src)}" alt="${alt}" width="960" height="720" loading="lazy" decoding="async" />
        <span class="cat-badge">
          <span class="filter-icon ${CATEGORY_CLASS[p.category]}" aria-hidden="true"></span>
        </span>
      </div>`
        : `<div class="project-thumb project-thumb--empty" role="img" aria-label="${alt}">
        <span class="cat-badge">
          <span class="filter-icon ${CATEGORY_CLASS[p.category]}" aria-hidden="true"></span>
        </span>
      </div>`;
    return `<article class="project-card" data-category="${p.category}">
      ${thumbInner}
      <div class="project-body">
        <h3>${escapeHtml(title)}</h3>
        <p>${escapeHtml(desc)}</p>
      </div>
    </article>`;
  }).join("");
}

function escapeHtml(s) {
  const div = document.createElement("div");
  div.textContent = s;
  return div.innerHTML;
}

function setupFilters() {
  const root = document.querySelector(".filters");
  if (!root || root.dataset.delegationBound === "1") return;
  root.dataset.delegationBound = "1";
  root.addEventListener("click", (e) => {
    const btn = e.target.closest(".filter");
    if (!btn || !root.contains(btn)) return;
    const filter = btn.getAttribute("data-filter");
    root.querySelectorAll(".filter").forEach((b) => {
      b.classList.toggle("active", b === btn);
      b.setAttribute("aria-selected", String(b === btn));
    });
    document.querySelectorAll(".project-card").forEach((card) => {
      const cat = card.getAttribute("data-category");
      card.classList.toggle("hidden", filter !== "all" && cat !== filter);
    });
  });
}

function reapplyFilterState(activeFilter) {
  const root = document.querySelector(".filters");
  if (!root) return;
  root.querySelectorAll(".filter").forEach((b) => {
    const on = b.getAttribute("data-filter") === activeFilter;
    b.classList.toggle("active", on);
    b.setAttribute("aria-selected", String(on));
  });
  document.querySelectorAll(".project-card").forEach((card) => {
    const cat = card.getAttribute("data-category");
    card.classList.toggle("hidden", activeFilter !== "all" && cat !== activeFilter);
  });
}

function setupLang() {
  document.querySelectorAll(".lang-btn").forEach((btn) => {
    btn.addEventListener("click", () => {
      const next = btn.getAttribute("data-lang");
      if (next === locale) return;
      locale = next;
      localStorage.setItem(STORAGE_KEY, locale);
      refreshAll();
    });
  });
}

function setupPrint() {
  const btn = document.getElementById("btn-print-resume");
  if (btn) btn.addEventListener("click", () => window.print());
}

function refreshAll() {
  const filter = document.querySelector(".filter.active")?.getAttribute("data-filter") || "all";
  applyI18n();
  renderResume();
  renderProjects();
  reapplyFilterState(filter);
}

function setupContactMail() {
  const a = document.getElementById("contact-mail");
  if (a) {
    a.href = `mailto:${CONTACT_EMAIL}`;
    a.textContent = CONTACT_EMAIL;
  }
}

document.getElementById("year").textContent = String(new Date().getFullYear());
setupContactMail();
applyI18n();
renderResume();
renderProjects();
setupFilters();
setupLang();
setupPrint();
