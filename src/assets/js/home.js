document.addEventListener('DOMContentLoaded', function() {
    const phrases = ["Soy desarrolladora web", "Soy desarrolladora front-end"];
    const typingAnimationElement = document.getElementById('typing-animation');
    let phraseIndex = 0;
    let charIndex = 0;

    function type() {
        if (phraseIndex < phrases.length) {
            const currentPhrase = phrases[phraseIndex];
            if (charIndex < currentPhrase.length) {
                typingAnimationElement.textContent += currentPhrase.charAt(charIndex);
                charIndex++;
                setTimeout(type, 100);
            } else {
                setTimeout(erase, 1000); // Esperar 1 segundo antes de borrar
            }
        }
    }

    function erase() {
        if (typingAnimationElement.textContent.length > 0) {
            typingAnimationElement.textContent = typingAnimationElement.textContent.slice(0, -1);
            setTimeout(erase, 50);
        } else {
            // Cambiar a la siguiente frase
            phraseIndex = (phraseIndex + 1) % phrases.length;
            charIndex = 0;
            typingAnimationElement.innerHTML = ''; // Limpiar el contenido
            setTimeout(type, 500); // Esperar medio segundo antes de empezar a escribir la siguiente frase
        }
    }

    type();
});

