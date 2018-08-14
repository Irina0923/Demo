$(function(){
	/*验证用户名*/
	function username(){
		$("#username").blur(function(){
			//用户名正则表达式
			var reg_username = /^[A-Za-z0-9_\-\u4e00-\u9fa5]+$/;
			//获取username的值
			var username = $("#username").val();
			if(reg_username.test(username)&&username.length>=3&&username.length<=6){
				console.log("用户名正确");
			}else{
				console.log("用户名错误");
			}
		});
	}
	username();
	
	/*验证密码*/
	function pass_word(){
		$("#password").blur(function(){
			//用户名正则表达式
			var reg_password = /^[A-Za-z0-9_-]+$/;
			//获取username的值
			var password = $("#password").val();
			if(reg_password.test(password)&&password.length>=6&&password.length<=12){
				console.log("密码正确");
			}else{
				console.log("密码错误");
			}
		});
	}
	pass_word();
	
	/*密码的显示与不显示*/
	function show_password_close(){
		$("#eye").click(function(){
			//如果当前的眼睛图片为闭眼状态
			if($(this).attr("src")=="images/closeye.png"){
				$(this).attr("src","images/openeye.png");
				$("#password").prop("type","text");
			}else{
				$(this).attr("src","images/closeye.png");
				$("#password").prop("type","password");
			}
		});
	}
	show_password_close();
	
	
		function getCookie(c_name){
			if (document.cookie.length>0){
			  c_start=document.cookie.indexOf(c_name + "=");
			  if (c_start!=-1){ 
			    c_start=c_start + c_name.length+1; 
			    c_end=document.cookie.indexOf(";",c_start);
			    if (c_end==-1) c_end=document.cookie.length;
			    return unescape(document.cookie.substring(c_start,c_end));
			    } 
			  }
			return "";
		}
		//创建和存储cookie  
		function setCookie(c_name,value,expiredays){
			var exdate=new Date();
			//setDate设置当前天
			exdate.setDate(exdate.getDate()+expiredays);
			document.cookie=c_name+ "=" +escape(value)+
			((expiredays==null) ? "" : ";expires="+exdate.toGMTString());
		}
		
		
		
		function checkCookie(){
			username=getCookie('username');
		if (username!=null && username!=""){
			alert('Welcome again '+username+'!');
			}
		else{
		  username=prompt('Please enter your name:',"");
		  if(username!=null && username!=""){
		    	setCookie('username',username,365);
		    }
		  }
		}
});