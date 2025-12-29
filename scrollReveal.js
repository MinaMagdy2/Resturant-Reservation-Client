window.observeRestaurantCards = () => {

    const cards = document.querySelectorAll('.restaurant-card');

    if (!cards.length) return;

    const observer = new IntersectionObserver((entries, obs) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('show');
                obs.unobserve(entry.target); // 👈 يتحرك مرة واحدة
            }
        });
    }, {
        threshold: 0.3   // 👈 الكارت يكون واضح فعلًا
    });

    cards.forEach((card, index) => {
        card.style.transitionDelay = `${index * 150}ms`; // بدل 70ms → Animation تدريجي أوضح
        observer.observe(card);
    });

};
window.bootstrapModal = {
    show: function (id) {
        const modal = new bootstrap.Modal(document.getElementById(id));
        modal.show();
    }
};
window.tryHistoryBack = () => {
    if (window.history.length > 1) {
        window.history.back();
        return true;
    }
    return false;
};

