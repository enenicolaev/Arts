import { getCradInfo } from "../services/requests";

function addStylesCards(trigger, wrapper) {
   
   const btn = document.querySelector(trigger);


   btn.addEventListener("click", function() {
      getCradInfo('assets/db.json')
         .then(res => {
            createCards(res.styles);
            console.log(res);
         })
         .catch(error => console.log(error));

      this.remove();

   });

   function createCards(response) {
      response.forEach(({src, title, link}) => {
         let card = document.createElement("div");

         card.classList.add("animated", "slideInUp", "col-sm-3", "col-sm-offset-0", "col-xs-10", "col-xs-offset-1");
   
         card.innerHTML = `
            <div class=styles-block>
               <img src=${src} alt=style>
               <h4>${title}</h4>
               <a href=${link}>Подробнее</a>
            </div>
         `;
   
         document.querySelector(wrapper).appendChild(card);
      })
   }
}

export default addStylesCards;