

function openModal(modal, timer = null) {

   function calcScrollIndent() {
      const div = document.createElement("div");
   
      div.style.width = "50px";
      div.style.height = "50px";
      div.style.overflowY = "scroll";
      div.style.visibility = "hidden";
   
      document.body.appendChild(div);
      let scroll = div.offsetWidth - div.clientWidth;
   
      div.remove();

      return scroll;
   }


   modal = document.querySelector(modal);

   modal.style.display = "block";
   document.body.style.overflow = "hidden";
   document.body.style.marginRight = `${calcScrollIndent()}px`;
   setIconByModal(".fixed-gift", calcScrollIndent());

   if (timer) {
      clearInterval(timer);
   };
};

function closeModal(modal) {
   modal = document.querySelector(modal);

   modal.style.display = "none";
   document.body.style.overflow = "";
   document.body.style.marginRight = `0px`;
   setIconByModal(".fixed-gift", 0);
}

function closeAllModals(modalsArray) {
   modalsArray.forEach(item => {
      item.style.display = "none";
      document.body.style.overflow = "";
      document.body.style.marginRight = `0px`;
   })
};

function showModalByTime(selector, time) {
   setTimeout(() => {
      let display;

      document.querySelectorAll("[data-modal]").forEach(modal => {
         if (getComputedStyle(modal).display !== "none") {
            display = "block";
         }
      });

      if (!display) {
         openModal(selector);
      };

   }, time)
};

function showModalByScroll(selector, condition) {
   let openModalOnce = true;

   window.addEventListener("scroll", () => {
      let scrollHeight = Math.max(document.documentElement.scrollHeight, document.body.scrollHeight); // для совместимости
      
      if (openModalOnce && !condition && (window.pageYOffset + document.documentElement.clientHeight >= scrollHeight)) {

         openModalOnce = false;

         if (document.querySelector(selector)) {
            document.querySelector(selector).click();
         }

      }
   })
}

function setIconByModal(selector, margin) {
   let present = document.querySelector(selector);
   if (present) {
      present.style.marginRight = `${margin}px`;
   }
}



function modal(triggerSelector, modalSelector, closeSelector,  destroy = false, timerModal = null) {

   const triggers = document.querySelectorAll(triggerSelector),
         modal = document.querySelector(modalSelector),
         closeBtn = document.querySelector(closeSelector);

   // object with all Modal Selector's

   const modalsArray = document.querySelectorAll("[data-modal]");
   
   modalsArray.forEach(modal => {
      modal.classList.add("animated", "fadeIn");
   });

   let btnPressed = false;

   
   function bindOpenTriggers() {
      triggers.forEach(item => {
         item.addEventListener("click", (e) => {
            e.preventDefault();
            btnPressed = true;

            if (destroy) {
               item.remove();
            };

            closeAllModals(modalsArray);
            openModal(modalSelector, timerModal);
         });
      })
   };

   function bindCloseTriggers() {
      modal.addEventListener("click", (e) => {
         if (e.target && e.target === modal) {
            closeModal(modalSelector);
            closeAllModals(modalsArray);
         }
      });

      closeBtn.addEventListener("click", () => {
         closeModal(modalSelector);
         closeAllModals(modalsArray);
      })
   };

   bindOpenTriggers();
   bindCloseTriggers();

   showModalByTime(".popup-consultation", 60000);
   showModalByScroll(".fixed-gift", btnPressed);
};

export default modal;

