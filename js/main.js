
	        $(document).ready(function(){
		 $('.armchairs').hide();
	   $('.mattresses').hide();
	   $('.carpets').hide();   
	    /*price slider*/
	    $('.sofa').on('click', function(e){
	    e.preventDefault();
			$('.sofas').show();
	    $('.armchairs').hide();
	    $('.mattresses').hide();
	    $('.carpets').hide();
	        });
	    $('.armchair').on('click', function(k){
	    k.preventDefault();
	    $('.armchairs').show();
	
	    $('.sofas').hide();
	    $('.mattresses').hide();
	    $('.carpets').hide();
	        });
	    $('.mattress').on('click', function(i){
	    i.preventDefault();
	    $('.mattresses').show();
	    $('.sofas').hide();
	    $('.armchairs').hide();
	    $('.carpets').hide();
	        });
	    $('.carpet').on('click', function(a){
	    a.preventDefault();
	    $('.carpets').show();
	    $('.sofas').hide();
	    $('.armchairs').hide();
	    $('.mattresses').hide();
	        });
	    $('.owl-theme').owlCarousel({
	        loop:true,
	        nav:false,
	        autoplay:false,
	        autoplayTimeout:5000,
	        responsive:{
	            0:{
	                items:1
	            }
	        }
			});

			$(function() {
				var Accordion = function(el, multiple) {
					this.el = el || {};
					// more then one submenu open?
					this.multiple = multiple || false;
					var dropdownlink = this.el.find('.dropdownlink');
					dropdownlink.on('click',
													{ el: this.el, multiple: this.multiple },
													this.dropdown);							
				};
			
				Accordion.prototype.dropdown = function(e) {
					var $el = e.data.el,
							$this = $(this),
							//this is the ul.submenuItems
							$next = $this.next();
							
					$next.slideToggle();
					setTimeout(function(){$next.slideToggle()}, 5000);
					$this.parent().toggleClass('open');
					
					if(!e.data.multiple) {
						//show only one menu at the same time
						$el.find('.submenuItems').not($next).slideUp().parent().removeClass('open');
					}
				}

				var accordion = new Accordion($('.accordion-menu'), false);
			});

	    $('.clients-section_slider').owlCarousel({
	        loop:true,
	        margin:20,
	        autoplay:true,
	        autoplayTimeout:5000,
	        responsive: {
	           0:{
	               items:1
	           },
	           600:{
	               items:1
	           },
	           1000:{
	               items:3
	           }
	        }
	    });
			$('.our_works-section_slider').owlCarousel({
				loop:true,
	        margin:20,
	        autoplay:true,
	        autoplayTimeout:5000,
	        responsive: {
	           0:{
	               items:1
	           },
	           600:{
	               items:1
	           },
	           1000:{
	               items:3
	           }
	        }
			});
	    $('button.animated').hover(
	    function() {
	     $(this).addClass('pulse'); // Добавляем класс bounce
	    },
	    function() {
	     $(this).removeClass('pulse'); // Убираем класс
	    }
       );
       
       $('form input[type=file]').change(function(){
            if($('form input[type=file]').val() !=''){
               $('label.user-file').removeClass('user-file').addClass('user-file_ok');
            }
       });

	   $('.request_form').validate({
	   rules: {
	     // simple rule, converted to {required:true}
	     user_name: "required",
	     user_phone: "required"
	       },
	   messages: {
	     user_name: "Укажите ваше имя",
	     user_phone: "Укажите ваш телефон",
	       },
	   submitHandler: function(form) {
	       var formData = $('.request_form')[0];
	       var formData = new FormData(formData);
           $('#fountainG').show();
	     $.ajax({
	       url: "./php/order.php",
	       type: "POST",
	       data: formData,
	       contentType: false,
	       processData: false,
	       success: function (msg) {
               $('#fountainG').hide();
               $('.modal-wrapper').toggleClass('open');
               $(form)[0].reset();
               $('label.user-file_ok').removeClass('user-file_ok').addClass('user-file');
	       }
	     });
	     return false;
	   }
	   });
	   $('.tour_form').validate({
	   rules: {
	     // simple rule, converted to {required:true}
	     userName: "required",
	     userPhone: "required"
	       },
	   messages: {
	     userName: "Обязательное поле",
	     userPhone: "Пожалуйста, заполните все обязательные поля",
	       },
	     submitHandler: function(form) {
	       var formData = form;
	       var formData = new FormData(formData);
	       $.ajax({
	       url: "./php/tour.php",
	       type: "POST",
	       data: formData,
	       contentType: false,
	       processData: false,
	       success: function (msg) {
					 $(form)[0].reset();
					 $('.modal-wrapper').toggleClass('open');
	       }
	     });
	     return false;
	   }
     });
		 $('.modal_form').validate({
	   rules: {
	     // simple rule, converted to {required:true}
	     order_UserName: "required",
	     order_UserPhone: "required"
	       },
	   messages: {
			order_UserName: "Обязательное поле",
			order_UserPhone: "Пожалуйста, заполните все обязательные поля",
	       },
	     submitHandler: function(form) {
	       var formData = form;
	       var formData = new FormData(formData);
	       $.ajax({
	       url: "./php/modal_order.php",
	       type: "POST",
	       data: formData,
	       contentType: false,
	       processData: false,
	       success: function (msg) {
					 $(form)[0].reset();
					 $('.modal-order-wrapper').toggleClass('open');
					 $('.modal-wrapper').toggleClass('open');
	       }
	     });
	     return false;
	   }
     });
			
			var orderItem;
			 $('.order-button').on('click', function(xa){
				xa.preventDefault();
				if($(this).hasClass('sofa-1')) {
					orderItem = 'Диван 2-х местный';
				} else if($(this).hasClass('sofa-2')){
					orderItem = 'Диван 3-х местный';
				} else if($(this).hasClass('sofa-3')){
					orderItem = 'Диван 4-х местный';
				} else if($(this).hasClass('sofa-4')){
					orderItem = 'Диван 3-х местный угловой';
				} else if($(this).hasClass('sofa-5')){
					orderItem = 'Диван 4-х местный угловой';
				} else if($(this).hasClass('armchair-1')){
					orderItem = 'Кресло тип-1';
				} else if($(this).hasClass('armchair-2')){
					orderItem = 'Кресло тип-2';
				} else if($(this).hasClass('armchair-3')){
					orderItem = 'Офисный стул';
				}	else if($(this).hasClass('armchair-4')){
					orderItem = 'Офисное кресло'; 
				} else if($(this).hasClass('mattress-1')){
					orderItem = 'Односпальный матрас';
				} else if($(this).hasClass('mattress-2')){
					orderItem = 'Двуспальный матрасс';
				} else if($(this).hasClass('carpet-1')){
					orderItem = 'Синтетический ковер';
				} else if($(this).hasClass('carpet-2')){
					orderItem = 'Шерстяной ковер';
				}
				$('#user_order').val(orderItem);
				$('.modal-order-wrapper').toggleClass('open');	
			});

			 $('.trigger-close').on('click', function(x){
				x.preventDefault();
				$('.modal-order-wrapper').toggleClass('open');
			});

       $('.trigger').on('click', function() {
						$('.modal-wrapper').toggleClass('open');
            $('.page-wrapper').toggleClass('blur-it');
            return false;
       });

	   $('[type=text]').mask('SSSSSSSSSSSSSSSSSSSSSSSSSSSSS', {'translation': {
	    S: {pattern: /[А-Яа-я]/}
	       }
	   });
	   $('[type=tel]').mask('+Z(ZZZ)-ZZZ-ZZ-ZZ', {'translation': {
	    Z: {pattern: /[0-9]/}
	       }
	   });
		 $(".main-logo__text h1").click(function (){ $("body,html").animate({ scrollTop:0 }, 800); return false; });
		 $("#navToggle").click(function() {
    $(this).toggleClass("active");
    $(".overlay").toggleClass("open");
    // this line ▼ prevents content scroll-behind
    $("body").toggleClass("locked"); 
		});
		$('.goods-item_sofas').load(function(){
			$(this).addClass('loaded');
		});
	});

	