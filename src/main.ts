import { fetchRandomDogImages } from './api';

 export function createDogImageCard(imageUrl: string) {
    const card = document.createElement('div');
    card.classList.add('card', 'mb-3');
    const cardBody = document.createElement('div');
    cardBody.classList.add('card-body', 'd-flex', 'flex-column', 'justify-content-between'); // Set flex properties
    const dogImage = document.createElement('img');
    dogImage.classList.add('card-img-top', 'dog-image', 'img-fluid');

    dogImage.src = imageUrl;
    dogImage.alt = 'Dog Image';

    const addToFavoritesButton = document.createElement('button');
    addToFavoritesButton.classList.add('btn', 'btn-primary', 'w-100');
    addToFavoritesButton.innerText = 'Add to Favorites';


    dogImage.src = imageUrl;


    addToFavoritesButton.addEventListener('click', () => {
        const favorites = JSON.parse(localStorage.getItem('favorites') || '[]');
        favorites.push(imageUrl);
        localStorage.setItem('favorites', JSON.stringify(favorites));
        alert('Image added to favorites!');
    });

    cardBody.appendChild(dogImage);
    cardBody.appendChild(addToFavoritesButton);
    card.appendChild(cardBody);

    return card;
}

 export async function loadDogImageCards() {
    const dogImagesContainer = document.getElementById('dog-images-row');
    if (!dogImagesContainer) return;

    // Remove existing dog images
    while (dogImagesContainer.firstChild) {
        dogImagesContainer.removeChild(dogImagesContainer.firstChild);
    }

    try {
        const images = await fetchRandomDogImages(9);
        if (images.length === 0) {
            console.error('No images were fetched from the API.');
            return;
        }

        for (let i = 0; i < images.length; i++) {
            if (i % 3 === 0) {
                const newRow = document.createElement('div');
                newRow.classList.add('row', 'mb-3');
                dogImagesContainer.appendChild(newRow);
            }

            const imageUrl = images[i];
            const dogImageCard = createDogImageCard(imageUrl);

            const col = document.createElement('div');
            col.classList.add('col-md-4');
            col.appendChild(dogImageCard);

            const currentRow = dogImagesContainer.lastChild;
            if (currentRow) {
                currentRow.appendChild(col);
            }
        }
    } catch (error) {
        console.error('An error occurred while fetching images:', error);
    }
}

loadDogImageCards();


const reloadImagesBtn = document.getElementById('reload-images-btn');

if (reloadImagesBtn) {
    reloadImagesBtn.addEventListener('click', () => {
        // Clear existing images and load new ones
        loadDogImageCards();
    });
}




