/* complaint.js – client‑side storage of missed‑collection reports */

const COMPLAINT_KEY = "waste-complaints";

/* ---------- storage helpers ---------- */
function loadComplaints() {
    const raw = localStorage.getItem(COMPLAINT_KEY);
    return raw ? JSON.parse(raw) : [];
}
function saveComplaints(arr) {
    localStorage.setItem(COMPLAINT_KEY, JSON.stringify(arr));
}

/* ---------- UI rendering ---------- */
function renderList() {
    const tbody = document.querySelector("#complaint-list tbody");
    tbody.innerHTML = "";
    const list = loadComplaints()
        .sort((a, b) => new Date(b.date) - new Date(a.date));

    if (list.length === 0) {
        tbody.innerHTML = `<tr><td colspan="3" style="text-align:center">No complaints yet.</td></tr>`;
        return;
    }

    list.forEach((c, i) => {
        const tr = document.createElement("tr");
        tr.innerHTML = `<td>${i + 1}</td><td>${new Date(c.date).toLocaleDateString()}</td><td>${c.status}</td>`;
        tbody.appendChild(tr);
    });
}

/* ---------- Form handling ---------- */
document.addEventListener("DOMContentLoaded", () => {
    const dateInp = document.getElementById("cDate");
    const today = new Date().toISOString().split("T")[0];
    dateInp.setAttribute("min", today);
    renderList();

    const form = document.getElementById("cForm");
    const preview = document.getElementById("photoPreview");
    const fileInp = document.getElementById("cPhoto");

    fileInp.addEventListener("change", () => {
        const file = fileInp.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = e => {
                preview.src = e.target.result;
                preview.style.display = "block";
            };
            reader.readAsDataURL(file);
        } else {
            preview.style.display = "none";
        }
    });

    form.addEventListener("submit", e => {
        e.preventDefault();
        const newComp = {
            id: Date.now(),
            date: document.getElementById("cDate").value,
            description: document.getElementById("cDesc").value,
            photo: preview.src || null,
            status: "Submitted"   // could become "In review", "Resolved", etc.
        };
        const list = loadComplaints();
        list.push(newComp);
        saveComplaints(list);
        renderList();
        form.reset();
        preview.style.display = "none";
        alert("Complaint submitted. We will investigate shortly.");
    });
});