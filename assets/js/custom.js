

jQuery(function($){

	/* valentines */
	$('#portfolio-popup').addClass("portfolio-popup-show");
	  $('#portfolio-popup').animate({
	      "opacity": 1
	  },500);   
	  var portfolio_detailscontent = $('.valentines').html();
	  $(".portfolio-popup-inner").html(portfolio_detailscontent); 
	/* valentines */
  /* ----------------------------------------------------------- */
  /*  1. FIXED NAVBAR 
  /* ----------------------------------------------------------- */
    
    
  jQuery(window).bind('scroll', function () {
    if (jQuery(window).scrollTop() > 30) {
        jQuery('.mu-main-navbar').addClass('navbar-bg');
        jQuery('.navbar-brand').addClass('navbar-brand-small');        
      } else {
          jQuery('.mu-main-navbar').removeClass('navbar-bg');          
          jQuery('.navbar-brand').removeClass('navbar-brand-small');          
      }
  });
  
  /* ----------------------------------------------------------- */
  /*  2. TOP SLIDER (SLICK SLIDER)
  /* ----------------------------------------------------------- */    

    jQuery('.mu-top-slider').slick({
      dots: false,
      infinite: true,
      arrows: true,
      speed: 500,     
      autoplay: true,
      fade: true,
      cssEase: 'linear'
    });

  /* ----------------------------------------------------------- */
  /*  3. ABOUT US (SLICK SLIDER)
  /* ----------------------------------------------------------- */      

    jQuery('.mu-abtus-slider').slick({
      dots: false,
      infinite: true,
      arrows: false,
      speed: 500,
      autoplay: true,
      fade: true,      
      cssEase: 'linear'
    });

  /* ----------------------------------------------------------- */
  /*  4. DATEPICKER
  /* ----------------------------------------------------------- */      

    jQuery('#datepicker').datepicker();

  /* ----------------------------------------------------------- */
  /*  5. SHEF SLIDER (SLICK SLIDER)
  /* ----------------------------------------------------------- */    

    jQuery('.mu-chef-nav').slick({
      dots: true,
      arrows: false,
      infinite: true,
      speed: 300,
      slidesToShow: 4,
      slidesToScroll: 2,
      autoplay: true,
      autoplaySpeed: 2500,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
        // You can unslick at a given breakpoint now by adding:
        // settings: "unslick"
        // instead of a settings object
      ]
    });

  /* ----------------------------------------------------------- */
  /*  6. TESTIMONIAL SLIDER (SLICK SLIDER)
  /* ----------------------------------------------------------- */    

    jQuery('.mu-testimonial-slider').slick({
      dots: true,      
      infinite: true,
      arrows: false,
      autoplay: true,
      speed: 500,      
      cssEase: 'linear'
    });       

  /* ----------------------------------------------------------- */
  /*  7. COUNTER
  /* ----------------------------------------------------------- */

    jQuery('.counter').counterUp({
        delay: 10,
        time: 1000
    });

	/* ----------------------------------------------------------- */
	/*  8. LIGHTBOX ( FOR PORTFOLIO POPUP VIEW ) 
	/* ----------------------------------------------------------- */ 
	
	$('body').append("<div id='portfolio-popup'><div class='portfolio-popup-area'><div class='portfolio-popup-inner'></div></div></div>");
	
	// WHEN CLICK PLAY BUTTON 
	
	function blinker() {
		jQuery('.spl').fadeOut(500);
		jQuery('.spl').fadeIn(500);
	}

	setInterval(blinker, 1000);
	jQuery('.mu-view-btn').on('click', function(event) {
	  event.preventDefault();
	  $('#portfolio-popup').addClass("portfolio-popup-show");
	  $('#portfolio-popup').animate({
	      "opacity": 1
	  },500);   
	  var portfolio_detailscontent = $(this).parent(".mu-single-gallery-info").find(".portfolio-detail").html();
	  $(".portfolio-popup-inner").html(portfolio_detailscontent);     
	
	});  
	
	jQuery('.spl').on('click', function(event) {
	  event.preventDefault();
	  $('#portfolio-popup').addClass("portfolio-popup-show");
	  $('#portfolio-popup').animate({
	      "opacity": 1
	  },500);   
	  var portfolio_detailscontent = $('.valentines').html();
	  $(".portfolio-popup-inner").html(portfolio_detailscontent);     
	
	}); 

	$('body').append("<div id='serviceDown-popup'><div class='portfolio-popup-area'><div class='portfolio-popup-inner'></div></div></div>");
	
	 jQuery('.serviceDown').on('click', function(event) {
	  event.preventDefault();
	  
	  $('#serviceDown-popup').addClass("portfolio-popup-show");
	 
	  $('#serviceDown-popup').animate({
	      "opacity": 1
	  },500);  
 	  
	  var overlay = $(this).find(".portfolio-detail").html();
	  $(".portfolio-popup-inner").html(overlay); 
$('.overlay').show();	  
	
	});  
	       
	// WHEN CLICK CLOSE BUTTON
	
	$(document).on('click','.modal-close-btn', function(event) {     
	    event.preventDefault();
		$('.overlay').hide();
		$('#portfolio-popup,#serviceDown-popup').removeClass("portfolio-popup-show");
		$('#portfolio-popup,#serviceDown-popup').animate({
		      "opacity": 0
	    },500);  
	
	});
	
  /* ----------------------------------------------------------- */
  /*  9. MENU SMOOTH SCROLLING
  /* ----------------------------------------------------------- */ 

    //MENU SCROLLING WITH ACTIVE ITEM SELECTED

      // Cache selectors
      var lastId,
      topMenu = $(".mu-main-nav"),
      topMenuHeight = topMenu.outerHeight()+13,
      // All list items
      menuItems = topMenu.find('a[href^=\\#]'),
      // Anchors corresponding to menu items
      scrollItems = menuItems.map(function(){
        var item = $($(this).attr("href"));
        if (item.length) { return item; }
      });

      // Bind click handler to menu items
      // so we can get a fancy scroll animation
      menuItems.click(function(e){
        var href = $(this).attr("href"),
            offsetTop = href === "#" ? 0 : $(href).offset().top-topMenuHeight+32;
        jQuery('html, body').stop().animate({ 
            scrollTop: offsetTop
        }, 1500);           
         jQuery('.navbar-collapse').removeClass('in');  
        e.preventDefault();
      });

      // Bind to scroll
      jQuery(window).scroll(function(){
         // Get container scroll position
         var fromTop = $(this).scrollTop()+topMenuHeight;
         
         // Get id of current scroll item
         var cur = scrollItems.map(function(){
           if ($(this).offset().top < fromTop)
             return this;
         });
         // Get the id of the current element
         cur = cur[cur.length-1];
         var id = cur && cur.length ? cur[0].id : "";
         
         if (lastId !== id) {
             lastId = id;
             // Set/remove active class
             menuItems
               .parent().removeClass("active")
               .end().filter("[href=\\#"+id+"]").parent().addClass("active");
         }           
      })
  
  /* ----------------------------------------------------------- */
  /*  10. HOVER DROPDOWN MENU
  /* ----------------------------------------------------------- */ 
  
  // for hover dropdown menu
    jQuery('ul.nav li.dropdown').hover(function() {
      jQuery(this).find('.dropdown-menu').stop(true, true).delay(200).fadeIn(200);
    }, function() {
      jQuery(this).find('.dropdown-menu').stop(true, true).delay(200).fadeOut(200);
    });

    
  /* ----------------------------------------------------------- */
  /*  11. SCROLL TOP BUTTON
  /* ----------------------------------------------------------- */

  //Check to see if the window is top if not then display button

    jQuery(window).scroll(function(){
      if (jQuery(this).scrollTop() > 300) {
        jQuery('.scrollToTop').fadeIn();
      } else {
        jQuery('.scrollToTop').fadeOut();
      }
    });
     
    //Click event to scroll to top

    jQuery('.scrollToTop').click(function(){
      jQuery('html, body').animate({scrollTop : 0},800);
      return false;
    });
  
  /* ----------------------------------------------------------- */
  /*  12. PRELOADER
  /* ----------------------------------------------------------- */

   jQuery(window).load(function() { // makes sure the whole site is loaded      
      jQuery('#aa-preloader-area').delay(300).fadeOut('slow'); // will fade out      
    })
   
  
});

