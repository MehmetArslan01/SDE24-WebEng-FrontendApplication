export async function fetchRandomDogImages(count: number): Promise<string[]> {
    const images = [];

    while (images.length < count) {
        try {
            const response = await fetch('https://dog.ceo/api/breeds/image/random');
            if (response.status === 404) {
                continue;
            }
            if (response.ok) {
                const data = await response.json();
                const isValid = await isImageValid(data.message);
                if (isValid) {
                    images.push(data.message);
                } else {
                    continue;
                }
            } else {
                console.error('Failed to fetch random dog image:', response.status, response.statusText);
                continue;
            }
        } catch (error) {
            console.error('Error while fetching random dog image:', error);
        }
    }

    return images;
}


const IMAGE_VALIDATION_TIMEOUT = 5000; 

async function isImageValid(imageUrl: string) {
    return new Promise(async (resolve) => {
        try {
            const timeout = setTimeout(() => {
                console.error('Image validation timed out');
                resolve(false);
            }, IMAGE_VALIDATION_TIMEOUT);

            const imageResponse = await fetch(imageUrl);

            if (imageResponse.ok) {
                clearTimeout(timeout); 
                resolve(true);
            } else {
                console.error(`Image validation failed: ${imageResponse.status} ${imageResponse.statusText}`);
                resolve(false);
            }
        } catch (error) {
            console.error('Error while checking image validity:', error);
            resolve(false);
        }
    });
}



export function getFavoriteImages(): string[] {
    const favorites = JSON.parse(localStorage.getItem('favorites') || '[]');
    return favorites.reverse();
}
