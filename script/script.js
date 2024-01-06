let buttons = document.getElementsByClassName('button_anonim'),
    forEach = Array.prototype.forEach;

forEach.call(buttons, function(b) {
   b.addEventListener('click', addElement);
});

// This efect button anonim
function addElement(e) {
   let addDiv = document.createElement('div'),
       mValue = Math.max(this.clientWidth, this.clientHeight),
       rect = this.getBoundingClientRect(),
       sDiv = addDiv.style,
       px = 'px';
   
   sDiv.width = sDiv.height = mValue + px;
   sDiv.left = e.clientX - rect.left - (mValue / 2) + px;
   sDiv.top = e.clientY - rect.top - (mValue / 2) + px;

   addDiv.classList.add('pulse')
   this.appendChild(addDiv);
}

