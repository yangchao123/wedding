$(document).ready(function() {
	// hover
		
	$('.link1').each(function(){
		$(this).prepend('<span></span>')
		col=$(this).css('color')
		$(this).find('span').css({background:col})
	})
	
	$('.link1').hover(function(){
		$(this).find('span').css({opacity:1, width:0}).stop().animate({width:'100%'})					   
	}, function(){
		$(this).find('span').stop().animate({opacity:0})					   
	})
	
	$('.button1').each(function(){
		$(this).prepend('<strong></strong><strong class="active"></strong>')	
	})
	
	$('.button1 .active').css({opacity:0, display:'none'})
	
	$('.button1').hover(function(){
		$(this).stop().animate({borderColor:'#b72f08'})
		$(this).find('.active').css({display:'block'}).stop().animate({opacity:1})					 
	}, function(){
		$(this).stop().animate({borderColor:'#000000'})
		$(this).find('.active').stop().animate({opacity:0}, function(){$(this).css({display:'none'})})					 
	})
	
	
	$("#gallery2").jCarouselLite({
			btnNext: "#next",
		 	btnPrev: "#prev",
       		mouseWheel: true,
			visible: 2,
			speed: 600,
			easing: 'easeOutCirc'
	});
	
	$('.gallery_img span, #gallery2 a span').css({opacity:0})
	
	$('.gallery_img a, #gallery2 a').hover(function(){
		$(this).find('span').stop().animate({opacity:0.6})							   
	}, function(){
		$(this).find('span').stop().animate({opacity:0})							   
	})
	
	
	var Img='.'+$(".gallery_big_img img#active").attr('class')
	$(".gallery_big_img img").css({opacity:0});
	$(".gallery_big_img img#active").css({opacity:1});
	$(".gallery_img a").click(function(){
  		var ImgId = '.'+$(this).attr("href").slice(1);
  		if (ImgId!=Img) {
			 $(Img).stop().animate({opacity:0}, 600, function(){$(this).css({display:'none'})})
			 $(Img).attr({id:''});
			 $(ImgId).css({display:'block'}).stop().animate({opacity:1}, 600, function(){});
			 $(ImgId).attr({id:'active'})
		}
		Img=ImgId;
  	  return false;
   })
	
	
		
		$('#prev span, #next span').css({opacity:0})
		
		$('#prev, #next').hover(function(){
			$(this).find('span').stop().animate({opacity:1})						 
		}, function(){
			$(this).find('span').stop().animate({opacity:0})						 
		})
		
		
	$('.list1 a, .link2').hover(function(){
		$(this).stop().animate({color:'#b62716'})						 
	}, function(){
		$(this).stop().animate({color:'#4c4b4b'})					 
	})
	
	$('.submenu_1 span').css({opacity:0})
	
	$('.submenu_1 li').hover(function(){
		$(this).find('span').stop().animate({opacity:1})							  
	}, function(){
		$(this).find('span').stop().animate({opacity:0})							  
	})
	
	$('ul#menu').superfish({
      delay:       600,
      animation:   {height:'show'},
      speed:       600,
      autoArrows:  false,
      dropShadows: false
    });
	
	
 });
$(window).load(function() {	
	
	// scroll
	$('.scroll').cScroll({
		duration:700,
		step:60,
		trackCl:'track',
		shuttleCl:'shuttle'
	})	
	
	//content switch
	var content=$('#content'),
		nav=$('.menu');
	nav.navs({
		useHash:true,
		hoverIn:function(li){
			$('> span',li).stop().animate({top:0}, 600,'easeOutBounce')
		},
		hoverOut:function(li){
			if (!li.hasClass('with_ul') || !li.hasClass('sfHover')) {
				$('> span',li).stop().animate({top:-75})
			}
		}				
	})	
	content.tabs({
		actFu:function(_){
			if (_.prev && _.curr) {
					_.prev.find('.left_box').css({zIndex:1})
					_.prev.find('.right_box').css({zIndex:2}).stop().animate({width:0}, function(){$(this).css({display:'none', width:464})})
					_.curr.find('.right_box').css({zIndex:1, display:'block'})
					_.curr.find('.left_box').css({zIndex:3, display:'block', width:0, left:940}).stop().animate({left:10, width:465},600, function(){
						_.prev.find('.left_box').css({display:'none'})																														   
					})
					_.prev.find('.shadow_1').css({display:'block', right:-465}).stop().animate({right:465},600, function(){$(this).css({display:'none'})})
					_.curr.find('.shadow_2').css({right:0}).stop().animate({right:421},600)
			} else {
				if (_.curr) {
					_.curr.find(' > div').css({display:'block'})	
				} else {
					$('#content > ul > li > div').css({display:'none'})
				}
			}
		},
		preFu:function(_){						
			$('#content > ul').css({opacity:0})
			$('#content > ul > li > div').css({display:'none'})
		}
	})
	nav.navs(function(n, _){
		
		if (n=='close' || n=='#!/') {
			content.tabs(n);
			$('#content > ul').stop().animate({opacity:0} ,function(){
				$('.splash_bg').stop().animate({opacity:1})		
				$('h1').stop().animate({top:282})
			})
		} else {
			content.tabs(n);
			$('.splash_bg').stop().animate({opacity:0})
			$('h1').stop().animate({top:-17}, function(){
				$('#content > ul').stop().animate({opacity:1}, function(){$(this).css({opacity:'none'})})									 
			})
		}
	})
	
	/*
	var m_top=0
	function centre() {
		var h=$(window).height();
		if (h>h_cont+425) {
			m_top=(h-h_cont-425)/2;
		} else {
			m_top=0
		}
		$('.container_16').stop().animate({paddingTop:m_top})
		
	}
	centre();
	$(window).resize(centre);
	*/
})