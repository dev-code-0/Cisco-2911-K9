document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

document.getElementById('contact-form').addEventListener('submit', function(e) {
    e.preventDefault();
    alert('Gracias por su interés. Nos pondremos en contacto con usted pronto.');
    this.reset();
});

function isInViewport(element) {
    const rect = element.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}

function showElements() {
    document.querySelectorAll('.feature').forEach(feature => {
        if (isInViewport(feature)) {
            feature.classList.add('show');
        }
    });

    document.querySelectorAll('.benefits li').forEach(item => {
        if (isInViewport(item)) {
            item.classList.add('show');
        }
    });
}

window.addEventListener('scroll', showElements);
window.addEventListener('load', showElements);