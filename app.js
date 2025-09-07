// Wait for DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    // DOM elements
    const navToggle = document.getElementById('nav-toggle');
    const navMenu = document.getElementById('nav-menu');
    const consultationModal = document.getElementById('consultation-modal');
    const calculatorModal = document.getElementById('calculator-modal');

    // Navigation functionality
    if (navToggle && navMenu) {
        navToggle.addEventListener('click', () => {
            navMenu.classList.toggle('active');
        });
    }

    // Close mobile menu when clicking on links
    document.querySelectorAll('.nav__link').forEach(link => {
        link.addEventListener('click', () => {
            if (navMenu) {
                navMenu.classList.remove('active');
            }
        });
    });

    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                const headerHeight = 70;
                const targetPosition = target.offsetTop - headerHeight;
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });

    // Form handling
    const consultationForm = document.getElementById('consultation-form');
    const modalConsultationForm = document.getElementById('modal-consultation-form');
    
    if (consultationForm) {
        consultationForm.addEventListener('submit', handleConsultationForm);
    }
    if (modalConsultationForm) {
        modalConsultationForm.addEventListener('submit', handleConsultationForm);
    }

    // Initialize cost calculator
    if (document.getElementById('calc-country')) {
        updateCosts();
    }

    // Initialize animations
    initializeAnimations();
    
    // Initialize navigation highlighting
    initializeNavigation();

    // Attach event listeners to all buttons with onclick attributes
    attachButtonListeners();

    console.log('AdmissionBooster website loaded successfully');
});

// Attach button event listeners
function attachButtonListeners() {
    // Free consultation buttons
    document.querySelectorAll('button').forEach(button => {
        const onclick = button.getAttribute('onclick');
        if (onclick && onclick.includes('openConsultationModal')) {
            button.removeAttribute('onclick');
            button.addEventListener('click', openConsultationModal);
        }
        if (onclick && onclick.includes('openCalculator')) {
            button.removeAttribute('onclick');
            button.addEventListener('click', openCalculator);
        }
        if (onclick && onclick.includes('closeModal')) {
            button.removeAttribute('onclick');
            button.addEventListener('click', closeModal);
        }
        if (onclick && onclick.includes('showSection')) {
            button.removeAttribute('onclick');
            const match = onclick.match(/showSection\('([^']+)'\)/);
            if (match) {
                const sectionId = match[1];
                button.addEventListener('click', () => showSection(sectionId));
            }
        }
        if (onclick && onclick.includes('showCountryDetails')) {
            button.removeAttribute('onclick');
            const match = onclick.match(/showCountryDetails\('([^']+)'\)/);
            if (match) {
                const countryKey = match[1];
                button.addEventListener('click', () => showCountryDetails(countryKey));
            }
        }
    });

    // Calculator inputs
    const calcCountry = document.getElementById('calc-country');
    const calcDuration = document.getElementById('calc-duration');
    if (calcCountry) {
        calcCountry.removeAttribute('onchange');
        calcCountry.addEventListener('change', updateCosts);
    }
    if (calcDuration) {
        calcDuration.removeAttribute('onchange');
        calcDuration.addEventListener('change', calculateTotal);
    }
}

// Global functions
function openConsultationModal() {
    const modal = document.getElementById('consultation-modal');
    if (modal) {
        modal.classList.remove('hidden');
        document.body.style.overflow = 'hidden';
    }
}

function openCalculator() {
    const modal = document.getElementById('calculator-modal');
    if (modal) {
        modal.classList.remove('hidden');
        document.body.style.overflow = 'hidden';
        updateCosts(); // Initialize costs when opening
    }
}

function closeModal() {
    const consultationModal = document.getElementById('consultation-modal');
    const calculatorModal = document.getElementById('calculator-modal');
    
    if (consultationModal) {
        consultationModal.classList.add('hidden');
    }
    if (calculatorModal) {
        calculatorModal.classList.add('hidden');
    }
    
    document.body.style.overflow = 'auto';
    
    // Remove any dynamically created modals
    const dynamicModals = document.querySelectorAll('.modal:not(#consultation-modal):not(#calculator-modal)');
    dynamicModals.forEach(modal => modal.remove());
}

// Close modal when clicking on backdrop
document.addEventListener('click', function(e) {
    if (e.target.classList.contains('modal') || e.target.classList.contains('modal__backdrop')) {
        closeModal();
    }
    if (e.target.classList.contains('modal__close')) {
        closeModal();
    }
});

// Close modal with Escape key
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        closeModal();
    }
});

function handleConsultationForm(e) {
    e.preventDefault();
    
    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData);
    
    // Basic validation
    if (!data.name || !data.email || !data.phone) {
        showNotification('Please fill in all required fields', 'error');
        return;
    }
    
    if (!isValidEmail(data.email)) {
        showNotification('Please enter a valid email address', 'error');
        return;
    }
    
    // Simulate form submission
    const submitButton = e.target.querySelector('button[type="submit"]');
    const originalText = submitButton.textContent;
    submitButton.textContent = 'Scheduling...';
    submitButton.disabled = true;
    
    setTimeout(() => {
        showNotification('Consultation scheduled successfully! AdmissionBooster will contact you within 24 hours.', 'success');
        e.target.reset();
        closeModal();
        submitButton.textContent = originalText;
        submitButton.disabled = false;
    }, 1500);
}

// Email validation
function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

// Notification system
function showNotification(message, type = 'info') {
    // Remove existing notifications
    const existingNotification = document.querySelector('.notification');
    if (existingNotification) {
        existingNotification.remove();
    }
    
    const notification = document.createElement('div');
    notification.className = `notification notification--${type}`;
    notification.innerHTML = `
        <div class="notification__content">
            <span class="notification__message">${message}</span>
            <button class="notification__close" onclick="this.parentElement.parentElement.remove()">&times;</button>
        </div>
    `;
    
    // Add notification styles if not already present
    if (!document.querySelector('#notification-styles')) {
        const styles = document.createElement('style');
        styles.id = 'notification-styles';
        styles.textContent = `
            .notification {
                position: fixed;
                top: 90px;
                right: 20px;
                z-index: 3000;
                min-width: 300px;
                max-width: 500px;
                border-radius: var(--radius-base);
                box-shadow: var(--shadow-lg);
                animation: slideInRight 0.3s ease-out;
            }
            
            .notification--success {
                background: rgba(var(--color-success-rgb), 0.1);
                border: 1px solid rgba(var(--color-success-rgb), 0.3);
                color: var(--color-success);
            }
            
            .notification--error {
                background: rgba(var(--color-error-rgb), 0.1);
                border: 1px solid rgba(var(--color-error-rgb), 0.3);
                color: var(--color-error);
            }
            
            .notification--info {
                background: rgba(var(--color-info-rgb), 0.1);
                border: 1px solid rgba(var(--color-info-rgb), 0.3);
                color: var(--color-info);
            }
            
            .notification__content {
                display: flex;
                align-items: center;
                justify-content: space-between;
                padding: var(--space-16);
            }
            
            .notification__close {
                background: none;
                border: none;
                font-size: 18px;
                cursor: pointer;
                padding: 0;
                margin-left: var(--space-12);
                opacity: 0.7;
                transition: opacity var(--duration-fast);
                color: inherit;
            }
            
            .notification__close:hover {
                opacity: 1;
            }
            
            @keyframes slideInRight {
                from {
                    transform: translateX(100%);
                    opacity: 0;
                }
                to {
                    transform: translateX(0);
                    opacity: 1;
                }
            }
        `;
        document.head.appendChild(styles);
    }
    
    document.body.appendChild(notification);
    
    // Auto remove after 5 seconds
    setTimeout(() => {
        if (notification.parentElement) {
            notification.remove();
        }
    }, 5000);
}

// Country details functionality
const countryDetails = {
    canada: {
        name: 'Canada',
        overview: 'Canada offers excellent education quality, post-study work opportunities, and a clear path to permanent residence.',
        universities: ['University of Toronto', 'McGill University', 'University of British Columbia', 'University of Waterloo'],
        costs: {
            tuition: '₹15,00,000 - ₹25,00,000',
            living: '₹8,00,000 - ₹12,00,000',
            total: '₹23,00,000 - ₹37,00,000'
        },
        visa: 'Study Permit required. Processing time: 4-12 weeks',
        jobs: 'Post-graduation work permit for up to 3 years. Strong job market in tech, healthcare, and engineering.'
    },
    usa: {
        name: 'United States',
        overview: 'Home to world\'s top universities with diverse programs and excellent research opportunities.',
        universities: ['Harvard University', 'Stanford University', 'MIT', 'University of California Berkeley'],
        costs: {
            tuition: '₹20,00,000 - ₹40,00,000',
            living: '₹10,00,000 - ₹20,00,000',
            total: '₹30,00,000 - ₹60,00,000'
        },
        visa: 'F-1 Student Visa required. Processing time: 2-8 weeks',
        jobs: 'OPT allows 1-3 years of work. Competitive job market with high salaries in tech and finance.'
    },
    uk: {
        name: 'United Kingdom',
        overview: 'Shorter program durations (1-year masters) with globally recognized degrees.',
        universities: ['University of Oxford', 'University of Cambridge', 'Imperial College London', 'UCL'],
        costs: {
            tuition: '₹18,00,000 - ₹35,00,000',
            living: '₹12,00,000 - ₹18,00,000',
            total: '₹30,00,000 - ₹53,00,000'
        },
        visa: 'Student Visa (Tier 4) required. Processing time: 3-6 weeks',
        jobs: 'Graduate route allows 2 years of work (3 years for PhD). Strong job market in finance and consulting.'
    },
    germany: {
        name: 'Germany',
        overview: 'Low or no tuition fees at public universities with strong focus on research and engineering.',
        universities: ['Technical University of Munich', 'University of Heidelberg', 'RWTH Aachen', 'Free University of Berlin'],
        costs: {
            tuition: '₹0 - ₹2,00,000 (public), ₹15,00,000+ (private)',
            living: '₹6,00,000 - ₹10,00,000',
            total: '₹6,00,000 - ₹12,00,000'
        },
        visa: 'National Visa (Type D) required. Processing time: 4-12 weeks',
        jobs: '18-month job search visa after graduation. Strong engineering and tech job market.'
    },
    australia: {
        name: 'Australia',
        overview: 'High-quality education with excellent work opportunities and multicultural environment.',
        universities: ['University of Melbourne', 'Australian National University', 'University of Sydney', 'UNSW'],
        costs: {
            tuition: '₹18,00,000 - ₹30,00,000',
            living: '₹12,00,000 - ₹15,00,000',
            total: '₹30,00,000 - ₹45,00,000'
        },
        visa: 'Student Visa (Subclass 500) required. Processing time: 1-4 months',
        jobs: 'Post-study work visa for 2-4 years. Growing job market in mining, healthcare, and IT.'
    },
    netherlands: {
        name: 'Netherlands',
        overview: 'English-taught programs in a highly innovative environment with good work opportunities.',
        universities: ['University of Amsterdam', 'Delft University of Technology', 'Leiden University', 'Erasmus University'],
        costs: {
            tuition: '₹8,00,000 - ₹20,00,000',
            living: '₹8,00,000 - ₹12,00,000',
            total: '₹16,00,000 - ₹32,00,000'
        },
        visa: 'Student Visa/Residence Permit required. Processing time: 2-8 weeks',
        jobs: '1-year orientation visa for job search. Strong job market in technology and logistics.'
    }
};

function showCountryDetails(countryKey) {
    const country = countryDetails[countryKey];
    if (!country) return;
    
    // Add styles first if not present
    if (!document.querySelector('#country-details-styles')) {
        const styles = document.createElement('style');
        styles.id = 'country-details-styles';
        styles.textContent = `
            .country-details {
                max-height: 70vh;
                overflow-y: auto;
            }
            
            .country-section {
                margin-bottom: var(--space-24);
            }
            
            .country-section h4 {
                color: var(--color-primary);
                margin-bottom: var(--space-12);
                font-size: var(--font-size-lg);
            }
            
            .country-section p {
                color: var(--color-text-secondary);
                line-height: var(--line-height-normal);
                margin-bottom: var(--space-16);
            }
            
            .university-list {
                list-style: none;
                padding: 0;
                display: grid;
                grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
                gap: var(--space-8);
            }
            
            .university-list li {
                background: var(--color-bg-1);
                padding: var(--space-8) var(--space-12);
                border-radius: var(--radius-sm);
                color: var(--color-text);
            }
            
            .cost-grid {
                display: flex;
                flex-direction: column;
                gap: var(--space-12);
            }
            
            .cost-item {
                display: flex;
                justify-content: space-between;
                padding: var(--space-12);
                background: var(--color-bg-2);
                border-radius: var(--radius-sm);
                color: var(--color-text);
            }
            
            .cost-total {
                background: var(--color-primary);
                color: var(--color-btn-primary-text);
                font-weight: var(--font-weight-bold);
            }
            
            .country-actions {
                display: flex;
                gap: var(--space-16);
                justify-content: center;
                margin-top: var(--space-24);
                flex-wrap: wrap;
            }
        `;
        document.head.appendChild(styles);
    }
    
    // Create country details modal
    const modal = document.createElement('div');
    modal.className = 'modal';
    modal.innerHTML = `
        <div class="modal__backdrop">
            <div class="modal__content modal__content--large">
                <div class="modal__header">
                    <h3>${country.name} - Study Destination</h3>
                    <button class="modal__close">&times;</button>
                </div>
                <div class="modal__body">
                    <div class="country-details">
                        <section class="country-section">
                            <h4>Overview</h4>
                            <p>${country.overview}</p>
                        </section>
                        
                        <section class="country-section">
                            <h4>Top Universities</h4>
                            <ul class="university-list">
                                ${country.universities.map(uni => `<li>${uni}</li>`).join('')}
                            </ul>
                        </section>
                        
                        <section class="country-section">
                            <h4>Estimated Costs (Annual)</h4>
                            <div class="cost-grid">
                                <div class="cost-item">
                                    <strong>Tuition Fees:</strong> ${country.costs.tuition}
                                </div>
                                <div class="cost-item">
                                    <strong>Living Expenses:</strong> ${country.costs.living}
                                </div>
                                <div class="cost-item cost-total">
                                    <strong>Total Cost:</strong> ${country.costs.total}
                                </div>
                            </div>
                        </section>
                        
                        <section class="country-section">
                            <h4>Visa Information</h4>
                            <p>${country.visa}</p>
                        </section>
                        
                        <section class="country-section">
                            <h4>Job Prospects</h4>
                            <p>${country.jobs}</p>
                        </section>
                        
                        <div class="country-actions">
                            <button class="btn btn--primary" onclick="openConsultationModal(); closeModal();">Get AdmissionBooster Guidance</button>
                            <button class="btn btn--outline" onclick="closeModal();">Close</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `;
    
    // Add event listeners to the modal buttons
    modal.querySelector('.country-actions .btn--primary').addEventListener('click', () => {
        closeModal();
        setTimeout(openConsultationModal, 100);
    });
    
    modal.querySelector('.country-actions .btn--outline').addEventListener('click', closeModal);
    modal.querySelector('.modal__close').addEventListener('click', closeModal);
    
    document.body.appendChild(modal);
    document.body.style.overflow = 'hidden';
}

// Cost calculator functionality
const costData = {
    canada: { tuition: 1500000, living: 800000, other: 200000 },
    usa: { tuition: 2500000, living: 1200000, other: 300000 },
    uk: { tuition: 2000000, living: 1000000, other: 200000 },
    germany: { tuition: 200000, living: 600000, other: 150000 },
    australia: { tuition: 2200000, living: 1000000, other: 250000 }
};

function updateCosts() {
    const countrySelect = document.getElementById('calc-country');
    const tuitionElement = document.getElementById('tuition-cost');
    const livingElement = document.getElementById('living-cost');
    const otherElement = document.getElementById('other-cost');
    
    if (!countrySelect || !tuitionElement || !livingElement || !otherElement) return;
    
    const country = countrySelect.value;
    const costs = costData[country];
    
    if (costs) {
        tuitionElement.textContent = `₹${costs.tuition.toLocaleString('en-IN')}`;
        livingElement.textContent = `₹${costs.living.toLocaleString('en-IN')}`;
        otherElement.textContent = `₹${costs.other.toLocaleString('en-IN')}`;
        
        calculateTotal();
    }
}

function calculateTotal() {
    const countrySelect = document.getElementById('calc-country');
    const durationInput = document.getElementById('calc-duration');
    const totalElement = document.getElementById('total-cost');
    
    if (!countrySelect || !durationInput || !totalElement) return;
    
    const country = countrySelect.value;
    const duration = parseInt(durationInput.value) || 1;
    const costs = costData[country];
    
    if (costs) {
        const annualTotal = costs.tuition + costs.living + costs.other;
        const totalCost = annualTotal * duration;
        totalElement.textContent = `₹${totalCost.toLocaleString('en-IN')}`;
    }
}

// Utility function to show sections
function showSection(sectionId) {
    const section = document.getElementById(sectionId);
    if (section) {
        const headerHeight = 70;
        const targetPosition = section.offsetTop - headerHeight;
        window.scrollTo({
            top: targetPosition,
            behavior: 'smooth'
        });
    }
}

// Intersection Observer for animations
function initializeAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in-up');
            }
        });
    }, observerOptions);

    // Observe elements for animation
    const animateElements = document.querySelectorAll('.country-card, .testimonial, .service-card, .resource-card');
    animateElements.forEach(el => observer.observe(el));
}

// Active navigation link highlighting
function initializeNavigation() {
    // Add active navigation style
    if (!document.querySelector('#nav-active-styles')) {
        const styles = document.createElement('style');
        styles.id = 'nav-active-styles';
        styles.textContent = `
            .nav__link.active {
                color: var(--color-primary);
                font-weight: var(--font-weight-semibold);
            }
        `;
        document.head.appendChild(styles);
    }

    window.addEventListener('scroll', () => {
        const sections = document.querySelectorAll('section[id]');
        const navLinks = document.querySelectorAll('.nav__link');
        
        let current = '';
        const scrollPosition = window.scrollY + 100;
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            
            if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
                current = section.getAttribute('id');
            }
        });
        
        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${current}`) {
                link.classList.add('active');
            }
        });
    });
}

// Search functionality for countries
function searchCountries(query) {
    const countryCards = document.querySelectorAll('.country-card');
    const searchTerm = query.toLowerCase();
    
    countryCards.forEach(card => {
        const countryName = card.querySelector('h3').textContent.toLowerCase();
        const highlights = Array.from(card.querySelectorAll('.country-highlights li'))
            .map(li => li.textContent.toLowerCase()).join(' ');
        
        if (countryName.includes(searchTerm) || highlights.includes(searchTerm)) {
            card.style.display = 'block';
        } else {
            card.style.display = 'none';
        }
    });
}

// Error handling for forms
function handleFormError(error, formElement) {
    console.error('Form submission error:', error);
    showNotification('Something went wrong. Please try again.', 'error');
    
    const submitButton = formElement.querySelector('button[type="submit"]');
    if (submitButton) {
        submitButton.disabled = false;
        submitButton.textContent = submitButton.dataset.originalText || 'Submit';
    }
}

// Make functions globally available
window.openConsultationModal = openConsultationModal;
window.openCalculator = openCalculator;
window.closeModal = closeModal;
window.showCountryDetails = showCountryDetails;
window.showSection = showSection;
window.updateCosts = updateCosts;
window.calculateTotal = calculateTotal;