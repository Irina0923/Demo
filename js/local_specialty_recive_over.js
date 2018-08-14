$(function(){
	$('div.pic').hover(function(){
		$(this).find('div.edit').show();
	},function(){
		$(this).find('div.edit').hide();
	});
});
