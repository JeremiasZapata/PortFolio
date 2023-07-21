
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
    event.preventDefault();// no recarga la pagina
    let nombre = document.getElementsByName('nombre')[0].value;
    let email = document.getElementsByName('email')[0].value;
    let mensaje = document.getElementsByName('mensaje')[0].value;
    let telefono =  +5491156632971;

    // Formato del mensaje de WhatsApp
    let mensajeWhatsApp = '¡Hola! Mi nombre es ' + nombre + '. Mi email es ' + email + '. Mi mensaje es: ' + mensaje;

    // Genera el enlace de WhatsApp
    let enlaceWhatsApp = 'https://wa.me/' + telefono + '?text=' + encodeURIComponent(mensajeWhatsApp);

    // Abre el enlace de WhatsApp en una nueva pestaña
    window.open(enlaceWhatsApp);
    //borra formulario
    document.getElementById('formulario').reset(); 
});

//----------------------------------------------------
// Función para retraer el sidebar al hacer clic en cualquier parte de la pantalla
function retractSidebar() {
    const navbarCollapse = document.getElementById('navbarCollapse');
    if (navbarCollapse.classList.contains('show')) {
      navbarCollapse.classList.remove('show');
    }
  }
  
  // Agregar un evento de clic al documento
  document.addEventListener('click', retractSidebar);
  


//----------------------------------------------------------------------------


$(document).ready(function() {
    // Cambiar el enlace activo a medida que se desplaza la página
    $(window).on('scroll', function() {
        var scrollDistance = $(window).scrollTop() +50;
        $('section').each(function(i) {
            if ($(this).position().top <= scrollDistance) {
                $('#navbar a.nav-link.active').removeClass('active');
                $('#navbar a.nav-link').eq(i).addClass('active');
            }
        });
    });
});



