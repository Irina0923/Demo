$(function(){
	$("#sex_radio input").click(function(){
		console.log($(this))
		$(this).siblings().removeAttr("checked");
		$(this).prop("checked","true");
	});
});
