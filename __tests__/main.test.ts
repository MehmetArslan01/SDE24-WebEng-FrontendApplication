// import { fetchRandomDogImages } from '../src/api';
// import { createDogImageCard, loadDogImageCards } from '../src/main';

// // Mock the fetchRandomDogImages function
// jest.mock('../src/api', () => ({
//   fetchRandomDogImages: jest.fn(),
// }));

// // Mocking the localStorage
// const localStorageMock = (function () {
//   let store: Record<string, any> = {};

//   return {
//     getItem: function (key: string) {
//       return store[key] || null;
//     },
//     setItem: function (key: string, value: any) {
//       store[key] = value.toString();
//     },
//     clear: function () {
//       store = {};
//     },
//     removeItem: function (key: string) {
//       delete store[key];
//     },
//   };
// })();
// Object.defineProperty(global, 'localStorage', { value: localStorageMock });

// describe('createDogImageCard', () => {
//   test('it should create a dog image card', () => {
//     const imageUrl = 'https://example.com/dog.jpg';
//     const card = createDogImageCard(imageUrl);

//     expect(card).not.toBeNull();
//     expect(card.classList).toContain('card');
//     expect(card.querySelector('img')?.src).toBe(imageUrl);
//     expect(card.querySelector('img')?.alt).toBe('Dog Image');
//     expect(card.querySelector('button')?.textContent).toBe('Add to Favorites');
//   });
// });

// describe('loadDogImageCards', () => {
//   test('it should load dog image cards', async () => {
//     const dogImagesContainer = document.createElement('div');
//     dogImagesContainer.id = 'dog-images-row';
//     document.body.appendChild(dogImagesContainer);

//     // Mock the return value of fetchRandomDogImages
//     const mockImages = ['image1.jpg', 'image2.jpg', 'image3.jpg'];
//     (fetchRandomDogImages as jest.Mock).mockResolvedValue(mockImages);

//     await loadDogImageCards();

//     const dogImageCards = dogImagesContainer.querySelectorAll('.card');
//     expect(dogImageCards.length).toBe(mockImages.length);

//     // Cleanup
//     document.body.removeChild(dogImagesContainer);
//   });
// });
