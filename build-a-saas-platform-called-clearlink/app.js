const iconPaths = {
  dashboard: '<svg viewBox="0 0 24 24"><rect x="3" y="3" width="7" height="8" rx="2"/><rect x="14" y="3" width="7" height="5" rx="2"/><rect x="14" y="12" width="7" height="9" rx="2"/><rect x="3" y="15" width="7" height="6" rx="2"/></svg>',
  calendar: '<svg viewBox="0 0 24 24"><path d="M8 2v4M16 2v4M3 10h18"/><rect x="3" y="4" width="18" height="18" rx="3"/></svg>',
  workflow: '<svg viewBox="0 0 24 24"><path d="M6 5h12M6 12h12M6 19h12"/><path d="m3 5 1.5 1.5L7 3M3 12l1.5 1.5L7 10M3 19l1.5 1.5L7 17"/></svg>',
  message: '<svg viewBox="0 0 24 24"><path d="M21 11.5a8.4 8.4 0 0 1-9 8.4 8.9 8.9 0 0 1-3.8-.9L3 21l1.8-4.8A8.5 8.5 0 1 1 21 11.5Z"/></svg>',
  document: '<svg viewBox="0 0 24 24"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8Z"/><path d="M14 2v6h6M8 13h8M8 17h6"/></svg>',
  wallet: '<svg viewBox="0 0 24 24"><path d="M20 7V6a2 2 0 0 0-2-2H5a3 3 0 0 0 0 6h15v10H5a3 3 0 0 1-3-3V7"/><path d="M16 14h.01"/></svg>',
  star: '<svg viewBox="0 0 24 24"><path d="m12 2 3.1 6.3 6.9 1-5 4.9 1.2 6.8-6.2-3.2L5.8 21 7 14.2 2 9.3l6.9-1Z"/></svg>',
  chart: '<svg viewBox="0 0 24 24"><path d="M3 3v18h18"/><path d="M7 16V9M12 16V5M17 16v-4"/></svg>',
  bell: '<svg viewBox="0 0 24 24"><path d="M18 8a6 6 0 1 0-12 0c0 7-3 7-3 9h18c0-2-3-2-3-9"/><path d="M10 21h4"/></svg>',
  plus: '<svg viewBox="0 0 24 24"><path d="M12 5v14M5 12h14"/></svg>',
  lock: '<svg viewBox="0 0 24 24"><rect x="4" y="10" width="16" height="11" rx="2"/><path d="M8 10V7a4 4 0 0 1 8 0v3"/></svg>',
  shield: '<svg viewBox="0 0 24 24"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10Z"/><path d="m9 12 2 2 4-5"/></svg>',
  alert: '<svg viewBox="0 0 24 24"><path d="m12 2 10 18H2Z"/><path d="M12 8v5M12 17h.01"/></svg>',
  briefcase: '<svg viewBox="0 0 24 24"><rect x="3" y="7" width="18" height="13" rx="2"/><path d="M8 7V5a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2M3 13h18"/></svg>',
  camera: '<svg viewBox="0 0 24 24"><path d="M14.5 4h-5L8 7H5a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-3Z"/><circle cx="12" cy="13" r="3"/></svg>'
};

const hierarchyRoles = {
  executive: {
    clientLabel: "Shareholder/Executive",
    providerLabel: "Owner/Shareholder",
    scope: "Full visibility across all sites, financials, compliance scores, contract summaries, invoices, and audit records.",
    pages: ["overview", "jobcards", "access", "compliance", "incidents", "billing", "mobile", "provider", "audit", "feedback"]
  },
  manager: {
    clientLabel: "Manager/Supervisor",
    providerLabel: "Manager/Supervisor",
    scope: "Branch or property visibility for task completion, incidents, staff assignments, compliance feedback, and mobile evidence.",
    pages: ["overview", "jobcards", "access", "compliance", "incidents", "mobile", "provider", "feedback"]
  },
  worker: {
    clientLabel: "General Worker",
    providerLabel: "General Worker",
    scope: "Limited mobile access to assigned job cards, notes, photo evidence, geo-tagging, and offline queue sync.",
    pages: ["overview", "jobcards", "mobile", "feedback"]
  }
};

const serviceCategories = [
  {
    id: "general",
    short: "GC",
    name: "General Cleaning",
    description: "Daily and scheduled cleaning across rooms, shared spaces, staff areas, and public facilities.",
    modules: ["Master Cleaning Schedules", "Task Assignment"],
    standard: "Checklist completion, photo proof, supervisor approval",
    score: "96%",
    incident: "Missed linen closet restock",
    corrective: "Assigned return task to morning crew"
  },
  {
    id: "carpet",
    short: "CU",
    name: "Carpet/Upholstery",
    description: "Fabric care, stain tracking, extraction cycles, drying checks, and steam-cleaning evidence.",
    modules: ["Stain Tracking", "Steam Cleaning Logs"],
    standard: "Stain log, chemical record, dry-time confirmation",
    score: "91%",
    incident: "Reception sofa stain reopened",
    corrective: "Steam clean logged with before/after images"
  },
  {
    id: "window",
    short: "WC",
    name: "Window/Ceiling",
    description: "High-reach windows, ceiling panels, light fittings, and safety-sensitive vertical surfaces.",
    modules: ["High-reach Scheduling", "Safety Compliance"],
    standard: "Harness clearance, ladder inspection, zone isolation",
    score: "94%",
    incident: "High window streaks reported",
    corrective: "Rework scheduled after wind conditions improve"
  },
  {
    id: "garden",
    short: "GM",
    name: "Garden Maintenance",
    description: "Seasonal upkeep, planting cycles, exterior presentation, irrigation checks, and resource planning.",
    modules: ["Seasonal Maintenance Calendar", "Resource Allocation"],
    standard: "Seasonal plan, resource sheet, green waste disposal",
    score: "89%",
    incident: "North garden irrigation fault",
    corrective: "Escalated to provider with parts request"
  },
  {
    id: "pool",
    short: "PC",
    name: "Pool Cleaning",
    description: "Water treatment, filter checks, poolside safety, chemical balance, and closure logs.",
    modules: ["Water Treatment Logs", "Filter Maintenance"],
    standard: "pH reading, filter inspection, chemical sign-off",
    score: "98%",
    incident: "Filter pressure alert",
    corrective: "Backwash completed and log attached"
  },
  {
    id: "roof",
    short: "GR",
    name: "Gutter/Roof Cleaning",
    description: "Roofline inspections, gutter clearing, drainage checks, and preventive maintenance records.",
    modules: ["Inspection Reports", "Preventive Maintenance"],
    standard: "Weather check, roof access clearance, inspection report",
    score: "92%",
    incident: "Blocked west gutter",
    corrective: "Preventive clean scheduled before rainfall"
  }
];

const state = {
  authRole: "client",
  mode: "client",
  clientType: "Guest House",
  accessRole: "executive",
  selectedCategories: ["general", "carpet", "pool"]
};

const landingPage = document.querySelector("#landingPage");
const appShell = document.querySelector("#appShell");
const loginForm = document.querySelector("#loginForm");
const loginButton = document.querySelector("#loginButton");
const clientAuth = document.querySelector("#clientAuth");
const providerAuth = document.querySelector("#providerAuth");
const clientTypeSelect = document.querySelector("#clientTypeSelect");
const clientHierarchySelect = document.querySelector("#clientHierarchySelect");
const providerHierarchySelect = document.querySelector("#providerHierarchySelect");
const providerCategoryChoices = document.querySelector("#providerCategoryChoices");
const roleSelect = document.querySelector("#roleSelect");
const accessRoleSelect = document.querySelector("#accessRoleSelect");
const pageTitle = document.querySelector("#pageTitle");
const navItems = document.querySelectorAll(".nav-item");
const pages = document.querySelectorAll(".page");
const propertyButton = document.querySelector("#propertyButton");
const propertyMenu = document.querySelector("#propertyMenu");
const activeAccountName = document.querySelector("#activeAccountName");
const accountModeLabel = document.querySelector("#accountModeLabel");
const categorySummary = document.querySelector("#categorySummary");
const workspaceHeadline = document.querySelector("#workspaceHeadline");
const workspaceCopy = document.querySelector("#workspaceCopy");
const workspaceEyebrow = document.querySelector("#workspaceEyebrow");
const leftNodeTitle = document.querySelector("#leftNodeTitle");
const leftNodeCopy = document.querySelector("#leftNodeCopy");
const rightNodeTitle = document.querySelector("#rightNodeTitle");
const rightNodeCopy = document.querySelector("#rightNodeCopy");
const modeContext = document.querySelector("#modeContext");
const backToLogin = document.querySelector("#backToLogin");
const syncStatus = document.querySelector("#syncStatus");
const geoField = document.querySelector("#geoField");
const offlineQueueCount = document.querySelector("#offlineQueueCount");
const offlineQueueList = document.querySelector("#offlineQueueList");
const feedbackList = document.querySelector("#feedbackList");

function selectedServices() {
  if (state.mode === "client") return serviceCategories;
  return serviceCategories.filter((service) => state.selectedCategories.includes(service.id));
}

function formatCategorySummary() {
  if (state.mode === "client") return "All contracted services";
  const count = selectedServices().length;
  return `${count} selected categor${count === 1 ? "y" : "ies"}`;
}

function currentHierarchy() {
  return hierarchyRoles[state.accessRole];
}

function canAccess(pageId) {
  return currentHierarchy().pages.includes(pageId);
}

function renderIcons() {
  document.querySelectorAll("[data-icon]").forEach((item) => {
    item.innerHTML = iconPaths[item.dataset.icon] || "";
  });
}

function renderProviderChoices() {
  providerCategoryChoices.innerHTML = serviceCategories.map((service) => `
    <label class="category-option">
      <input type="checkbox" value="${service.id}" ${state.selectedCategories.includes(service.id) ? "checked" : ""}>
      <span><strong>${service.name}</strong><span>${service.modules.join(" + ")}</span></span>
    </label>
  `).join("");
}

function updateAuthRole(role) {
  state.authRole = role;
  document.querySelectorAll(".auth-tab").forEach((tab) => {
    tab.classList.toggle("active", tab.dataset.authRole === role);
  });
  clientAuth.classList.toggle("hidden", role !== "client");
  providerAuth.classList.toggle("hidden", role !== "provider");
  loginButton.lastChild.textContent = role === "client" ? " Enter Client Dashboard" : " Enter Provider Dashboard";
}

function activatePage(pageId) {
  if (!canAccess(pageId)) {
    pageId = "overview";
  }
  pages.forEach((page) => page.classList.toggle("active", page.id === pageId));
  navItems.forEach((item) => item.classList.toggle("active", item.dataset.page === pageId));
  const page = document.getElementById(pageId);
  const titleKey = state.mode === "client" ? "titleClient" : "titleProvider";
  pageTitle.textContent = page.dataset[titleKey] || "Clearlink Dashboard";
  window.location.hash = pageId;
}

function renderModeContext() {
  const isClient = state.mode === "client";
  const hierarchy = currentHierarchy();
  const roleLabel = isClient ? hierarchy.clientLabel : hierarchy.providerLabel;
  const title = isClient ? `${state.clientType} ${roleLabel} dashboard` : `Service provider ${roleLabel} dashboard`;
  const copy = isClient
    ? "A unified control center for compliance, incidents, billing, contracts, access permissions, and job-card approvals across every contracted service category."
    : "A category-aware provider workspace that exposes only the tools needed for selected service lines while keeping incidents, corrective actions, compliance feedback, and payouts contract-linked.";
  const tools = isClient
    ? ["Unified compliance", "Custom job cards", "Zone permissions", "Billing renewals", "Offline mobile evidence"]
    : selectedServices().flatMap((service) => service.modules).concat(["Offline evidence", "Corrective actions"]).slice(0, 6);

  modeContext.innerHTML = `
    <article class="role-card">
      <span class="eyebrow">Authenticated workspace</span>
      <h3>${title}</h3>
      <p>${copy}</p>
    </article>
    <article class="role-card">
      <span class="eyebrow">Hierarchy scope</span>
      <h3>${roleLabel}</h3>
      <p>${hierarchy.scope}</p>
      <div class="role-tools">${tools.map((tool) => `<span>${tool}</span>`).join("")}</div>
    </article>
  `;
}

function applyRoleVisibility() {
  navItems.forEach((item) => {
    item.hidden = !canAccess(item.dataset.page);
  });
  const activePage = document.querySelector(".page.active");
  if (activePage && !canAccess(activePage.id)) {
    activatePage("overview");
  }
}

function updateSyncStatus() {
  const pending = readOfflineQueue().length;
  const status = navigator.onLine ? "Online sync ready" : "Offline capture mode";
  syncStatus.textContent = pending > 0 ? `${status} - ${pending} queued` : status;
}

function readOfflineQueue() {
  try {
    return JSON.parse(localStorage.getItem("clearlinkOfflineQueue") || "[]");
  } catch {
    return [];
  }
}

function writeOfflineQueue(queue) {
  localStorage.setItem("clearlinkOfflineQueue", JSON.stringify(queue));
  renderOfflineQueue();
}

function renderOfflineQueue() {
  const queue = readOfflineQueue();
  offlineQueueCount.textContent = `${queue.length} pending update${queue.length === 1 ? "" : "s"}`;
  offlineQueueList.innerHTML = queue.length
    ? queue.map((item) => `
      <div class="compact-item">
        <strong>${item.target}</strong>
        <span>${item.note}</span>
        <small>${item.geo} - ${item.time}</small>
      </div>
    `).join("")
    : `<div class="compact-item"><strong>No pending offline updates</strong><span>Worker photos, notes, and job-card updates will appear here when saved offline.</span></div>`;
  updateSyncStatus();
}

function syncOfflineQueue() {
  if (!navigator.onLine) {
    renderOfflineQueue();
    return;
  }
  const queue = readOfflineQueue();
  if (queue.length === 0) return;
  const audit = readAuditEvents();
  queue.forEach((item) => {
    audit.unshift(["Sync", "Offline capture synced", `${item.target} uploaded with geo-tag metadata ${item.geo}.`]);
  });
  localStorage.setItem("clearlinkAuditEvents", JSON.stringify(audit.slice(0, 8)));
  writeOfflineQueue([]);
  renderAudit();
}

function readAuditEvents() {
  try {
    return JSON.parse(localStorage.getItem("clearlinkAuditEvents") || "[]");
  } catch {
    return [];
  }
}

function readFeedback() {
  try {
    return JSON.parse(localStorage.getItem("clearlinkFeedback") || "[]");
  } catch {
    return [];
  }
}

function renderFeedback() {
  const items = readFeedback();
  feedbackList.innerHTML = items.length
    ? items.map((item) => `
      <div class="compact-item">
        <strong>${item.account}</strong>
        <span>${item.text}</span>
        <small>${item.time}</small>
      </div>
    `).join("")
    : `<div class="compact-item"><strong>No feedback yet</strong><span>Soft-launch tester impressions will be stored here for tweaking before rollout.</span></div>`;
}

function renderWorkspaceChrome() {
  const isClient = state.mode === "client";
  const hierarchy = currentHierarchy();
  accountModeLabel.textContent = isClient ? "Client workspace" : "Provider workspace";
  workspaceEyebrow.textContent = isClient ? "Client service control center" : "Service provider operations center";
  roleSelect.value = state.mode;
  accessRoleSelect.value = state.accessRole;
  categorySummary.textContent = formatCategorySummary();
  activeAccountName.textContent = isClient ? `Harbour View ${state.clientType}` : "BlueWave Service Provider";
  workspaceHeadline.textContent = isClient
    ? "Unified compliance and billing across all contracted services."
    : "Dynamic operations for single-service and multi-service providers.";
  workspaceCopy.textContent = isClient
    ? `Clients see one control center for properties, service categories, contracts, access permissions, incidents, invoices, retainers, commissions, audit history, and ${hierarchy.clientLabel.toLowerCase()} scope.`
    : `Provider dashboards adapt to selected service categories, surfacing schedules, logs, corrective actions, compliance feedback, payout data, and ${hierarchy.providerLabel.toLowerCase()} scope.`;
  leftNodeTitle.textContent = isClient ? "Client" : "Provider";
  leftNodeCopy.textContent = isClient ? "Guest House / Apartment / Casino / Old Age Home" : "Selected service categories";
  rightNodeTitle.textContent = isClient ? "Service Provider" : "Client Contracts";
  rightNodeCopy.textContent = isClient ? "Vetted category specialists" : "Approved properties and SLAs";
}

function renderOverview() {
  const isClient = state.mode === "client";
  const baseStats = isClient
    ? [
        ["Compliance score", "94%", "Across all contracted services", ""],
        ["Open incidents", "7", "3 escalated to providers", "sky"],
        ["Active job cards", "42", "All linked to contracts", "teal"],
        ["Billing due", "R18.4k", "Retainers + compliance invoices", "navy"]
      ]
    : [
        ["Selected services", selectedServices().length, "Dynamic dashboard modules", ""],
        ["Assigned job cards", "18", "Contract-linked work", "sky"],
        ["Compliance feedback", "93%", "Average category score", "teal"],
        ["Payout queue", "R12.4k", "After client approval", "navy"]
      ];
  const stats = state.accessRole === "worker"
    ? [
        ["Assigned jobs", "5", "Only your job-card scope", ""],
        ["Offline queue", readOfflineQueue().length, "Pending mobile updates", "sky"],
        ["Evidence uploads", "12", "Photos and notes this week", "teal"],
        ["Sync status", navigator.onLine ? "Online" : "Offline", "Auto-sync when restored", "navy"]
      ]
    : baseStats;

  document.querySelector("#overviewStats").innerHTML = stats.map(([label, value, detail, tone]) => `
    <article class="stat-card ${tone}">
      <span>${label}</span>
      <strong>${value}</strong>
      <small>${detail}</small>
    </article>
  `).join("");

  document.querySelector("#overviewPanelEyebrow").textContent = isClient ? "Unified client view" : "Provider category view";
  document.querySelector("#overviewPanelTitle").textContent = isClient
    ? "Compliance across all contracted services"
    : "Operational focus across selected services";

  const board = isClient
    ? [
        ["Compliance", ["General Cleaning: 96%", "Pool Cleaning: 98%", "Old age home common areas: 95%"], "active"],
        ["Incidents", ["Carpet stain: rework due", "Garden irrigation: parts request"], "warning"],
        ["Billing", ["Small: R1,500-R3,000", "Mid-tier: R2,500-R5,000", "Large: R7,500-R15,000"], ""]
      ]
    : [
        ["Today", selectedServices().slice(0, 2).map((service) => `${service.name}: ${service.modules[0]}`), "active"],
        ["Corrective actions", selectedServices().slice(0, 2).map((service) => service.corrective), "warning"],
        ["Compliance feedback", selectedServices().slice(0, 2).map((service) => `${service.name}: ${service.score}`), ""]
      ];

  document.querySelector("#overviewBoard").innerHTML = board.map(([heading, items, tone]) => `
    <div class="status-column">
      <h4>${heading}</h4>
      ${items.map((item) => `<div class="mini-card ${tone}"><strong>${item}</strong><span>Contract-linked record</span></div>`).join("")}
    </div>
  `).join("");
}

function renderJobCards() {
  const allCards = [
    ["JC-1042", "General Cleaning", "Rooms 11-14", "High", "What/where/how approved by client"],
    ["JC-1088", "Pool Cleaning", "Outdoor pool", "Standard", "Water treatment log required"],
    ["JC-1120", "Carpet/Upholstery", "Reception sofa", "High", "Stain photos attached"],
    ["JC-1155", "Garden Maintenance", "Old age home courtyard", "Standard", "Seasonal calendar and resource allocation attached"]
  ];
  const cards = state.accessRole === "worker" ? allCards.slice(0, 2) : allCards;

  document.querySelector("#jobCardList").innerHTML = cards.map(([id, category, zone, priority, note]) => `
    <div class="compact-item">
      <strong>${id} - ${category}</strong>
      <span>${zone}</span>
      <small>${priority} priority - ${note}</small>
    </div>
  `).join("");
}

function renderAccessZones() {
  const zones = [
    ["Rooms", "General Cleaning", ["08:00-14:00", "Supervisor sign-in", "Guest areas only"]],
    ["Pool", "Pool Cleaning", ["Chemical access", "Filter room", "Closure log"]],
    ["Garden", "Garden Maintenance", ["Tool shed", "Irrigation panels", "Exterior only"]],
    ["Roof", "Gutter/Roof Cleaning", ["Weather check", "Harness required", "Manager approval"]],
    ["Windows", "Window/Ceiling", ["High-reach permit", "Public zone isolation", "Safety sign-off"]],
    ["Casino Floor", "General Cleaning", ["Night shift", "Security escort", "Restricted zones"]]
  ];

  document.querySelector("#zoneList").innerHTML = zones.map(([zone, category, permissions]) => `
    <article class="zone-card">
      <strong>${zone}</strong>
      <span>${category}</span>
      <div class="permission-list">${permissions.map((permission) => `<span>${permission}</span>`).join("")}</div>
      <small>Permission tied to active contract</small>
    </article>
  `).join("");
}

function renderCompliance() {
  const rows = selectedServices().map((service) => [service.name, service.standard, service.score, "Contract SLA", "Audited"]);
  document.querySelector("#complianceTable").innerHTML = `
    <div class="table-row table-head"><span>Service</span><span>Standard</span><span>Score</span><span>Contract</span><span>Status</span></div>
    ${rows.map(([service, standard, score, contract, status]) => `
      <div class="table-row"><span>${service}</span><span>${standard}</span><span class="badge success">${score}</span><span>${contract}</span><span>${status}</span></div>
    `).join("")}
  `;
}

function renderIncidents() {
  const services = selectedServices();
  document.querySelector("#incidentCategorySelect").innerHTML = services.map((service) => `<option>${service.name}</option>`).join("");
  document.querySelector("#incidentList").innerHTML = services.slice(0, 4).map((service) => `
    <div class="compact-item">
      <strong>${service.incident}</strong>
      <span>${service.name}</span>
      <small>${service.corrective}</small>
    </div>
  `).join("");
}

function renderBilling() {
  const rows = [
    ["INV-2041", "Small client retainer", "Master contract", "R1,500-R3,000", "Due"],
    ["INV-2045", "Mid-tier retainer", "Apartment services SLA", "R2,500-R5,000", "Scheduled"],
    ["INV-2046", "Large facility retainer", "Casino / old age home SLA", "R7,500-R15,000", "Scheduled"],
    ["INV-2042", "JC-1042 commission", "General Cleaning", "15%", "Queued"],
    ["INV-2043", "JC-1088 commission", "Pool Cleaning", "15%", "Approved"],
    ["INV-2044", "Contract renewal", "BlueWave SLA", "R0", "Reminder"]
  ];

  document.querySelector("#billingTable").innerHTML = `
    <div class="table-row table-head"><span>Invoice</span><span>Source</span><span>Contract link</span><span>Charge</span></div>
    ${rows.map(([invoice, source, link, charge, status]) => `
      <div class="table-row"><span>${invoice}</span><span>${source}</span><span>${link}</span><span><span class="badge info">${charge}</span> ${status}</span></div>
    `).join("")}
  `;
}

function renderProviderPanels() {
  const services = selectedServices();
  document.querySelector("#providerCountChip").textContent = `${services.length} categor${services.length === 1 ? "y" : "ies"}`;
  document.querySelector("#providerToolsTitle").textContent = state.mode === "client"
    ? "Client view of contracted provider capabilities"
    : "Provider dashboard adapts to selected service categories";

  document.querySelector("#providerCategoryPanels").innerHTML = services.map((service) => `
    <article class="category-panel">
      <header>
        <span class="category-icon">${service.short}</span>
        <div>
          <strong>${service.name}</strong>
          <span>${service.score} compliance feedback</span>
        </div>
      </header>
      <p>${service.description}</p>
      <div class="module-list">${service.modules.map((module) => `<span>${module}</span>`).join("")}</div>
      <div class="compact-item">
        <strong>Incident management</strong>
        <span>${service.incident}</span>
        <small>${service.corrective}</small>
      </div>
    </article>
  `).join("");
}

function renderAudit() {
  const savedEntries = readAuditEvents();
  const entries = savedEntries.length ? savedEntries : [
    ["09:12", "Access permission updated", "Roof zone opened for Gutter/Roof Cleaning under SLA-18."],
    ["10:25", "Job card completed", "JC-1088 linked pool logs, filter check, photos, and compliance score."],
    ["11:04", "Invoice generated", "15% commission applied to completed job card after client approval."],
    ["12:40", "Incident escalated", "Carpet/Upholstery complaint routed to provider corrective-action queue."],
    ["14:15", "PWA offline audit", "Worker note and photo evidence stored locally for auto-sync."],
    ["15:05", "Contract audit", "Monthly retainer tier, renewal reminder, and compliance pack confirmed."]
  ];

  document.querySelector("#auditList").innerHTML = entries.map(([time, title, detail]) => `
    <div class="audit-item">
      <time>${time}</time>
      <div><strong>${title}</strong><span>${detail}</span></div>
      <small>Locked</small>
    </div>
  `).join("");
}

function renderWorkspace() {
  renderWorkspaceChrome();
  applyRoleVisibility();
  renderModeContext();
  renderOverview();
  renderJobCards();
  renderAccessZones();
  renderCompliance();
  renderIncidents();
  renderBilling();
  renderProviderPanels();
  renderAudit();
  renderOfflineQueue();
  renderFeedback();
  const active = document.querySelector(".page.active") || document.querySelector("#overview");
  activatePage(active.id);
}

document.querySelectorAll(".auth-tab").forEach((tab) => {
  tab.addEventListener("click", () => updateAuthRole(tab.dataset.authRole));
});

loginForm.addEventListener("submit", (event) => {
  event.preventDefault();
  state.mode = state.authRole;
  state.clientType = clientTypeSelect.value;
  state.accessRole = state.authRole === "client" ? clientHierarchySelect.value : providerHierarchySelect.value;
  state.selectedCategories = Array.from(providerCategoryChoices.querySelectorAll("input:checked")).map((input) => input.value);
  if (state.mode === "provider" && state.selectedCategories.length === 0) {
    state.selectedCategories = ["general"];
  }
  landingPage.classList.add("hidden");
  appShell.classList.remove("app-hidden");
  renderWorkspace();
  activatePage("overview");
});

roleSelect.addEventListener("change", () => {
  state.mode = roleSelect.value;
  renderWorkspace();
  activatePage("overview");
});

accessRoleSelect.addEventListener("change", () => {
  state.accessRole = accessRoleSelect.value;
  renderWorkspace();
  activatePage("overview");
});

backToLogin.addEventListener("click", () => {
  appShell.classList.add("app-hidden");
  landingPage.classList.remove("hidden");
  window.location.hash = "";
});

navItems.forEach((item) => {
  item.addEventListener("click", () => activatePage(item.dataset.page));
});

propertyButton.addEventListener("click", () => {
  propertyMenu.classList.toggle("open");
});

propertyMenu.addEventListener("click", (event) => {
  if (!event.target.matches("button")) return;
  activeAccountName.textContent = event.target.dataset.property;
  propertyMenu.classList.remove("open");
});

document.addEventListener("click", (event) => {
  if (!event.target.closest(".property-switcher")) {
    propertyMenu.classList.remove("open");
  }
});

document.querySelectorAll(".demo-button").forEach((button) => {
  button.addEventListener("click", () => {
    const demo = button.dataset.demo;
    updateAuthRole(demo);
    if (demo === "client") {
      clientTypeSelect.value = "Old Age Home";
      clientHierarchySelect.value = "executive";
    } else {
      providerHierarchySelect.value = "manager";
      providerCategoryChoices.querySelectorAll("input").forEach((input) => {
        input.checked = ["general", "window", "garden", "roof"].includes(input.value);
      });
    }
    loginForm.requestSubmit();
  });
});

document.querySelector("#geoButton").addEventListener("click", () => {
  if (!navigator.geolocation) {
    geoField.value = "Geo-tag unavailable on this device";
    return;
  }
  navigator.geolocation.getCurrentPosition(
    (position) => {
      geoField.value = `${position.coords.latitude.toFixed(5)}, ${position.coords.longitude.toFixed(5)} +/- ${Math.round(position.coords.accuracy)}m`;
    },
    () => {
      geoField.value = "Demo geo-tag: -26.20410, 28.04730 +/- 35m";
    },
    { enableHighAccuracy: true, timeout: 5000 }
  );
});

document.querySelector("#saveOfflineCapture").addEventListener("click", () => {
  const queue = readOfflineQueue();
  const fileInput = document.querySelector("#capturePhoto");
  queue.unshift({
    target: document.querySelector("#captureTarget").value,
    note: document.querySelector("#offlineNote").value,
    geo: geoField.value || "Geo-tag pending",
    photo: fileInput.files.length ? fileInput.files[0].name : "No photo selected",
    time: new Date().toLocaleString()
  });
  writeOfflineQueue(queue.slice(0, 12));
  renderOverview();
});

document.querySelector("#syncButton").addEventListener("click", syncOfflineQueue);

document.querySelector("#submitFeedback").addEventListener("click", () => {
  const feedback = readFeedback();
  feedback.unshift({
    account: document.querySelector("#feedbackAccount").value,
    text: document.querySelector("#feedbackText").value,
    time: new Date().toLocaleString()
  });
  localStorage.setItem("clearlinkFeedback", JSON.stringify(feedback.slice(0, 8)));
  renderFeedback();
});

window.addEventListener("online", syncOfflineQueue);
window.addEventListener("online", updateSyncStatus);
window.addEventListener("offline", updateSyncStatus);

if ("serviceWorker" in navigator) {
  navigator.serviceWorker.register("sw.js").catch(() => {});
}

renderProviderChoices();
renderIcons();
updateAuthRole("client");
renderOfflineQueue();
renderFeedback();
updateSyncStatus();
