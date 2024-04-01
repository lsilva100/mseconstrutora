
 window.addEventListener('scroll', function() {
    var header = document.querySelector('header');
    if (window.scrollY > 200) {
      header.classList.add('header-scrolled');
      // Forçar o navegador a repintar os elementos antes de aplicar a transição
      void header.offsetWidth;
    } else {
      header.classList.remove('header-scrolled');
      // Forçar o navegador a repintar os elementos antes de aplicar a transição
      void header.offsetWidth;
    }
  });

//*****************************DEPOIMENTOS******************************/
document.addEventListener("DOMContentLoaded", function() {
  var currentIndex = 1; // Começa com o primeiro depoimento
  var testimonialContainer = document.querySelector(".testimonial-container");
  var testimonials = document.querySelectorAll(".testimonial");

  function displayTestimonial(index) {
      var currentTestimonial = document.querySelector("#testimonial" + index);
      if (currentTestimonial) {
          // Adiciona a classe 'show' para exibir o depoimento com a transição
          currentTestimonial.classList.add("show");
          // Oculta os outros depoimentos
          testimonials.forEach(function(testimonial) {
              if (testimonial !== currentTestimonial) {
                  testimonial.classList.remove("show");
              }
          });
      }
  }

  function nextTestimonial() {
      currentIndex++;
      if (currentIndex > 3) { // Se atingir o número máximo de depoimentos
          currentIndex = 1; // Reinicia com o primeiro depoimento
      }
      displayTestimonial(currentIndex);
  }

  // Exibir o primeiro depoimento inicialmente
  displayTestimonial(currentIndex);

  // Trocar automaticamente os depoimentos a cada 5 segundos
  setInterval(nextTestimonial, 5000);
});
/********************************************************************/
let currentIndex = 0;

function prevSlide() {
    if (currentIndex > 0) {
        currentIndex--;
        updateSlidePosition();
    }
}

function nextSlide() {
    const slides = document.querySelectorAll('.card');
    if (currentIndex < slides.length) {
        currentIndex++;
        updateSlidePosition();
    } else {
      currentIndex = -1; // Volta para o primeiro slide quando estiver no último
  }
}

function updateSlidePosition() {
    const carousel = document.querySelector('.carousel');
    const slides = document.querySelectorAll('.card');
    const slideWidth = slides[0].clientWidth;
    carousel.style.transform = `translateX(-${currentIndex * slideWidth}px)`;
}


/*************************************************************************************************************** */

function toggleMenu() {
  var menu = document.getElementById("menu");
  var burger = document.getElementById("burguer");
  
  if (menu.style.display === "block") {
      menu.style.display = "none";
      burger.innerHTML = "Menu"; // Altera para "Menu" quando o menu está oculto
  } else {
      menu.style.display = "block";
      menu.style.backgroundColor = "#fffff";
      burger.innerHTML = "X"; // Altera para "X" quando o menu está visível
  }
}





  
  