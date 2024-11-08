// Elements
const gallery = document.getElementById('gallery');
const searchInput = document.getElementById('searchInput');
const categoryFilter = document.getElementById('categoryFilter');
const lightbox = document.getElementById('lightbox');
const lightboxImage = document.getElementById('lightboxImage');
const lightboxCaption = document.getElementById('lightboxCaption');
const lightboxClose = document.getElementById('lightboxClose');

// Function to display images
function displayImages(filteredImages) {
    gallery.innerHTML = ''; // Clear existing images
    filteredImages.forEach(image => {
        const imgElement = document.createElement('div');
        imgElement.classList.add('gallery-item');
        imgElement.innerHTML = `
            <img src="${image.src}" alt="${image.title}">
            <p>${image.title}</p>
        `;
        
        // Add click event to open the lightbox
        imgElement.addEventListener('click', () => openLightbox(image));

        gallery.appendChild(imgElement);
    });
}

// Function to filter images
function filterImages() {
    const searchTerm = searchInput.value.toLowerCase();
    const category = categoryFilter.value;
    const filteredImages = images.filter(image => {
        const matchesSearch = image.title.toLowerCase().includes(searchTerm);
        const matchesCategory = category === 'all' || image.category === category;
        return matchesSearch && matchesCategory;
    });
    displayImages(filteredImages);
}

// Function to open lightbox
function openLightbox(image) {
    lightbox.style.display = 'flex';
    lightboxImage.src = image.src;
    lightboxCaption.textContent = image.title;
}

// Function to close lightbox
function closeLightbox() {
    lightbox.style.display = 'none';
}

// Event listeners
searchInput.addEventListener('input', filterImages);
categoryFilter.addEventListener('change', filterImages);
lightboxClose.addEventListener('click', closeLightbox);
lightbox.addEventListener('click', (event) => {
    // Close lightbox when clicking outside the image
    if (event.target === lightbox) {
        closeLightbox();
    }
});

const images = [
    { src: 'https://asset.gecdesigns.com/img/wallpapers/beautiful-forest-with-an-aesthetic-waterfall-and-trees-ai-generated-wallpaper-sr06082403-cover.webp', title: 'Beautiful Forest', category: 'Nature' },
    { src: 'https://cdn.pixabay.com/photo/2023/08/18/15/02/dog-8198719_1280.jpg', title: 'Pet Dog', category: 'Animals' },
    { src: 'https://content.tui.co.uk/adamtui/2016_11/21_10/2e92fa04-bfa8-40cd-ba6e-a6c500b2ff70/shutterstock_144741595WebOriginalCompressed.jpg?i10c=img.resize(width:1080);img.crop(width:1080%2Cheight:608)' , title: 'Sunny Beach', category: 'Nature' },
    { src: 'https://www.homebazaar.com/knowledge/wp-content/uploads/2022/08/Indore.jpg', title: 'High Tech City', category: 'Tech' },
];


// Initial display
displayImages(images);
