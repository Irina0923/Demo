$(function(){
	//设置图片当前的位置为0px
		var current = 0;
		function autoPlay(){
			var roll_wrap = $("#roll_wrap").children("ul");
			current-=10;
			if(current<-50){
				roll_wrap.css("top",0+"px");
				current = 0;
			}else{
				roll_wrap.css("top",current+"px");
			}
		}

			var timeId = setInterval(autoPlay,150);
			
			$("#roll_wrap").mouseover(function(){
				clearInterval(timeId);
			});
			
			$("#roll_wrap").mouseout(function(){
			 	timeId = setInterval(autoPlay,150);
			});
});
