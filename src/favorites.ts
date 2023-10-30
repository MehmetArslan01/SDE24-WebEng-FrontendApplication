import { getFavoriteImages } from './api.js';

function displayFavoriteImages() {

    const favoritesRow = document.getElementById('favorites-row');
    if (!favoritesRow) return;

    const favoriteImages = getFavoriteImages();

    favoriteImages.forEach((imageUrl) => {
        const favoriteImage = createDogImageCard(imageUrl, favoritesRow, true);
        favoritesRow.appendChild(favoriteImage);
    });
}

function createDogImageCard(imageUrl: string, parentContainer: HTMLElement, isFavorite: boolean) {
    const card = document.createElement('div');
    card.classList.add('card', 'mb-3');
    const cardBody = document.createElement('div');
    cardBody.classList.add('card-body', 'd-flex', 'flex-column', 'justify-content-between');
    const dogImage = document.createElement('img');
    dogImage.classList.add('card-img-top', 'dog-image', 'img-fluid');

    dogImage.src = imageUrl;
    dogImage.alt = 'Dog Image';

    const removeButton = document.createElement('button');
    removeButton.classList.add('btn', 'btn-removeFavorites', 'w-100');
    removeButton.innerText = 'Remove from Favorites';

    removeButton.addEventListener('click', () => {
        removeFavoriteImage(imageUrl, parentContainer, card);
    });

    cardBody.appendChild(dogImage);
    cardBody.appendChild(removeButton);
    card.appendChild(cardBody);

    if (isFavorite) {
        card.classList.add('favorite-card');
        dogImage.classList.add('favorite-dog-image');
    }

    return card;
}

function removeFavoriteImage(imageUrl: string, parentContainer: HTMLElement, card: HTMLElement) {
    const favorites = JSON.parse(localStorage.getItem('favorites') || '[]');
    const updatedFavorites = favorites.filter((url: string) => url !== imageUrl);
    localStorage.setItem('favorites', JSON.stringify(updatedFavorites));

    parentContainer.removeChild(card);
}

displayFavoriteImages();
