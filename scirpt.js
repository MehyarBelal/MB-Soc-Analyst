

  document.querySelectorAll('.toggle-btn').forEach(button => {
    button.addEventListener('click', function() {
        const popup = this.nextElementSibling;
        const overlay = document.querySelector('.overlay');

        // Toggle popup visibility
        popup.classList.toggle('active');
        
        // Show/Hide the overlay
        overlay.classList.toggle('active');
    });
});

// Close popup when clicking outside the popup area
document.querySelector('.overlay').addEventListener('click', function() {
    const popups = document.querySelectorAll('.dashboard-content');
    const overlay = document.querySelector('.overlay');
    
    // Close all open popups and hide overlay
    popups.forEach(popup => {
        popup.classList.remove('active');
    });
    overlay.classList.remove('active');
});
