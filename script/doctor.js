document.querySelector('.search').oninput = function () {
   let valueInput = document.querySelector('.search').value.toLowerCase();
   let doctors = document.querySelectorAll('.doctor_cart');

   if (valueInput !== '') {
      doctors.forEach(function (elem) {
         if (elem.innerText.toLowerCase().search(valueInput) === -1) {
            elem.classList.add('hide');
         } else {
            elem.classList.remove('hide');
         }
      });
   } else {
      doctors.forEach(function (elem) {
         elem.classList.remove('hide');
      });
   }
};
