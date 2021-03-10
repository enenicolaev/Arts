import { postData } from "../services/requests";

function forms(formSelector, inputSelector) {

   const formsArray = document.querySelectorAll(formSelector),
         inputs = document.querySelectorAll(inputSelector),
         upload = document.querySelectorAll('[name="upload"]');


   const messages = {
      message: {
         success: "Спасибо! Мы скоро с вами свяжемся",
         loading: "Загрузка...",
         fail: "Ошибка отправки запроса",
      },
      img: {
         success: 'assets/img/ok.png', 
         loading: "assets/img/spinner.gif", 
         fail: "assets/img/fail.png", 
      },
   };

   const path = {
      questions: "assets/question.php",
      server: "assets/server.php",
   };


   


   function formsAddListener() {
      formsArray.forEach(item => {
         item.addEventListener("submit", (e) => {
            e.preventDefault();

            let statusMessage = document.createElement("div"),
                textMessage = document.createElement("div"),
                statusImg = document.createElement("img");
            
            statusMessage.classList.add("status");
 
            statusImg.setAttribute('src', messages.img.loading);
            statusImg.classList.add('animated', 'fadeInUp');
            textMessage.textContent = messages.message.loading;
            
            statusMessage.appendChild(statusImg);
            statusMessage.appendChild(textMessage);

            item.parentNode.appendChild(statusMessage);

            item.classList.add('animated', 'fadeOutUp');
            setTimeout(() => {
                item.style.display = 'none';
            }, 400);

            const formData = new FormData(item);

            if (item.closest(".calc")) {
               const result = item.querySelector(".calc-price").textContent;
               formData.append("price", result);
            };

            


            let api; // динамический адрес
            item.closest(".popup-design") || item.classList.contains('calc_form') ? api = path.server : api = path.questions;

            postData(api, formData)
               .then(res => {

                  console.log(res);
                  statusImg.setAttribute("src", messages.img.success);
                  textMessage.textContent = messages.message.success;
               
               })
               .catch(() => {

                  textMessage.textContent = messages.message.fail;
                  statusImg.setAttribute("src", messages.img.fail);

               })
               .finally(() => {

                  clearinputs();
                  setTimeout(() => {
                     statusMessage.remove();
                     item.style.display = 'block';
                     item.classList.remove('fadeOutUp');
                     item.classList.add('fadeInUp');
                  }, 5000);
               
               })

         })
      })
   }

   

   function clearinputs() {
      inputs.forEach(input => {
         input.value = "";
      });
      upload.forEach(item => {
         item.previousElementSibling.textContent = "Файл не выбран";
     });
   };

   upload.forEach(item => {
      
      item.addEventListener("input", (e) => {

         if (item.getAttribute("id") === "top-upload") {
            console.log(item.files.item(0));

            const formData = new FormData(item.parentElement);
            
            postData(path.server, formData)
               .then(res => {
               console.log(res);
            })
         }

         let dots;
         const arr = item.files[0].name.split(".");

         arr[0].length > 6 ? dots = "..." : dots = ".";

         const name = arr[0].slice(0, 6) + dots + arr[1];
         item.previousElementSibling.textContent = name;
      })

   })


   formsAddListener();

}


export default forms;