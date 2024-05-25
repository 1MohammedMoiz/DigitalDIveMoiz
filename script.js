// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="contact-form"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        const target = document.querySelector(this.getAttribute('contact-form'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});

// Mobile navigation toggle
const navToggle = document.querySelector('.nav-toggle');
const navMenu = document.querySelector('.nav-menu');

navToggle.addEventListener('click', () => {
    navMenu.classList.toggle('active');
});

// Form submission using AJAX
const form = document.getElementById('contact-form');

form.addEventListener('submit', (e) => {
    e.preventDefault();

    const formData = new FormData(form);
    const xhr = new XMLHttpRequest();
    xhr.open('POST', 'submit.php'); // Replace 'submit.php' with your form submission endpoint
    xhr.onload = () => {
        if (xhr.status === 200) {
            // Handle successful form submission (e.g., show success message)
            console.log(xhr.responseText);
            form.reset();
        } else {
            // Handle errors (e.g., show error message)
            console.error('Form submission failed:', xhr.statusText);
        }
    };
    xhr.onerror = () => {
        console.error('Form submission failed:', xhr.statusText);
    };
    xhr.send(formData);
});

// Dynamic project filtering
const filterButtons = document.querySelectorAll('.filter-btn');
const projects = document.querySelectorAll('.project');

filterButtons.forEach(button => {
    button.addEventListener('click', () => {
        const filterValue = button.dataset.filter;

        projects.forEach(project => {
            if (filterValue === 'all' || project.classList.contains(filterValue)) {
                project.style.display = 'block';
            } else {
                project.style.display = 'none';
            }
        });
    });
});

// Smooth animations (optional)
const scrollElements = document.querySelectorAll('.scroll-element');

const elementInView = (el, offset = 0) => {
    const elementTop = el.getBoundingClientRect().top;

    return (
        elementTop <= ((window.innerHeight || document.documentElement.clientHeight) - offset)
    );
};

const displayScrollElement = () => {
    scrollElements.forEach(el => {
        if (elementInView(el, 100)) {
            el.classList.add('scrolled');
        }
    });
};

window.addEventListener('scroll', () => {
    displayScrollElement();
});
xhr.open('POST', 'submit.php'); // Replace 'submit.php' with the actual endpoint
