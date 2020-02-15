$('ul.nav > li').hover(function() {
    $(this).find('.dropdown-menu').stop(true, true).delay(200).fadeIn();
  }, function() {
    $(this).find('.dropdown-menu').stop(true, true).delay(200).fadeOut();
  })

  $(window).scroll(function(){
        if($(this).scrollTop() >=  20){
            $('.navbar').removeClass('bg-transparent');
            $('.navbar').addClass('bg-dark');      
        } else {
            $('.navbar').removeClass('bg-dark');
            $('.navbar').addClass('bg-transparent');
        }
  })

  $('.search-module-trigger').click(function(){
    if($('.form-control').hasClass('d-block')){
        $('.form-control').removeClass('d-block');
        $('.form-control').removeClass('d-sm-none');
    } else {
        if ( $('.form-control').val().lenght >=1){
            //search
        } else {
            $('.form-control').addClass('d-block d-sm-none');
        }

    }
  })

  $('.navbar-toggler').click(function(){
    $('.navbar').removeClass('bg-transparent');
    $('.navbar').addClass('bg-dark');
    $('.form-control').removeClass('d-block');
    $('.form-control').removeClass('d-sm-none'); 
  })