    
    // Sticky Header
    function headerStyle() {
        if($('.sticky-header').length){
            var windowpos = $(window).scrollTop();
            var siteHeader = $('.sticky-header');
            var scrollLink = $('.scroll-to-top');
            if (windowpos >= 200) {
                siteHeader.addClass('fixed-header');
                scrollLink.fadeIn(300);
            } else {
                siteHeader.removeClass('fixed-header');
                scrollLink.fadeOut(300);
            }
        }
    }
    headerStyle();
    var MenuContent = $('.header .mainmenu ul').html();
    $('.sticky-header .mainmenu ul').append(MenuContent);


    // Testimonial Section
    if ($('.wpex_02_testimonial-carousel').length) {
        $('.wpex_02_testimonial-carousel').owlCarousel({
            loop: true,
            margin: 0,
            nav: true,
            navText: [
                '<i class="fa fa-angle-left"></i>',
                '<i class="fa fa-angle-right"></i>'
            ],            
            dots: true,
            autoWidth: false,
            autoplay: true,
            autoplayTimeout: 3000,
            autoplayHoverPause: true,
            responsive: {
                0: {
                    items: 1
                },
                480: {
                    items: 1
                },
                600: {
                    items: 1
                },
                1000: {
                    items: 1
                }
            }
        });
    };



    //Masonary
    function enableMasonry() {
        if($('.masonry-gallery').length){

            var winDow = $(window);
            // Needed variables
            var $container=$('.masonry-gallery .items-container');
            var $filter=$('.filter-btns');

            $container.isotope({
                filter:'*',
                 masonry: {
                    columnWidth : 0
                 },
                animationOptions:{
                    duration:500,
                    easing:'linear'
                }
            });


            // Isotope Filter
            $filter.find('li').on('click', function(){
                var selector = $(this).attr('data-filter');

                try {
                    $container.isotope({
                        filter  : selector,
                        animationOptions: {
                            duration: 500,
                            easing  : 'linear',
                            queue   : false
                        }
                    });
                } catch(err) {

                }
                return false;
            });

 
            winDow.bind('resize', function(){
                var selector = $filter.find('li.active').attr('data-filter');

                $container.isotope({
                    filter  : selector,
                    animationOptions: {
                        duration: 500,
                        easing  : 'linear',
                        queue   : false
                    }
                });
            });


            var filterItemA = $('.filter-btns li');

            filterItemA.on('click', function(){
                var $this = $(this);
                if ( !$this.hasClass('active')) {
                    filterItemA.removeClass('active');
                    $this.addClass('active');
                }
            });
        }
    }

   


    //Main Slider Carousel
    if ($('.main-slider-carousel').length) {
        $('.main-slider-carousel').owlCarousel({
            animateOut: 'fadeOut',
            animateIn: 'fadeIn',
            loop:true,
            margin:0,
            nav:true,
            autoHeight: true,
            autoplayHoverPause: true, // Stops autoplay
            smartSpeed: 500,
            autoplay: 6000,
            navText: [ '<span class="fa fa-angle-left"></span>', '<span class="fa fa-angle-right"></span>' ],
            responsive:{
                0:{
                    items:1
                },
                600:{
                    items:1
                },
                800:{
                    items:1
                },
                1024:{
                    items:1
                },
                1200:{
                    items:1
                }
            }
        });         
    }


    $(window).on('load', function() {
        enableMasonry();
    });

    $(window).on('scroll', function() {
        headerStyle();
    });






