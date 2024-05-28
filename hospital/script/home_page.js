let buttons_anonim = document.getElementsByClassName('button_anonim'),
    buttons_news = document.getElementsByClassName('button_news'),
    buttons_admin = document.getElementsByClassName('button_admin'),
    flyers = document.getElementsByClassName('flyer_styles'),
    forEach = Array.prototype.forEach;

forEach.call(buttons_anonim, function(b) {
   b.addEventListener('click', addElement);
});

forEach.call(buttons_news, function(b) {
   b.addEventListener('click', addElement);
});

forEach.call(flyers, function(b) {
    b.addEventListener('click', addElement);
});

forEach.call(buttons_admin, function(b) {
   b.addEventListener('click', addElement);
});

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