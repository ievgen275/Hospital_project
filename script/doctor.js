document.querySelector('.search').oninput = function () {
   let valueInput = document.querySelector('.search').value.toLowerCase();
   let doctors = document.querySelectorAll('.doctor_cart');

   if (valueInput != '') {
      doctors.forEach(function (elem) {
         if (elem.innerText.search(valueInput) == -1) {
            elem.classList.add('hide');
         } else {
            elem.classList.remove('hide');
         };
      });
   };
};