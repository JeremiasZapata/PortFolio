
const navbarBrand = document.querySelector('.navbar-brand');

navbarBrand.addEventListener('click', (event) => {
    event.preventDefault();
    window.open('https://www.linkedin.com/in/jeremias-zapata/', '_blank');
});
//Scroll smooth hacia sobre mi haciendo click en el hero
const hero = document.querySelector('.hero');
const sobreMiSection = document.querySelector('#sobremi');

hero.addEventListener('click', () => {
    sobreMiSection.scrollIntoView({ behavior: 'smooth' });
});


// Smooth Scroll
document.querySelectorAll('nav a').forEach((link) => {
    link.addEventListener('click', (event) => {
        event.preventDefault();
        const targetId = link.getAttribute('href');
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop,
                behavior: 'smooth'
            });
        }
    });
});

// Enviar mensaje de WhatsApp desde el formulario
document.getElementById('formulario').addEventListener('submit', function (event) {
    event.preventDefault();
    var nombre = document.getElementsByName('nombre')[0].value;
    var email = document.getElementsByName('email')[0].value;
    var mensaje = document.getElementsByName('mensaje')[0].value;
    var telefono =  +5491156632971;

    // Formato del mensaje de WhatsApp
    var mensajeWhatsApp = '¡Hola! Mi nombre es ' + nombre + '. Mi email es ' + email + '. Mi mensaje es: ' + mensaje;

    // Genera el enlace de WhatsApp
    var enlaceWhatsApp = 'https://wa.me/' + telefono + '?text=' + encodeURIComponent(mensajeWhatsApp);

    // Abre el enlace de WhatsApp en una nueva pestaña
    window.open(enlaceWhatsApp);
    document.getElementById('formulario').reset();
});




