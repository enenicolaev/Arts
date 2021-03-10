

function accordion(btnsSelector, contentSelector) {

   const btns = document.querySelectorAll(btnsSelector),
         content = document.querySelectorAll(contentSelector);


   function rebootAccord() {
      content.forEach(item => {
         item.classList.add("animated", "fadeInDown");
         item.style.display = "none";
      })
   };

   function showAccord(i) {
      content.forEach((item, j) => {
         if (window.getComputedStyle(item).display === "block") {
            item.style.display = "none";
         } else if (i === j) {
            item.style.display = "block";
         }
      })
   };

   function addActiveClassBtn(btns, btnActive) {
      btns.forEach(btn => {
         if (btn.classList.contains("active-style")) {
            btn.classList.remove("active-style")
         } else if (btn == btnActive) {
            btn.classList.add("active-style")
         }
      })
   }

   btns.forEach((btn, i) => {
      btn.addEventListener("click", () => {
         addActiveClassBtn(btns, btn);
         showAccord(i);
      });
   });
   rebootAccord();
}

export default accordion;