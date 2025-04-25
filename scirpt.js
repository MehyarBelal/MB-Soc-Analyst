

const buttons = document.querySelectorAll('.toggle-btn');

  buttons.forEach(button => {
    button.addEventListener('click', () => {
      const content = button.nextElementSibling;
      const isActive = button.classList.toggle('active');
      content.style.display = isActive ? 'block' : 'none';
    });
  });