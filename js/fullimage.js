function showImage(imgSrc) {
  var modal = document.createElement('div');
  modal.classList.add('modal');
  var img = document.createElement('img');
  img.src = imgSrc;
  modal.appendChild(img);
  document.body.appendChild(modal);
  modal.addEventListener('click', function() {
    document.body.removeChild(modal);
  });
}
