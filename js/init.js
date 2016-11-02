
$( document ).ready(function() {

	var $body = $('body');
    
 		// SCROLL TO SECTION
		//===================================
		
		// var home_link = $('nav-link.home a').focus();

		// $('a[href*=#]:not([href=#])').click(function() {
		// 	$(".nav-link a").removeClass('focused');
		// 	$(this).addClass('focused');
		// 	if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
		// 	  	var target = $(this.hash);
		// 	  	target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
		// 	  	if (target.length) {
		// 	   	$('html,body').animate({
		// 	      	scrollTop: target.offset().top - 70
		// 	    	}, 800);
		// 	   	return false;
		// 	  	}
		// 	}
		// });
		// 
		

		$('.contact-show-btn').on('click', function(){
			showContact()
			return false;
		})

		$('.contact-hide-btn').on('click', function(){
			hideContact()
			return false;
		})

		function showContact(){
			$('#contact-holder').fadeIn(300);
		}

		function hideContact(){
			$('#contact-holder').fadeOut(300);
		}


		$.scrollIt({
			topOffset: -70
		});

		// TOP NAV
		//===================================
		var body = $('body'), 
			win = $(window),
			win_w = win.width(),	
			tablet_w = 1080,
			mobile_w = 700,
			nav = $('.header .nav'),
			menu_icon = $('.nav-toggle__menu'),
			close_icon = $('.nav-toggle__close'),
			nav_vis = false;

			$('.nav-toggle').click(function(){
			navToggle();
			return false;
		});

		function navToggle(){
			if(nav_vis){
				nav_vis = false;
				navHide();
			}else{
				nav_vis = true;
				navShow();
			}
		}

		function navShow(){
			nav.fadeIn();
			menu_icon.fadeOut();
			close_icon.fadeIn();
		}

		function navHide(){
			nav.fadeOut();
			close_icon.fadeOut();
			menu_icon.fadeIn();
		}

		// RESIZE
		//===================================
		win.resize(function(event) {
			win_w = win.width()

			check_mobile()
		});

		function check_mobile(){
			
		}

			

});


