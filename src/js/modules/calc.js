

function calc(size, material, options, promocode, result) {

   const sizeBLock = document.querySelector(size),
         materialBlock = document.querySelector(material),
         optionsBlock = document.querySelector(options),
         promocodeBlock = document.querySelector(promocode),
         resultBlock = document.querySelector(result);
   
   let sum = 0;

   
   function calcSum() {

      sum = Math.round((+sizeBLock.value) * (+materialBlock.value) + (+optionsBlock.value));
   
      if (sizeBLock.value == "" || materialBlock.value == "") {
         resultBlock.textContent = "Пожалуйста выберите размер и материал картины";
      } else if (promocodeBlock.value == "IWANTPOPART") {
         sum = Math.round(sum * 0.7);
         resultBlock.textContent = sum;
      } else {
         resultBlock.textContent = sum;
      }
   };

   sizeBLock.addEventListener("change", calcSum);
   materialBlock.addEventListener("change", calcSum);
   optionsBlock.addEventListener("change", calcSum);
   promocodeBlock.addEventListener("input", calcSum);

};

export default calc;