document.addEventListener('DOMContentLoaded', () => {
    const universo = document.getElementById('universo');
    const capaInicio = document.getElementById('capa-inicio');
    const musica = document.getElementById('musica');

    // AQUÍ ESTÁN TUS 10 FOTOS (Asegúrate que se llamen así: foto1.jpg, foto2.jpg...)
    const fotos = [
        "img/foto1.jpg", "img/foto2.jpg", "img/foto3.jpg", "img/foto4.jpg", "img/foto5.jpg",
        "img/foto6.jpg", "img/foto7.jpg", "img/foto8.jpg", "img/foto9.jpg", "img/foto10.jpg"
    ];

    // AQUÍ PUSE LAS FRASES QUE TENÍAS Y PUEDES AGREGAR MÁS
    const frases = [
        "TE AMO", "MI UNIVERSO", "ERES MI VIDA", "❤️", "SOLO TÚ", 
        "MI ESTRELLA", "MI TODO", "ERES HERMOSA", "SIEMPRE JUNTOS", "MI NIÑA"
    ];

    const colores = ["#ff00de", "#00ffff", "#ffff00", "#ff4500", "#00ff00"];

    capaInicio.addEventListener('click', () => {
        // Iniciar la música de JVKE
        if (musica) {
            musica.volume = 1.0;
            musica.play().catch(e => console.log("Error al reproducir:", e));
        }

        // Efecto de desaparición
        capaInicio.style.opacity = '0';
        setTimeout(() => {
            capaInicio.style.display = 'none';
            
            // Empieza la lluvia de recuerdos
            setInterval(crearElemento, 400); 
            setInterval(crearEstela, 150);
            bucle();
        }, 500);
    });

    function crearElemento() {
        const esFoto = Math.random() < 0.35; // Probabilidad de que salga foto
        const div = document.createElement('div');
        div.className = 'elemento-volador';

        const el = document.createElement(esFoto ? 'img' : 'span');
        el.className = esFoto ? 'foto-pro' : 'frase-pro';

        if (esFoto) {
            el.src = fotos[Math.floor(Math.random() * fotos.length)];
            // Si una foto falla, quitamos el div para que no se vea el cuadro roto
            el.onerror = () => div.remove();
        } else {
            el.textContent = frases[Math.floor(Math.random() * frases.length)];
            div.style.setProperty('--color-aura', colores[Math.floor(Math.random() * colores.length)]);
        }

        // Posiciones aleatorias en 3D
        const angulo = Math.random() * Math.PI * 2;
        const radio = 300 + Math.random() * 700;

        div.style.setProperty('--x', Math.cos(angulo) * radio + "px");
div.style.setProperty('--y', Math.sin(angulo) * radio + "px");
    
        div.appendChild(el);
        universo.appendChild(div);

        // Se elimina después de 4 segundos para que el cel no se pegue
        setTimeout(() => div.remove(), 4500);
    }

    function crearEstela() {
        const l = document.createElement('div');
        l.className = 'linea-velocidad';
        l.style.setProperty('--ang', Math.random() * 360 + "deg");
        universo.appendChild(l);
        setTimeout(() => l.remove(), 1000);
    }

    // Control con el dedo para mover el universo
    let curX = 0, curY = 0, tarX = 0, tarY = 0;
    document.addEventListener('touchmove', (e) => {
        const t = e.touches[0];
        tarX = (t.clientX / window.innerWidth - 0.5) * 50;
        tarY = (t.clientY / window.innerHeight - 0.5) * -50;
    });

    function bucle() {
        curX += (tarX - curX) * 0.05;
        curY += (tarY - curY) * 0.05;
        universo.style.transform = `rotateX(${curY}deg) rotateY(${curX}deg)`;
        requestAnimationFrame(bucle);
    }
});
                          
