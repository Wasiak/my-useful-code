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

// INSERT BEFORE

var row = document.createElement('tr');
//create new DOM el. row
table.insertBefore(row, document.getElementsByTagName('tr')[0]);
//table (parent) appendChild/ inseet before (this new created el. before another el. (tr[0], first row)) 
// our new row now is the first one in table

// ------------------------------------------------------------------------------------------

// PRELOADER

  var items = model.getAll();  // getting all items f.e. from outside file
  var images = [];
  var loaded = 0;
  var imgs = [];
  var preloaderContainer = document.getElementsByClassName('preloader')[0];
  var progressBar = document.getElementById('preloader-progress');

  // loop for every element from items array
  items.forEach(function(item){
    images.push(item.img, item.imgDrop);
  });

  var total = images.length;

  var load = function(cb){

    var loadAction = function(e) {
      var target = e.target;
      if (loaded === total-1) {
        preloaderContainer.classList.add('hidden');
        cb();
      } else {
        loaded++;
        var percentage = ~~((loaded/total)*100) + '%';
        progressBar.textContent = percentage;
      }
    };

    for (var i=0; i<total; i++){
      imgs[i] = document.createElement('img');
      imgs[i].onload = imgs[i].onerror = loadAction;
      imgs[i].src = images[i];
    }
  };

  return {
    load: load
  };
});
// pre for one item

  // create new element img ( not adding to DOM)
  var pic = document.createElement('img');
  //give new img src of loading image
  pic.src = data.data[0].img;
  // when loaded hide a preoader screen
  pic.onload= function() {
    document.getElementsByClassName('preloader')[0].classList.add('hidden');
  }

// for few elements not perfect

    data.data.forEach(function(row) {
      // new Record is function to add new row in table
      Record(row.id, row.img, row.name, row.email,  row.telephone);
    });
    var pic = document.createElement('img');
    var picAmount = document.getElementsByTagName('tr').length;
    pic.src = data.data[picAmount - 1].img;       // batter check each pic and increment var loaded and if loaded === picAmount run callback
    pic.onload= function() {
      document.getElementById('loading-screen').style.display = 'none';
    }
  }
);
