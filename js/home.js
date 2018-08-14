$(function() {
//=======================主页图片幻灯片效果==========================	
	$(".prev,.next").hover(function(){
		$(this).stop(true,false).fadeTo("show",0.9);
	},function(){
		$(this).stop(true,false).fadeTo("show",0.4);
	});
	
	$("#banner").slide({
		titCell:".hd ul",
		mainCell:".bd ul",
		effect:"fold",
		interTime:2000,
		delayTime:500,
		autoPlay:true,
		autoPage:true, 
		trigger:"click" 
	});
			
//======================精选路线部分=================================
	txt_show();
	$(".zb_con>.ul_mar").mouseenter(function() {
		clearInterval(txtId);
	});
	$(".zb_con>.ul_mar").mouseleave(function() {
		txt_show();
	});
//=======================免费路线部分==========================	
	scence_play();
	$(".js_wrap>").mouseenter(function() {
		clearInterval(scenceId);
	});
	$(".js_wrap>").mouseleave(function() {
		scenceId = setInterval(scence_play, 100);
	});


//=======================弹出图片==========================
		//获取图片
		$(".download_img>img").click(function() {
			$(this).hide();
			$(".pop_img").show();
			$(".pop_img>.pop_img_alert").show();
		});
		
		$(".pop_img>.close_pop").click(function() {
			$(".pop_img").hide();
			$(".pop_img>.pop_img_alert").hide();
			$(".download_img>img").show();
		});
});
//======================精选路线部分=================================
	var txtId;
	function txt_show() {
		clearInterval(txtId);
		var t = 0;
		txtId = setInterval(function() {
			$(".zb_con>.ul_mar").hide();
			$(".zb_con>.ul_mar:eq(" + t + ")").show();
			t++;
			if(t == 3) {
				t = 0;
			}
		}, 1500);
		
	}
	
//=======================免费路线部分==========================	
	//图片无缝轮播
	var scenceId;
	//设置相框的当前位置
	var current = 0;

	function scence_play() {
		clearInterval(scenceId);
		//获取一个js_inner的高度
		scenceId = setInterval(function() {
			var scence_height = $(".js_wrap>.js_inner");
			current -= 5;
			if(current < -234) {
				scence_height.css("top", 0 + "px");
				current = 0;
			} else {
				scence_height.css("top", current + "px");
			}
		}, 100);

	}