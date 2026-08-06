document.addEventListener('DOMContentLoaded', () => {
  const buttons = document.querySelectorAll('.slide_but');
  const images = document.querySelectorAll('.slide_1');

  buttons.forEach(btn => {
    btn.addEventListener('click', () => {
      // 1. Убираем active у всех кнопок
      buttons.forEach(b => {
        b.classList.remove('active');
        b.setAttribute('aria-pressed', 'false');
      });

      // 2. Делаем нажатую кнопку активной
      btn.classList.add('active');
      btn.setAttribute('aria-pressed', 'true');

      // 3. Определяем индекс кнопки (1, 2, 3) из id
      const index = btn.id.replace('slide_but_', '');

      // 4. Скрываем все картинки
      images.forEach(img => img.classList.add('hidden'));

      // 5. Показываем нужную картинку
      const targetImg = document.getElementById('slide_' + index);
      if (targetImg) {
        targetImg.classList.remove('hidden');
      }
    });
  });
});
