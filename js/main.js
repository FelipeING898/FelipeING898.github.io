document.addEventListener('DOMContentLoaded', function() {
    // Loader
    setTimeout(function() {
        document.querySelector('.loader').classList.add('fade-out');
    }, 1000);

    // Mobile menu toggle
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');
    
    hamburger.addEventListener('click', function() {
        this.classList.toggle('active');
        navLinks.classList.toggle('active');
    });

    // Close mobile menu when clicking a link
    document.querySelectorAll('.nav-links a').forEach(link => {
        link.addEventListener('click', () => {
            hamburger.classList.remove('active');
            navLinks.classList.remove('active');
        });
    });

    // Sticky header on scroll
    window.addEventListener('scroll', function() {
        const header = document.querySelector('.header');
        header.classList.toggle('scrolled', window.scrollY > 50);
    });

    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 80,
                    behavior: 'smooth'
                });
            }
        });
    });

    // Load projects from Firebase
    loadProjects();

    // Contact form submission
    const contactForm = document.getElementById('contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', handleFormSubmit);
    }
});

// Load projects from Firebase
function loadProjects() {
    const portfolioGrid = document.getElementById('portfolio-grid');
    if (!portfolioGrid) return;

    portfolioGrid.innerHTML = '<div class="loading">Cargando proyectos...</div>';

    db.collection("projects").orderBy("date", "desc").get()
        .then((querySnapshot) => {
            portfolioGrid.innerHTML = '';
            
            if (!querySnapshot.empty) {
                querySnapshot.forEach((doc) => {
                    const project = doc.data();
                    const projectCard = createProjectCard(project);
                    portfolioGrid.appendChild(projectCard);
                });
            } else {
                portfolioGrid.innerHTML = '<p class="no-projects">No hay proyectos disponibles en este momento.</p>';
            }
        })
        .catch((error) => {
            console.error("Error getting projects: ", error);
            portfolioGrid.innerHTML = '<p class="error">Error al cargar los proyectos.</p>';
        });
}

// Create project card HTML
function createProjectCard(project) {
    const card = document.createElement('div');
    card.className = 'project-card';

    card.innerHTML = `
        <div class="project-image">
            <img src="${project.image}" alt="${project.title}">
        </div>
        <div class="project-info">
            <h3>${project.title}</h3>
            <p>${project.description}</p>
            <a href="${project.link}" class="project-link" target="_blank">Ver proyecto <i class="fas fa-arrow-right"></i></a>
        </div>
    `;

    return card;
}

// Handle contact form submission
function handleFormSubmit(e) {
    e.preventDefault();
    
    const form = e.target;
    const formStatus = document.getElementById('form-status');
    const name = form.name.value.trim();
    const email = form.email.value.trim();
    const message = form.message.value.trim();
    
    if (!name || !email || !message) {
        showFormStatus(formStatus, 'Por favor completa todos los campos.', 'error');
        return;
    }
    
    db.collection("messages").add({
        name: name,
        email: email,
        message: message,
        timestamp: firebase.firestore.FieldValue.serverTimestamp(),
        read: false
    })
    .then(() => {
        showFormStatus(formStatus, '¡Mensaje enviado con éxito! Pronto me pondré en contacto contigo.', 'success');
        form.reset();
    })
    .catch((error) => {
        showFormStatus(formStatus, 'Hubo un error al enviar tu mensaje. Por favor inténtalo de nuevo.', 'error');
        console.error('Error saving message:', error);
    });
}

// Show form status message
function showFormStatus(element, message, type) {
    element.textContent = message;
    element.style.display = 'block';
    element.style.backgroundColor = type === 'success' ? '#d4edda' : '#f8d7da';
    element.style.color = type === 'success' ? '#155724' : '#721c24';
    
    setTimeout(() => {
        element.style.display = 'none';
    }, 5000);
}