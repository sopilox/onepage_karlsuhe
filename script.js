// ============================================
// SIDEBAR NAVIGATION
// ============================================
const navToggle = document.getElementById('navToggle');
const navMenu = document.getElementById('navMenu');
const navOverlay = document.getElementById('navOverlay');

// ============================================
// LANGUAGE SWITCHER
// ============================================
const translations = {
    en: {
        'nav.services': 'Services',
        'nav.how': 'How it works',
        'nav.testimonials': 'Testimonials',
        'nav.faq': 'FAQ',
        'nav.cta': 'Get Started',
        'hero.title': 'Onepagers & Websites<br>that drive results',
        'hero.subtitle': 'For businesses and professionals in Karlsruhe<br>who want to get more inquiries through their website.',
        'hero.cta': 'Get your website checked for free',
        'hero.badge1': 'Fixed pricing',
        'hero.badge2': 'Personal contact',
        'hero.badge3': 'Local to Karlsruhe',
        'comparison.title': 'Why choose us?',
        'comparison.subtitle': 'We understand the challenges of ineffective websites and deliver solutions that work',
        'comparison.problems.title': 'Common Website Problems',
        'comparison.problems.subtitle': 'Issues that hurt your business',
        'comparison.problems.item1.title': 'Confusing Navigation',
        'comparison.problems.item1.desc': 'Visitors can\'t find what they need',
        'comparison.problems.item2.title': 'Slow Loading Times',
        'comparison.problems.item2.desc': 'Potential customers leave before seeing your offer',
        'comparison.problems.item3.title': 'Poor Mobile Experience',
        'comparison.problems.item3.desc': '60% of visitors use mobile devices',
        'comparison.problems.item4.title': 'Unclear Call-to-Actions',
        'comparison.problems.item4.desc': 'No clear path to contact or purchase',
        'comparison.problems.item5.title': 'Outdated Design',
        'comparison.problems.item5.desc': 'Doesn\'t reflect your brand\'s quality',
        'comparison.solution.title': 'Our Solution',
        'comparison.solution.subtitle': 'What you get with us',
        'comparison.solution.item1.title': 'Intuitive Structure',
        'comparison.solution.item1.desc': 'Visitors find information effortlessly',
        'comparison.solution.item2.title': 'Lightning Fast',
        'comparison.solution.item2.desc': 'Optimized performance on all devices',
        'comparison.solution.item3.title': 'Mobile-First Design',
        'comparison.solution.item3.desc': 'Perfect experience on smartphones & tablets',
        'comparison.solution.item4.title': 'Clear CTAs',
        'comparison.solution.item4.desc': 'Strategic placement drives conversions',
        'comparison.solution.item5.title': 'Modern & Professional',
        'comparison.solution.item5.desc': 'Design that builds trust and credibility',
        'howItWorks.title': 'How it works',
        'howItWorks.subtitle': 'Simple, transparent, and efficient process from start to finish',
        'howItWorks.step1.title': 'Free Consultation',
        'howItWorks.step1.desc': 'We discuss your goals, target audience, and vision. Get a clear understanding of what you need.',
        'howItWorks.step2.title': 'Concept & Design',
        'howItWorks.step2.desc': 'We create a modern design tailored to your brand. You\'ll see the structure and style before development.',
        'howItWorks.step3.title': 'Development',
        'howItWorks.step3.desc': 'Your website is built with clean code, optimized for all devices and search engines.',
        'howItWorks.step4.title': 'Launch & Support',
        'howItWorks.step4.desc': 'We launch your website and provide ongoing support. You\'re never left alone.',
        'services.title': 'What we do for you',
        'services.item1.title': 'Onepagers',
        'services.item1.desc': 'For clear offerings<br>and quick decisions',
        'services.item2.title': 'Websites',
        'services.item2.desc': 'For trust and<br>professional presence',
        'services.item3.title': 'Redesign',
        'services.item3.desc': 'Rethink existing websites<br>in a modern and clear way',
        'services.item4.title': 'Website-Check',
        'services.item4.desc': 'Concrete Feedback<br>on structure & design',
        'testimonials.title': 'What our clients say',
        'faq.title': 'Frequently Asked Questions',
        'faq.q1.question': 'How long does it take to create a website?',
        'faq.q1.answer': 'A typical onepager takes 1-2 weeks, while a multi-page website takes 3-4 weeks. This includes design, development, and revision rounds.',
        'faq.q2.question': 'What\'s included in the fixed price?',
        'faq.q2.answer': 'Everything you need: design concept, development, mobile optimization, basic SEO, contact forms, and multiple revision rounds. Domain and hosting are not included but we\'re happy to assist with setup.',
        'faq.q3.question': 'Can I update the website myself later?',
        'faq.q3.answer': 'Yes! We build your website on user-friendly CMS platforms or provide clear documentation. We also offer training sessions and ongoing support packages.',
        'faq.q4.question': 'Do you only work with clients in Karlsruhe?',
        'faq.q4.answer': 'While we\'re based in Karlsruhe and love working with local businesses, we collaborate with clients throughout Germany and beyond via video calls and digital communication.',
        'faq.q5.question': 'What happens after the website is live?',
        'faq.q5.answer': 'We provide 30 days of complimentary support after launch. After that, we offer maintenance packages for updates, security, and improvements, or you can manage it yourself.',
        'contact.title': 'Common problems we solve',
        'contact.subtitle': 'Receive honest feedback and concrete improvement suggestions —<br>non-binding and easy to understand.',
        'contact.form.name': 'Name',
        'contact.form.email': 'E-Mail',
        'contact.form.website': 'Website (optional)',
        'contact.form.submit': 'Get your website checked free',
        'contact.form.badge1': 'Non-binding',
        'contact.form.badge2': 'No sales pitch',
        'contact.form.badge3': 'Concrete recommendations'
    },
    de: {
        'nav.services': 'Leistungen',
        'nav.how': 'Wie es funktioniert',
        'nav.testimonials': 'Referenzen',
        'nav.faq': 'FAQ',
        'nav.cta': 'Jetzt starten',
        'hero.title': 'Onepager & Websites<br>die Ergebnisse erzielen',
        'hero.subtitle': 'Für Unternehmen und Selbstständige in Karlsruhe,<br>die mehr Anfragen über ihre Website erhalten möchten.',
        'hero.cta': 'Website kostenlos prüfen lassen',
        'hero.badge1': 'Festpreise',
        'hero.badge2': 'Persönlicher Kontakt',
        'hero.badge3': 'Lokal in Karlsruhe',
        'comparison.title': 'Warum wir?',
        'comparison.subtitle': 'Wir verstehen die Herausforderungen ineffektiver Websites und liefern Lösungen, die funktionieren',
        'comparison.problems.title': 'Häufige Website-Probleme',
        'comparison.problems.subtitle': 'Probleme, die Ihrem Geschäft schaden',
        'comparison.problems.item1.title': 'Verwirrende Navigation',
        'comparison.problems.item1.desc': 'Besucher finden nicht, was sie suchen',
        'comparison.problems.item2.title': 'Langsame Ladezeiten',
        'comparison.problems.item2.desc': 'Potenzielle Kunden verlassen die Seite, bevor sie Ihr Angebot sehen',
        'comparison.problems.item3.title': 'Schlechte Mobile-Darstellung',
        'comparison.problems.item3.desc': '60% der Besucher nutzen Mobilgeräte',
        'comparison.problems.item4.title': 'Unklare Handlungsaufforderungen',
        'comparison.problems.item4.desc': 'Kein klarer Weg zur Kontaktaufnahme oder zum Kauf',
        'comparison.problems.item5.title': 'Veraltetes Design',
        'comparison.problems.item5.desc': 'Spiegelt nicht die Qualität Ihrer Marke wider',
        'comparison.solution.title': 'Unsere Lösung',
        'comparison.solution.subtitle': 'Das bekommen Sie bei uns',
        'comparison.solution.item1.title': 'Intuitive Struktur',
        'comparison.solution.item1.desc': 'Besucher finden mühelos Informationen',
        'comparison.solution.item2.title': 'Blitzschnell',
        'comparison.solution.item2.desc': 'Optimierte Performance auf allen Geräten',
        'comparison.solution.item3.title': 'Mobile-First Design',
        'comparison.solution.item3.desc': 'Perfektes Erlebnis auf Smartphones & Tablets',
        'comparison.solution.item4.title': 'Klare CTAs',
        'comparison.solution.item4.desc': 'Strategische Platzierung fördert Conversions',
        'comparison.solution.item5.title': 'Modern & Professionell',
        'comparison.solution.item5.desc': 'Design, das Vertrauen und Glaubwürdigkeit schafft',
        'howItWorks.title': 'Wie es funktioniert',
        'howItWorks.subtitle': 'Einfacher, transparenter und effizienter Prozess von Anfang bis Ende',
        'howItWorks.step1.title': 'Kostenlose Beratung',
        'howItWorks.step1.desc': 'Wir besprechen Ihre Ziele, Zielgruppe und Vision. Sie erhalten ein klares Verständnis dessen, was Sie brauchen.',
        'howItWorks.step2.title': 'Konzept & Design',
        'howItWorks.step2.desc': 'Wir erstellen ein modernes Design, das auf Ihre Marke zugeschnitten ist. Sie sehen Struktur und Stil vor der Entwicklung.',
        'howItWorks.step3.title': 'Entwicklung',
        'howItWorks.step3.desc': 'Ihre Website wird mit sauberem Code erstellt, optimiert für alle Geräte und Suchmaschinen.',
        'howItWorks.step4.title': 'Launch & Support',
        'howItWorks.step4.desc': 'Wir starten Ihre Website und bieten laufende Unterstützung. Sie werden nie allein gelassen.',
        'services.title': 'Was wir für Sie tun',
        'services.item1.title': 'Onepager',
        'services.item1.desc': 'Für klare Angebote<br>und schnelle Entscheidungen',
        'services.item2.title': 'Websites',
        'services.item2.desc': 'Für Vertrauen und<br>professionelle Präsenz',
        'services.item3.title': 'Redesign',
        'services.item3.desc': 'Bestehende Websites neu denken<br>in modern und klar',
        'services.item4.title': 'Website-Check',
        'services.item4.desc': 'Konkretes Feedback<br>zu Struktur & Design',
        'testimonials.title': 'Was unsere Kunden sagen',
        'faq.title': 'Häufig gestellte Fragen',
        'faq.q1.question': 'Wie lange dauert es, eine Website zu erstellen?',
        'faq.q1.answer': 'Ein typischer Onepager dauert 1-2 Wochen, während eine mehrseitige Website 3-4 Wochen dauert. Dies beinhaltet Design, Entwicklung und Überarbeitungsrunden.',
        'faq.q2.question': 'Was ist im Festpreis enthalten?',
        'faq.q2.answer': 'Alles, was Sie brauchen: Designkonzept, Entwicklung, Mobile-Optimierung, Basis-SEO, Kontaktformulare und mehrere Überarbeitungsrunden. Domain und Hosting sind nicht enthalten, aber wir helfen gerne beim Setup.',
        'faq.q3.question': 'Kann ich die Website später selbst aktualisieren?',
        'faq.q3.answer': 'Ja! Wir erstellen Ihre Website auf benutzerfreundlichen CMS-Plattformen oder stellen klare Dokumentation bereit. Wir bieten auch Schulungen und laufende Support-Pakete an.',
        'faq.q4.question': 'Arbeiten Sie nur mit Kunden in Karlsruhe?',
        'faq.q4.answer': 'Obwohl wir in Karlsruhe ansässig sind und gerne mit lokalen Unternehmen arbeiten, arbeiten wir mit Kunden in ganz Deutschland und darüber hinaus über Videoanrufe und digitale Kommunikation zusammen.',
        'faq.q5.question': 'Was passiert, nachdem die Website live ist?',
        'faq.q5.answer': 'Wir bieten 30 Tage kostenlosen Support nach dem Start. Danach bieten wir Wartungspakete für Updates, Sicherheit und Verbesserungen an, oder Sie können sie selbst verwalten.',
        'contact.title': 'Häufige Probleme, die wir lösen',
        'contact.subtitle': 'Erhalten Sie ehrliches Feedback und konkrete Verbesserungsvorschläge —<br>unverbindlich und leicht verständlich.',
        'contact.form.name': 'Name',
        'contact.form.email': 'E-Mail',
        'contact.form.website': 'Website (optional)',
        'contact.form.submit': 'Website kostenlos prüfen lassen',
        'contact.form.badge1': 'Unverbindlich',
        'contact.form.badge2': 'Kein Verkaufsgespräch',
        'contact.form.badge3': 'Konkrete Empfehlungen'
    }
};

let currentLanguage = localStorage.getItem('language') || 'en';

function setLanguage(lang) {
    currentLanguage = lang;
    localStorage.setItem('language', lang);
    
    // Update all elements with data-i18n attribute
    document.querySelectorAll('[data-i18n]').forEach(element => {
        const key = element.getAttribute('data-i18n');
        if (translations[lang] && translations[lang][key]) {
            element.innerHTML = translations[lang][key];
        }
    });
    
    // Update placeholders for form inputs
    document.querySelectorAll('[data-i18n-placeholder]').forEach(element => {
        const key = element.getAttribute('data-i18n-placeholder');
        if (translations[lang] && translations[lang][key]) {
            element.placeholder = translations[lang][key];
        }
    });
    
    // Update language button text
    const currentLangBtn = document.getElementById('currentLang');
    if (currentLangBtn) {
        currentLangBtn.textContent = lang.toUpperCase();
    }
    
    // Update HTML lang attribute
    document.documentElement.setAttribute('lang', lang);
}

// Initialize language switcher
const langBtn = document.getElementById('langBtn');
if (langBtn) {
    langBtn.addEventListener('click', () => {
        const newLang = currentLanguage === 'en' ? 'de' : 'en';
        setLanguage(newLang);
    });
}

// Set initial language on page load
setLanguage(currentLanguage);

if (navToggle && navMenu && navOverlay) {
    // Toggle sidebar
    navToggle.addEventListener('click', () => {
        const isExpanded = navToggle.getAttribute('aria-expanded') === 'true';
        navToggle.setAttribute('aria-expanded', !isExpanded);
        navMenu.classList.toggle('active');
        navOverlay.classList.toggle('active');
        
        // Prevent body scroll when sidebar is open
        if (!isExpanded) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = '';
        }
    });
    
    // Close sidebar when clicking overlay
    navOverlay.addEventListener('click', () => {
        navToggle.setAttribute('aria-expanded', 'false');
        navMenu.classList.remove('active');
        navOverlay.classList.remove('active');
        document.body.style.overflow = '';
    });
    
    // Close sidebar when clicking on a nav link
    const navLinks = navMenu.querySelectorAll('.nav__link');
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            navToggle.setAttribute('aria-expanded', 'false');
            navMenu.classList.remove('active');
            navOverlay.classList.remove('active');
            document.body.style.overflow = '';
        });
    });
    
    // Close sidebar on window resize if we're above mobile breakpoint
    window.addEventListener('resize', () => {
        if (window.innerWidth > 768) {
            navToggle.setAttribute('aria-expanded', 'false');
            navMenu.classList.remove('active');
            navOverlay.classList.remove('active');
            document.body.style.overflow = '';
        }
    });
}

// ============================================
// STICKY HEADER SHADOW ON SCROLL
// ============================================
const header = document.getElementById('header');
let lastScrollY = window.scrollY;

function updateHeaderOnScroll() {
    if (window.scrollY > 10) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
    lastScrollY = window.scrollY;
}

window.addEventListener('scroll', updateHeaderOnScroll, { passive: true });

// ============================================
// FAQ ACCORDION
// ============================================
const faqItems = document.querySelectorAll('.faq-item__question');

faqItems.forEach(question => {
    question.addEventListener('click', () => {
        const isExpanded = question.getAttribute('aria-expanded') === 'true';
        
        // Close all other FAQ items (optional - remove if you want multiple open)
        faqItems.forEach(item => {
            if (item !== question) {
                item.setAttribute('aria-expanded', 'false');
            }
        });
        
        // Toggle current item
        question.setAttribute('aria-expanded', !isExpanded);
    });
});

// ============================================
// SMOOTH SCROLL FOR ANCHOR LINKS
// ============================================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const href = this.getAttribute('href');
        
        // Don't prevent default for empty hash or just '#'
        if (href === '#' || href === '') return;
        
        const target = document.querySelector(href);
        if (target) {
            e.preventDefault();
            
            // Get header height for offset
            const headerHeight = header.offsetHeight;
            const targetPosition = target.getBoundingClientRect().top + window.pageYOffset - headerHeight - 20;
            
            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            });
        }
    });
});

// ============================================
// FORM SUBMISSION HANDLING
// ============================================
const contactForm = document.getElementById('contactForm');

if (contactForm) {
    contactForm.addEventListener('submit', async (e) => {
        e.preventDefault();
        
        const submitButton = contactForm.querySelector('button[type="submit"]');
        const originalButtonText = submitButton.textContent;
        
        // Show loading state
        submitButton.disabled = true;
        submitButton.textContent = 'Sending...';
        
        // Get form data
        const formData = new FormData(contactForm);
        const data = Object.fromEntries(formData);
        
        // Simulate form submission (replace with your actual API call)
        try {
            // Example: await fetch('/api/contact', { method: 'POST', body: JSON.stringify(data) });
            
            // Simulate API delay
            await new Promise(resolve => setTimeout(resolve, 1500));
            
            // Show success message
            showNotification('Thank you! We\'ll get back to you soon.', 'success');
            contactForm.reset();
            
        } catch (error) {
            showNotification('Something went wrong. Please try again.', 'error');
            console.error('Form submission error:', error);
        } finally {
            // Reset button state
            submitButton.disabled = false;
            submitButton.textContent = originalButtonText;
        }
    });
}

// ============================================
// NOTIFICATION SYSTEM
// ============================================
function showNotification(message, type = 'info') {
    // Remove existing notification if any
    const existingNotification = document.querySelector('.notification');
    if (existingNotification) {
        existingNotification.remove();
    }
    
    // Create notification element
    const notification = document.createElement('div');
    notification.className = `notification notification--${type}`;
    notification.setAttribute('role', 'alert');
    notification.textContent = message;
    
    // Add styles inline for the notification
    Object.assign(notification.style, {
        position: 'fixed',
        bottom: '20px',
        right: '20px',
        backgroundColor: type === 'success' ? '#10b981' : type === 'error' ? '#ef4444' : '#4169E1',
        color: 'white',
        padding: '16px 24px',
        borderRadius: '8px',
        boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -4px rgba(0, 0, 0, 0.1)',
        zIndex: '10000',
        maxWidth: '400px',
        animation: 'slideIn 0.3s ease',
        fontFamily: 'Inter, sans-serif',
        fontSize: '14px',
        fontWeight: '500'
    });
    
    // Add to DOM
    document.body.appendChild(notification);
    
    // Auto remove after 5 seconds
    setTimeout(() => {
        notification.style.animation = 'slideOut 0.3s ease';
        setTimeout(() => notification.remove(), 300);
    }, 5000);
}

// Add notification animations
const style = document.createElement('style');
style.textContent = `
    @keyframes slideIn {
        from {
            transform: translateX(400px);
            opacity: 0;
        }
        to {
            transform: translateX(0);
            opacity: 1;
        }
    }
    
    @keyframes slideOut {
        from {
            transform: translateX(0);
            opacity: 1;
        }
        to {
            transform: translateX(400px);
            opacity: 0;
        }
    }
`;
document.head.appendChild(style);

// ============================================
// INTERSECTION OBSERVER FOR ANIMATIONS
// ============================================
const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.1
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('animate-in');
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

// Observe cards for subtle entrance animations
const cardsToAnimate = document.querySelectorAll('.service-card, .pricing-card, .testimonial-card, .comparison__card');
cardsToAnimate.forEach(card => {
    card.style.opacity = '0';
    card.style.transform = 'translateY(20px)';
    card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(card);
});

// Add animation class
const animationStyle = document.createElement('style');
animationStyle.textContent = `
    .animate-in {
        opacity: 1 !important;
        transform: translateY(0) !important;
    }
`;
document.head.appendChild(animationStyle);

// ============================================
// PRICING CARD INTERACTIONS
// ============================================
const pricingCards = document.querySelectorAll('.pricing-card');
pricingCards.forEach(card => {
    const button = card.querySelector('.btn');
    if (button) {
        button.addEventListener('click', () => {
            // Scroll to contact form
            const contactSection = document.getElementById('contact');
            if (contactSection) {
                const headerHeight = header.offsetHeight;
                const targetPosition = contactSection.getBoundingClientRect().top + window.pageYOffset - headerHeight - 20;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
                
                // Focus on the first input after scroll
                setTimeout(() => {
                    const firstInput = contactSection.querySelector('input');
                    if (firstInput) firstInput.focus();
                }, 600);
            }
        });
    }
});

// ============================================
// FORM INPUT VALIDATION
// ============================================
const formInputs = document.querySelectorAll('.form-input');

formInputs.forEach(input => {
    // Real-time validation on blur
    input.addEventListener('blur', () => {
        if (input.hasAttribute('required') && !input.value.trim()) {
            input.style.borderColor = '#ef4444';
        } else if (input.type === 'email' && input.value && !isValidEmail(input.value)) {
            input.style.borderColor = '#ef4444';
        } else {
            input.style.borderColor = '';
        }
    });
    
    // Clear error on input
    input.addEventListener('input', () => {
        input.style.borderColor = '';
    });
});

function isValidEmail(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

// ============================================
// KEYBOARD NAVIGATION ENHANCEMENTS
// ============================================
document.addEventListener('keydown', (e) => {
    // Close mobile menu on Escape
    if (e.key === 'Escape' && navMenu.classList.contains('active')) {
        navToggle.setAttribute('aria-expanded', 'false');
        navMenu.classList.remove('active');
        document.body.style.overflow = '';
        navToggle.focus();
    }
    
    // Close FAQ on Escape
    if (e.key === 'Escape') {
        const expandedFAQ = document.querySelector('.faq-item__question[aria-expanded="true"]');
        if (expandedFAQ) {
            expandedFAQ.setAttribute('aria-expanded', 'false');
        }
    }
});

// ============================================
// PERFORMANCE: Lazy load images if any are added
// ============================================
if ('loading' in HTMLImageElement.prototype) {
    const images = document.querySelectorAll('img[loading="lazy"]');
    images.forEach(img => {
        img.src = img.dataset.src;
    });
} else {
    // Fallback for browsers that don't support lazy loading
    const script = document.createElement('script');
    script.src = 'https://cdnjs.cloudflare.com/ajax/libs/lazysizes/5.3.2/lazysizes.min.js';
    document.body.appendChild(script);
}

// ============================================
// THEME TOGGLE (Dark/Light Mode)
// ============================================
const themeToggle = document.getElementById('themeToggle');
const htmlElement = document.documentElement;

// Check for saved theme preference or default to light mode
const currentTheme = localStorage.getItem('theme') || 'light';
htmlElement.setAttribute('data-theme', currentTheme);

// Toggle theme
themeToggle.addEventListener('click', () => {
    const currentTheme = htmlElement.getAttribute('data-theme');
    const newTheme = currentTheme === 'light' ? 'dark' : 'light';
    
    htmlElement.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
});

// ============================================
// CONSOLE MESSAGE (Optional - can remove)
// ============================================
console.log('%c👋 Built with precision by OnePage Studio Karlsruhe', 'color: #4169E1; font-size: 14px; font-weight: bold;');
console.log('%cInterested in a website like this? Visit us at onepage-studio.de', 'color: #6b7280; font-size: 12px;');

// ============================================
// INITIALIZE ON DOM READY
// ============================================
document.addEventListener('DOMContentLoaded', () => {
    updateHeaderOnScroll();
    console.log('✅ Website initialized successfully');
});