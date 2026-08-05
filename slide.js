const buttons = document.querySelectorAll('.slide_but');

buttons.forEach(btn => {
  btn.addEventListener('click', () => {
    // убираем active у всех кнопок
    buttons.forEach(b => {
      b.classList.remove('active');
      b.setAttribute('aria-pressed', 'false');
    });

    // добавляем active нажатой кнопке
    btn.classList.add('active');
    btn.setAttribute('aria-pressed', 'true');
  });
});
