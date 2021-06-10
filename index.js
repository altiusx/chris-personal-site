function showImages(el) {
  var windowHeight = jQuery(window).height();
  $(el).each(function() {
    var thisPos = $(this).offset().top;

    var topOfWindow = $(window).scrollTop();
    if (topOfWindow + windowHeight - 200 > thisPos) {
      $(this).addClass("fadeIn");
    }
  });
}

// if the image in the window of browser when the page is loaded, show that image
$(document).ready(function() {
  showImages('.draw1');
});

// if the image in the window of browser when scrolling the page, show that image
$(window).scroll(function() {
  showImages('.draw1');
});

// function randomImages() {
//   let imageList = [];
// imageList[0] = Image();
//   imageList[0].src = "images/IMG_0009.jpeg";
// imageList[1] = Image();
//   imageList[1].src = "images/IMG_0038.jpeg";
//   imageList[2] = Image();
//   imageList[2].src = "images/IMG_0505.jpeg";
//   imageList[3] = Image();
//   imageList[3].src = "images/IMG_0053.jpeg";
//   imageList[4] = Image();
//   imageList[4].src = "images/IMG_0596.jpeg";
//
// let size = imageList.length;
// let x = Math.floor(size*Math.random());
// document.getElementById('image').src=imageList[x];
// }
