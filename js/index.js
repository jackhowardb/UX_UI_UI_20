$(function(){
  $(window).scroll(function() {              
    $('#footer').toggle($(document).scrollTop() > 100);
      });
  })


  function showPoster(comicTitle, comicImage) {
    $('#comicTitle').text(comicTitle)
    $('#comicImg').attr("src", comicImage);
    $('#posterModal').modal('show');
}