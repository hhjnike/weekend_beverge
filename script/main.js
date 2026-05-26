document.addEventListener('DOMContentLoaded', () => {
    const lineupBtn = document.getElementById('btn_lineup');
    const lineupSection = document.getElementById('lineup');

    if (lineupBtn && lineupSection) {
        lineupBtn.addEventListener('click', () => {
            lineupSection.scrollIntoView({ behavior: 'smooth' });
        });
    }
});
if ('scrollRestoration' in history) {
    history.scrollRestoration = 'manual';
}

document.addEventListener('DOMContentLoaded', () => {
    window.scrollTo(0, 0);

    const lineupBtn = document.getElementById('btn_lineup');
    const lineupSection = document.getElementById('lineup');

    if (lineupBtn && lineupSection) {
        lineupBtn.addEventListener('click', () => {
            lineupSection.scrollIntoView({ behavior: 'smooth' });
        });
    }
});