

function showImg(blockSelector) {
   const blocks = document.querySelectorAll(blockSelector);

   function addImg(block) {
      const img = block.querySelector("img");
      let src;
      
      img.classList.add("animated", "fadeIn");
      src = img.getAttribute("src").slice(0, -4) + "-1.png";
      img.setAttribute("src", src);

      block.querySelectorAll('p:not(.sizes-hit)').forEach(p => {
         p.style.display = 'none';
      });
   };

   function removeImg(block) {
      const img = block.querySelector("img");
      let src;

      img.classList.remove("animated", "fadeIn");
      src = img.getAttribute("src").slice(0, -6) + ".png";
      img.setAttribute("src", src);

      block.querySelectorAll('p:not(.sizes-hit)').forEach(p => {
         p.style.display = 'block';
     });
   };

   blocks.forEach(block => {
      block.addEventListener("mouseenter", () => {
         addImg(block);
      });
      block.addEventListener("mouseleave", () => {
         removeImg(block);
      })
   })

}

export default showImg;