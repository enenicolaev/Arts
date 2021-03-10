
function tabs(menuSelector, wrapperSelector) {

   const menu = document.querySelector(menuSelector),
         menuItems = menu.querySelectorAll("li"),
         btnAll = menu.querySelector(".all"),
         btnLovers = menu.querySelector(".lovers"),
         btnChef = menu.querySelector(".chef"),
         btnGirl = menu.querySelector(".girl"),
         btnGuy = menu.querySelector(".guy"),
         btnGrandmother = menu.querySelector(".grandmother"),
         btnGranddad = menu.querySelector(".granddad");
   
   const wrapper = document.querySelector(wrapperSelector),
         contentAll = wrapper.querySelectorAll(".all"),
         contentGirl = wrapper.querySelectorAll(".girl"),
         contentLovers = wrapper.querySelectorAll(".lovers"),
         contentGuy = wrapper.querySelectorAll(".guy"),
         contentChef = wrapper.querySelectorAll(".chef"),
         contentGrandmother = wrapper.querySelectorAll(".grandmother"),
         contentGranddad = wrapper.querySelectorAll(".granddad"),
         contentNo = wrapper.parentNode.querySelector(".container > .portfolio-no");


   const startPos = btnAll;
   
   function removeAndHide() {
      contentAll.forEach(item => {
         item.style.display = "none";
         item.classList.remove("animated", "fadeIn");
      });
      menuItems.forEach(item => {
         item.classList.remove("active");
         item.classList.remove("animated", "fadeIn");
      });

      contentNo.style.display = "none";
   };

   removeAndHide()
   showTabsContent(contentAll);


   function showTabsContent(content) {

      if (content.length == 0) {
         contentNo.style.display = "block";
         contentNo.classList.add("animated", "fadeIn");
      } else {
         content.forEach(item => {
            item.style.display = "block";
            item.classList.add("animated", "fadeIn");
         })
      }

   };

   function addListener(elem, event, content) {

      elem.addEventListener(event, () => {
         removeAndHide();
         elem.classList.add("active");
         showTabsContent(content);
      });
   }

   addListener(btnAll, "click", contentAll);
   addListener(btnLovers, "click", contentLovers);
   addListener(btnChef, "click", contentChef);
   addListener(btnGirl, "click", contentGirl);
   addListener(btnGuy, "click", contentGuy);
   addListener(btnGrandmother, "click", contentGrandmother);
   addListener(btnGranddad, "click", contentGranddad);
   
   startPos.click();

}

export default tabs;