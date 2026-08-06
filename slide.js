const buttons = document.querySelectorAll('.slide_but');

buttons.forEach(btn => {
  btn.addEventListener('click', () => {

    buttons.forEach(b => {
      b.classList.remove('active');
      b.setAttribute('aria-pressed', 'false');
    });

    btn.classList.add('active');
    btn.setAttribute('aria-pressed', 'true');
  });
});
