const CONTACT_EMAIL = "hello@example.com";

const I18N = {
  zh: {
    "site.name": "你的名字",
    "doc.titleWelcome": "很高兴认识你",
    "doc.title": "作品集 · 主页",
    "doc.titleResume": "简历 · 作品集",
    "meta.descWelcome": "很高兴认识你 — 个人作品集与简历入口",
    "meta.desc": "个人简历与作品集 — 简介、作品预览、完整履历与 PDF",
    "meta.descResume": "设计师简历 — 经历、教育与技能",
    "welcome.eyebrow": "Portfolio",
    "welcome.title": "很高兴认识你",
    "welcome.subtitle":
      "欢迎来访我的个人站点。请在此页选择界面语言。进入主页后可查看简介摘要与作品大图预览；完整履历与 PDF 导出在「简历」页，每个项目可进入详情阅读全文。需要更换语言时，可从站内任意页底部返回欢迎页。",
    "welcome.langLabel": "界面语言",
    "welcome.enter": "进入主页",
    "lang.optionZh": "中文",
    "lang.optionEn": "EN",
    "nav.aria": "主导航",
    "aria.langGroup": "语言",
    navHome: "主页",
    "nav.about": "简介",
    "nav.resume": "简历",
    "nav.work": "作品",
    "nav.contact": "联系",
    "section.about": "个人简介",
    "resume.subline": "以下为完整履历；导出 PDF 与返回主页的按钮在页面最下方。",
    "resume.backHome": "← 返回主页",
    "section.resume": "简历",
    "section.work": "作品",
    "section.contact": "联系",
    "home.profileHint": "以上为精简摘要。完整经历、教育、技能列表与导出 PDF，请进入简历页。",
    "home.ctaFullResume": "查看完整简历与导出 PDF →",
    "work.intro": "以下为精选案子的预览图与摘要；点击任一案卡进入详细说明与案卷正文。",
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
    "project.back": "← 返回作品列表",
    "project.backWork": "回到作品列表",
    "project.notFound": "未找到该项目。",
    "project.open": "查看项目 →",
    "footer.langLink": "欢迎页 · 语言",
  },
  en: {
    "site.name": "Your Name",
    "doc.titleWelcome": "Nice to meet you",
    "doc.title": "Portfolio · Home",
    "doc.titleResume": "Resume · Portfolio",
    "meta.descWelcome": "Nice to meet you — portfolio & resume",
    "meta.desc": "Portfolio home — profile summary, work previews, full resume & PDF",
    "meta.descResume": "Designer resume — experience, education, and skills",
    "welcome.eyebrow": "Portfolio",
    "welcome.title": "Nice to meet you",
    "welcome.subtitle":
      "Thanks for stopping by. Choose the interface language on this page. Then continue: profile summary and large project previews on the home page; the full resume with PDF export is on the Resume page; each project has its own detail page. To switch language later, use the link at the bottom of any page to return here.",
    "welcome.langLabel": "Language",
    "welcome.enter": "Enter home",
    "lang.optionZh": "Chinese",
    "lang.optionEn": "English",
    "nav.aria": "Main navigation",
    "aria.langGroup": "Language",
    navHome: "Home",
    "nav.about": "About",
    "nav.resume": "Resume",
    "nav.work": "Work",
    "nav.contact": "Contact",
    "section.about": "Profile",
    "resume.subline": "Full timeline below. PDF export and back-to-home are at the bottom of this page.",
    "resume.backHome": "← Back to home",
    "section.resume": "Resume",
    "section.work": "Work",
    "section.contact": "Contact",
    "home.profileHint":
      "This is an abbreviated profile. Open the Resume page for the full timeline, education, skills, and PDF export.",
    "home.ctaFullResume": "Full resume & PDF export →",
    "work.intro":
      "Selected projects at a glance—larger previews and summaries. Open any card for the full case study and narrative.",
    "btn.printResume": "Export resume as PDF",
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
    "project.back": "← Back to work",
    "project.backWork": "Back to portfolio",
    "project.notFound": "Project not found.",
    "project.open": "View project →",
    "footer.langLink": "Welcome · Language",
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

/** 主页「简介」区展示的精简文案（完整内容见 resume.html） */
const PROFILE_HOME = {
  zh: {
    intro:
      "你好，我是一名跨媒介设计师，习惯用克制的图形与空间节奏讲清楚品牌想说什么。工作覆盖视觉系统、产品包装与小型展陈，常与业主、印厂和施工协作，把概念推进到可落地的标准。",
    highlights: [
      "现任高级设计师：品牌与空间视觉统筹，Brief 到落地一体化。",
      "此前专注平面与包装，熟悉结构打样、材料与展会陈列。",
      "工具：Adobe CC、Figma、Blender、Rhino；重视文档化交付。",
    ],
  },
  en: {
    intro:
      "I’m a cross-disciplinary designer who favors restrained graphics and spatial rhythm to clarify what a brand wants to say. Work spans identity systems, product packaging, and small-scale exhibits—often coordinating with clients, printers, and builders to turn concepts into buildable standards.",
    highlights: [
      "Senior designer today: brand and spatial visual direction from brief to production.",
      "Earlier focus on print and packaging—prototyping, materials, and fair displays.",
      "Tools: Adobe CC, Figma, Blender, Rhino; documentation-minded handoff.",
    ],
  },
};

/**
 * slug: 项目页 URL project.html?slug=xxx
 * preview: 主页卡片「大体预览」用（可长于 description）
 * content: 详情正文，用 \n\n 分段
 */
const PROJECTS = [
  {
    slug: "brand-identity",
    category: "graphic",
    title: { zh: "品牌视觉系统", en: "Brand identity system" },
    description: {
      zh: "整套 VI 与延展应用，浅色极简主调。",
      en: "Full VI and applications with a light, minimal tone.",
    },
    preview: {
      zh: "为科技生活方式品牌建立浅色极简的 VI 体系：主标与辅助图形统一于可延展网格，色彩与字体规则覆盖数字端与印刷物料。团队可按手册自行派生海报、包装贴与社媒模板，减少反复沟通。",
      en: "A light, minimal VI for a tech–lifestyle brand: core mark and extensions locked to a flexible grid, with color and type rules for digital and print. Teams can self-serve posters, pack labels, and social templates from the manual with less back-and-forth.",
    },
    content: {
      zh: "从标志基础到延展图形、色彩与字体规则，统一线上与印刷触点。\n\n侧重可执行的规范文档，便于团队协作与外包对接。",
      en: "From logotype and core marks to extensions, color, and type rules across digital and print.\n\nFocus on practical guidelines for handoff to teams and vendors.",
    },
  },
  {
    slug: "electronics-packaging",
    category: "product",
    title: { zh: "消费电子产品包装", en: "Consumer electronics packaging" },
    description: {
      zh: "结构与印刷工艺一体化方案。",
      en: "Structure and print workflow in one scheme.",
    },
    preview: {
      zh: "消费电子产品包装一体化方案：刀模结构兼顾跌落测试与撕拉手感，外箱与内托分层选用不同楞型与表面处理。与印厂联合打样校准专色与烫印套位，形成量产前的标准样箱与检查清单。",
      en: "Consumer electronics packaging in one scheme: die lines balance protection and peel UX; outer carton and inner tray use different boards and finishes. Joint proofing with the printer locks spot colors and foil register before mass production.",
    },
    content: {
      zh: "在保护性与拆箱体验之间取舍，确定材质、楞型与表面处理。\n\n打样阶段与印厂对齐套色与工差，控制量产一致性。",
      en: "Balancing protection and unboxing within material, board, and finish constraints.\n\nProofing with the printer for color registration and tolerance at scale.",
    },
  },
  {
    slug: "exhibition-circulation",
    category: "spatial",
    title: { zh: "展陈与动线", en: "Exhibition & circulation" },
    description: {
      zh: "小型 Popup 与展位灯光规划。",
      en: "Popup spaces and booth lighting planning.",
    },
    preview: {
      zh: "限时 Popup 的空间策略：用地面材质与展墙高度暗示动线，主展品置于进深焦点，周边设置可触摸样件区。灯光分大环境、洗墙与定点重点三层，依展品反光特性调节角度，保证拍照与现场观感一致。",
      en: "A time-limited popup: flooring and wall heights cue circulation; the hero piece sits on the sightline with tactile samples nearby. Lighting layers—ambient, wall wash, and accents—are tuned to each material’s reflectance for photos and in-person viewing.",
    },
    content: {
      zh: "梳理参观动线与视线焦点，划分展示区与互动区。\n\n灯光层次配合展品材质，避免眩光并突出主视觉。",
      en: "Visitor flow and focal points, separating display and interaction zones.\n\nLayered lighting tuned to materials, minimizing glare while highlighting key visuals.",
    },
  },
  {
    slug: "publication-design",
    category: "graphic",
    title: { zh: "出版物编辑设计", en: "Publication design" },
    description: {
      zh: "文集与展览画册的版式与纸张选择。",
      en: "Layout and paper choices for books and exhibition catalogues.",
    },
    preview: {
      zh: "展览画册兼长文文集：网格系统区分文章区、作品拉页与注释栏，脚注与图注样式统一。内文纸与封面纸分别试印，在翻阅手感、色彩还原与预算之间确定克重与装订（锁线胶装），附印厂材料表便于复单。",
      en: "A catalogue that doubles as a reader: grids separate essays, plate sections, and marginalia; captions and footnotes share one typographic system. Text and cover stocks are proofed separately to balance hand feel, color, and budget—with thread-sewn binding and a mill-ready spec sheet.",
    },
    content: {
      zh: "网格与留白服务于长文可读性，插图与脚注系统一致。\n\n纸张克重与装订方式按印量与成本联合选定。",
      en: "Grids and margins tuned for long-form reading; consistent figure and note systems.\n\nPaper weight and binding chosen with print run and budget.",
    },
  },
  {
    slug: "furniture-concept",
    category: "product",
    title: { zh: "家具系列概念", en: "Furniture series concept" },
    description: {
      zh: "模块化构件与材质研究。",
      en: "Modular parts and material studies.",
    },
    preview: {
      zh: "家具系列概念阶段：以三种截面构件通过搭接形成多种长宽高组合，便于平板包装。材质样板在模型阶段比对橡木贴面与金属脚盖的色差与触感，节点三维打印验证承重后再开模具。",
      en: "Furniture concept phase: three cross-section members combinable at multiple scales for flat-pack shipping. Oak veneer vs. metal foot caps are mocked up for color and touch; joints are 3D-printed for load tests before tooling.",
    },
    content: {
      zh: "通过少量模块组合多种尺度，便于仓储与运输。\n\n材质样板与结构节点在模型阶段验证。",
      en: "A small kit of parts scales across formats for storage and shipping.\n\nMaterial studies and joints validated in scale models.",
    },
  },
  {
    slug: "studio-retrofit",
    category: "spatial",
    title: { zh: "工作室改造", en: "Studio retrofit" },
    description: {
      zh: "工作区与材料库一体化空间。",
      en: "Integrated workspace and materials library.",
    },
    preview: {
      zh: "工作室改造将材料库与专注工位分层：入口处为材料岛台与样册墙，自然光充足便于比色；内侧工位靠可控台灯与隔音板材隔开打样区噪音。储物系统按「常用/归档」分区标签，缩短找样与归位时间。",
      en: "Studio retrofit layers the library and deep-work zones: an entry island and sample wall sit in daylight for color checks; desks inside use task lights and acoustic panels away from noisy prototyping. Storage is zoned for daily vs. archive stock to cut search time.",
    },
    content: {
      zh: "日光与人工照明分区控制，材料岛台便于比样。\n\n动静分区减少打样区对专注工位的干扰。",
      en: "Daylight and artificial light zoned for tasks; a central island for material samples.\n\nSeparating noisy making from focused desk work.",
    },
  },
];

const CATEGORY_CLASS = {
  graphic: "filter-icon--graphic",
  product: "filter-icon--product",
  spatial: "filter-icon--spatial",
};

const STORAGE_KEY = "portfolio-locale";

function pageType() {
  return document.body.dataset.page || "home";
}

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
    const key = (el.getAttribute("data-i18n") || "").trim();
    if (!key) return;
    el.textContent = t(key);
  });

  const pt = pageType();
  const titleEl = document.getElementById("doc-title");
  const meta = document.getElementById("meta-desc");
  if (titleEl && meta && pt !== "project") {
    if (pt === "welcome") {
      titleEl.textContent = t("doc.titleWelcome");
      meta.setAttribute("content", t("meta.descWelcome"));
    } else if (pt === "resume") {
      titleEl.textContent = t("doc.titleResume");
      meta.setAttribute("content", t("meta.descResume"));
    } else if (pt === "home") {
      titleEl.textContent = t("doc.title");
      meta.setAttribute("content", t("meta.desc"));
    }
  }

  document.querySelectorAll(".site-header .nav").forEach((el) => {
    el.setAttribute("aria-label", t("nav.aria"));
  });
  document.querySelectorAll(".lang-switch").forEach((el) => {
    el.setAttribute("aria-label", t("aria.langGroup"));
  });

  const filters = document.querySelector(".filters");
  if (filters) filters.setAttribute("aria-label", t("filter.aria"));

  document.querySelectorAll(".lang-btn[data-lang]").forEach((btn) => {
    const code = btn.getAttribute("data-lang");
    btn.textContent = code === "zh" ? t("lang.optionZh") : t("lang.optionEn");
    const active = code === locale;
    btn.classList.toggle("active", active);
    btn.setAttribute("aria-pressed", String(active));
  });
}

function renderTimeline(containerId, items) {
  const ul = document.getElementById(containerId);
  if (!ul) return;
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
  const skills = document.getElementById("resume-skills-text");
  if (skills) skills.textContent = RESUME.skills[locale] || RESUME.skills.zh;
}

function projectImageSrc(p) {
  if (p.image == null) return "";
  const s = String(p.image).trim();
  return s;
}

function projectHref(slug) {
  return `project.html?slug=${encodeURIComponent(slug)}`;
}

function thumbBlock(p, alt, hrefForCard, largeThumb) {
  const src = projectImageSrc(p);
  const sizeCls = largeThumb ? " project-thumb--large" : "";
  const wrapStart = hrefForCard ? `<a href="${hrefForCard}" class="project-thumb-wrap">` : "<div>";
  const wrapEnd = hrefForCard ? "</a>" : "</div>";
  if (src !== "") {
    return `${wrapStart}<div class="project-thumb project-thumb--img${sizeCls}">
        <img src="${escapeHtml(src)}" alt="${alt}" width="960" height="720" loading="lazy" decoding="async" />
        <span class="cat-badge">
          <span class="filter-icon ${CATEGORY_CLASS[p.category]}" aria-hidden="true"></span>
        </span>
      </div>${wrapEnd}`;
  }
  return `${wrapStart}<div class="project-thumb project-thumb--empty${sizeCls}" role="img" aria-label="${alt}">
        <span class="cat-badge">
          <span class="filter-icon ${CATEGORY_CLASS[p.category]}" aria-hidden="true"></span>
        </span>
      </div>${wrapEnd}`;
}

function projectCardPreview(p) {
  const raw = p.preview && (p.preview[locale] || p.preview.zh);
  if (raw) return raw;
  return p.description[locale] || p.description.zh;
}

function renderProfileHome() {
  const introEl = document.getElementById("profile-intro");
  const listEl = document.getElementById("profile-highlights");
  if (!introEl || !listEl) return;
  const block = PROFILE_HOME[locale] || PROFILE_HOME.zh;
  introEl.textContent = block.intro;
  listEl.innerHTML = block.highlights
    .map((line) => `<li>${escapeHtml(line)}</li>`)
    .join("");
}

function renderProjects() {
  const grid = document.getElementById("project-grid");
  if (!grid) return;
  grid.innerHTML = PROJECTS.map((p) => {
    const title = p.title[locale] || p.title.zh;
    const previewText = projectCardPreview(p);
    const alt = escapeHtml(title);
    const href = projectHref(p.slug);
    const thumb = thumbBlock(p, alt, href, true);
    return `<article class="project-card project-card--preview" data-category="${p.category}">
      ${thumb}
      <div class="project-body">
        <h3><a href="${href}" class="project-title-link">${escapeHtml(title)}</a></h3>
        <p class="project-preview">${escapeHtml(previewText)}</p>
        <p class="project-more"><a href="${href}" class="link-cta subtle">${escapeHtml(t("project.open"))}</a></p>
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

function getProjectBySlug(slug) {
  if (!slug) return null;
  const decoded = decodeURIComponent(slug);
  return PROJECTS.find((p) => p.slug === decoded) || null;
}

function formatContentParagraphs(text) {
  if (!text) return "";
  return text
    .split(/\n\n+/)
    .map((para) => para.trim())
    .filter(Boolean)
    .map((para) => `<p>${escapeHtml(para)}</p>`)
    .join("");
}

function renderProjectPage() {
  const params = new URLSearchParams(window.location.search);
  const slug = params.get("slug");
  const project = getProjectBySlug(slug);
  const root = document.getElementById("project-root");
  const nf = document.getElementById("project-not-found");

  if (!root || !nf) return;

  if (!project) {
    root.innerHTML = "";
    root.hidden = true;
    nf.hidden = false;
    applyI18n();
    document.getElementById("doc-title").textContent = t("project.notFound");
    document.getElementById("meta-desc").setAttribute("content", t("project.notFound"));
    return;
  }

  nf.hidden = true;
  root.hidden = false;

  const title = project.title[locale] || project.title.zh;
  const desc = project.description[locale] || project.description.zh;
  const bodyHtml = formatContentParagraphs(project.content[locale] || project.content.zh || "");
  const src = projectImageSrc(project);
  const alt = escapeHtml(title);
  const catLabel = t(`filter.${project.category}`);

  const media =
    src !== ""
      ? `<div class="project-detail-media project-thumb project-thumb--img">
          <img src="${escapeHtml(src)}" alt="${alt}" width="1200" height="675" loading="eager" decoding="async" />
          <span class="cat-badge" aria-label="${escapeHtml(catLabel)}">
            <span class="filter-icon ${CATEGORY_CLASS[project.category]}" aria-hidden="true"></span>
          </span>
        </div>`
      : `<div class="project-detail-media project-thumb project-thumb--empty" role="img" aria-label="${alt}">
          <span class="cat-badge"><span class="filter-icon ${CATEGORY_CLASS[project.category]}" aria-hidden="true"></span></span>
        </div>`;

  root.innerHTML = `<article class="project-detail">
    ${media}
    <header class="project-detail-header">
      <p class="project-detail-meta"><span class="project-detail-cat">${escapeHtml(catLabel)}</span></p>
      <h1 class="project-detail-title">${escapeHtml(title)}</h1>
      <p class="project-detail-lead">${escapeHtml(desc)}</p>
    </header>
    <div class="project-detail-body">${bodyHtml}</div>
  </article>`;

  document.getElementById("doc-title").textContent = `${title} · ${t("site.name")}`;
  document.getElementById("meta-desc").setAttribute("content", desc);
  applyI18n();
}

function onLocaleChange() {
  const pt = pageType();
  const filter = document.querySelector(".filter.active")?.getAttribute("data-filter") || "all";
  applyI18n();
  if (pt === "welcome") {
    return;
  }
  if (pt === "home") {
    renderProfileHome();
    renderProjects();
    reapplyFilterState(filter);
  } else if (pt === "resume") {
    renderResume();
  } else if (pt === "project") {
    renderProjectPage();
  }
  setupContactMail();
}

function setupLang() {
  document.querySelectorAll(".lang-btn").forEach((btn) => {
    btn.addEventListener("click", () => {
      const next = btn.getAttribute("data-lang");
      if (next === locale) return;
      locale = next;
      localStorage.setItem(STORAGE_KEY, locale);
      onLocaleChange();
    });
  });
}

function setupPrint() {
  const btn = document.getElementById("btn-print-resume");
  if (btn) btn.addEventListener("click", () => window.print());
}

function setupContactMail() {
  const a = document.getElementById("contact-mail");
  if (a) {
    a.href = `mailto:${CONTACT_EMAIL}`;
    a.textContent = CONTACT_EMAIL;
  }
}

function initHome() {
  applyI18n();
  renderProfileHome();
  renderProjects();
  setupFilters();
  setupLang();
  setupPrint();
  setupContactMail();
}

function initResume() {
  applyI18n();
  renderResume();
  setupLang();
  setupPrint();
  setupContactMail();
}

function initProject() {
  applyI18n();
  renderProjectPage();
  setupLang();
  setupContactMail();
}

function initWelcome() {
  applyI18n();
  setupLang();
  const enter = document.getElementById("welcome-enter");
  if (enter) {
    enter.addEventListener("click", () => {
      window.location.href = "home.html";
    });
  }
}

const y = document.getElementById("year");
if (y) y.textContent = String(new Date().getFullYear());

const pt = pageType();
if (pt === "welcome") initWelcome();
else if (pt === "home") initHome();
else if (pt === "resume") initResume();
else if (pt === "project") initProject();
