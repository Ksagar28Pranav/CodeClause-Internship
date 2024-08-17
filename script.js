const filterButtons = document.querySelectorAll('.filter-btn');
const galleryItems = document.querySelectorAll('.gallery-item');

// Add event listener for each filter button
filterButtons.forEach(button => {
    button.addEventListener('click', () => {
        const filter = button.getAttribute('data-filter');

        // Loop through each gallery item
        galleryItems.forEach(item => {
            // Show all items if "all" filter is selected
            if (filter === 'all') {
                item.classList.remove('hidden');
            } else {
                // Show or hide items based on category
                if (item.getAttribute('data-category') === filter) {
                    item.classList.remove('hidden');
                } else {
                    item.classList.add('hidden');
                }
            }
        });
    });
});
