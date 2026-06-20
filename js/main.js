document.addEventListener('DOMContentLoaded', () => {
    // Intersection Observer for fade-in animations
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    // Спочатку додаємо клас fade-in динамічно до тих елементів, де його немає в HTML
    const dynamicElements = document.querySelectorAll('.card, .experience-item, .article-content > *');
    dynamicElements.forEach(el => el.classList.add('fade-in'));

    // Тепер спостерігаємо за ВСІМА елементами з класом fade-in
    const allFadeElements = document.querySelectorAll('.fade-in');
    allFadeElements.forEach(el => {
        observer.observe(el);
    });
});
