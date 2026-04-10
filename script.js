document.addEventListener('DOMContentLoaded', () => {
    const universo = document.getElementById('universo');
    const capaInicio = document.getElementById('capa-inicio');
    const musica = document.getElementById('musica');

    // AQUÍ: Verifica que los nombres de las fotos coincidan exactamente con tu carpeta "imagen"
    const fotos = [
        "imagen/foto1.jpg", "imagen/foto2.jpg", "imagen/foto3.jpg", "imagen/foto4.jpg", "imagen/foto5.jpg",
        "imagen/foto6.jpg", "imagen/foto7.jpg", "imagen/foto8.jpg", "imagen/foto9.jpg", "imagen/foto10.jpg"
    ];

    const frases = ["TE AMO", "MI UNIVERSO", "ERES MI VIDA", "❤️", "SOLO TÚ", "MI ESTRELLA"];
    const colores = ["#ff00de", "#00ffff", "#ffff00", "#ff4500", "#00ff00"];

    capaInicio.addEventListener('click', () => {
        // Reproducir música
        if (musica) {
            musica.volume = 0.7;
            musica.play().catch(e => console.log("Error de audio:", e));
        }

        capaInicio.style.display = 'none';
        
        setInterval(crearElemento, 400);
        setInterval(crearEstela, 150);
        bucle();
    });

    function crearElemento() {
        const esFoto = Math.random() < 0.35;
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
        const radio = 300 + Math.random() * 700;
        div.style.setProperty('--x', Math.cos(angulo) * radio + "px");
        div.style.setProperty('--y', Math.sin(angulo) * radio + "px");

        div.appendChild(el);
        universo.appendChild(div);
        setTimeout(() => div.remove(), 4500);
    }

    function crearEstela() {
        const l = document.createElement('div');
        l.className = 'linea-velocidad';
        l.style.setProperty('--ang', Math.random() * 360 + "deg");
        universo.appendChild(l);
        setTimeout(() => l.remove(), 1000);
    }

    function bucle() {
        requestAnimationFrame(bucle);
    }
});
