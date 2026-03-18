const API_URL = "https://verbose-cod-jj5pg69v7pg5h57q6-5000.app.github.dev/api/internships";

const form = document.getElementById("internshipForm");
const internshipList = document.getElementById("internshipList");
const message = document.getElementById("message");

window.onload = fetchInternships;


// Fetch internships from backend
async function fetchInternships() {

    internshipList.innerHTML = "<p id='loading'>Loading internships...</p>";

    const response = await fetch(API_URL);
    const internships = await response.json();

    internshipList.innerHTML = "";

    internships.forEach(internship => {

        const card = document.createElement("div");
        card.className = "internship-card";

        card.innerHTML = `
            <h3>${internship.title}</h3>
            <p><strong>Company:</strong> ${internship.company}</p>
            <p><strong>Location:</strong> ${internship.location}</p>
            <button class="delete-btn" onclick="deleteInternship('${internship._id}')">
                Delete
            </button>
        `;

        internshipList.appendChild(card);
    });
}


// Add new internship
form.addEventListener("submit", async function(e) {

    e.preventDefault();

    const title = document.getElementById("title").value;
    const company = document.getElementById("company").value;
    const location = document.getElementById("location").value;

    const newInternship = {
        title,
        company,
        location
    };

    await fetch(API_URL, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(newInternship)
    });

    message.textContent = "Internship added successfully!";
    form.reset();

    fetchInternships();

    setTimeout(() => {
        message.textContent = "";
    }, 3000);
});


// Delete internship
async function deleteInternship(id) {

    const confirmDelete = confirm("Are you sure you want to delete this internship?");

    if (!confirmDelete) return;

    await fetch(`${API_URL}/${id}`, {
        method: "DELETE"
    });

    message.textContent = "Internship deleted successfully!";

    fetchInternships();

    setTimeout(() => {
        message.textContent = "";
    }, 3000);
}