$(function(){
//=========================注册切换========================
		$("div.tab_menu ul li").click(function(){
	        $(this).addClass("selected").siblings().removeClass("selected");  
	            var index =  $(this).index(); 
	        	$("#regist_form>.tab_box>div").eq(index).show().siblings().hide(); 
	        }).hover(function(){
	            $(this).addClass("hover");
	        },function(){
	            $(this).removeClass("hover");           
	        });
			
	
//=========================用户名验证========================
		//获取用户名
		$("#regin_name").blur(function(){
			//用户名的正则表达式
			var regin_name_reg = /^[a-zA-Z0-9]{1,}$/;
			//获取用户名输入框的值
			var txt_val = $(this).val();
			if(regin_name_reg.test(txt_val)){	
				$(".regin_name_tishi").hide();	
			}else if(txt_val==""||txt_val.length==0){
				$(".regin_name_tishi").show();
				$(".regin_name_tishi>span").text("用户名不能为空！").css("color","red");
			}else{
				$(".regin_name_tishi").show();
				$(".regin_name_tishi>span").text("用户名输入有误！").css("color","red");
			}	
		});
	
	/*手机号码验证*/
	var phone_number;
	var phone_tishi;
	var phone_span;
	/*手机注册手机号码*/
	$("#phone").blur(function(){
		phone_number = $(this).val(); 
		phone_tishi = $(".phone_tishi");
		phone_span = $(".phone_tishi>span");
		phone_number_check(phone_number,phone_tishi,phone_span);
	});
		
	/*邮箱注册手机号码*/
	$("#email_phone").blur(function(){
		phone_number = $(this).val(); 
		phone_tishi = $(".email_phone_tishi");
		phone_span = $(".email_phone_tishi>span");
		phone_number_check(phone_number,phone_tishi,phone_span);
	});
	
	/*手机号码验证*/
	function phone_number_check(phone_number,phone_tishi,phone_span){
			//手机号码的正则表达式
			var phone_reg = /^0?(13|14|15|18)[0-9]{9}$/;
			if(phone_reg.test(phone_number)){	
				phone_tishi.hide();	
			}else if(phone_number==""){
				phone_tishi.show();
				phone_span.text("手机号码不能为空！").css("color","red");
			}else{
				phone_tishi.show();
				phone_span.text("手机号码输入有误！").css("color","red");
			}
	}
	
		/*密码验证*/
		var txt_val;
		var psw;
		/*密码强度*/
		var weak_strength;
		var medium_strength;
		var strong_strength;
		
		var psw_tishi;
		var tishi_span;
		var psw_div;
		
	/*手机注册验证密码*/
	 $("#psw").blur(function(){
	 	//获取手机号码输入框的值
		txt_val = $(this).val();
		//获取密码强度
		weak_strength = $(".psw_strength>.weak_strength");
		medium_strength = $(".psw_strength>.medium_strength");
		strong_strength = $(".psw_strength>.strong_strength");
		//获取密码提示框
		psw_tishi = $(".psw_tishi");
		//获取密码提示框存放密码的span标签
		tishi_span = $(".psw_tishi>span");
		//获取密码强度的三个div
		psw_div = $(".psw_strength>div");
		 //调用验证密码强度的函数
		check_psw(txt_val,weak_strength,medium_strength,strong_strength,psw_tishi,tishi_span,psw_div);
	 });
	 
	 
	 /*邮箱注册密码验证*/
	$("#email_psw").blur(function(){
	 	//获取手机号码输入框的值
		txt_val = $(this).val();
		weak_strength = $(".email_psw_strength>.email_weak_strength");
		medium_strength = $(".email_psw_strength>.email_medium_strength");
		strong_strength = $(".email_psw_strength>.email_strong_strength");
		psw_tishi = $(".email_psw_tishi");
		tishi_span = $(".email_psw_tishi>span");
		psw_div = $(".email_psw_strength>div");
		 //调用验证密码强度的函数
		check_psw(txt_val,weak_strength,medium_strength,strong_strength,psw_tishi,tishi_span,psw_div);
	 });
	 
	/*验证密码强度的函数*/
	function check_psw(txt_val,weak_strength,medium_strength,strong_strength,psw_tishi,tishi_span,psw_div){
			/*强：字母+数字+特殊字符*/ 
			var strongRegex = /^(?!\d+$)(?![a-zA-Z]+$)(?![@#$%^&]+$)[\da-zA-Z@#$%^&]{6,12}$/;
			/*中： 字母+数字*/
			var mediumRegex = /^(?!\d+$)(?![a-zA-Z]+$)[a-zA-Z\d]{6,12}$/;
			/*弱：纯字母*/	
			var weakRegex = /^[a-zA-Z]{6,12}$/;
			if(weakRegex.test(txt_val)){
				weak_strength.show();
				medium_strength.hide();
				strong_strength.hide();
				psw_tishi.hide();
			}else if(mediumRegex.test(txt_val)){
				medium_strength.show();
				weak_strength.hide();
				strong_strength.hide();
				psw_tishi.hide();
			}else if(strongRegex.test(txt_val)){
				strong_strength.show();
				medium_strength.hide();
				weak_strength.hide();
				psw_tishi.hide();
			}else if(txt_val==""||txt_val.length==0){
				psw_tishi.show();
				tishi_span.text("密码不能为空！").css("color","red");
				psw_div.hide();
			}else{
				psw_tishi.show();
				tishi_span.text("密码输入有误！").css("color","red");
				psw_div.hide();
			}
	}
	
	/*确认密码验证*/
	var psw_txt;
	var conf;
	/*手机注册确认密码*/
	$("#confirm_psw").blur(function(){
		//获取确认密码的输入框的值
		psw_txt = $(this).val();
		conf = $(".qr_tishi");
		confirm_psw(psw_txt,conf);
	});
	
	/*邮箱注册确认密码*/
	$("#qr_psw").blur(function(){
		//获取确认密码的输入框的值
		psw_txt = $(this).val();
		conf = $(".email_conf_tishi");
		confirm_psw(psw_txt,conf);
	});
	
	/*确认密码验证*/
	function confirm_psw(psw_txt,conf){
		//如果与密码值相等
		if(psw_txt==txt_val){
			conf.hide();
		}else if(psw_txt==""||psw_txt.length==0){
			conf.children("span").text("密码不能为空！").css("color","red");
		}else{
			conf.show();
			conf.children("span").text("密码输入有误！").css("color","red");
		}
	}	
	
	var check_img;
	/*手机注册图片验证码*/
	$(".regin_checkcode>#check_a").click(function(){
		check_img = $(".regin_checkcode>#check_img");
		checkimg(check_img);
	});
	/*邮箱注册图片验证码*/
	$(".email_checkcode>#check_a").click(function(){
		check_img = $(".email_checkcode>#check_img");
		checkimg(check_img);
	});
	/*验证码*/
	function checkimg(check_img){
		var randoms;
		var min = 1;
		//图片随机数
		randoms = Math.floor(Math.random()*18+min);
		check_img.attr("src","images/check"+randoms+".png"); 
	}
	
	
	var getFreeInfo;
	var infom_btn;
	/*手机注册验证码*/
	$(".regin_infom_btn>#getPhoneFreeInfo").click(function(){
		getFreeInfo = $(this);
		infom_btn = $(".regin_infom_btn");
		getPhoneFreeInfo(getFreeInfo,infom_btn);
	});
	/*邮箱注册验证码*/
	$(".email_infom_btn>#getEmailFreeInfo").click(function(){
		getFreeInfo = $(this);
		infom_btn = $(".email_infom_btn");
		getPhoneFreeInfo(getFreeInfo,infom_btn);
	});
	/*免费获取短信验证码*/
	function getPhoneFreeInfo(getFreeInfo,infom_btn){
			var FreeTime = 60;
			clearInterval(timeId);
			var timeId = setInterval(function(){
				FreeTime--;
				getFreeInfo.val(FreeTime+"s 后重新获取").attr("disabled",true);
				infom_btn.css("text-align","center");
				if(FreeTime==0){
					getFreeInfo.val("重新获取");
					getFreeInfo.attr("disabled",false);
					clearInterval(timeId);
				}
			},1000);
	}
	
	
	var agree_btn;
	var agree_proto;
	/*手机注册同意协议*/
	$(".regin_reg>.agree_btn").click(function(){
		agree_btn = $(this);
		agree_proto = $(".regin_reg>.agree_proto"); 
		agree_protocal(agree_proto);
	});
	/*邮箱注册同意协议*/
	$(".email_reg>.agree_btn").click(function(){
		agree_btn = $(this);
		agree_proto = $(".email_reg>.agree_proto"); 
		agree_protocal(agree_proto);
	});
	/*同意协议验证*/
	function agree_protocal(agree_proto){
			if(agree_btn.prop("checked")){
				agree_proto.attr("disabled",false);
			}else{
				agree_proto.attr("disabled",true);
			}
	}
	
	
	/*邮箱名验证*/
		$(".email_name>#email_name").blur(function(){
			var email_name_reg = /^[A-Za-z]{2,}$/;
			if(email_name_reg.test($(this).val())){
				$(".email_name_tishi").hide();
			}else if($(this).val()==""||$(this).val().length==0){
				$(".email_name_tishi").show();
				$(".email_name_tishi>span").text("邮箱名不能为空！").css("color","red");
			}else{
				$(".email_name_tishi").show();
				$(".email_name_tishi>span").text("邮箱名输入有误！").css("color","red");
			}
		});
	
	/*邮箱地址验证*/
		$(".email_addr>#email_address").blur(function(){
			var email_name_address = /^[a-zA-Z0-9_.-]+@[a-zA-Z0-9-]+(\.[a-zA-Z0-9-]+)*\.[a-zA-Z0-9]{2,6}$/;
			if(email_name_address.test($(this).val())){
				$(".email_addr_tishi").hide();
			}else if($(this).val()==""||$(this).val().length==0){
				$(".email_addr_tishi").show();
				$(".email_addr_tishi>span").text("邮箱地址不能为空！").css("color","red");
			}else{
				$(".email_addr_tishi").show();
				$(".email_addr_tishi>span").text("邮箱地址输入有误！").css("color","red");
			}
		});
});

	