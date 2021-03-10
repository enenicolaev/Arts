
function sliders(slides, dir, prev, next) {
   let slideIndex = 1,
      paused = false;

   const items = document.querySelectorAll(slides);

   try {
      const prevBtn = document.querySelector(prev),
            nextBtn = document.querySelector(next);
      
      prevBtn.addEventListener("click", () => {
         nextSlide(-1);
      })

      nextBtn.addEventListener("click", () => {
         nextSlide(1);
      })

   } catch(e) {}

   function showSlides(n) {

      if (n > items.length) {
         slideIndex = 1;
      } else if (n < 1) {
         slideIndex = items.length;
      } 

      items.forEach(slide => {
         slide.classList.add("animated", "fadeIn");
         slide.style.display = "none";
      });

      items[slideIndex - 1].style.display = "block";

   }

   showSlides(slideIndex);


   function nextSlide(n) {
      showSlides(slideIndex += n);
   }

   function autoSlides() {
      if (dir === "vertical") {
         paused = setInterval(() => {
            nextSlide(1);
            items[slideIndex - 1].classList.add("slideInDown");
         }, 6000)
      } else {
         paused = setInterval(() => {
            nextSlide(1);
            items[slideIndex - 1].classList.add("slideInRight");
            items[slideIndex - 1].classList.add('slideInLeft');
         }, 6000)
      }
   }

   function pauseAutoSlides() {
      items[0].parentNode.addEventListener("mouseenter", () => {
         clearInterval(paused);
      });
      items[0].parentNode.addEventListener("mouseleave", () => {
         autoSlides();
      });
   }

   autoSlides();
   pauseAutoSlides();
};

export default sliders;