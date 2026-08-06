const buttons = document.querySelectorAll('.but_pay_variant');

buttons.forEach(btn => {
  btn.addEventListener('click', () => {
    // убираем active у всех кнопок
    buttons.forEach(b => b.classList.remove('active'));
    // добавляем active текущей
    btn.classList.add('active');
  });
});
