document.addEventListener('DOMContentLoaded', () => {
    const burger = document.querySelector('.burger');
    const navLinks = document.querySelector('.nav-links');
    const learnMoreButtons = document.querySelectorAll('.learn-more-btn');
    const modal = document.getElementById('modal');
    const modalContent = document.querySelector('.modal-content');
    const closeBtn = document.querySelector('.close');
    const modalTitle = document.getElementById('modal-title');
    const modalDescription = document.getElementById('modal-description');

    const servicesInfo = {
        'web-dev': {
            title: 'Web Development',
            description: 'Our web development services include building responsive, robust, and user-friendly websites tailored to your business needs.'
        },
        'seo': {
            title: 'SEO Optimization',
            description: 'Our SEO services aim to improve your site’s visibility on search engines, helping you attract more organic traffic and grow your business.'
        },
        'digital-marketing': {
            title: 'Digital Marketing',
            description: 'We offer comprehensive digital marketing strategies to boost your online presence and reach your target audience effectively.'
        }
    };

    burger.addEventListener('click', () => {
        navLinks.classList.toggle('active');
    });

    learnMoreButtons.forEach(button => {
        button.addEventListener('click', () => {
            const service = button.getAttribute('data-service');
            modalTitle.textContent = servicesInfo[service].title;
            modalDescription.textContent = servicesInfo[service].description;
            modal.style.display = 'flex';
        });
    });

    closeBtn.addEventListener('click', () => {
        modal.style.display = 'none';
    });

    window.addEventListener('click', (e) => {
        if (e.target === modal) {
            modal.style.display = 'none';
        }
    });
});
