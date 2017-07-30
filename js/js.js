

$(document).ready(function(){
    
    $('.multiple-items').slick({
  infinite: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  accessibility:true,
  autoplay: true,
  autoplaySpeed: 4000,
  arrows:false,
  dots:true,
  speed:1000       
});
    
    
$(".animsition").animsition({
    inClass: 'zoom-in',
    outClass: 'zoom-out',
    linkElement: '.animsition-link',
    inDuration: 1000,
    outDuration: 1000 
  });    
});