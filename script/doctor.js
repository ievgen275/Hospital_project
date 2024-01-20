document.querySelector('.search').oninput = function () {
   let val = this.value.trim();
   let elementItems = document.querySelectorAll('.doctor_cart .title_cart')
   if (val != '') {
      elementItems.forEach(function (elem) {
         if (elem.innerText.search(val) == -1) {
            elem.classList.add('hide');
         } else {
            elem.classList.remove('hide');
         };
      });
   };
};


// document.querySelector('.search').oninput = function () {
//    const val = this.target.value.trim();
//    const
// };