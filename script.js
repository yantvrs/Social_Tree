// Exemplo de animação simples com JavaScript
const profileImage = document.querySelector('.profile img');

profileImage.addEventListener('mouseover', () => {
  profileImage.style.transform = 'rotate(360deg)';
});

profileImage.addEventListener('mouseout', () => {
  profileImage.style.transform = 'rotate(0deg)';
});
