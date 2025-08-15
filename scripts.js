// Typed.js for hero section
var typed = new Typed('#typed', {
    strings: ['Project Manager', 'UI/UX Designer', 'BSIT Graduate'],
    typeSpeed: 60,
    backSpeed: 40,
    backDelay: 1200,
    loop: true
});

// Fade-in animation on scroll
const fadeIns = document.querySelectorAll('.fade-in');
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, { threshold: 0.1 });
fadeIns.forEach(element => observer.observe(element));

// Smooth scrolling for navigation
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Modal functionality
function openModal(project) {
    const modal = document.getElementById('modal');
    const modalContent = document.getElementById('modal-content');
    let content = '';

    if (project === 'capstone') {
        content = `
            <h3 class="text-2xl font-bold text-gray-900 mb-4">Capstone Project</h3>
            <img src="https://via.placeholder.com/400x200?text=Capstone+Project" alt="Capstone Project" class="w-full h-48 object-cover mb-4 rounded-lg">
            <p class="text-gray-700">Led a team to develop an innovative application, managing all phases from ideation to execution. Designed a user-friendly UI/UX prototype using Figma, focusing on intuitive navigation and modern aesthetics.</p>
            <a href="#" class="text-orange-500 hover:underline mt-4 inline-block">View Prototype</a>
        `;
    } else if (project === 'research') {
        content = `
            <h3 class="text-2xl font-bold text-gray-900 mb-4">Research Project</h3>
            <img src="https://via.placeholder.com/400x200?text=Research+Project" alt="Research Project" class="w-full h-48 object-cover mb-4 rounded-lg">
            <p class="text-gray-700">Coordinated a high school research project, ensuring team alignment and timely delivery of milestones. The project explored innovative solutions in computer systems servicing.</p>
            <a href="#" class="text-orange-500 hover:underline mt-4 inline-block">View Details</a>
        `;
    } else if (project === 'media') {
        content = `
            <h3 class="text-2xl font-bold text-gray-900 mb-4">Media Production</h3>
            <img src="https://via.placeholder.com/400x200?text=Media+Production" alt="Media Production" class="w-full h-48 object-cover mb-4 rounded-lg">
            <p class="text-gray-700">Produced high-quality visual content for LENTE, enhancing engagement and communication. Utilized Canva, Photoshop, and Adobe Lightroom to create professional media assets.</p>
            <a href="#" class="text-orange-500 hover:underline mt-4 inline-block">View Portfolio</a>
        `;
    }

    modalContent.innerHTML = content;
    modal.style.display = 'flex';
}

function closeModal() {
    const modal = document.getElementById('modal');
    modal.style.display = 'none';
}

// Close modal when clicking outside
window.onclick = function(event) {
    const modal = document.getElementById('modal');
    if (event.target == modal) {
        modal.style.display = 'none';
    }
}
