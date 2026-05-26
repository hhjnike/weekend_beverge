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
$(document).ready(function() {
    $('a[href="#story"]').click(function(e) {
        e.preventDefault(); 
        var targetOffset = $('.about_section').offset().top;
        $('html, body').animate({
            scrollTop: targetOffset
        }, 600);
    });
});
