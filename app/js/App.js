import $ from 'jquery'


$("#about").click(function() {
    var modal = $(".modal")
    modal.toggleClass('modal--is-active')
})

$("#modal-background").click(function(){
    var modal = $(".modal")
    modal.toggleClass('modal--is-active')
})

$("#modal-box").click(function(e){
        e.stopPropagation()
})

$("#modal-x").click(function(e){
    var modal = $(".modal")
    modal.toggleClass('modal--is-active')
})




$(window).scroll(function() {
    var scrollLength = $(document).scrollTop();
    var opacity = 1-(scrollLength / 120)


    $('.feed__arrow-down').css('opacity', opacity);
    
    if (scrollLength > 120) {
        $('.header').addClass('header--sticky-is-active')
        $('.feed').addClass('feed--sticky-is-active')
        $('.feed__arrow-down').css('display', 'none');

    } else {
        $('.header').removeClass('header--sticky-is-active')
        $('.feed').removeClass('feed--sticky-is-active')
    }



  })