
// DATA PROJECT
const projects = {

    java: [
        {
            title: "Student Management System",
            description: "A simple application to manage student data using Java.",
            tags: ["Java", "OOP"],
            image: "JAVA 01"
        },

        {
            title: "Banking Application",
            description: "A basic banking application with deposit and withdrawal features.",
            tags: ["Java", "OOP"],
            image: "JAVA 02"
        },

        {
            title: "Library Management",
            description: "An application to manage books and library records.",
            tags: ["Java", "Array"],
            image: "JAVA 03"
        },

        {
            title: "Library Management",
            description: "An application to manage books and library records.",
            tags: ["Java", "Array"],
            image: "JAVA 03"
        }
    ],

    python: [
        {
            title: "Python Calculator",
            description: "A calculator application built using Python.",
            tags: ["Python", "Logic"],
            image: "PYTHON 01"
        },

        {
            title: "Data Processing",
            description: "A simple program to process and organize data.",
            tags: ["Python", "Data"],
            image: "PYTHON 02"
        }
    ],

    csharp: [
        {
            title: "Unity 2D Game",
            description: "A 2D game project developed using Unity and C#.",
            tags: ["C#", "Unity"],
            image: "C# 01"
        }
    ],

    cpp: [
        {
            title: "Console Application",
            description: "A basic console application developed with C++.",
            tags: ["C++", "Logic"],
            image: "C++ 01"
        }
    ],

    html: [
        {
            title: "TEST",
            description: "TEST",
            tags: ["TEST", "TEST"],
            image: "IMG"
        }
    ],

    css: [
        {
            title: "TEST",
            description: "TEST",
            tags: ["TEST", "TEST"],
            image: "IMG"
        }
    ],

    javascript: [
        {
            title: "TEST",
            description: "TEST",
            tags: ["TEST", "TEST"],
            image: "IMG"
        }
    ],

    nodejs: [
        {
            title: "TEST",
            description: "TEST",
            tags: ["TEST", "TEST"],
            image: "IMG"
        }
    ],

    express: [
        {
            title: "TEST",
            description: "TEST",
            tags: ["TEST", "TEST"],
            image: "IMG"
        }
    ],

    mysql: [
        {
            title: "TEST",
            description: "TEST",
            tags: ["TEST", "TEST"],
            image: "IMG"
        }
    ],

    firebase: [
        {
            title: "TEST",
            description: "TEST",
            tags: ["TEST", "TEST"],
            image: "IMG"
        }
    ],

    git: [
        {
            title: "TEST",
            description: "TEST",
            tags: ["TEST", "TEST"],
            image: "IMG"
        }
    ],

    github: [
        {
            title: "TEST",
            description: "TEST",
            tags: ["TEST", "TEST"],
            image: "IMG"
        }
    ],

    vscode: [
        {
            title: "TEST",
            description: "TEST",
            tags: ["TEST", "TEST"],
            image: "IMG"
        }
    ],

    netlify: [
        {
            title: "TEST",
            description: "TEST",
            tags: ["TEST", "TEST"],
            image: "IMG"
        }
    ],

    unity: [
        {
            title: "TEST",
            description: "TEST",
            tags: ["TEST", "TEST"],
            image: "IMG"
        }
    ]
};


// AMBIL ELEMEN HTML
const techButtons = document.querySelectorAll(".tech-btn");
const projectList = document.querySelector("#project-list");
const projectCount = document.querySelector("#project-count");


// FUNCTION MENAMPILKAN PROJECT
function showProjects(tech) {

    // Ambil data berdasarkan teknologi
    const selectedProjects = projects[tech];

    // Kosongkan project sebelumnya
    projectList.innerHTML = "";

    // Update jumlah project
    projectCount.textContent =
        `${String(selectedProjects.length).padStart(2, "0")} PROJECTS`;

    // Tampilkan setiap project
    selectedProjects.forEach(project => {

        const card = document.createElement("article");

        card.classList.add("project-card");

        card.innerHTML = `
            <div class="project-image">
                ${project.image}
            </div>

            <div class="project-info">
                <h3>${project.title}</h3>

                <p>${project.description}</p>

                <div class="project-tags">
                    ${project.tags.map(tag =>
                        `<span>${tag}</span>`
                    ).join("")}
                </div>
            </div>
        `;

        projectList.appendChild(card);

    });

    // Kembalikan scroll ke bagian atas
    projectList.scrollTop = 0;

}


// EVENT CLICK PADA TECH STACK
techButtons.forEach(button => {

    button.addEventListener("click", function() {

        const selectedTech = this.dataset.tech;

        // Hapus status active dari semua tombol
        techButtons.forEach(btn => {
            btn.classList.remove("active");
            btn.setAttribute("aria-pressed", "false");
        });

        // Aktifkan tombol yang dipilih
        this.classList.add("active");
        this.setAttribute("aria-pressed", "true");

        // Tampilkan project sesuai pilihan
        showProjects(selectedTech);

    });

});


// TAMPILKAN JAVA SAAT HALAMAN PERTAMA DIBUKA
showProjects("");
