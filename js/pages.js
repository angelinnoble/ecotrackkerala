// EcoTrack Kerala - Page Templates
const Pages = {

  // ── LANDING PAGE ──────────────────────────────────────────────────
  landing() {
    const t = key => AppState.t(key);
    return `
    <!-- HERO -->
    <section id="hero">
      <div class="hero-bg-pattern"></div>
      <div class="hero-leaves"></div>
      <div class="hero-content">
        <div class="hero-text">
          <div class="hero-badge">🌿 Kerala Local Self-Government | ഹരിത കേരളം മിഷൻ</div>
          <h1 class="hero-title">${t('hero_title')}</h1>
          <p class="hero-subtitle">${t('hero_subtitle')}</p>
          <div class="hero-cta">
            <button class="btn btn-outline btn-lg" onclick="App.navigate('register')">🏠 ${t('hero_cta_register')}</button>
            <button class="btn btn-secondary btn-lg" onclick="App.navigate('waste_guide')">📚 ${t('hero_cta_learn')}</button>
          </div>
          <div class="hero-stats">
            <div class="hero-stat">
              <span class="hero-stat-number">14</span>
              <span class="hero-stat-label">${t('stat_households').includes('Households') ? 'Districts Covered' : 'ജില്ലകൾ'}</span>
            </div>
            <div class="hero-stat">
              <span class="hero-stat-number">941</span>
              <span class="hero-stat-label">LSGIs in Kerala</span>
            </div>
            <div class="hero-stat">
              <span class="hero-stat-number">35,000+</span>
              <span class="hero-stat-label">${t('stat_collectors')}</span>
            </div>
            <div class="hero-stat">
              <span class="hero-stat-number">73%</span>
              <span class="hero-stat-label">${t('stat_recycled')}</span>
            </div>
          </div>
        </div>
        <div class="hero-visual">
          <div class="hero-card">
            <div class="hero-card-title">🧹 ${t('section_hks')} · Live Status</div>
            <div class="collector-card">
              <div class="collector-avatar">🧹</div>
              <div class="collector-info">
                <div class="collector-name">Suresh Kumar</div>
                <div class="collector-status"><span class="status-dot"></span> Collecting in Ward 7, Palayam</div>
              </div>
              <span style="background:rgba(255,255,255,0.2);padding:4px 10px;border-radius:12px;font-size:0.75rem">EN ROUTE</span>
            </div>
          </div>
          <div class="hero-card">
            <div class="hero-card-title">🗂️ Waste Segregation · ${AppState.get('language') === 'ml' ? 'ഇന്ന്' : 'Today'}</div>
            <div class="waste-mini-grid">
              ${[['🌿','Biodegradable','#4CAF50'],['♻️','Plastic','#2196F3'],['📰','Paper','#FF9800'],['🫙','Glass','#9C27B0'],['💻','E-Waste','#F44336'],['⚠️','Hazardous','#FF6F00']].map(([i,n,c])=>`
              <div class="waste-mini-item"><div class="waste-mini-icon">${i}</div><div>${n}</div></div>`).join('')}
            </div>
          </div>
          <div class="hero-card">
            <div class="hero-card-title">📅 Next Collection</div>
            <div style="display:flex;align-items:center;gap:12px;margin-top:4px">
              <div style="font-size:2rem">📅</div>
              <div>
                <div style="font-weight:700;font-size:1rem">Tomorrow, 7:00 AM</div>
                <div style="font-size:0.8rem;opacity:0.75">Biodegradable · Ward 7, Palayam</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- HKS SECTION -->
    <section class="section section-alt" id="hks-section">
      <div class="container">
        <div class="section-header">
          <span class="section-tag">🌿 ഹരിത കർമ്മ സേന</span>
          <h2 class="section-title">${t('section_hks')}</h2>
          <p class="section-desc">${t('section_hks_desc')}</p>
        </div>
        <div class="grid grid-3 gap-3" style="grid-template-columns:repeat(auto-fill,minmax(280px,1fr))">
          ${[
            { icon:'🏠', title:'Door-to-Door Collection', desc:'HKS collectors visit every registered household in their assigned ward on a fixed schedule.' },
            { icon:'📍', title:'GPS Live Tracking', desc:'Track your assigned HKS collector in real-time on the map to know when they will arrive.' },
            { icon:'📋', title:'Digital Collection Records', desc:'All collection activities are recorded digitally, making it easy to track, verify and report.' },
            { icon:'📢', title:'Instant Notifications', desc:'Get notified when your collector is nearby, when collection is done, or if it was missed.' },
            { icon:'📊', title:'Ward Reports', desc:'Local body admins get daily, weekly and monthly reports on waste collected per ward.' },
            { icon:'♻️', title:'Segregated Collection', desc:'Separate collection for biodegradable and non-biodegradable waste on designated days.' },
          ].map(f=>`<div class="feature-card"><div class="feature-icon">${f.icon}</div><h4 class="feature-title">${f.title}</h4><p class="feature-desc">${f.desc}</p></div>`).join('')}
        </div>
      </div>
    </section>

    <!-- WASTE SEGREGATION -->
    <section class="section" id="segregation-section">
      <div class="container">
        <div class="section-header">
          <span class="section-tag">♻️ Waste Segregation</span>
          <h2 class="section-title">${t('section_segregation')}</h2>
          <p class="section-desc">${t('section_segregation_desc')}</p>
        </div>
        <div class="waste-grid">
          ${WASTE_CATEGORIES.map(cat => `
          <div class="waste-card" onclick="App.showWasteDetail('${cat.id}')" style="border-top:4px solid ${cat.color}">
            <div class="waste-icon-wrap" style="background:${cat.color}18">${cat.icon}</div>
            <div class="waste-name-en">${cat.name}</div>
            <div class="waste-name-ml">${cat.nameML}</div>
            <div class="waste-desc">${cat.description.substring(0,60)}...</div>
            <span class="waste-bin">🗑️ ${cat.bin}</span>
            <div class="waste-tips">💡 ${cat.segregationTips}</div>
          </div>`).join('')}
        </div>
        <div style="text-align:center;margin-top:32px">
          <button class="btn btn-primary btn-lg" onclick="App.navigate('waste_guide')">📖 Full Segregation Guide →</button>
        </div>
      </div>
    </section>

    <!-- KERALA MAP PREVIEW -->
    <section class="section section-alt" id="map-preview-section">
      <div class="container">
        <div class="section-header">
          <span class="section-tag">🗺️ Kerala Map</span>
          <h2 class="section-title">Waste Collection Across Kerala</h2>
          <p class="section-desc">View active collectors, registered households and waste treatment centres across all 14 districts.</p>
        </div>
        <div style="height:420px;border-radius:var(--radius);overflow:hidden;box-shadow:var(--shadow-hover);border:2px solid var(--border)" id="kerala-map-preview"></div>
        <div style="text-align:center;margin-top:20px">
          <button class="btn btn-primary" onclick="App.navigate('map_page')">🗺️ Open Full Map →</button>
        </div>
      </div>
    </section>

    <!-- COMMUNITY & IMPACT -->
    <section class="section section-dark">
      <div class="container">
        <div class="section-header">
          <span class="section-tag" style="background:rgba(255,255,255,0.2);color:white">🌍 Impact</span>
          <h2 class="section-title" style="color:white">${t('section_impact')}</h2>
        </div>
        <div class="grid grid-4 gap-3" style="grid-template-columns:repeat(auto-fill,minmax(200px,1fr))">
          ${[
            { icon:'🏘️', num:'2.1M+', label:'Households registered', labelML:'രജിസ്റ്റർ ചെയ്ത കുടുംബങ്ങൾ' },
            { icon:'🧹', num:'35,000+', label:'HKS Collectors active', labelML:'സജീവ HKS അംഗങ്ങൾ' },
            { icon:'🏛️', num:'941', label:'LSGIs participating', labelML:'പങ്കെടുക്കുന്ന LSGIs' },
            { icon:'♻️', num:'1,200T', label:'Waste recycled monthly', labelML:'പ്രതിമാസം പുനരുപയോഗം' },
          ].map(s=>`
          <div style="text-align:center;padding:28px;background:rgba(255,255,255,0.1);border-radius:var(--radius);backdrop-filter:blur(8px);border:1px solid rgba(255,255,255,0.2)">
            <div style="font-size:2.5rem;margin-bottom:12px">${s.icon}</div>
            <div style="font-size:2.2rem;font-weight:900;color:white">${s.num}</div>
            <div style="font-size:0.85rem;color:rgba(255,255,255,0.75);margin-top:6px">${s.label}</div>
            <div style="font-size:0.8rem;color:rgba(255,255,255,0.55);font-family:var(--font-malayalam)">${s.labelML}</div>
          </div>`).join('')}
        </div>
      </div>
    </section>

    <!-- REGISTRATION CTA -->
    <section class="section section-alt">
      <div class="container" style="text-align:center;max-width:700px;margin:0 auto">
        <div style="font-size:3rem;margin-bottom:16px">🌿</div>
        <h2 style="margin-bottom:16px">Join Kerala's Green Revolution</h2>
        <p style="margin-bottom:32px;font-size:1.05rem">Register your household today and be part of a cleaner, greener Kerala. Together we can achieve zero waste communities.</p>
        <div style="display:flex;gap:16px;justify-content:center;flex-wrap:wrap">
          <button class="btn btn-primary btn-lg" onclick="App.navigate('register')">🏠 Register as Household</button>
          <button class="btn btn-secondary btn-lg" onclick="App.navigate('login')">🔑 Login to Account</button>
        </div>
      </div>
    </section>

    <!-- WASTE DETAIL MODAL -->
    <div class="modal-overlay hidden" id="waste-modal" onclick="if(event.target===this)App.closeModal('waste-modal')">
      <div class="modal">
        <div class="modal-header">
          <span class="modal-title">♻️ Waste Category Details</span>
          <button class="modal-close" onclick="App.closeModal('waste-modal')">×</button>
        </div>
        <div class="modal-body" id="waste-modal-content"></div>
        <div class="modal-footer">
          <button class="btn btn-primary" onclick="App.closeModal('waste-modal')">Close</button>
        </div>
      </div>
    </div>`;
  },

  // ── LOGIN ─────────────────────────────────────────────────────────
  login() {
    const t = key => AppState.t(key);
    return `
    <div style="min-height:100vh;display:flex;align-items:center;justify-content:center;padding:100px 20px 40px;background:var(--bg-light)">
      <div style="width:100%;max-width:440px">
        <div style="text-align:center;margin-bottom:32px">
          <div style="font-size:3rem;margin-bottom:12px">🌿</div>
          <h2>Welcome to EcoTrack Kerala</h2>
          <p style="margin-top:8px">Sign in to manage your waste collection</p>
        </div>
        <div class="card">
          <div class="card-body">
            <form onsubmit="App.handleLogin(event)">
              <div class="form-group">
                <label class="form-label">📧 ${t('reg_email')}</label>
                <input type="email" id="login-email" class="form-control" placeholder="your@email.com" required>
              </div>
              <div class="form-group">
                <label class="form-label">🔒 ${t('reg_password')}</label>
                <input type="password" id="login-password" class="form-control" placeholder="••••••••" required>
              </div>
              <div class="form-group">
                <label class="form-label">👤 Login as</label>
                <select id="login-role" class="form-control">
                  <option value="household">🏠 Household Member</option>
                  <option value="collector">🧹 HKS Collector</option>
                  <option value="admin">🏛️ Local Body Admin</option>
                </select>
              </div>
              <button type="submit" class="btn btn-primary btn-full btn-lg">🔑 ${t('nav_login')}</button>
            </form>
            <div style="text-align:center;margin-top:20px;font-size:0.875rem;color:var(--text-secondary)">
              Don't have an account? <button class="btn btn-sm btn-secondary" onclick="App.navigate('register')">Register Now</button>
            </div>
            <div style="margin-top:24px;padding:16px;background:var(--accent);border-radius:var(--radius-sm);font-size:0.8rem">
              <strong>🔐 Demo Credentials:</strong><br>
              Admin: <code>admin@ecotrack.kerala</code><br>
              Collector: <code>collector@ecotrack.kerala</code><br>
              Household: <code>user@ecotrack.kerala</code><br>
              <em>Any password works for demo.</em>
            </div>
          </div>
        </div>
      </div>
    </div>`;
  },

  // ── REGISTER ──────────────────────────────────────────────────────
  register() {
    const t = key => AppState.t(key);
    const districtOptions = KERALA_DATA.districts.map(d => `<option value="${d.id}">${d.name} — ${d.nameML}</option>`).join('');
    return `
    <div style="min-height:100vh;padding:100px 20px 60px;background:var(--bg-light)">
      <div style="max-width:700px;margin:0 auto">
        <div style="text-align:center;margin-bottom:32px">
          <div style="font-size:3rem;margin-bottom:12px">🏠</div>
          <h2>${t('reg_title')}</h2>
          <p style="margin-top:8px">Join thousands of Kerala households in responsible waste management</p>
        </div>
        <div class="card">
          <div class="card-body">
            <form onsubmit="App.handleRegister(event)">
              <div class="grid grid-2 gap-2" style="grid-template-columns:repeat(auto-fill,minmax(240px,1fr))">
                <div class="form-group">
                  <label class="form-label">👤 ${t('reg_name')} *</label>
                  <input type="text" id="reg-name" class="form-control" placeholder="Full name" required>
                </div>
                <div class="form-group">
                  <label class="form-label">📱 ${t('reg_phone')} *</label>
                  <input type="tel" id="reg-phone" class="form-control" placeholder="10-digit mobile" required>
                </div>
                <div class="form-group">
                  <label class="form-label">📧 ${t('reg_email')} *</label>
                  <input type="email" id="reg-email" class="form-control" placeholder="your@email.com" required>
                </div>
                <div class="form-group">
                  <label class="form-label">🔒 ${t('reg_password')} *</label>
                  <input type="password" id="reg-password" class="form-control" placeholder="Min 8 characters" required>
                </div>
              </div>
              <div class="form-group">
                <label class="form-label">👥 ${t('reg_role')}</label>
                <select id="reg-role" class="form-control">
                  <option value="household">🏠 ${t('reg_household')}</option>
                  <option value="collector">🧹 ${t('reg_collector')}</option>
                </select>
              </div>
              <hr style="border:none;border-top:1px solid var(--border);margin:24px 0">
              <h4 style="margin-bottom:16px">📍 Location Details — Kerala</h4>
              <div style="background:var(--accent);border-radius:var(--radius-sm);padding:12px;margin-bottom:20px;font-size:0.85rem">
                🏛️ <strong>State:</strong> Kerala &nbsp;|&nbsp; Select your district, local body and ward below
              </div>
              <div class="grid grid-2 gap-2" style="grid-template-columns:repeat(auto-fill,minmax(240px,1fr))">
                <div class="form-group">
                  <label class="form-label">🗺️ ${t('reg_district')} *</label>
                  <select id="reg-district" class="form-control" onchange="App.populateLSGI()" required>
                    <option value="">— Select District —</option>
                    ${districtOptions}
                  </select>
                </div>
                <div class="form-group">
                  <label class="form-label">🏛️ ${t('reg_lsgi')} *</label>
                  <select id="reg-lsgi" class="form-control" onchange="App.populateWards()" required>
                    <option value="">— Select District First —</option>
                  </select>
                </div>
                <div class="form-group">
                  <label class="form-label">🏘️ ${t('reg_ward')} *</label>
                  <select id="reg-ward" class="form-control" required>
                    <option value="">— Select LSGI First —</option>
                  </select>
                </div>
                <div class="form-group">
                  <label class="form-label">🏠 ${t('reg_house_no')}</label>
                  <input type="text" id="reg-house" class="form-control" placeholder="e.g. TC 15/234">
                </div>
                <div class="form-group" style="grid-column:1/-1">
                  <label class="form-label">🛣️ ${t('reg_street')}</label>
                  <input type="text" id="reg-street" class="form-control" placeholder="Street / Locality / Area">
                </div>
              </div>
              <div style="background:#f0fdf4;border:1px solid #bbf7d0;border-radius:var(--radius-sm);padding:16px;margin-bottom:20px">
                <label class="form-label">📡 ${t('reg_gps')}</label>
                <div style="display:flex;gap:12px;align-items:flex-end;flex-wrap:wrap">
                  <div style="flex:1;min-width:120px">
                    <label class="form-label text-sm">Latitude</label>
                    <input type="number" id="reg-lat" class="form-control" step="0.000001" placeholder="e.g. 8.5241">
                  </div>
                  <div style="flex:1;min-width:120px">
                    <label class="form-label text-sm">Longitude</label>
                    <input type="number" id="reg-lng" class="form-control" step="0.000001" placeholder="e.g. 76.9366">
                  </div>
                  <button type="button" class="btn btn-secondary" onclick="App.locateUser()">📡 ${t('reg_get_location')}</button>
                </div>
                <p class="form-hint">📌 Use the button to auto-detect your GPS location, or enter coordinates manually.</p>
              </div>
              <button type="submit" class="btn btn-primary btn-full btn-lg">✅ ${t('reg_submit')}</button>
            </form>
            <div style="text-align:center;margin-top:16px;font-size:0.875rem;color:var(--text-secondary)">
              Already registered? <button class="btn btn-sm btn-secondary" onclick="App.navigate('login')">Login</button>
            </div>
          </div>
        </div>
      </div>
    </div>`;
  },

  // ── WASTE GUIDE ───────────────────────────────────────────────────
  wasteGuide() {
    const t = key => AppState.t(key);
    return `
    <div style="padding-top:65px;background:var(--bg-light);min-height:100vh">
      <div style="background:linear-gradient(135deg,var(--primary),var(--primary-light));padding:60px 20px;text-align:center;color:white">
        <h1 style="color:white;margin-bottom:12px">♻️ Kerala Waste Segregation Guide</h1>
        <p style="color:rgba(255,255,255,0.85);font-size:1.1rem">മാലിന്യ വേർതിരിവ് മാർഗ്ഗദർശി</p>
        <p style="color:rgba(255,255,255,0.75);max-width:600px;margin:16px auto">Learn how to segregate waste correctly following Kerala LSGI guidelines. Each category has detailed instructions in English and Malayalam.</p>
      </div>
      <div class="container" style="padding:48px 20px">
        <div style="display:grid;grid-template-columns:repeat(auto-fill,minmax(0,1fr));gap:0;background:white;border-radius:var(--radius);box-shadow:var(--shadow);overflow:hidden;margin-bottom:40px">
          ${[['🟢','Green Bin','Biodegradable','ജൈവ'],['🔵','Blue Bin','Non-Biodegradable','അജൈവ'],['🔴','Red Bin','Sanitary & Hazardous','സാനിറ്ററി'],['⚫','E-Waste','Electronics','ഇലക്ട്രോണിക്']].map(([e,n,t,ml])=>`
          <div style="padding:24px;text-align:center;border-right:1px solid var(--border)">
            <div style="font-size:2.5rem;margin-bottom:8px">${e}</div>
            <div style="font-weight:700;font-size:0.95rem">${n}</div>
            <div style="font-size:0.8rem;color:var(--text-secondary)">${t}</div>
            <div style="font-size:0.8rem;color:var(--text-secondary);font-family:var(--font-malayalam)">${ml}</div>
          </div>`).join('')}
        </div>
        <h3 style="margin-bottom:24px">All Waste Categories</h3>
        <div class="waste-grid">
          ${WASTE_CATEGORIES.map(cat => `
          <div class="waste-card" onclick="App.showWasteDetail('${cat.id}')" style="border-top:4px solid ${cat.color}">
            <div class="waste-icon-wrap" style="background:${cat.color}18">${cat.icon}</div>
            <div class="waste-name-en">${cat.name}</div>
            <div class="waste-name-ml">${cat.nameML}</div>
            <div class="waste-desc">${cat.description}</div>
            <span class="waste-bin" style="background:${cat.color}18;color:${cat.color}">🗑️ ${cat.bin}</span>
            <div class="tips-box" style="display:block;margin-top:12px">
              <div class="tips-title">💡 Segregation Tips</div>
              <div class="tips-text">${cat.segregationTips}</div>
              <div class="tips-text" style="margin-top:6px;font-family:var(--font-malayalam)">${cat.segregationTipsML}</div>
            </div>
          </div>`).join('')}
        </div>
      </div>
    </div>
    <!-- WASTE DETAIL MODAL -->
    <div class="modal-overlay hidden" id="waste-modal" onclick="if(event.target===this)App.closeModal('waste-modal')">
      <div class="modal">
        <div class="modal-header"><span class="modal-title">♻️ Category Details</span><button class="modal-close" onclick="App.closeModal('waste-modal')">×</button></div>
        <div class="modal-body" id="waste-modal-content"></div>
        <div class="modal-footer"><button class="btn btn-primary" onclick="App.closeModal('waste-modal')">Close</button></div>
      </div>
    </div>`;
  },

  // ── MAP PAGE ──────────────────────────────────────────────────────
  mapPage() {
    const t = key => AppState.t(key);
    return `
    <div style="padding-top:65px;background:var(--bg-light);min-height:100vh">
      <div style="background:linear-gradient(135deg,var(--primary),var(--primary-light));padding:40px 20px;color:white;text-align:center">
        <h1 style="color:white;margin-bottom:8px">🗺️ ${t('map_title')}</h1>
        <p style="color:rgba(255,255,255,0.85)">കേരള മാലിന്യ ശേഖരണ ഭൂപടം · View collectors, households & waste centres across Kerala</p>
      </div>
      <div class="container" style="padding:32px 20px">
        <div class="map-controls">
          <button class="map-btn active" onclick="this.classList.toggle('active')">📍 ${t('map_my_location')}</button>
          <button class="map-btn active" onclick="this.classList.toggle('active')">🧹 ${t('map_collectors')}</button>
          <button class="map-btn active" onclick="this.classList.toggle('active')">🏠 Households</button>
          <button class="map-btn active" onclick="this.classList.toggle('active')">🏭 ${t('map_centers')}</button>
          <button class="map-btn" onclick="App.locateUser()">📡 Find My Location</button>
        </div>
        <div id="kerala-map" style="height:560px"></div>
        <div class="map-legend">
          <div class="legend-item"><div class="legend-dot" style="background:#1a7a4a"></div> District Headquarters</div>
          <div class="legend-item"><div class="legend-dot" style="background:#f5a623"></div> HKS Collectors (Active)</div>
          <div class="legend-item"><div class="legend-dot" style="background:#1a7a4a;opacity:.5"></div> Registered Households</div>
          <div class="legend-item"><div class="legend-dot" style="background:#e53935"></div> Treatment Plants</div>
          <div class="legend-item"><div class="legend-dot" style="background:#1565c0"></div> Recycling Centres</div>
        </div>
        <!-- District Quick Nav -->
        <div class="card" style="margin-top:32px">
          <div class="card-header"><h4>📋 All 14 Kerala Districts</h4></div>
          <div class="card-body">
            <div style="display:grid;grid-template-columns:repeat(auto-fill,minmax(220px,1fr));gap:12px">
              ${KERALA_DATA.districts.map(d => `
              <button class="btn btn-secondary btn-sm" onclick="App.map&&App.map.setView([${d.lat},${d.lng}],11)" style="justify-content:flex-start;gap:10px">
                <span style="font-size:1rem">📍</span>
                <div style="text-align:left">
                  <div style="font-weight:700">${d.name}</div>
                  <div style="font-size:0.75rem;color:var(--text-muted);font-family:var(--font-malayalam)">${d.nameML}</div>
                </div>
              </button>`).join('')}
            </div>
          </div>
        </div>
      </div>
    </div>`;
  },

  // ── HOUSEHOLD DASHBOARD ───────────────────────────────────────────
  householdDashboard() {
    const t = key => AppState.t(key);
    const user = AppState.get('currentUser');
    const district = KERALA_DATA.districts.find(d => d.id === user?.district);
    const pickups = AppState.get('pickupRequests').filter(p => p.userId === user?.id);
    return `
    <div class="dashboard-layout">
      ${this._sidebar('household')}
      <main class="dashboard-content" id="dash-main">
        <div class="dashboard-header">
          <h2 class="dashboard-title">🏠 ${t('dash_welcome')}, ${user?.name || 'User'}!</h2>
          <p class="dashboard-subtitle">${user?.ward || ''} · ${district?.name || 'Kerala'} · ${new Date().toLocaleDateString('en-IN', {weekday:'long',year:'numeric',month:'long',day:'numeric'})}</p>
        </div>
        <div class="stats-grid">
          <div class="stat-card green"><div class="stat-icon">🗓️</div><div class="stat-value">Tomorrow</div><div class="stat-label">${t('dash_next_collection')}</div></div>
          <div class="stat-card orange"><div class="stat-icon">📦</div><div class="stat-value">${pickups.length}</div><div class="stat-label">Pickup Requests</div></div>
          <div class="stat-card blue"><div class="stat-icon">✅</div><div class="stat-value">12</div><div class="stat-label">Collections Done (Month)</div></div>
          <div class="stat-card red"><div class="stat-icon">📢</div><div class="stat-value">${AppState.get('complaints').filter(c=>c.userId===user?.id).length}</div><div class="stat-label">Open Complaints</div></div>
        </div>
        <div style="display:grid;grid-template-columns:1fr 1fr;gap:24px;margin-bottom:24px">
          <!-- Next Collection -->
          <div class="card">
            <div class="card-header"><h4>📅 Upcoming Collections</h4></div>
            <div class="card-body">
              <div class="timeline">
                ${[
                  { date:'Tomorrow 7:00 AM', type:'🌿 Biodegradable', status:'scheduled', info:'Green bin ready by 6:30 AM' },
                  { date:'Thursday 7:00 AM', type:'♻️ Non-Biodegradable', status:'scheduled', info:'Blue bin – plastic, paper, glass' },
                  { date:'Saturday 10:00 AM', type:'🧹 Special Drive', status:'scheduled', info:'E-waste & hazardous collection' },
                ].map(e=>`
                <div class="timeline-item">
                  <div class="timeline-dot"></div>
                  <div class="timeline-content">
                    <div class="timeline-time">${e.date}</div>
                    <div class="timeline-title">${e.type}</div>
                    <div class="timeline-desc">${e.info}</div>
                    <span class="badge badge-primary" style="margin-top:6px">${e.status}</span>
                  </div>
                </div>`).join('')}
              </div>
            </div>
          </div>
          <!-- Quick Actions -->
          <div class="card">
            <div class="card-header"><h4>⚡ Quick Actions</h4></div>
            <div class="card-body" style="display:flex;flex-direction:column;gap:12px">
              <button class="btn btn-primary" onclick="App.openModal('pickup-modal')">📦 ${t('dash_request_pickup')}</button>
              <button class="btn btn-secondary" onclick="App.openModal('complaint-modal')">📢 ${t('dash_report_complaint')}</button>
              <button class="btn btn-secondary" onclick="App.navigate('waste_guide')">📖 Waste Segregation Guide</button>
              <button class="btn btn-secondary" onclick="App.navigate('map_page')">🗺️ View Collection Map</button>
              <div style="padding:14px;background:var(--accent);border-radius:var(--radius-sm);font-size:0.875rem">
                <strong>🧹 Your HKS Collector:</strong><br>
                Suresh Kumar · <span style="color:var(--success)">● Active today</span><br>
                📱 Contact: 90000 00001
              </div>
            </div>
          </div>
        </div>
        <!-- Waste Categories Quick Ref -->
        <div class="card" style="margin-bottom:24px">
          <div class="card-header"><h4>♻️ Waste Categories for Today</h4><span class="badge badge-primary">Biodegradable Day</span></div>
          <div class="card-body">
            <div style="display:grid;grid-template-columns:repeat(auto-fill,minmax(160px,1fr));gap:12px">
              ${WASTE_CATEGORIES.slice(0,6).map(c=>`
              <div onclick="App.showWasteDetail('${c.id}')" style="padding:12px;border-radius:var(--radius-sm);border:1.5px solid ${c.color}44;background:${c.color}08;cursor:pointer;text-align:center;transition:all .2s" onmouseover="this.style.borderColor='${c.color}'" onmouseout="this.style.borderColor='${c.color}44'">
                <div style="font-size:1.5rem;margin-bottom:6px">${c.icon}</div>
                <div style="font-size:0.75rem;font-weight:700">${c.name}</div>
                <div style="font-size:0.7rem;color:var(--text-muted);font-family:var(--font-malayalam)">${c.nameML}</div>
              </div>`).join('')}
            </div>
          </div>
        </div>
        <!-- Pickup History -->
        ${pickups.length > 0 ? `
        <div class="card">
          <div class="card-header"><h4>📦 My Pickup Requests</h4></div>
          <div class="card-body table-wrap">
            <table>
              <thead><tr><th>Date</th><th>Waste Type</th><th>Status</th><th>Notes</th></tr></thead>
              <tbody>${pickups.map(p=>`<tr><td>${new Date(p.createdAt).toLocaleDateString('en-IN')}</td><td>${p.wasteType}</td><td><span class="badge badge-warning">${p.status}</span></td><td>${p.notes||'—'}</td></tr>`).join('')}</tbody>
            </table>
          </div>
        </div>` : ''}
      </main>
    </div>
    ${this._pickupModal()}
    ${this._complaintModal()}
    <div class="modal-overlay hidden" id="waste-modal" onclick="if(event.target===this)App.closeModal('waste-modal')">
      <div class="modal"><div class="modal-header"><span class="modal-title">♻️ Category Details</span><button class="modal-close" onclick="App.closeModal('waste-modal')">×</button></div><div class="modal-body" id="waste-modal-content"></div><div class="modal-footer"><button class="btn btn-primary" onclick="App.closeModal('waste-modal')">Close</button></div></div>
    </div>`;
  },

  // ── HKS COLLECTOR DASHBOARD ───────────────────────────────────────
  hksDashboard() {
    const t = key => AppState.t(key);
    const user = AppState.get('currentUser');
    const demo_households = AppState.get('households').filter(h => h.lsgi === user?.lsgi) || [];
    const collected = Math.floor(demo_households.length * 0.6);
    return `
    <div class="dashboard-layout">
      ${this._sidebar('collector')}
      <main class="dashboard-content">
        <div class="dashboard-header">
          <h2 class="dashboard-title">🧹 ${t('hks_dashboard')}</h2>
          <p class="dashboard-subtitle">${new Date().toLocaleDateString('en-IN',{weekday:'long',year:'numeric',month:'long',day:'numeric'})}</p>
        </div>
        <!-- Profile Card -->
        <div class="collector-profile-card" style="margin-bottom:24px">
          <div style="display:flex;align-items:center;gap:16px">
            <div style="width:60px;height:60px;background:rgba(255,255,255,0.2);border-radius:50%;display:flex;align-items:center;justify-content:center;font-size:1.8rem">🧹</div>
            <div>
              <div class="collector-profile-name">${user?.name || 'HKS Collector'}</div>
              <div class="collector-profile-id">ID: ${user?.employeeId || 'HKS-'+Date.now()} · ${user?.ward || 'Ward'}</div>
              <div style="font-size:0.85rem;opacity:0.8">📍 ${user?.lsgi ? KERALA_DATA.districts.flatMap(d=>d.lsgis).find(l=>l.id===user.lsgi)?.name||user.lsgi : 'LSGI'}</div>
            </div>
          </div>
          <div class="collector-profile-stats">
            <div class="cp-stat"><div class="cp-stat-num">${demo_households.length}</div><div class="cp-stat-label">${t('hks_assigned_households')}</div></div>
            <div class="cp-stat"><div class="cp-stat-num">${collected}</div><div class="cp-stat-label">Collected Today</div></div>
            <div class="cp-stat"><div class="cp-stat-num">${demo_households.length - collected}</div><div class="cp-stat-label">Remaining</div></div>
          </div>
        </div>
        <!-- Live Location -->
        <div class="card" style="margin-bottom:24px">
          <div class="card-body" style="display:flex;align-items:center;justify-content:space-between;flex-wrap:wrap;gap:12px">
            <div>
              <h4>📡 ${t('hks_live_location')}</h4>
              <p id="live-coords" style="font-size:0.85rem;color:var(--text-secondary);margin-top:4px">Not sharing · Click button to start</p>
            </div>
            <button id="live-loc-btn" class="btn btn-primary" onclick="App.startLiveLocation()">📍 ${t('hks_live_location')}</button>
          </div>
        </div>
        <!-- Today's Route -->
        <div class="card" style="margin-bottom:24px">
          <div class="card-header"><h4>🗺️ ${t('hks_today_collection')} — ${new Date().toLocaleDateString('en-IN')}</h4>
            <div style="display:flex;align-items:center;gap:8px">
              <div class="progress-bar" style="width:120px"><div class="progress-fill" style="width:${Math.round(collected/Math.max(demo_households.length,1)*100)}%"></div></div>
              <span style="font-size:0.85rem;font-weight:600">${collected}/${demo_households.length}</span>
            </div>
          </div>
          <div class="card-body">
            <div style="display:flex;flex-direction:column;gap:10px">
              ${demo_households.length === 0 ? `<div class="chart-placeholder">No households assigned in your ward yet. Contact admin.</div>` :
              demo_households.concat([
                { id:'demo1', name:'Sharma Family', houseNo:'XV/14', street:'PTP Nagar', ward: user?.ward },
                { id:'demo2', name:'Krishnan House', houseNo:'PO 55/C', street:'Kanjirampara', ward: user?.ward },
                { id:'demo3', name:'Fathima Residence', houseNo:'TC 7/88', street:'Palayam', ward: user?.ward },
              ]).slice(0,8).map((h,i)=>`
              <div class="household-item">
                <div class="household-num">${i+1}</div>
                <div>
                  <div class="household-name">${h.name}</div>
                  <div class="household-addr">${h.houseNo||'—'}, ${h.street||''} · ${h.ward||''}</div>
                </div>
                <div class="household-status">
                  ${i < collected ? `<span class="badge badge-success">✅ Collected</span>` : `<button class="btn btn-sm btn-primary" onclick="App.markCollected('${h.id}',this)">Mark Collected</button>`}
                </div>
              </div>`).join('')}
            </div>
          </div>
        </div>
        <!-- Daily Summary -->
        <div class="card">
          <div class="card-header"><h4>📊 ${t('hks_daily_summary')}</h4><button class="btn btn-sm btn-secondary" onclick="App.generateReport('daily')">⬇️ Download</button></div>
          <div class="card-body">
            <div class="stats-grid" style="grid-template-columns:repeat(auto-fill,minmax(150px,1fr))">
              <div class="stat-card green"><div class="stat-icon">🏠</div><div class="stat-value">${collected}</div><div class="stat-label">Collected</div></div>
              <div class="stat-card orange"><div class="stat-icon">⏳</div><div class="stat-value">${demo_households.length - collected}</div><div class="stat-label">Pending</div></div>
              <div class="stat-card blue"><div class="stat-icon">🌿</div><div class="stat-value">18kg</div><div class="stat-label">Biodegradable</div></div>
              <div class="stat-card red"><div class="stat-icon">♻️</div><div class="stat-value">9kg</div><div class="stat-label">Non-Biodegradable</div></div>
            </div>
          </div>
        </div>
      </main>
    </div>`;
  },

  // ── ADMIN DASHBOARD ───────────────────────────────────────────────
  adminDashboard() {
    const t = key => AppState.t(key);
    const user = AppState.get('currentUser');
    const district = KERALA_DATA.districts.find(d => d.id === user?.district);
    const lsgi = district?.lsgis.find(l => l.id === user?.lsgi);
    const households = AppState.get('households');
    const collectors = AppState.get('collectors');
    const complaints = AppState.get('complaints');
    const lsgiType = lsgi?.type === 'corporation' ? 'Municipal Corporation' : lsgi?.type === 'municipality' ? 'Municipality' : 'Grama Panchayat';

    return `
    <div class="dashboard-layout">
      ${this._sidebar('admin')}
      <main class="dashboard-content">
        <div class="dashboard-header">
          <h2 class="dashboard-title">🏛️ ${t('admin_dashboard')}</h2>
          <p class="dashboard-subtitle">${lsgi?.name || 'Local Body'} · ${lsgiType} · ${district?.name || 'Kerala'}</p>
        </div>
        <!-- Stats -->
        <div class="stats-grid">
          <div class="stat-card green"><div class="stat-icon">🏠</div><div class="stat-value">${households.length}</div><div class="stat-label">${t('admin_households')}</div><div class="stat-change up">↑ +3 this week</div></div>
          <div class="stat-card orange"><div class="stat-icon">🧹</div><div class="stat-value">${collectors.length}</div><div class="stat-label">${t('admin_hks_members')}</div></div>
          <div class="stat-card blue"><div class="stat-icon">🏘️</div><div class="stat-value">${lsgi?.wards.length||0}</div><div class="stat-label">Total Wards</div></div>
          <div class="stat-card red"><div class="stat-icon">📢</div><div class="stat-value">${complaints.filter(c=>c.status==='open').length}</div><div class="stat-label">Open Complaints</div></div>
        </div>

        <!-- Tabs -->
        <div class="tabs">
          ${[['overview','📊 Overview'],['hks','🧹 HKS Members'],['households','🏠 Households'],['schedule','📅 Schedule'],['complaints','📢 Complaints'],['reports','📋 Reports']].map(([id,label])=>`
          <button class="tab-btn ${id==='overview'?'active':''}" data-tab-group="admin" data-tab="${id}" onclick="App.switchTab('admin','${id}')">${label}</button>`).join('')}
        </div>

        <!-- Overview Tab -->
        <div class="tab-panel active" data-tab-panel="admin" data-panel="overview">
          <div style="display:grid;grid-template-columns:1fr 1fr;gap:24px">
            <div class="card">
              <div class="card-header"><h4>📅 Today's Collection Schedule</h4></div>
              <div class="card-body">
                ${(lsgi?.wards||[]).slice(0,5).map((w,i)=>`
                <div style="display:flex;align-items:center;gap:12px;padding:12px 0;border-bottom:1px solid var(--border)">
                  <span style="font-size:1.2rem">${i%2===0?'🌿':'♻️'}</span>
                  <div style="flex:1"><div style="font-weight:600;font-size:0.9rem">${w}</div><div style="font-size:0.78rem;color:var(--text-muted)">${i%2===0?'Biodegradable':'Non-Biodegradable'} · ${['7:00 AM','7:30 AM','8:00 AM','8:30 AM','9:00 AM'][i]}</div></div>
                  <span class="badge badge-${i<3?'success':'warning'}">${i<3?'Completed':'Pending'}</span>
                </div>`).join('')}
              </div>
            </div>
            <div class="card">
              <div class="card-header"><h4>🗺️ Ward Coverage</h4></div>
              <div class="card-body">
                ${(lsgi?.wards||[]).map((w,i)=>`
                <div style="margin-bottom:12px">
                  <div style="display:flex;justify-content:space-between;font-size:0.85rem;margin-bottom:4px"><span>${w}</span><span style="font-weight:600">${60+i*5}%</span></div>
                  <div class="progress-bar"><div class="progress-fill" style="width:${60+i*5}%"></div></div>
                </div>`).slice(0,6).join('')}
              </div>
            </div>
          </div>
        </div>

        <!-- HKS Tab -->
        <div class="tab-panel" data-tab-panel="admin" data-panel="hks">
          <div class="admin-section-header">
            <h4>🧹 Haritha Karma Sena Members</h4>
            <button class="btn btn-primary btn-sm" onclick="App.openModal('add-hks-modal')">+ Add HKS Member</button>
          </div>
          <div class="card">
            <div class="card-body table-wrap">
              <table>
                <thead><tr><th>Name</th><th>Employee ID</th><th>Phone</th><th>Ward</th><th>Status</th><th>Action</th></tr></thead>
                <tbody>
                  ${collectors.length === 0 ? `<tr><td colspan="6" style="text-align:center;color:var(--text-muted);padding:32px">No HKS members registered yet.</td></tr>` :
                  collectors.map(c=>`<tr>
                    <td><strong>${c.name}</strong></td>
                    <td><code>${c.employeeId||'—'}</code></td>
                    <td>${c.phone}</td>
                    <td>${c.ward||'—'}</td>
                    <td><span class="badge badge-success">● Active</span></td>
                    <td><button class="btn btn-sm btn-secondary" onclick="App.showToast('Feature available in production version.','info')">📋 View</button></td>
                  </tr>`).join('')}
                  <tr>
                    <td><strong>Suresh Kumar</strong></td><td><code>HKS-TVP-001</code></td><td>90000 00001</td>
                    <td>Ward 7 - Palayam</td><td><span class="badge badge-success">● Active</span></td>
                    <td><button class="btn btn-sm btn-secondary">📋 View</button></td>
                  </tr>
                  <tr>
                    <td><strong>Meera Devi</strong></td><td><code>HKS-TVP-002</code></td><td>90000 00002</td>
                    <td>Ward 8 - Thampanoor</td><td><span class="badge badge-warning">⏸ On Leave</span></td>
                    <td><button class="btn btn-sm btn-secondary">📋 View</button></td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>

        <!-- Households Tab -->
        <div class="tab-panel" data-tab-panel="admin" data-panel="households">
          <div class="admin-section-header">
            <h4>🏠 Registered Households</h4>
            <div class="section-actions">
              <input type="text" class="form-control" placeholder="🔍 Search household..." style="width:200px" oninput="App.showToast('Search coming soon.','info')">
              <button class="btn btn-secondary btn-sm" onclick="App.generateReport('households')">⬇️ Export</button>
            </div>
          </div>
          <div class="card">
            <div class="card-body table-wrap">
              <table>
                <thead><tr><th>Name</th><th>House No.</th><th>Ward</th><th>Phone</th><th>Status</th></tr></thead>
                <tbody>
                  ${households.length === 0 ? `<tr><td colspan="5" style="text-align:center;color:var(--text-muted);padding:32px">No households registered yet.</td></tr>` :
                  households.map(h=>`<tr><td><strong>${h.name}</strong></td><td>${h.houseNo||'—'}</td><td>${h.ward||'—'}</td><td>${h.phone}</td><td><span class="badge badge-success">Active</span></td></tr>`).join('')}
                  <tr><td><strong>Rajan Family</strong></td><td>TC 15/234</td><td>Ward 7 - Palayam</td><td>9876543210</td><td><span class="badge badge-success">Active</span></td></tr>
                  <tr><td><strong>Latha Krishnan</strong></td><td>MG 7/19 A</td><td>Ward 7 - Palayam</td><td>9876543215</td><td><span class="badge badge-success">Active</span></td></tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>

        <!-- Schedule Tab -->
        <div class="tab-panel" data-tab-panel="admin" data-panel="schedule">
          <div class="admin-section-header"><h4>📅 Collection Schedule Management</h4><button class="btn btn-primary btn-sm" onclick="App.showToast('Schedule editor opening...','info')">+ Add Schedule</button></div>
          <div style="display:grid;grid-template-columns:repeat(auto-fill,minmax(260px,1fr));gap:16px">
            ${['Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'].map((day,i)=>`
            <div class="schedule-day">
              <div class="schedule-day-header"><strong>${day}</strong><span class="badge badge-primary">${i%2===0?'Bio':'Non-Bio'}</span></div>
              <div class="schedule-slots">
                ${(lsgi?.wards||['Ward 1','Ward 2']).slice(0,3).map(w=>`
                <div class="schedule-slot ${i%2===0?'biodegradable':'non_biodegradable'}">
                  <span class="slot-time">7:${i*5<10?'0'+i*5:i*5} AM</span>
                  <span class="slot-type">${w}</span>
                  <span class="slot-status"><span class="badge badge-${i<3?'success':'info'}">Set</span></span>
                </div>`).join('')}
              </div>
            </div>`).join('')}
          </div>
        </div>

        <!-- Complaints Tab -->
        <div class="tab-panel" data-tab-panel="admin" data-panel="complaints">
          <div class="admin-section-header"><h4>📢 Public Complaints</h4></div>
          <div class="card">
            <div class="card-body table-wrap">
              <table>
                <thead><tr><th>Date</th><th>Category</th><th>Description</th><th>Ward</th><th>Status</th><th>Action</th></tr></thead>
                <tbody>
                  ${complaints.length === 0 ? '' : complaints.map(c=>`<tr><td>${new Date(c.createdAt).toLocaleDateString('en-IN')}</td><td>${c.category}</td><td>${c.description?.substring(0,40)}...</td><td>${c.ward||'—'}</td><td><span class="badge badge-warning">Open</span></td><td><button class="btn btn-sm btn-primary" onclick="App.showToast('Complaint resolved.','success')">Resolve</button></td></tr>`).join('')}
                  <tr><td>09/11/2026</td><td>Missed Collection</td><td>Collection was missed for 2 consecutive days...</td><td>Ward 7 - Palayam</td><td><span class="badge badge-warning">Open</span></td><td><button class="btn btn-sm btn-primary" onclick="App.showToast('Complaint resolved.','success')">Resolve</button></td></tr>
                  <tr><td>08/11/2026</td><td>Illegal Dumping</td><td>Garbage dumped near the main road...</td><td>Ward 3</td><td><span class="badge badge-success">Resolved</span></td><td><button class="btn btn-sm btn-secondary">View</button></td></tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>

        <!-- Reports Tab -->
        <div class="tab-panel" data-tab-panel="admin" data-panel="reports">
          <div class="admin-section-header"><h4>📋 Reports</h4></div>
          <div style="display:grid;grid-template-columns:repeat(auto-fill,minmax(260px,1fr));gap:16px">
            ${[
              { icon:'📊', title:'Monthly Collection Report', desc:'Total waste collected by ward and type for the current month.', action:'monthly' },
              { icon:'🏘️', title:'Ward-wise Summary', desc:'Collection completion rates and pending households per ward.', action:'ward' },
              { icon:'🧹', title:'HKS Performance Report', desc:'Individual collector daily/weekly collection records.', action:'hks' },
              { icon:'♻️', title:'Waste Category Report', desc:'Breakdown of waste types: biodegradable vs non-biodegradable.', action:'waste' },
              { icon:'📢', title:'Complaints Report', desc:'Open, resolved and pending complaint statistics.', action:'complaints' },
              { icon:'📈', title:'Annual Summary', desc:'Yearly collection trends and environmental impact statistics.', action:'annual' },
            ].map(r=>`
            <div class="feature-card">
              <div class="feature-icon">${r.icon}</div>
              <h4 class="feature-title">${r.title}</h4>
              <p class="feature-desc">${r.desc}</p>
              <button class="btn btn-primary btn-sm w-full" style="margin-top:16px" onclick="App.generateReport('${r.action}')">⬇️ Generate Report</button>
            </div>`).join('')}
          </div>
        </div>

      </main>
    </div>

    <!-- Add HKS Modal -->
    <div class="modal-overlay hidden" id="add-hks-modal" onclick="if(event.target===this)App.closeModal('add-hks-modal')">
      <div class="modal">
        <div class="modal-header"><span class="modal-title">🧹 Add HKS Member</span><button class="modal-close" onclick="App.closeModal('add-hks-modal')">×</button></div>
        <div class="modal-body">
          <div class="form-group"><label class="form-label">Full Name *</label><input type="text" id="new-hks-name" class="form-control" placeholder="Collector name"></div>
          <div class="form-group"><label class="form-label">Mobile Number *</label><input type="tel" id="new-hks-phone" class="form-control" placeholder="10-digit number"></div>
          <div class="form-group"><label class="form-label">Assigned Ward *</label>
            <select id="new-hks-ward" class="form-control">
              <option value="">— Select Ward —</option>
              ${(lsgi?.wards||[]).map(w=>`<option value="${w}">${w}</option>`).join('')}
            </select>
          </div>
        </div>
        <div class="modal-footer">
          <button class="btn btn-secondary" onclick="App.closeModal('add-hks-modal')">Cancel</button>
          <button class="btn btn-primary" onclick="App.addHKSMember()">✅ Add Member</button>
        </div>
      </div>
    </div>`;
  },

  // ── SHARED COMPONENTS ─────────────────────────────────────────────
  _sidebar(role) {
    const t = key => AppState.t(key);
    const user = AppState.get('currentUser');
    const links = {
      household: [
        { icon:'📊', label:'Dashboard', page:'household_dashboard' },
        { icon:'📅', label:'Collection Schedule', page:'household_dashboard' },
        { icon:'📦', label:'Request Pickup', modal:'pickup-modal' },
        { icon:'📢', label:'Report Issue', modal:'complaint-modal' },
        { icon:'♻️', label:'Waste Guide', page:'waste_guide' },
        { icon:'🗺️', label:'Map', page:'map_page' },
      ],
      collector: [
        { icon:'📊', label:t('hks_dashboard'), page:'hks_dashboard' },
        { icon:'🗺️', label:t('hks_my_route'), page:'map_page' },
        { icon:'🏠', label:t('hks_assigned_households'), page:'hks_dashboard' },
        { icon:'📡', label:t('hks_live_location'), page:'hks_dashboard' },
        { icon:'📋', label:t('hks_daily_summary'), page:'hks_dashboard' },
      ],
      admin: [
        { icon:'📊', label:'Overview', page:'admin_dashboard' },
        { icon:'🧹', label:t('admin_hks_members'), page:'admin_dashboard' },
        { icon:'🏠', label:t('admin_households'), page:'admin_dashboard' },
        { icon:'📅', label:t('admin_schedule'), page:'admin_dashboard' },
        { icon:'📢', label:t('admin_complaints'), page:'admin_dashboard' },
        { icon:'📋', label:t('admin_reports'), page:'admin_dashboard' },
        { icon:'🗺️', label:'Map View', page:'map_page' },
      ]
    };
    return `
    <aside class="sidebar">
      <div class="sidebar-user">
        <div style="width:40px;height:40px;background:linear-gradient(135deg,var(--primary),var(--primary-light));border-radius:50%;display:flex;align-items:center;justify-content:center;font-size:1.1rem;margin-bottom:8px">${role==='admin'?'🏛️':role==='collector'?'🧹':'🏠'}</div>
        <div class="sidebar-user-name">${user?.name||'User'}</div>
        <div class="sidebar-user-role">${role === 'admin' ? '🏛️ Local Body Admin' : role === 'collector' ? '🧹 HKS Collector' : '🏠 Household'}</div>
        <div style="font-size:0.72rem;color:var(--text-muted);margin-top:2px">${user?.ward||user?.lsgi||'Kerala'}</div>
      </div>
      <div class="sidebar-section">
        ${links[role].map(l=>`
        <button class="sidebar-link" onclick="${l.modal?`App.openModal('${l.modal}')`:`App.navigate('${l.page}')`}">
          <span>${l.icon}</span> ${l.label}
        </button>`).join('')}
      </div>
      <div style="padding:16px;margin-top:auto">
        <button class="btn btn-secondary btn-full btn-sm" onclick="App.logout()">🚪 Logout</button>
      </div>
    </aside>`;
  },

  _pickupModal() {
    return `
    <div class="modal-overlay hidden" id="pickup-modal" onclick="if(event.target===this)App.closeModal('pickup-modal')">
      <div class="modal">
        <div class="modal-header"><span class="modal-title">📦 Request Special Pickup</span><button class="modal-close" onclick="App.closeModal('pickup-modal')">×</button></div>
        <div class="modal-body">
          <form onsubmit="App.submitPickupRequest(event)">
            <div class="form-group">
              <label class="form-label">Waste Type *</label>
              <select id="pickup-waste-type" class="form-control" required>
                <option value="">— Select waste type —</option>
                ${WASTE_CATEGORIES.map(c=>`<option value="${c.id}">${c.icon} ${c.name}</option>`).join('')}
              </select>
            </div>
            <div class="form-group">
              <label class="form-label">Preferred Date *</label>
              <input type="date" id="pickup-date" class="form-control" min="${new Date().toISOString().split('T')[0]}" required>
            </div>
            <div class="form-group">
              <label class="form-label">Additional Notes</label>
              <textarea id="pickup-notes" class="form-control" placeholder="Describe the waste or special instructions..."></textarea>
            </div>
            <div class="modal-footer" style="padding:0;border:none;margin-top:4px">
              <button type="button" class="btn btn-secondary" onclick="App.closeModal('pickup-modal')">Cancel</button>
              <button type="submit" class="btn btn-primary">📦 Submit Request</button>
            </div>
          </form>
        </div>
      </div>
    </div>`;
  },

  _complaintModal() {
    return `
    <div class="modal-overlay hidden" id="complaint-modal" onclick="if(event.target===this)App.closeModal('complaint-modal')">
      <div class="modal">
        <div class="modal-header"><span class="modal-title">📢 Report a Cleanliness Issue</span><button class="modal-close" onclick="App.closeModal('complaint-modal')">×</button></div>
        <div class="modal-body">
          <form onsubmit="App.submitComplaint(event)">
            <div class="form-group">
              <label class="form-label">Issue Category</label>
              <div class="complaint-category">
                ${['Missed Collection','Illegal Dumping','Overflowing Bin','Collector Complaint','Road Garbage','Other'].map(cat=>`
                <button type="button" class="complaint-cat-btn" data-cat="${cat}" onclick="App.selectComplaintCat(this)">${cat}</button>`).join('')}
              </div>
            </div>
            <div class="form-group">
              <label class="form-label">Description *</label>
              <textarea id="complaint-desc" class="form-control" placeholder="Describe the issue in detail..." required></textarea>
            </div>
            <div class="form-group">
              <label class="form-label">📍 Location</label>
              <input type="text" class="form-control" placeholder="Street / Landmark (optional)">
            </div>
            <div class="modal-footer" style="padding:0;border:none;margin-top:4px">
              <button type="button" class="btn btn-secondary" onclick="App.closeModal('complaint-modal')">Cancel</button>
              <button type="submit" class="btn btn-primary">📢 Submit Complaint</button>
            </div>
          </form>
        </div>
      </div>
    </div>`;
  }
};

