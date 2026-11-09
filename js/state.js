// EcoTrack Kerala - App State Manager (Simple Vanilla JS Store)
const AppState = {
  _state: {
    language: localStorage.getItem('ecotrack_lang') || 'en',
    currentUser: JSON.parse(localStorage.getItem('ecotrack_user') || 'null'),
    currentPage: 'landing',
    notifications: [],
    mapCenter: [10.1632, 76.6413], // Kerala center
    mapZoom: 7,
    activeCollectors: [],
    schedules: JSON.parse(localStorage.getItem('ecotrack_schedules') || '[]'),
    households: JSON.parse(localStorage.getItem('ecotrack_households') || '[]'),
    collectors: JSON.parse(localStorage.getItem('ecotrack_collectors') || '[]'),
    complaints: JSON.parse(localStorage.getItem('ecotrack_complaints') || '[]'),
    pickupRequests: JSON.parse(localStorage.getItem('ecotrack_pickups') || '[]'),
  },
  _listeners: [],

  get(key) { return this._state[key]; },

  set(key, value) {
    this._state[key] = value;
    // Persist certain keys
    const persist = ['language', 'currentUser', 'schedules', 'households', 'collectors', 'complaints', 'pickupRequests'];
    if (persist.includes(key)) {
      const storageKey = 'ecotrack_' + key.replace(/([A-Z])/g, '_$1').toLowerCase();
      if (value === null) localStorage.removeItem(storageKey);
      else localStorage.setItem(storageKey, JSON.stringify(value));
    }
    this._notify(key, value);
  },

  _notify(key, value) {
    this._listeners.forEach(fn => fn(key, value));
  },

  subscribe(fn) {
    this._listeners.push(fn);
    return () => { this._listeners = this._listeners.filter(l => l !== fn); };
  },

  // Auth helpers
  login(user) {
    this.set('currentUser', user);
    this.set('currentPage', user.role === 'admin' ? 'admin_dashboard' :
                            user.role === 'collector' ? 'hks_dashboard' : 'household_dashboard');
  },

  logout() {
    this.set('currentUser', null);
    this.set('currentPage', 'landing');
  },

  isLoggedIn() { return !!this._state.currentUser; },
  isAdmin() { return this._state.currentUser?.role === 'admin'; },
  isCollector() { return this._state.currentUser?.role === 'collector'; },
  isHousehold() { return this._state.currentUser?.role === 'household'; },

  // Translation helper
  t(key) {
    const lang = this._state.language;
    return TRANSLATIONS[lang]?.[key] || TRANSLATIONS['en']?.[key] || key;
  },

  // Data helpers
  addHousehold(household) {
    const list = [...this._state.households, { ...household, id: 'hh_' + Date.now(), createdAt: new Date().toISOString() }];
    this.set('households', list);
    return list[list.length - 1];
  },

  addCollector(collector) {
    const list = [...this._state.collectors, { ...collector, id: 'col_' + Date.now(), createdAt: new Date().toISOString(), status: 'active' }];
    this.set('collectors', list);
    return list[list.length - 1];
  },

  addComplaint(complaint) {
    const list = [...this._state.complaints, { ...complaint, id: 'cmp_' + Date.now(), createdAt: new Date().toISOString(), status: 'open' }];
    this.set('complaints', list);
    return list[list.length - 1];
  },

  addPickupRequest(req) {
    const list = [...this._state.pickupRequests, { ...req, id: 'pkp_' + Date.now(), createdAt: new Date().toISOString(), status: 'pending' }];
    this.set('pickupRequests', list);
    return list[list.length - 1];
  },

  addNotification(message, type = 'info') {
    const notif = { id: Date.now(), message, type, timestamp: new Date().toISOString() };
    this.set('notifications', [notif, ...this._state.notifications.slice(0, 9)]);
    return notif;
  },

  // Seed demo data if empty
  seedDemoData() {
    if (this._state.households.length === 0) {
      const demo_households = [
        { id: 'hh_001', name: 'Rajan Family', phone: '9876543210', district: 'tvpm', lsgi: 'tvpm-corp', ward: 'Ward 7 - Palayam', houseNo: 'TC 15/234', street: 'MG Road', lat: 8.5074, lng: 76.9512, role: 'household', email: 'rajan@example.com' },
        { id: 'hh_002', name: 'Aisha Household', phone: '9876543211', district: 'ekm', lsgi: 'ekm-corp', ward: 'Ward 5 - Ernakulam', houseNo: 'D/41 Marine Drive', street: 'Marine Drive', lat: 9.9816, lng: 76.2999, role: 'household', email: 'aisha@example.com' },
        { id: 'hh_003', name: 'Nair Household', phone: '9876543212', district: 'tsr', lsgi: 'tsr-corp', ward: 'Ward 7 - West Fort', houseNo: 'XIV/88', street: 'Round South', lat: 10.5218, lng: 76.2140, role: 'household', email: 'nair@example.com' },
      ];
      localStorage.setItem('ecotrack_households', JSON.stringify(demo_households));
      this._state.households = demo_households;
    }
    if (this._state.collectors.length === 0) {
      const demo_collectors = [
        { id: 'col_001', name: 'Suresh Kumar', phone: '9000000001', district: 'tvpm', lsgi: 'tvpm-corp', ward: 'Ward 7 - Palayam', employeeId: 'HKS-TVP-001', lat: 8.5080, lng: 76.9490, status: 'active', email: 'suresh.hks@example.com', role: 'collector' },
        { id: 'col_002', name: 'Meera Devi', phone: '9000000002', district: 'ekm', lsgi: 'ekm-corp', ward: 'Ward 5 - Ernakulam', employeeId: 'HKS-EKM-001', lat: 9.9820, lng: 76.2990, status: 'active', email: 'meera.hks@example.com', role: 'collector' },
      ];
      localStorage.setItem('ecotrack_collectors', JSON.stringify(demo_collectors));
      this._state.collectors = demo_collectors;
    }
  }
};

// Initialize demo data
AppState.seedDemoData();

