document.addEventListener('DOMContentLoaded', () => {
    const universo = document.getElementById('universo');
    const capaInicio = document.getElementById('capa-inicio');

    // Cambié "img/" por "imagen/" porque así se llama tu carpeta en GitHub
    const fotos = [
        "imagen/foto1.jpg", "imagen/foto2.jpg", "imagen/foto3.jpg", "imagen/foto4.jpg", "imagen/foto5.jpg",
        "imagen/foto6.jpg", "imagen/foto7.jpg", "imagen/foto8.jpg", "imagen/foto9.jpg", "imagen/foto10.jpg"
    ];

    const frases = [
        "TE AMO", "MI UNIVERSO", "ERES MI VIDA", "❤️", "SOLO TÚ", 
        "MI ESTRELLA", "ERES HERMOSA", "MI NIÑA", "POR SIEMPRE TA AMARE"
    ];

    const colores = ["#ff00de", "#00ffff", "#ffff00", "#ff4500", "#00ff00"];

    capaInicio.addEventListener('click', () => {
        capaInicio.style.opacity = '0';
        setTimeout(() => {
            capaInicio.style.display = 'none';
            // Empezar a crear cosas
            setInterval(crearElemento, 400);
        }, 800);
    });

    function crearElemento() {
        const esFoto = Math.random() < 0.4; 
        const div = document.createElement('div');
        div.className = 'elemento-volador';

        const el = document.createElement(esFoto ? 'img' : 'span');
        el.className = esFoto ? 'foto-pro' : 'frase-pro';

        if (esFoto) {
            el.src = fotos[Math.floor(Math.random() * fotos.length)];
            el.onerror = () => div.remove();
        } else {
            el.textContent = frases[Math.floor(Math.random() * frases.length)];
            div.style.setProperty('--color-aura', colores[Math.floor(Math.random() * colores.length)]);
        }

        const angulo = Math.random() * Math.PI * 2;
        const radio = 400 + Math.random() * 600;

        div.style.setProperty('--x', Math.cos(angulo) * radio + "px");
        div.style.setProperty('--y', Math.sin(angulo) * radio + "px");

        div.appendChild(el);
        universo.appendChild(div);

        setTimeout(() => div.remove(), 4000);
    }
});
            
