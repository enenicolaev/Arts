

function slowScroll(upSelector) {
   const upElem = document.querySelector(upSelector);

   window.addEventListener("scroll", () => {
      if (document.documentElement.scrollTop > 1700) {
         upElem.classList.add('animated', 'fadeIn');
         upElem.classList.remove('fadeOut');      
      } else {
         upElem.classList.remove('fadeIn');
         upElem.classList.add('fadeOut');
      }
   })

   //! SlowScroll with pure js

   // const element = document.documentElement,
   //       body = document.body;
   
   // const calcScroll = () => {
   //    upElem.addEventListener("click", function(e) {
   //       let scrollTop = Math.round(body.scrollTop || element.scrollTop);

   //       if (this.hash !== "") { // проверка, ссылка ли элемент
   //          e.preventDefault();
   //          let hashElement = document.getElementById(this.hash.substring(1)), // получаем элемент куда скролить
   //              hashElementTop = 0;

   //          while (hashElement.offsetParent) {
   //             hashElementTop += hashElementTop.offsetTop;
   //             hashElement = hashElement.offsetParent;
   //          }; // перебирает родителей элемента, и дает понять сколько пикселей нужно отлистать

   //          hashElementTop = Math.round(hashElementTop);

   //          smoothScroll(scrollTop, hashElementTop, this.hash);

   //       }
   //    });

   // };  // считает сколько нужно проскролить

   // const smoothScroll = (from, to, hash) => {
   //    let timeInterval = 1, // через сколько производится анимация
   //        prevScrollTop,
   //        speed;

   //    if (to > from) {
   //       speed = 50;
   //    } else {
   //       speed = -50;
   //    }

   //    let move = setInterval(function() {
   //       let scrollTop = Math.round(body.scrollTop || element.scrollTop);

   //       if (
   //          prevScrollTop === scrollTop ||
   //          (to > from && scrollTop >= to) ||
   //          (to < from && scrollTop <= to)
   //       ) {
   //          clearInterval(move);
   //          history.replaceState(history.state, document.title, location.href.replace(/#.*$/g, "") + hash); // replace(/#.*$/g, "") убирает все # в адресной строке
   //       } else {
   //          body.scrollTop += speed;
   //          element.scrollTop += speed;
   //          prevScrollTop = scrollTop;
   //       }
         

   //    }, timeInterval);
   // };

   // calcScroll();


   //! SlowScroll with RAF

   let links = document.querySelectorAll("[href^='#']"),
       speed = 0.4;
   
   links.forEach(link => {
      link.addEventListener("click", function(e) {
         e.preventDefault();

         let widthTop = document.documentElement.scrollTop,
             hash = this.hash,
             toBlock = document.querySelector(hash).getBoundingClientRect().top,
             start = null;
         

         requestAnimationFrame(step);

         function step(time) {
            if (start == null) {
               start = time;
            };

            let progress = time - start, 
                r = (toBlock < 0 ? Math.max(widthTop - progress / speed, widthTop + toBlock) : Math.min(widthTop + progress / speed, widthTop + toBlock));

            document.documentElement.scrollTo(0, r);

            if (r != widthTop + toBlock) {
               requestAnimationFrame(step);
            } else {
               location.hash = hash;
            }
         };
      });
   })

}

export default slowScroll;