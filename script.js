//pics in cards 

document.addEventListener('DOMContentLoaded', function() {
    // Select all the card images
    const cardImages = document.querySelectorAll('.card-img-top');

    // Store the original filter style of each image
    const originalFilters = [];

    cardImages.forEach(img => {
        originalFilters.push(img.style.filter); // Store the original filter
        // Add event listeners for mouse enter and mouse leave
        img.addEventListener('mouseenter', function() {
            // Change style on hover to make the image black and white
            img.style.filter = 'grayscale(100%)';
        });

        img.addEventListener('mouseleave', function() {
            // Reset style when mouse leaves
            img.style.filter = 'none';
        });
    });
});



// about picture 

const photoContainer = document.querySelector('.photo-container');
const img = photoContainer.querySelector('img');

photoContainer.addEventListener('mouseenter', function() {
  img.style.filter = 'grayscale(100%)';
});

photoContainer.addEventListener('mouseleave', function() {
  img.style.filter = 'none';
});



