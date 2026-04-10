document.addEventListener('DOMContentLoaded', () => {
    const universo = document.getElementById('universo');
    const capaInicio = document.getElementById('capa-inicio');
    
    const frases = ["TE AMO", "MI UNIVERSO", "ERES MI VIDA", "❤️", "SOLO TÚ", "MI ESTRELLA", "💘", "MI TODO", "PARA SIEMPRE", "MI REINA", "ERES ARTE", "✨", "MI DESTINO", "TE ADORO", "X SIEMPRE", "MI CIELO"];
    const fotos = ["img/foto1.jpg", "img/foto2.jpg", "img/foto3.jpg", "img/foto4.jpg","img/foto5.jpg","img/foto6.jpg","img/foto7.jpg","img/foto8.jpg","foto9.jpg","img/foto10.jpg"];
    const colores = ["#ff00de", "#00ffff", "#ffff00", "#ff4500", "#00ff00"];

    function crearElemento() {
        const esFoto = Math.random() < 0.22;
        const div = document.createElement('div');
        div.className = 'elemento-volador';
        
        const el = document.createElement(esFoto ? 'img' : 'span');
        el.className = esFoto ? 'foto-pro' : 'frase-pro';
        
        if(esFoto) {
            el.src = fotos[Math.floor(Math.random() * fotos.length)];
            el.onerror = () => div.remove();
        } else {
            el.textContent = frases[Math.floor(Math.random() * frases.length)];
            div.style.setProperty('--color-aura', colores[Math.floor(Math.random() * colores.length)]);
        }

        // Posiciones finales (lejos del centro)
        const angulo = Math.random() * Math.PI * 2;
        // Radio amplio para que al final pasen por los lados
        const radio = 400 + Math.random() * 800; 

        div.style.setProperty('--x', Math.cos(angulo) * radio + "px");
        div.style.setProperty('--y', Math.sin(angulo) * radio + "px");

        div.appendChild(el);
        universo.appendChild(div);
        setTimeout(() => div.remove(), 4000);
    }

    function crearEstela() {
        const l = document.createElement('div');
        l.className = 'linea-velocidad';
        l.style.setProperty('--ang', Math.random() * 360 + "deg");
        universo.appendChild(l);
        setTimeout(() => l.remove(), 900);
    }

    let curX = 0, curY = 0, tarX = 0, tarY = 0;
    document.addEventListener('touchmove', (e) => {
        const t = e.touches[0];
        tarX = (t.clientX / window.innerWidth - 0.5) * 65;
        tarY = (t.clientY / window.innerHeight - 0.5) * -65;
    });

    function loop() {
        curX += (tarX - curX) * 0.08;
        curY += (tarY - curY) * 0.08;
        universo.style.transform = `rotateX(${curY}deg) rotateY(${curX}deg)`;
        requestAnimationFrame(loop);
    }

    capaInicio.addEventListener('click', () => {
        capaInicio.style.display = 'none';
        loop();
        setInterval(crearElemento, 80); 
        setInterval(crearEstela, 30); 
    });
});
