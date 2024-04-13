// JavaScript
document.addEventListener('DOMContentLoaded', function() {
    const text = document.querySelector('.animated-text');
    const textContent = text.textContent;
    text.innerHTML = '';
    const characters = textContent.split('');
  
    characters.forEach(char => {
      // Vérifiez si le caractère est un espace
      if (char === ' ') {
        // Si c'est le cas, ajoutez simplement un espace sans créer d'élément span
        text.innerHTML += ' ';
      } else {
        // Sinon, créez un élément span pour le caractère
        const charElement = document.createElement('span');
        charElement.textContent = char;
        text.appendChild(charElement);
      }
    });
  
    const spans = document.querySelectorAll('.animated-text span');
  
    spans.forEach((span, index) => {
      setTimeout(() => {
        span.classList.add('visible');
      }, index * 100); // Ajoutez un délai pour que chaque caractère apparaisse à un moment différent
    });
  });
  
  