$(function(){
	$('.content').click(function(){
		$('.show', this).show();
		$('.hide', this).hide();
		$("h5",this).hide();
		$(this).css("width","70%");
		$(".mainC").css('margin-left','10%');
	})
	$('.content').dblclick(function(){
		$('.show').hide();
		$('.hide', this).show();
		$(this).css("width","30%")
		$("h5",this).show();
		$(".mainC").css('margin-left','30%');
	})
})
$(function() {
	$(window).scroll(function() {
		if($(this).scrollTop() != 0) {
			$('#toTop').fadeIn();
		} else {
			$('#toTop').fadeOut();
		}
	});
	$('#toTop').click(function() {
		$('body,html').animate({scrollTop:0},800);
	});
});
$(function(){
	$("#easteregg").click(function(){
		$(".logo img").attr("src","pic/easteregglogo.jpg");
		$("body").css('background','url(pic/eastereggback.jpg)');
		$(".hide").attr("src","pic/shrekforever.jpg");
		$(".content h5").text("Shrek is love");
	})
	$("#easteregg").dblclick(function(){
		$(".logo img").attr("src","pic/logo.jpg");
		$("body").css('background','url(pic/backgroundreddragon.jpg) 90%');
	})
})
