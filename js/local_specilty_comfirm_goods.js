$(function(){
	var $order_lists = null;
    var $order_content = '';
    
	var cg_btn;
    $(".confirm_goods").each(function(i){
    	$(".confirm_goods").click(function () {
	        $order_lists = $(this).parents('.detail_goods');
	        $order_content = $order_lists.parents('.com_goods');
	        $('.model_bg').fadeIn(300);
	        $('.my_model').fadeIn(300);
	        cg_btn = $(this);
	        $("#pay-sure").click(function(){
				if($("#pay_psw").val()!=""){
					closeM();
					cg_btn.val("已收货").css("background","lightgray");	
		        	cg_btn.parent().parent().parent().find("input[id=eval_order]").attr("disabled",false).css("background","blue");
		        	if(cg_btn.val()=="已收货"){
		        		cg_btn.attr("disabled",true);
		        	}
				}else{
					$("#pay_warm").html(" 请输入支付密码 !").css("color","red");
					cg_btn.parent().parent().parent().find("input[id=eval_order]").attr("disabled",true).css("background","lightgray");
				}
	        });
		});
    });
    		
	function model(){
		//关闭模态框
	    $('#closeModel').click(function () {
	        closeM();
	    });
	}
	model();
	
	    function closeM() {
	        $('.model_bg').fadeOut(300);
	        $('.my_model').fadeOut(300);
	    }	

});


