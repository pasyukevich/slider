let swiper = new Swiper('.swiper-container', {
  effect: 'fade',
  mousewheel: true,
  navigation: {
      nextEl: '.slide-arrow-next',
      prevEl: '.slide-arrow-previous',
    },
  on: {
      
  },
  keyboard: {
      enabled: true,
    },
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
    dynamicBullets:true,
    dynamicMainBullets: 7,
  },
  lazy: {
      loadPrevNext: true,
      loadPrevNextAmount:10,
    },
});

$(".icons_facebook").click(function(){
   alert($('.swiper-slide-active').attr('id'));
});
let imagesArray=[];
$(".swiper-wrapper").children().each((index,element)=>{
  imagesArray.push($(element).children("img").attr("data-preview"));
})
// $(".swiper-pagination").children().each(function(index,element){
//    $(element).children("after").css('content',`url(${imagesArray[index]})`);
// });


