// Burger menu toggle
const burgerMenu = document.getElementById('burgerMenu');
const navMenu = document.getElementById('navMenu');

if (burgerMenu && navMenu) {
    burgerMenu.addEventListener('click', () => {
        navMenu.classList.toggle('active');
        burgerMenu.classList.toggle('active');
    });
}

// Show more cards functionality for mobile
const pagesBtn = document.querySelector('.pages__btn');
const blogGrid = document.querySelector('.blog__grid');

if (pagesBtn && blogGrid) {
    pagesBtn.addEventListener('click', () => {
        blogGrid.classList.toggle('show-all');
        if (blogGrid.classList.contains('show-all')) {
            pagesBtn.textContent = 'Свернуть';
        } else {
            pagesBtn.textContent = 'Ещё';
        }
    });
}

