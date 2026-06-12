(function () {
  "use strict";

  const variant = {
    name: "Figma",
    title: "A canvas of cases, systems, and visible proof.",
    lens: "Portfolio canvas",
    source: "Black frame, color blocks, case-study tiles, design-system evidence.",
    command: "npx getdesign@latest add figma",
    accent: "Case-study CV"
  };

  const data = window.resumeData || {};
  const person = data.person || {};

  const esc = (value) => String(value || "").replace(/[&<>"']/g, (char) => ({
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    "\"": "&quot;",
    "'": "&#39;"
  }[char]));

  const path = (href) => {
    if (!href) return href;
    if (/^https?:\/\//.test(href)) return href;
    return href.replace(/^\.\.\//, "");
  };

  const linkLabel = (label) => {
    if (/演示/.test(label)) return "在线演示";
    if (/源码|仓库/.test(label)) return "源码仓库";
    if (/PDF/.test(label)) return "PDF";
    return label || "查看";
  };

  const list = (items, limit) => (items || []).slice(0, limit || items.length)
    .map((item) => `<li>${esc(item)}</li>`)
    .join("");

  const normalizeExperience = () => [
    ...(data.leadership || []).map((item) => ({
      date: item.period,
      title: item.role,
      label: "Leadership",
      points: item.points || []
    })),
    ...(data.practice || []).map((item) => ({
      date: item.period,
      title: item.name,
      label: item.role,
      points: item.points || []
    }))
  ];

  const awardGroups = () => {
    const awards = data.awards || [];
    const competition = awards.filter((item) => /竞赛|力学|数学|物理|生物|化学|Agent|模型|创意/.test(item));
    const scholarship = awards.filter((item) => /奖学金|强基|励志|海昌|读书郎/.test(item));
    const publicHonor = awards.filter((item) => !competition.includes(item) && !scholarship.includes(item));
    return [
      ["奖学金与选拔", scholarship],
      ["竞赛与课程奖励", competition],
      ["公共实践与校园荣誉", publicHonor]
    ].filter((group) => group[1].length);
  };

  const projectCards = () => (data.aiProjects || []).map((project, index) => `
    <article class="project-card">
      <div class="project-top">
        <h3>${esc(project.name)}</h3>
        <span class="project-type">${esc(project.type)}</span>
      </div>
      <ul>${list(project.points, 2)}</ul>
      <div class="tags">${(project.tags || []).map((tag) => `<span class="chip">${esc(tag)}</span>`).join("")}</div>
      ${(project.links || []).length ? `<div class="project-links">${project.links.map((link) => `<a href="${esc(path(link.url))}" target="_blank" rel="noreferrer">${esc(linkLabel(link.label))}</a>`).join("")}</div>` : ""}
    </article>
  `).join("");

  const methodCards = () => (data.abilities || []).map((item, index) => `
    <article class="method-card">
      <span class="section-no">${String(index + 1).padStart(2, "0")}</span>
      <strong>${esc(item.title)}</strong>
      <p>${esc(item.text)}</p>
    </article>
  `).join("");

  const awards = () => awardGroups().map(([title, items]) => `
    <article class="award-card">
      <h3>${esc(title)}</h3>
      <ul>${list(items, 5)}</ul>
    </article>
  `).join("");

  const experience = () => normalizeExperience().map((item, index) => `
    <article class="experience-card">
      <div>
        <div class="experience-date">${esc(item.date || `EXP-${String(index + 1).padStart(2, "0")}`)}</div>
        <span class="chip">${esc(item.label)}</span>
      </div>
      <div>
        <h3>${esc(item.title)}</h3>
        <ul>${list(item.points, 3)}</ul>
      </div>
    </article>
  `).join("");

  const app = document.getElementById("app");
  document.title = `${person.name || "纪文龙"} | ${variant.name} UI CV`;

  app.innerHTML = `
    <main class="cv-shell">
      <header class="cv-nav">
        <a class="cv-brand" href="index.html">
          <strong>${esc(person.name)} · ${esc(person.roman)}</strong>
          <span>Figma style formal CV</span>
        </a>
        <nav class="nav-links" aria-label="页面导航">
          <a href="#method">方法</a>
          <a href="#projects">项目</a>
          <a href="#experience">经历</a>
          <a href="#awards">奖项</a>
          <a href="resume/javon-formal-cv-cn.pdf">中文 PDF</a>
          <a href="resume/javon-formal-cv.pdf">English PDF</a>
        </nav>
      </header>

      <section class="hero">
        <div class="hero-main">
          <p class="eyebrow">${esc(variant.accent)} · ${esc(variant.lens)}</p>
          <h1>${esc(variant.title)}</h1>
          <p class="subtitle">${esc(person.statement)}</p>
          <div class="actions">
            <a class="button-link primary" href="#projects">查看项目证据</a>
            <a class="button-link" href="mailto:${esc(person.email)}">联系邮箱</a>
            <a class="button-link" href="resume/javon-formal-cv-cn.pdf">中文 PDF</a>
            <a class="button-link" href="resume/javon-formal-cv.pdf">English PDF</a>
          </div>
        </div>
        <aside class="hero-side">
          <dl class="profile-grid">
            <div><dt>姓名</dt><dd>${esc(person.name)} / ${esc(person.roman)}</dd></div>
            <div><dt>身份</dt><dd>${esc(person.title)}</dd></div>
            <div><dt>方向</dt><dd>${esc(person.program)}</dd></div>
            <div><dt>定位</dt><dd>${esc(person.positioning)}</dd></div>
            <div><dt>邮箱</dt><dd>${esc(person.email)}</dd></div>
          </dl>
          <div class="signature-block">
            <strong>${esc(variant.command)}</strong>
            <p>${esc(variant.source)} 这里仅借鉴公开可观察的设计语言，不使用对应品牌标识或官网文案。</p>
          </div>
        </aside>
      </section>

      <section class="section" id="method">
        <div class="section-head">
          <span class="section-no">01 / Method</span>
          <div>
            <h2>AI 使用方法论</h2>
            <p>把 AI 当成工程协作系统，而不是自动抽卡系统：先定边界，再拆任务，再审证据。</p>
          </div>
        </div>
        <div class="method-grid">${methodCards()}</div>
      </section>

      <section class="section" id="projects">
        <div class="section-head">
          <span class="section-no">02 / Projects</span>
          <div>
            <h2>AI 与工程项目</h2>
            <p>每个项目都保留问题、方法、技术和可打开证据，方便招聘者或协作者快速判断真实能力。</p>
          </div>
        </div>
        <div class="project-grid">${projectCards()}</div>
      </section>

      <section class="section" id="experience">
        <div class="section-head">
          <span class="section-no">03 / Practice</span>
          <div>
            <h2>经历与公共实践</h2>
            <p>不只呈现奖项，也呈现组织、讲解、教学、海外实践和公共协作场景。</p>
          </div>
        </div>
        <div class="experience-grid">${experience()}</div>
      </section>

      <section class="section" id="awards">
        <div class="section-head">
          <span class="section-no">04 / Awards</span>
          <div>
            <h2>荣誉奖项与竞赛奖项</h2>
            <p>按奖学金、竞赛、公共实践归类，避免长列表淹没重点。</p>
          </div>
        </div>
        <div class="award-grid">${awards()}</div>
      </section>

      <p class="footer-note">Formal online CV using the selected ${esc(variant.name)}-inspired direction.</p>
    </main>
  `;
}());
