$(function(){
	$("#easteregg").click(function(){
		$(".logo img").attr("src","pic/easteregglogo.jpg");
		$("body").css('background','url(pic/eastereggback.jpg)');
		$(".content img").attr("src","pic/shrekenviroment.jpg");
		$(".content h3").text("Shrek is love, Shrek is a life");
		$("iframe").attr("src","https://www.youtube.com/embed/z_HWtzUHm6s")
	})
	$("#easteregg").dblclick(function(){
		$(".logo img").attr("src","pic/logo.jpg");
		$("body").css('background','url(pic/backgroundreddragon.jpg) 90%');
	})
})