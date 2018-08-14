$(function(){
		var play_classify_input = $(".play_classify").find("input");
		play_classify_input.click(function(){
	       $(this).siblings().attr("checked",false);
	       $(this).attr("checked",true);  
	    });
});
