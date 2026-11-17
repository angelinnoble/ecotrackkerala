/* rewards.js – points are earned when a booking is created.
   For demo purposes we increment by a flat 10 points per booking. */

const POINTS_KEY = "green-points";

/* ---- initialise ---- */
function getPoints() {
    return Number(localStorage.getItem(POINTS_KEY) || "0");
}
function setPoints(v) {
    localStorage.setItem(POINTS_KEY, v);
    document.querySelector(".points-counter").textContent = v;
}
setPoints(getPoints());

/* ---- listen for new bookings (schedule.js dispatches a custom event) ---- */
window.addEventListener("newBooking", () => {
    const cur = getPoints();
    const newVal = cur + 10;   // simple rule: +10 per booking
    setPoints(newVal);
});