function checkTextInputs(selector) {
   const textInputs = document.querySelectorAll(selector);

   textInputs.forEach(input => {
      input.addEventListener("keypress", (e) => {
         if (e.key.match(/[^а-яё\s0-9]/ig)) {
            e.preventDefault();
         }
      });

      input.addEventListener("input", (e) => {
         if (input.value.match(/\w/g)) {
            input.value = "";
         }
      })
   })

}

export default checkTextInputs;