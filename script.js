document.addEventListener('DOMContentLoaded', () => {
    const hi = document.getElementById('hi');
    const name = document.getElementById('name');
    const loading = document.getElementById('loading');
    const content = document.getElementById('content');

    // "Hi" slides in from left
    setTimeout(() => {
        hi.style.animation = 'slideLeft 2s ease forwards';
        hi.style.opacity = 1;
    }, 500);

    // "I am Mano" falls from top, "Hi" slides down 0.7s before
    setTimeout(() => {
        name.style.animation = 'fallDown 1.5s ease forwards';
        name.style.opacity = 1;
        setTimeout(() => {
            hi.style.animation = 'slideDown 0.8s ease forwards';
        }, 800); // Changed from 1200 to 800 for 0.7s earlier
    }, 3000);

    // "Loading" slides fast from right, "I am Mano" slides left
    setTimeout(() => {
        loading.style.animation = 'slideRight 1s ease forwards';
        loading.style.opacity = 1;
        setTimeout(() => {
            name.style.animation = 'slideLeftOut 0.8s ease forwards';
        }, 700);
    }, 5000);

    // Content fades in, "Loading" slides down
    setTimeout(() => {
        loading.style.animation = 'slideDown 0.8s ease forwards';
        content.style.opacity = 1;
    }, 6500);
});