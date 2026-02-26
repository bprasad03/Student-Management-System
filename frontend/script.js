const API_URL = "http://localhost:8080/api/students";

const form = document.getElementById("studentForm");
const studentList = document.getElementById("studentList");

let editingId = null;

// Submit Form (Add or Update)
form.addEventListener("submit", async (e) => {
    e.preventDefault();

    const student = {
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        course: document.getElementById("course").value
    };

    if (editingId) {
        // UPDATE
        await fetch(`${API_URL}/${editingId}`, {
            method: "PUT",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(student)
        });

        editingId = null;
        form.querySelector("button").textContent = "Add Student";

    } else {
        // ADD
        await fetch(API_URL, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(student)
        });
    }

    form.reset();
    loadStudents();
});

// Load Students
async function loadStudents() {
    const response = await fetch(API_URL);
    const students = await response.json();

    studentList.innerHTML = "";

    students.forEach(s => {
        const li = document.createElement("li");

        li.innerHTML = `
            ${s.name} - ${s.course}
            <button onclick="editStudent(${s.id}, '${s.name}', '${s.email}', '${s.course}')">Edit</button>
            <button onclick="deleteStudent(${s.id})">Delete</button>
        `;

        studentList.appendChild(li);
    });
}

// Delete Student
async function deleteStudent(id) {
    await fetch(`${API_URL}/${id}`, {
        method: "DELETE"
    });

    loadStudents();
}

// Edit Student
function editStudent(id, name, email, course) {
    document.getElementById("name").value = name;
    document.getElementById("email").value = email;
    document.getElementById("course").value = course;

    editingId = id;
    form.querySelector("button").textContent = "Update Student";
}

// Initial Load
loadStudents();