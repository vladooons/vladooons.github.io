$(document).ready(function(){

     $('.middle_form a').click(function(e) {
        e.preventDefault(); 
        $('#modal_call .form_order').removeClass('active');
        $('#modal_call').modal('show');
        return false; 
    });

    $('.tab-content_btn').each(function(i){
        $(this).on('click', function() {
            $('#modal_call .form_order').addClass('active');
            $('#modal_call .form_order_descr').text($('.tab-content_name').eq(i).text());
            $('#modal_call').modal('show');

        });
    });

    var mySwiper = new Swiper ('.swiper-container', {
        direction: 'horizontal',
        loop: false,
        slidesPerView: 1,

        scrollbar: {
        el: '.swiper-scrollbar',
        }
    });

    
   mySwiper.on('slideChange', function () {
       switch (mySwiper.realIndex) {
            case 0:
                jQuery('#myTab li:first a').trigger('click');
                break;
            case 1:
                jQuery('#myTab li a#popular-tab').trigger('click');
                break;
            case 2:
                jQuery('#myTab li:last a').trigger('click');
                break;
        } 
    });  

   $('#new-tab').on('click', function() {
        mySwiper.slideTo(0,600);
    });
    $('#popular-tab').on('click', function() {
        mySwiper.slideTo(1,600);
    });
    $('#sales-tab').on('click', function() {
        mySwiper.slideTo(2,600);
    });   
    

    




    jQuery('body').on('click','.next', function(){
        var next = jQuery('.nav-tabs > .nav-item > .active').parent().next('li');
        
        if(next.length){
            next.find('a').trigger('click');
        }else{
            jQuery('#myTab li:first a').trigger('click');
        }
    });

    jQuery('body').on('click','.prev', function(){
        var prev = jQuery('.nav-tabs > .nav-item > .active').parent().prev('li');
        
        if(prev.length){
            prev.find('a').trigger('click');
        }else{
            jQuery('#myTab li:last a').trigger('click');
        }
    });

    /* menu */
    const menu = document.querySelector('.middle_menu_list'),
    menuItem = document.querySelectorAll('.middle_menu_item'),
    btn = document.querySelector('.middle_menu_btn'),
    closeBtn = document.querySelector('.middle_menu_close');

    btn.addEventListener('click', () => {
        menu.classList.toggle('middle_menu_list_active');
        closeBtn.classList.toggle('middle_menu_close_active');
    });

    closeBtn.addEventListener('click', () => {
        menu.classList.toggle('middle_menu_list_active');
        closeBtn.classList.toggle('middle_menu_close_active');
    });

    menuItem.forEach(item => {
        item.addEventListener('click', () => {
            menu.classList.toggle('middle_menu_list_active');
            closeBtn.classList.toggle('middle_menu_close_active');
        });
    });

    /* поиск */
    let selectedInd = 0;

    $(".dropdown-item").click(function(){
        $(".dropdown-toggle").text($(this).text());
        selectedInd = $(this).index();
    });


    $(".search_down").click(function() {
        selectedInd < 3 ? selectedInd++ : selectedInd = 0;
        $(".dropdown-toggle").text($(".dropdown-menu .dropdown-item").eq(selectedInd).text());
    });

    $(".search_up").click(function() {
        selectedInd != 0 ? selectedInd-- : selectedInd = 3;
        $(".dropdown-toggle").text($(".dropdown-menu .dropdown-item").eq(selectedInd).text());
    });

    $("#lens").click(function(){
        
        $(this).parent().parent().find(".search_wrapper").toggleClass("active")
        console.log();
    });

});


