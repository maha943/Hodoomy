//sticky nav
let aScroll = $("header").offset().top;
$(window).scroll(function(){
    let wScroll =$(window).scrollTop();

    if(wScroll > aScroll){
        $("nav").css({"backgroundColor":"#fff",
                       "top":"0",
                       "position": "fixed" ,
                       "z-index": "9999",
                       "height":"50px"})
            $(".fa-angle-up").fadeIn(700)

    }
    else{
        $("nav").css({"backgroundColor":"transparent",
                       "top":"8rem",
                        "padding":"1%"})
        $(".fa-angle-up").fadeOut(600);
    }
})
//resize nav

 

//angle-up buttom
$(".fa-angle-up").click(function(){    

    $("window,html").animate({scrollTop : '0'},1000)
});

//lists appearance



//women

$("#women").mouseover(function(){
    
    $("#women-list").removeClass("hidden").addClass("flex");
    let wScroll = $(window).scrollTop();
if(wScroll == aScroll){
    $("#women-list").addClass("women-up")
    $("#women-list").removeClass("women-down")


} else{
    $("#women-list").removeClass("women-up")
    $("#women-list").addClass("women-down")}
});

$("#women-list").mouseover(function(){
    
    $("#women-list").removeClass("hidden").addClass("flex");})

$("#women").mouseout(function(){
    setTimeout(function(){
    $("#women-list").removeClass("flex").addClass("hidden");

    },300)
});



//Men
$("#men").mouseover(function(){
    $("#men-list").removeClass("hidden").addClass("block");
    let wScroll = $(window).scrollTop();
if(wScroll == aScroll){
    $("#men-list").addClass("men-up")
    $("#men-list").removeClass("men-down")


} else{
    $("#men-list").removeClass("men-up")
    $("#men-list").addClass("men-down")}
console.log(aScroll,wScroll);

});
$("#men").mouseout(function(){

    setTimeout(function(){
        $("#men-list").removeClass("block").addClass("hidden");
    
        },300)
});

//lastPiece
$("#lastPiece").mouseover(function(){
    $("#last-piece").removeClass("hidden").addClass("block");
    let wScroll = $(window).scrollTop();
    if(wScroll == aScroll){
        $("#last-piece").addClass("last-up")
        $("#last-piece").removeClass("last-down")
    
    
    } else{
        $("#last-piece").removeClass("last-up")
        $("#last-piece").addClass("last-down")}
    console.log(aScroll,wScroll);
});
$("#lastPiece").mouseout(function(){
    setTimeout(function(){
        $("#last-piece").removeClass("block").addClass("hidden");
    
        },300)
});
//winter
$("#winterClearance").mouseover(function(){
    $("#winter").removeClass("hidden").addClass("block");
    let wScroll = $(window).scrollTop();
    if(wScroll == aScroll){
        $("#winter").addClass("winter-up")
        $("#winter").removeClass("winter-down")
    
    
    } else{
        $("#winter").removeClass("winter-up")
        $("#winter").addClass("winter-down")}
    console.log(aScroll,wScroll);
});

$("#winterClearance").mouseout(function(){
    setTimeout(function(){
        $("#winter").removeClass("block").addClass("hidden");
    
        },300)
    });

//first-slide
var slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides1");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  
  slides[slideIndex-1].style.display = "block";
}
//second slide
//next

//arrows

 
//slides

$(".next2").click(function  (){
    if($(".slide").is(":first-child")){
        $(".slide1").fadeOut(800).addClass("hidden");
        $(".slide2").removeClass("hidden").fadeIn(600 , function(){
                   $('.next2').hide();
                $('.prev2').show();

        }); 
    }
   
})


$(".prev2").click(function(){
    if($(".slide").not(":first-child")){
        $(".slide2").fadeOut(800).addClass("hidden");
        $(".slide1").removeClass("hidden").fadeIn(600,function(){
            $('.next2').show();
        $('.prev2').hide();
    });
        
}  
    
      
    
    
})




