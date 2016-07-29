document.addEventListener("DOMContentLoaded", function () {
    $(document).ready(function () {
        //menu slide
        $(".menu-header a").on('click', function (event) {
            if (this.hash !== "") {
                event.preventDefault();
                var hash = this.hash;
                $('html, body').animate({
                    scrollTop: $(hash).offset().top
                }, 800, function () {
                    window.location.hash = hash;
                });
            }
            
           
        });
         $("footer .quicklinks a").on('click', function (event) {
            if (this.hash !== "") {
                event.preventDefault();
                var hash = this.hash;
                $('html, body').animate({
                    scrollTop: $(hash).offset().top
                }, 800, function () {
                    window.location.hash = hash;
                });
            }
            
           
        });
        $(".menu-header li").on('mousein', function (event) {
            //animate
            $(this).addClass('pulse'); 
        });
        
          $(".menu-header li").on('mouseout', function (event) {
            //animate
            $(".menu-header li").removeClass('pulse');
          
        });
    });
    //portfolio
    var portfolio = $('#portfolio');
    var img = portfolio.find('.imgport');
    var bodyElement = $('body');
    img.on('click', function (event) {
        var dialog = '<div class="dialog"></div>';
        $('body').append(dialog);
        var $dialog = $('div.dialog');
        $dialog.append('<img src="' + $(this).attr('src') + '">');
        $dialog.css('top', $(document).scrollTop());
        $(document).on('click', 'div.dialog', function () {
            console.log('remove');
            $(this).remove();
        });
        

        
          });
        
        //team 
      
//        $('#section2').find('h4').on('mousein', function (event) {
//            $(this).addClass('slideInUp');
//    });
//       $('#section2').find('h4').on('mouseout', function (event) {          $('#section2').find('h4').removeClass('slideInUp'); 
//          
//        });
});