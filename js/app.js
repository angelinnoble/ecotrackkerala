// EcoTrack Kerala - Main App Logic
// Router, Page Renderer, and Core Functions

const App = {
  map: null,
  collectorMarkers: [],
  householdMarkers: [],
  centerMarkers: [],
  locationWatcher: null,

  init() {
    this.renderNav();
    this.setupNavEvents();
    AppState.subscribe((key) => {
      if (key === 'currentPage') this.renderPage();
      if (key === 'language') this.onLanguageChange();
    });
    this.renderPage();
    this.setupToastContainer();
  },

  // ── NAVIGATION ──────────────────────────────────────────────────
  renderNav() {
    const user = AppState.get('currentUser');
    const lang = AppState.get('language');
    const t = key => AppState.t(key);
    document.getElementById('navbar').innerHTML = `
      <div class="navbar-inner">
        <div class="nav-brand" onclick="App.navigate('landing')" style="cursor:pointer">
          <div class="brand-icon">🌿</div>
          <span>EcoTrack <span style="color:var(--primary-light)">Kerala</span></span>
        </div>
        <nav class="nav-links" id="navLinks">
          <button class="nav-link" onclick="App.navigate('landing')">${t('nav_home')}</button>
          <button class="nav-link" onclick="App.navigate('waste_guide')">${t('nav_collection')}</button>
          <button class="nav-link" onclick="App.navigate('map_page')">${t('nav_map')}</button>
          ${user ? `<button class="nav-link" onclick="App.navigate('${user.role === 'admin' ? 'admin_dashboard' : user.role === 'collector' ? 'hks_dashboard' : 'household_dashboard'}')">${t('nav_dashboard')}</button>` : ''}
        </nav>
        <div class="nav-actions">
          <button class="lang-toggle" onclick="App.toggleLanguage()">
            ${lang === 'en' ? '🇮🇳 മലയാളം' : '🇬🇧 English'}
          </button>
          ${user ? `
            <div style="position:relative">
              <button class="btn btn-sm btn-secondary" onclick="App.toggleNotifPanel()" id="notifBtn">
                🔔 <span class="notif-badge" id="notifCount" style="display:inline-flex">3</span>
              </button>
              <div class="notif-panel hidden" id="notifPanel">
                <div class="notif-header"><span>🔔 Notifications</span><button onclick="App.toggleNotifPanel()" style="background:none;border:none;cursor:pointer;font-size:1.1rem">×</button></div>
                <div class="notif-list" id="notifList">${this.renderNotifications()}</div>
              </div>
            </div>
            <button class="btn btn-sm btn-primary" onclick="App.logout()">🚪 ${t('nav_logout')}</button>
          ` : `
            <button class="btn btn-sm btn-secondary" onclick="App.navigate('login')">${t('nav_login')}</button>
            <button class="btn btn-sm btn-primary" onclick="App.navigate('register')">${t('nav_register')}</button>
          `}
          <button class="nav-toggle" onclick="App.toggleMobileNav()" id="navToggle">☰</button>
        </div>
      </div>`;
  },

  renderNotifications() {
    const notifs = [
      { icon: '🚛', text: 'Waste collection scheduled for tomorrow 7 AM.', time: '2 hours ago' },
      { icon: '✅', text: 'Your pickup request has been confirmed.', time: 'Yesterday' },
      { icon: '📢', text: 'New ward cleanliness drive on Saturday.', time: '2 days ago' },
    ];
    return notifs.map(n => `
      <div class="notif-item">
        <span class="notif-icon">${n.icon}</span>
        <div>
          <div class="notif-text">${n.text}</div>
          <div class="notif-time">${n.time}</div>
        </div>
      </div>`).join('');
  },

  setupNavEvents() {
    document.addEventListener('click', (e) => {
      const panel = document.getElementById('notifPanel');
      const btn = document.getElementById('notifBtn');
      if (panel && !panel.contains(e.target) && btn && !btn.contains(e.target)) {
        panel.classList.add('hidden');
      }
    });
  },

  toggleMobileNav() {
    document.getElementById('navLinks').classList.toggle('open');
  },

  toggleNotifPanel() {
    document.getElementById('notifPanel')?.classList.toggle('hidden');
  },

  toggleLanguage() {
    const newLang = AppState.get('language') === 'en' ? 'ml' : 'en';
    AppState.set('language', newLang);
    localStorage.setItem('ecotrack_lang', newLang);
  },

  onLanguageChange() {
    document.body.classList.toggle('lang-ml', AppState.get('language') === 'ml');
    this.renderNav();
    this.renderPage();
  },

  navigate(page) {
    document.getElementById('navLinks').classList.remove('open');
    AppState.set('currentPage', page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  },

  logout() {
    AppState.logout();
    this.renderNav();
    this.showToast('Logged out successfully.', 'success');
  },

  // ── PAGE ROUTER ─────────────────────────────────────────────────
  renderPage() {
    const page = AppState.get('currentPage');
    const main = document.getElementById('main-content');
    this.renderNav();
    // Destroy map if leaving map page
    if (page !== 'map_page' && this.map) {
      this.map.remove(); this.map = null;
    }
    switch (page) {
      case 'landing':
        main.innerHTML = Pages.landing();
        setTimeout(() => this.initLandingPreviewMap(), 400);
        break;
      case 'login':            main.innerHTML = Pages.login();       break;
      case 'register':         main.innerHTML = Pages.register();    break;
      case 'waste_guide':      main.innerHTML = Pages.wasteGuide();  break;
      case 'map_page':         main.innerHTML = Pages.mapPage(); setTimeout(() => this.initMap(), 100); break;
      case 'household_dashboard': main.innerHTML = Pages.householdDashboard(); break;
      case 'hks_dashboard':    main.innerHTML = Pages.hksDashboard(); break;
      case 'admin_dashboard':  main.innerHTML = Pages.adminDashboard(); break;
      default:                 main.innerHTML = Pages.landing(); setTimeout(() => this.initLandingPreviewMap(), 400);
    }
    main.className = 'page';
  },

  // ── MAP ─────────────────────────────────────────────────────────
  initMap(centerLat = 10.1632, centerLng = 76.6413, zoom = 7) {
    if (this.map) { this.map.remove(); this.map = null; }
    const mapEl = document.getElementById('kerala-map');
    if (!mapEl) return;
    this.map = L.map('kerala-map', { zoomControl: true, scrollWheelZoom: true }).setView([centerLat, centerLng], zoom);
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '© <a href="https://openstreetmap.org">OpenStreetMap</a> contributors',
      maxZoom: 19
    }).addTo(this.map);

    // District markers
    KERALA_DATA.districts.forEach(d => {
      const icon = L.divIcon({
        className: '', html: `<div style="background:var(--primary);color:white;padding:4px 10px;border-radius:12px;font-size:0.7rem;font-weight:700;white-space:nowrap;box-shadow:0 2px 8px rgba(0,0,0,0.2)">${d.name}</div>`,
        iconAnchor: [40, 10]
      });
      L.marker([d.lat, d.lng], { icon }).addTo(this.map)
        .bindPopup(`<div class="map-popup-title">📍 ${d.name}</div><div class="map-popup-info">${d.nameML}</div><div class="map-popup-info">HQ: ${d.headquarters}</div>`);
    });

    // Collection centers
    COLLECTION_CENTERS.forEach(cc => {
      const icon = L.divIcon({
        className: '', html: `<div style="background:${cc.type==='treatment_plant'?'#e53935':'#1565c0'};color:white;width:28px;height:28px;border-radius:50%;display:flex;align-items:center;justify-content:center;font-size:1rem;box-shadow:0 2px 8px rgba(0,0,0,0.3)">🏭</div>`,
        iconSize: [28, 28], iconAnchor: [14, 14]
      });
      L.marker([cc.lat, cc.lng], { icon }).addTo(this.map)
        .bindPopup(`<div class="map-popup-title">${cc.name}</div><div class="map-popup-info" style="font-family:var(--font-malayalam)">${cc.nameML}</div><div class="map-popup-info" style="margin-top:4px"><span class="badge badge-${cc.type==='treatment_plant'?'danger':'info'}">${cc.type.replace('_',' ')}</span></div>`);
    });

    // Sample household markers
    AppState.get('households').forEach(h => {
      if (!h.lat || !h.lng) return;
      const icon = L.divIcon({
        className: '', html: `<div style="background:#1a7a4a;color:white;width:22px;height:22px;border-radius:50%;display:flex;align-items:center;justify-content:center;font-size:0.7rem;box-shadow:0 2px 6px rgba(0,0,0,0.3)">🏠</div>`,
        iconSize: [22, 22], iconAnchor: [11, 11]
      });
      L.marker([h.lat, h.lng], { icon }).addTo(this.map)
        .bindPopup(`<div class="map-popup-title">${h.name}</div><div class="map-popup-info">${h.houseNo}, ${h.street}</div><div class="map-popup-info">${h.ward}</div>`);
    });

    // Sample collector markers
    AppState.get('collectors').forEach(c => {
      if (!c.lat || !c.lng) return;
      const icon = L.divIcon({
        className: '', html: `<div style="background:#f5a623;color:white;width:30px;height:30px;border-radius:50%;display:flex;align-items:center;justify-content:center;font-size:1rem;box-shadow:0 2px 8px rgba(0,0,0,0.3);border:2px solid white">🧹</div>`,
        iconSize: [30, 30], iconAnchor: [15, 15]
      });
      L.marker([c.lat, c.lng], { icon }).addTo(this.map)
        .bindPopup(`<div class="map-popup-title">🧹 ${c.name}</div><div class="map-popup-info">HKS Collector</div><div class="map-popup-info">${c.ward}</div><div class="map-popup-info" style="margin-top:4px"><span class="status-dot" style="display:inline-block;width:7px;height:7px;background:#4CAF50;border-radius:50;margin-right:4px"></span> Active</div>`);
    });
  },

  initLandingPreviewMap() {
    const previewEl = document.getElementById('kerala-map-preview');
    if (!previewEl || previewEl._leaflet_id) return;
    const previewMap = L.map('kerala-map-preview', { zoomControl: false, dragging: false, scrollWheelZoom: false, touchZoom: false, doubleClickZoom: false }).setView([10.1632, 76.6413], 7);
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', { attribution: '© OpenStreetMap', maxZoom: 19 }).addTo(previewMap);
    KERALA_DATA.districts.forEach(d => {
      const icon = L.divIcon({ className:'', html:`<div style="background:#1a7a4a;color:white;padding:3px 8px;border-radius:10px;font-size:0.65rem;font-weight:700;white-space:nowrap;box-shadow:0 2px 6px rgba(0,0,0,0.2)">${d.name}</div>`, iconAnchor:[35,10] });
      L.marker([d.lat, d.lng], { icon }).addTo(previewMap);
    });
    COLLECTION_CENTERS.forEach(cc => {
      const icon = L.divIcon({ className:'', html:`<div style="background:${cc.type==='treatment_plant'?'#e53935':'#1565c0'};color:white;width:22px;height:22px;border-radius:50%;display:flex;align-items:center;justify-content:center;font-size:0.85rem;box-shadow:0 2px 6px rgba(0,0,0,0.3)">🏭</div>`, iconSize:[22,22], iconAnchor:[11,11] });
      L.marker([cc.lat, cc.lng], { icon }).addTo(previewMap);
    });
  },

  locateUser() {
    if (!navigator.geolocation) { this.showToast('Geolocation not supported by your browser.', 'error'); return; }
    navigator.geolocation.getCurrentPosition(pos => {
      const { latitude: lat, longitude: lng } = pos.coords;
      if (this.map) {
        this.map.setView([lat, lng], 15);
        L.marker([lat, lng], { icon: L.divIcon({ className:'', html:`<div style="background:var(--info);color:white;padding:6px 12px;border-radius:16px;font-size:0.75rem;font-weight:700;box-shadow:0 2px 8px rgba(0,0,0,0.2)">📍 You</div>`, iconAnchor:[24,10] }) }).addTo(this.map).openPopup();
      }
      // Autofill lat/lng fields in forms
      const latF = document.getElementById('reg-lat'), lngF = document.getElementById('reg-lng');
      if (latF) latF.value = lat.toFixed(6);
      if (lngF) lngF.value = lng.toFixed(6);
      this.showToast('Location obtained successfully!', 'success');
    }, () => this.showToast('Could not get your location. Please allow location access.', 'error'));
  },

  // ── TOAST ───────────────────────────────────────────────────────
  setupToastContainer() {
    if (!document.getElementById('toast-container')) {
      const c = document.createElement('div'); c.id = 'toast-container'; c.className = 'toast-container'; document.body.appendChild(c);
    }
  },

  showToast(msg, type = 'info', duration = 4000) {
    const icons = { info:'ℹ️', success:'✅', error:'❌', warning:'⚠️' };
    const toast = document.createElement('div'); toast.className = `toast ${type}`;
    toast.innerHTML = `<span class="toast-icon">${icons[type]||'ℹ️'}</span><span class="toast-message">${msg}</span><button class="toast-close" onclick="this.parentElement.remove()">×</button>`;
    document.getElementById('toast-container').appendChild(toast);
    setTimeout(() => toast.remove(), duration);
  },

  // ── AUTH ────────────────────────────────────────────────────────
  handleLogin(e) {
    e.preventDefault();
    const email = document.getElementById('login-email').value.trim();
    const password = document.getElementById('login-password').value;
    const role = document.getElementById('login-role').value;
    if (!email || !password) { this.showToast('Please fill all fields.', 'error'); return; }
    // Demo login
    const demoUsers = {
      'admin@ecotrack.kerala': { role: 'admin', name: 'District Admin', district: 'tvpm', lsgi: 'tvpm-corp' },
      'collector@ecotrack.kerala': { role: 'collector', name: 'Suresh Kumar', district: 'tvpm', lsgi: 'tvpm-corp', ward: 'Ward 7 - Palayam', employeeId: 'HKS-TVP-001' },
      'user@ecotrack.kerala': { role: 'household', name: 'Rajan Family', district: 'tvpm', lsgi: 'tvpm-corp', ward: 'Ward 7 - Palayam', houseNo: 'TC 15/234' },
    };
    const user = demoUsers[email] || { role: role||'household', name: email.split('@')[0], email };
    AppState.login({ ...user, email, id: 'u_'+Date.now() });
    this.showToast(`Welcome back, ${user.name}!`, 'success');
  },

  handleRegister(e) {
    e.preventDefault();
    const form = e.target;
    const data = {
      name: document.getElementById('reg-name').value.trim(),
      email: document.getElementById('reg-email').value.trim(),
      phone: document.getElementById('reg-phone').value.trim(),
      role: document.getElementById('reg-role').value,
      district: document.getElementById('reg-district').value,
      lsgi: document.getElementById('reg-lsgi').value,
      ward: document.getElementById('reg-ward').value,
      houseNo: document.getElementById('reg-house')?.value.trim() || '',
      street: document.getElementById('reg-street')?.value.trim() || '',
      lat: parseFloat(document.getElementById('reg-lat')?.value) || null,
      lng: parseFloat(document.getElementById('reg-lng')?.value) || null,
    };
    if (!data.name || !data.email || !data.phone || !data.district || !data.lsgi || !data.ward) {
      this.showToast('Please fill all required fields.', 'error'); return;
    }
    if (data.role === 'household') AppState.addHousehold(data);
    else if (data.role === 'collector') AppState.addCollector(data);
    AppState.login({ ...data, id: 'u_'+Date.now() });
    this.showToast(`Registration successful! Welcome, ${data.name}!`, 'success');
  },

  // ── DYNAMIC SELECTS ─────────────────────────────────────────────
  populateLSGI() {
    const districtId = document.getElementById('reg-district').value;
    const lsgiSel = document.getElementById('reg-lsgi');
    const wardSel = document.getElementById('reg-ward');
    if (!lsgiSel) return;
    const district = KERALA_DATA.districts.find(d => d.id === districtId);
    lsgiSel.innerHTML = `<option value="">— Select Local Body —</option>`;
    wardSel.innerHTML = `<option value="">— Select Ward —</option>`;
    if (!district) return;
    district.lsgis.forEach(l => {
      const typeLabel = l.type === 'corporation' ? '🏙️ Corporation' : l.type === 'municipality' ? '🏛️ Municipality' : '🏡 Grama Panchayat';
      lsgiSel.innerHTML += `<option value="${l.id}">${l.name} (${typeLabel})</option>`;
    });
  },

  populateWards() {
    const districtId = document.getElementById('reg-district').value;
    const lsgiId = document.getElementById('reg-lsgi').value;
    const wardSel = document.getElementById('reg-ward');
    if (!wardSel) return;
    const district = KERALA_DATA.districts.find(d => d.id === districtId);
    const lsgi = district?.lsgis.find(l => l.id === lsgiId);
    wardSel.innerHTML = `<option value="">— Select Ward —</option>`;
    if (!lsgi) return;
    lsgi.wards.forEach(w => { wardSel.innerHTML += `<option value="${w}">${w}</option>`; });
  },

  // ── COMPLAINT ────────────────────────────────────────────────────
  submitComplaint(e) {
    e.preventDefault();
    const cat = document.querySelector('.complaint-cat-btn.selected')?.dataset.cat || 'Other';
    const desc = document.getElementById('complaint-desc').value.trim();
    if (!desc) { this.showToast('Please describe the issue.', 'error'); return; }
    const user = AppState.get('currentUser');
    AppState.addComplaint({ category: cat, description: desc, userId: user?.id, userName: user?.name, district: user?.district, lsgi: user?.lsgi, ward: user?.ward });
    this.showToast('Complaint submitted successfully! We will look into it.', 'success');
    App.closeModal('complaint-modal');
  },

  submitPickupRequest(e) {
    e.preventDefault();
    const user = AppState.get('currentUser');
    const wasteType = document.getElementById('pickup-waste-type').value;
    const date = document.getElementById('pickup-date').value;
    const notes = document.getElementById('pickup-notes').value.trim();
    if (!wasteType || !date) { this.showToast('Please fill required fields.', 'error'); return; }
    AppState.addPickupRequest({ wasteType, date, notes, userId: user?.id, userName: user?.name, district: user?.district, lsgi: user?.lsgi, ward: user?.ward, houseNo: user?.houseNo });
    this.showToast('Pickup request submitted! You will be notified when confirmed.', 'success');
    App.closeModal('pickup-modal');
  },

  // ── MODAL ────────────────────────────────────────────────────────
  openModal(id) {
    const el = document.getElementById(id); if (!el) return;
    el.classList.remove('hidden'); requestAnimationFrame(() => el.classList.add('open'));
  },

  closeModal(id) {
    const el = document.getElementById(id); if (!el) return;
    el.classList.remove('open'); setTimeout(() => el.classList.add('hidden'), 250);
  },

  // ── COLLECTOR ────────────────────────────────────────────────────
  markCollected(householdId, btn) {
    btn.textContent = '✅ Collected'; btn.className = 'btn btn-sm btn-success'; btn.disabled = true;
    this.showToast('Marked as collected!', 'success');
  },

  startLiveLocation() {
    if (!navigator.geolocation) { this.showToast('Geolocation not supported.', 'error'); return; }
    const btn = document.getElementById('live-loc-btn');
    if (this.locationWatcher) {
      navigator.geolocation.clearWatch(this.locationWatcher);
      this.locationWatcher = null;
      if (btn) { btn.textContent = '📍 Share Live Location'; btn.className = 'btn btn-primary'; }
      this.showToast('Live location sharing stopped.', 'info');
      return;
    }
    this.locationWatcher = navigator.geolocation.watchPosition(pos => {
      const { latitude: lat, longitude: lng } = pos.coords;
      const locEl = document.getElementById('live-coords');
      if (locEl) locEl.textContent = `${lat.toFixed(5)}, ${lng.toFixed(5)}`;
    }, () => this.showToast('Could not get location.', 'error'), { enableHighAccuracy: true });
    if (btn) { btn.textContent = '🔴 Stop Sharing'; btn.className = 'btn btn-danger'; }
    this.showToast('Live location sharing started!', 'success');
  },

  // ── TABS ─────────────────────────────────────────────────────────
  switchTab(tabGroup, tabId) {
    document.querySelectorAll(`[data-tab-group="${tabGroup}"]`).forEach(el => el.classList.remove('active'));
    document.querySelectorAll(`[data-tab-panel="${tabGroup}"]`).forEach(el => el.classList.remove('active'));
    document.querySelector(`[data-tab-group="${tabGroup}"][data-tab="${tabId}"]`)?.classList.add('active');
    document.querySelector(`[data-tab-panel="${tabGroup}"][data-panel="${tabId}"]`)?.classList.add('active');
  },

  // ── WASTE DETAIL ─────────────────────────────────────────────────
  showWasteDetail(id) {
    const cat = WASTE_CATEGORIES.find(c => c.id === id); if (!cat) return;
    const lang = AppState.get('language');
    document.getElementById('waste-modal-content').innerHTML = `
      <div class="waste-modal-header">
        <div class="waste-modal-icon" style="background:${cat.color}22">${cat.icon}</div>
        <div class="waste-modal-names">
          <div class="waste-modal-en">${cat.name}</div>
          <div class="waste-modal-ml">${cat.nameML}</div>
        </div>
      </div>
      <p><strong>Description:</strong> ${cat.description}</p>
      <p style="margin-top:8px;font-family:var(--font-malayalam)">${cat.descriptionML}</p>
      <div class="tips-box">
        <div class="tips-title">♻️ Segregation Tips</div>
        <div class="tips-text">${cat.segregationTips}</div>
        <div class="tips-text" style="margin-top:8px;font-family:var(--font-malayalam)">${cat.segregationTipsML}</div>
      </div>
      <div style="margin-top:16px;display:flex;align-items:center;gap:8px">
        <span style="font-size:0.85rem;font-weight:600">Use:</span>
        <span class="waste-bin" style="background:${cat.color}22;color:${cat.color}">🗑️ ${cat.bin}</span>
      </div>`;
    this.openModal('waste-modal');
  },

  selectComplaintCat(btn) {
    document.querySelectorAll('.complaint-cat-btn').forEach(b => b.classList.remove('selected'));
    btn.classList.add('selected');
  },

  generateReport(type) {
    this.showToast(`Generating ${type} report... (Demo - would download PDF/CSV in production)`, 'info');
  },

  addHKSMember() {
    const name = document.getElementById('new-hks-name')?.value.trim();
    const phone = document.getElementById('new-hks-phone')?.value.trim();
    const ward = document.getElementById('new-hks-ward')?.value;
    const user = AppState.get('currentUser');
    if (!name || !phone || !ward) { this.showToast('Please fill all fields.', 'error'); return; }
    AppState.addCollector({ name, phone, district: user?.district, lsgi: user?.lsgi, ward, employeeId: 'HKS-'+Date.now() });
    this.showToast(`HKS Member "${name}" added successfully!`, 'success');
    App.closeModal('add-hks-modal');
    App.renderPage();
  }
};
