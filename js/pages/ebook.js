function toggleMenu() {
  var nav = document.querySelector('nav');
  var closeMenu = document.querySelector('.close-menu');

  // Toggle the active class on the navigation menu
  nav.classList.toggle('active');

  // Toggle the active class on the close button
  closeMenu.classList.toggle('active');
}

document.addEventListener('DOMContentLoaded', function() {
  const getNowBtns = document.querySelectorAll('.get-now-btn');
  const modal = document.getElementById('modal');
  const closeModalBtn = document.querySelector('.close-btn');
  const emailForm = document.getElementById('email-form');

  // Attach event listeners to each "GET NOW" button
  getNowBtns.forEach(btn => {
      btn.addEventListener('click', function(e) {
          e.preventDefault();
          modal.style.display = 'flex';
          modal.dataset.book = this.dataset.book;
      });
  });

  // Close modal when close button is clicked
  closeModalBtn.addEventListener('click', function() {
      modal.style.display = 'none';
  });

  // Close modal when clicking outside of it
  window.addEventListener('click', function(event) {
      if (event.target === modal) {
          modal.style.display = 'none';
      }
  });

  // Prevent modal from closing when clicking inside it
  modal.addEventListener('click', function(event) {
      event.stopPropagation();
  });

  // Handle form submission
  emailForm.addEventListener('submit', function(event) {
      event.preventDefault();
      const name = document.getElementById('name-input').value;
      const email = document.getElementById('email-input').value;
      const bookTitle = modal.dataset.book;
      console.log(`Name: ${name}, Email: ${email}, Book: ${bookTitle}`);

      const pdfUrl = `../documents/${bookTitle}.pdf`;
      const link = document.createElement('a');
      link.href = pdfUrl;
      link.download = `${bookTitle}.pdf`;
      link.click();

      modal.style.display = 'none';
  });

  // Hide modal when navigating away from the page
  window.addEventListener('unload', function() {
      console.log('Page unloaded');
      modal.style.display = 'none';
  });
});


