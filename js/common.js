$(function(){
//=========================== 动态时间  ==================================
	function times(){
		//初始化日期对象
		var dates = new Date();
		//获取年份 2018年
		var year = dates.getFullYear();
		//获取月份 6月   月份+1是因为在js里面，月份是从0开始的，0表示1月
		var month = dates.getMonth()+1;
		//获取哪一天 29号
		var day = dates.getDate();
		//获取星期几
		var week = new Array(7);
		week[0] = "星期日",
		week[1] = "星期一",
		week[2] = "星期二",
		week[3] = "星期三",
		week[4] = "星期四",
		week[5] = "星期五",
		week[6] = "星期六"
		var weekday = week[dates.getDay()];
		//获取小时
		var hours = dates.getHours().toString();
		//时间不足10的在前面+0
		if(hours.length<2){
			hours = "0"+hours;
		};
		//获取分钟
		var minutes = dates.getMinutes().toString();
		if(minutes.length<2){
			minutes = "0"+minutes;
		};
		//获取秒
		var seconds = dates.getSeconds().toString();
		if(seconds.length<2){
			seconds = "0"+seconds;
		};
		$(".now_time").text(year+"年"+month+"月"+day+"日"+ hours+":"+minutes+":"+seconds+" "+weekday);
	}
	//调用函数，1秒执行一次
	setInterval(times,1000);
	
//============================= 菜单栏 =================================	
    $(function(){
        var wweya_li =$("div.tab_menu ul li");
        wweya_li.click(function(){
	        $(this).addClass("selected").siblings().removeClass("selected");  
	         var index =  wweya_li.index(this); 
	        $("div.tab_box > div").eq(index).show().siblings().hide(); 
        }).hover(function(){
            $(this).addClass("hover");
        },function(){
            $(this).removeClass("hover");           
        });
    });
//============================== 购物车 =================================

	function processerbar(){
		var line = $("#probar>#line");
		var sum_val = 0;
		$(".txt_amount").each(function(){
			var txt_amount_len = parseInt($(this).val());
			sum_val += txt_amount_len;
			if(sum_val){
				line.css("width",sum_val+"px").css("direction","right");
				$("#percent").html(sum_val+"%");
			}
			if(sum_val==100){
				$(".amount_plus").css("pointer-events","none");
				alert("您的购物车已满!");
			}else{
				$(".amount_plus").css("pointer-events","all");
			}
		});
		
	}
	processerbar();
//============================== 全 选 =================================	
		//全选
		$(".goods_info>.th_item>#all_choose").click(function(){
              var userids=this.checked;
              //获取单选框 遍历输出复选框
              $("input[name=choose_one]").each(function(){
                  this.checked=userids;
			});
			totalMoney();
		});
	
		//单选
		//给name=choose_one的复选框绑定单击事件
         $("input[name=choose_one]").on("click",function(){
             var one_checked_length = $("input[name=choose_one]:checked").length;
             var all_checked_length = $("input[name=choose_one]").length;
             if(one_checked_length==all_checked_length){
             	$(".goods_info>.th_item>#all_choose").get(0).checked = true;
             }else{
             	$(".goods_info>.th_item>#all_choose").get(0).checked = false;
             }
             totalMoney();
		});
		
//============================商品数量======================================
	var amount_plus = $('.amount_plus'),
    	amount_minus = $('.amount_minus'),
    	txt_amount = $('.txt_amount');
    var is_click = true;
    //商品數量增加
    amount_plus.click(function () {
        var $inputVal = $(this).prev('input'),
            $count = parseInt($inputVal.val())+1,
            $obj = $(this).parents('.tb_amount').find('.amount_minus'),
            $priceTotalObj = $(this).parents('.detail_goods').find('.sum_price'),
            //单价
            $price = $(this).parents('.detail_goods').find('.price').html(),  
            $priceTotal = $count*parseInt($price.substring(1));
	        $inputVal.val($count);
	        $priceTotalObj.html('￥'+$priceTotal);
	         if($inputVal.val()>1 && $obj.hasClass('reSty')){
	            $obj.removeClass('reSty');
	        }   
	        totalMoney();
	        processerbar();
    });
    		
	        
	//商品數量減少
    amount_minus.click(function () {
        var $inputVal = $(this).next('input'),
            $count = parseInt($inputVal.val())-1,
            $priceTotalObj = $(this).parents('.detail_goods').find('.sum_price'),
            //单价
            $price = $(this).parents('.detail_goods').find('.price').html(),  
            $priceTotal = $count*parseInt($price.substring(1));
	        if($inputVal.val()>1){
	            $inputVal.val($count);
	            $priceTotalObj.html('￥'+$priceTotal);
	        } 
	        if($inputVal.val()==1 && !$(this).hasClass('reSty')){
	            $(this).addClass('reSty');
	        }
       	 	totalMoney();
       	 	processerbar();
    });

    txt_amount.keyup(function () {
    	console.log("dsdds")
        var $count = 0,
            $priceTotalObj = $(this).parents('.detail_goods').find('.sum_price'),
            //单价
            $price = $(this).parents('.detail_goods').find('.price').html(),  
            $priceTotal = 0;
        if($(this).val()==''){
            $(this).val('1');
        }
        $(this).val($(this).val().replace(/\D|^0/g,''));
        $count = $(this).val();
        $priceTotal = $count*parseInt($price.substring(1));
        $(this).attr('value',$count);
        $priceTotalObj.html('￥'+$priceTotal);  
        totalMoney();
        processerbar();
    });
    
  //================================= 移除商品 ===================================== 
    var $order_lists = null;
    var $order_content = '';
    $('.delBtn').click(function () {
        $order_lists = $(this).parents('.detail_goods');
        $order_content = $order_lists.parents('.com_goods');
        $('.model_bg').fadeIn(300);
        $('.my_model').fadeIn(300);
    });

    //关闭模态框
    $('.closeModel').click(function () {
        closeM();
    });
    $('#del_close_btn').click(function () {
        closeM();
    });
    function closeM() {
        $('.model_bg').fadeOut(300);
        $('.my_model').fadeOut(300);
    }
    //确定按钮，移除商品
    $('#del_sure_btn').click(function () {
        $order_lists.remove();
        if($order_content.html().trim() == null || $order_content.html().trim().length == 0){
            $order_content.parents('.cartBox').remove();
        }
        closeM();
        $sonCheckBox = $('.son_check');
    });
//================================== 结 算  ===================================
		function totalMoney() {
		    var total_money = 0;
		    var total_count = 0;
		    //var calBtn = $('.calBtn a');
		    $(".choose_one").each(function () {
		        if ($(this).is(':checked')) {
		            var goods = parseInt($(this).parents('.detail_goods').find('.sum_price').html().substring(1));
		            var num =  parseInt($(this).parents('.detail_goods').find('.txt_amount').val());
		            total_money += goods;
		            total_count += num;
		        }
		    });
		        $('.total_text').html('￥'+total_money);
		        $('.piece_num').html(total_count);
		}
//=========================下拉菜单栏============================
	$(".f1").each(function(){
		$(this).on("click",function(){
			$(this).next("ul").slideToggle().end().siblings("li").next("ul").hide();
		});
	});
//=====================网银支付==============================
	$(function(){
		var bank_choose_input = $(".bank_choose>form>input");
		bank_choose_input.click(function(){
	       $(this).siblings().attr("checked",false);
	       $(this).attr("checked",true);  
	   });
	});
//=========================== 日历 =======================================
		/*日历*/
		/*function calendar(){
		    $('.calendar_div').calendar({
		        trigger: '.dt',
		        zIndex: 999,
				format: 'yyyy-mm-dd',
		        onSelected: function (view, date, data) {
		            console.log('event: onSelected')
		        },
		        onClose: function (view, date, data) {
		            console.log('event: onClose')
		            console.log('view:' + view)
		            console.log('date:' + date)
		            console.log('data:' + (data || 'None'));
		        }
    		});
		}
		calendar();*/
});

    