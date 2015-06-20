var lightbox = document.createElement('div');   // creating lightbox 
  lightbox.classList.add('lightbox');         // lightbox class make lightbox invisible
  document.body.appendChild(lightbox);
  var lightboxPicture = document.createElement('img');    
  lightboxPicture.classList.add('lightbox-picture');
  lightbox.appendChild(lightboxPicture);            // appending new el for lightbox

var showBig = function(image){
  lightboxPicture.src = image;        // give picture in lightbox some image (f.e. from require) of clicked cover 
// var showBig = function(id){               // function get id of clicked element
  // picture.src = 'pics/' + id + '.jpg';        // give picture in lightbox id === name of clicked cover 
  lightboxPicture.classList.add('visible');         
  lightbox.classList.add('visible');          // making lightbox and picture visible
  lightbox.onclick = function(event){         
    event.preventDefault();             // clicking on visible lightbox prevent functions onclick on every element
    lightbox.classList.remove('visible');     
    lightboxPicture.classList.remove('visible');      // making lightbox and picture invisible again
  }
}
