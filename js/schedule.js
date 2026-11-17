/* schedule.js – Smart Waste Pickup Scheduler */

/* ---------- Constants ---------- */
const STORAGE_KEY = "smart-waste-bookings";

/* ---------- Helper: read/write localStorage ---------- */
function loadBookings() {
    const raw = localStorage.getItem(STORAGE_KEY);
    return raw ? JSON.parse(raw) : [];
}

function saveBookings(bookings) {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(bookings));
}

/* ---------- UI: render the bookings table ---------- */
function renderBookings() {
    const tbody = document.querySelector("#bookingsTable tbody");
    tbody.innerHTML = ""; // clear

    const bookings = loadBookings()
        .filter(b => new Date(b.date) >= new Date()) // only future/present
        .sort((a, b) => new Date(a.date) - new Date(b.date));

    if (bookings.length === 0) {
        const tr = document.createElement("tr");
        const td = document.createElement("td");
        td.colSpan = 4;
        td.style.textAlign = "center";
        td.textContent = "No bookings yet.";
        tr.appendChild(td);
        tbody.appendChild(tr);
        return;
    }

    bookings.forEach((b, idx) => {
        const tr = document.createElement("tr");
        tr.innerHTML = `
            <td>${idx + 1}</td>
            <td>${b.type}</td>
            <td>${new Date(b.date).toLocaleDateString()}</td>
            <td>${b.status}</td>
        `;
        tbody.appendChild(tr);
    });
}

/* ---------- Form handling ---------- */
document.addEventListener("DOMContentLoaded", () => {
    // 1️⃣ Restrict date picker to today+future
    const dateInput = document.getElementById("pickupDate");
    const today = new Date().toISOString().split("T")[0];
    dateInput.setAttribute("min", today);

    // 2️⃣ Load and display existing bookings
    renderBookings();

    // 3️⃣ Submit handler
    const form = document.getElementById("pickupForm");
    form.addEventListener("submit", ev => {
        ev.preventDefault();

        const type = document.getElementById("wasteType").value;
        const date = document.getElementById("pickupDate").value;

        if (!type || !date) {
            alert("Please select waste type and pickup date.");
            return;
        }

        const newBooking = {
            id: Date.now(),
            type,
            date,
            status: "Pending"      // you can later update to "Confirmed" etc.
        };

        const bookings = loadBookings();
        bookings.push(newBooking);
        saveBookings(bookings);
        renderBookings();

        // Reset form
        form.reset();
        dateInput.setAttribute("min", today);
        alert("Your collection has been booked!");
    });
});