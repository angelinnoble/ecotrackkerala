/* track.js – simulated live tracking.
   Replace the simulated data with a real “Route‑Optimization API” later. */

const map = L.map('map').setView([10.8505, 76.2711], 11); // centre on Kerala
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '© OpenStreetMap contributors'
}).addTo(map);

// --- Simulated vehicle data -------------------------------------------------
let vehiclePos = [10.85, 76.27]; // start near centre
const vehicleMarker = L.marker(vehiclePos, {
    icon: L.icon({
        iconUrl: 'https://cdn-icons-png.flaticon.com/512/3062/3062746.png',
        iconSize: [32, 32],
        iconAnchor: [16, 32]
    })
}).addTo(map);

let progress = 0; // 0 → 100%
const progressBar = document.querySelector('#progressBar div');
const etaEl = document.getElementById('eta');

// Simulate movement along a simple polyline (you could fetch a real route)
const route = [
    [10.85, 76.27],
    [10.86, 76.28],
    [10.87, 76.28],
    [10.88, 76.29],
    [10.89, 76.30]
];
let step = 0;

// ---- Update loop ----------------------------------------------------------
function update() {
    if (step < route.length) {
        vehiclePos = route[step];
        vehicleMarker.setLatLng(vehiclePos);
        map.panTo(vehiclePos, { animate: true, duration: 0.5 });
        step++;

        progress += 20; // 5 steps = 100%
        progressBar.style.width = progress + "%";

        // fake ETA: 5‑step route → 5 min total, 1 min per step
        const remaining = route.length - step;
        const eta = new Date(Date.now() + remaining * 60 * 1000);
        etaEl.innerHTML = `Estimated arrival: <strong>${eta.getHours().toString().padStart(2, '0')}:${eta.getMinutes().toString().padStart(2, '0')}</strong>`;
    } else {
        clearInterval(timer);
        etaEl.innerHTML = `<strong>Vehicle has completed its route.</strong>`;
    }
}
const timer = setInterval(update, 4000); // move every 4 s