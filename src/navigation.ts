// Function to navigate to a page
function navigateToPage(pageUrl: string) {
    window.location.href = pageUrl;
}

// Get references to the navigation links
const homeLink = document.getElementById('home-link');
const favoritesLink = document.getElementById('favorites-link');
const aboutLink = document.getElementById('about-link');

// Add event listeners to navigate to the respective pages
homeLink?.addEventListener('click', () => navigateToPage('index.html'));
favoritesLink?.addEventListener('click', () => navigateToPage('pages/favorites.html'));
aboutLink?.addEventListener('click', () => navigateToPage('pages/about.html'));
