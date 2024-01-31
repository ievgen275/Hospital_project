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


document.getElementById('list').addEventListener('change', function () {
   var selectedValue = this.value;
   var doctorsList = document.querySelectorAll('.doctor_cart');

   if (selectedValue !== '0') {
      doctorsList.forEach(function (doctor) {
         var doctorType = doctor.getAttribute('data-type');

         if (doctorType === selectedValue) {
            doctor.classList.remove('hide');
         } else {
            doctor.classList.add('hide');
         }
      });
   } else {
      doctorsList.forEach(function (doctor) {
         doctor.classList.remove('hide');
      });
   }
});