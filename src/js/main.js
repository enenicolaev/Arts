import modal from "./modules/modal";
import sliders from "./modules/sliders";
import forms from "./modules/forms";
import mask from "./modules/mask";
import checkTextInputs from "./modules/checkTextInputs";
import addStylesCards from "./modules/addStylesCards";
import calc from "./modules/calc";
import tabs from "./modules/tabs";
import showImg from "./modules/showImg";
import accordion from "./modules/accordion";
import burger from "./modules/burger";
import slowScroll from "./modules/slowScroll";
import drop from "./modules/drop";


window.addEventListener("DOMContentLoaded", () => {
   "use strict";

   modal(".button-design", ".popup-design", ".popup-design .popup-close");
   modal(".button-consultation", ".popup-consultation", ".popup-consultation .popup-close");
   modal(".fixed-gift", ".popup-gift", ".popup-gift .popup-close", true);

   sliders('.feedback-slider-item', 'horizontal', '.main-prev-btn', '.main-next-btn');
   sliders('.main-slider-item', 'vertical');

   forms("form", "input");

   mask("[name='phone']");
   checkTextInputs("[name='name']");
   checkTextInputs("[name='message']");

   addStylesCards(".button-styles", "#styles .row");

   calc("#size", "#material", '#options', '.promocode', '.calc-price');
   
   tabs(".portfolio-menu", ".portfolio-wrapper");

   showImg(".sizes-block");

   accordion(".accordion-heading", ".accordion-block");

   burger('.burger-menu', '.burger');

   slowScroll(".pageup");

   drop();
})