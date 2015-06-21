// LIGHTBOX

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

// ------------------------------------------------------------------------------------------

// SEARCHBAR

// hiding all elements which value !== sesarchbar.value

var search = function(){                //function for searching title in table
  var all = document.getElementsByTagName('tr');    // taking every row in table
  for (i = 1; i < all.length; i++) {          // loop for every row
    all[i].classList.remove('dontShow');      // remove class 'dontShow' which hiding element
    var tl = all[i].getElementsByTagName('a')[0]; // take first finded link in row -> title // title or anything  to serch 
    var pli = all[i].getElementsByTagName('a')[1];  // take second finded link in row -> polish title
    if (searchBar.value){             // if in search bar is anything 
      if(tl.innerHTML.toLowerCase().indexOf(searchBar.value.toLowerCase()) === -1 &&    // if  value in searchbar is not same as in title
        pli.innerHTML.toLowerCase().indexOf(searchBar.value.toLowerCase()) === -1){   // and if value in searchbar is not same as in polish title
        all[i].classList.add('dontShow');                       //  give row class dontShow
      }
    }
  }
}

searchBar.onkeyup = search;     // run search function every time when in searchbar (any input) something add or remove

// ---------------------------------------------------------------------------------------------