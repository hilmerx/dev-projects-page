document.getElementById("about").addEventListener("click", function(){
    const modal = document.getElementsByClassName("modal")
    modal[0].classList.toggle('modal--is-active');
})

document.getElementById("modal-background").addEventListener("click", function(){
    const modal = document.getElementsByClassName("modal")
    modal[0].classList.toggle('modal--is-active');
})

document.getElementById("modal-box").addEventListener("click", function(e){
        e.stopPropagation();
})

document.getElementById("modal-x").addEventListener("click", function(e){
    const modal = document.getElementsByClassName("modal")
    modal[0].classList.toggle('modal--is-active');
})

$(window).scroll(function() {
    let header = $(document).scrollTop();
    if (header > 120) {
      $('.header').addClass('header--sticky-is-active');
      $('.feed').addClass('feed--sticky-is-active');
    } else {
      $('.header').removeClass('header--sticky-is-active');
      $('.feed').removeClass('feed--sticky-is-active');

    }
  });