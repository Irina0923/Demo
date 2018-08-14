$(function(){
//==========================管理收货地址===============================
	$(".alter").click(function(){
		$(".edit_addr").slideToggle(500);
	});
//==========================新增地址===============================	
	$("#qr_new_btn").on("click","#addr_id",function(){
			var provinces = $(".province>option").html();	
			var p_city = $(".p_city>option").html();	
			var p_area = $(".p_area>option").html();	
			var p_textarea = $(".detail_addr>form>textarea").val();	
			var phone = $(".addr_phone>form>input").val();	
			var people = $(".addr_people>form>input").val();	
			var email = $(".addr_email>form>input[type=text]").val();	
			var address_new = provinces+" "+p_city+" "+p_area+" "+p_textarea+" "+phone+"("+people+" "+"收"+")"+" "+email;
			$(".has_addr>.p_radio>.p_table").append("<tr><td><form><input type='radio' /></form></td><td><span><span class='span1'>"+provinces+"</span><span class='span2'>"+p_city+"</span><span class='span3'>"+p_area+"</span> <span class='span4'>"+p_textarea+"</span>(<span class='span5'>"+people+"</span> 收) <span class='span6'>"+phone+"</span></span></td><td><span class='mod_addr'>编辑</span></td><td><span class='del_addr'>删除</span></td><td><span class='set_def'>设为默认</span></td></tr>");
		});
//===========================地址替换==========================	
	var i = 0;
	$("#p_table").on("click","input[type='radio']",function(){
		$(this).attr("p_radio",i);
		i++;
		$(this).attr("p_radio");
	       $("input:radio").attr("checked",false);
	       $(this).prop("checked",true);  
	       $("#default_addr").html($(this).parent().parent().next("td").html());
	       $(".edit_addr").slideUp(500);
	});
			$("#default_addr").html($("input:checked").parent().parent().next("td").html());	
	
//===========================地址删除==========================
	$(".del_addr").each(function(){
		$("#p_table").on("click",".del_addr",function(){
			$(this).parent().parent().remove();
		});
	});
//==========================设为默认============================
//动态创建的元素需要通过事件委托的方法绑定事件
	$(".set_def").each(function(){
		$("#p_table").on("click",".set_def",function(){
			$("#default_addr").html($(this).parent().parent().children("td:nth-child(2)").html());
			$("#p_table").find(".def_addr").html("设为默认").css("background","white").css("color","black");
			$(this).addClass("def_addr").html("默认地址").css("background","orange").css("color","white");
			$("#p_table").find("input").attr("checked",false);
			$(this).parent().parent().find("input").prop("checked",true);
		});
	});

//==========================编辑地址============================
	$(".mod_addr").each(function(){
		var mod_addr;
		$("#p_table").on("click",".mod_addr",function(){
			mod_addr = $(this);
			$(".add_addr div:first-child").remove(".address_show");
			$(".add_addr div:last-child").addClass(".address_show");
			$("#first_province").html($(this).parent().parent().find(".span1").html());
			$("#first_city").html($(this).parent().parent().find(".span2").html());
			$("#first_area").html($(this).parent().parent().find(".span3").html());
			$("#mode_txt_detail_addr").val($(this).parent().parent().find(".span4").html());
			$("#mode_guy").val($(this).parent().parent().find(".span5").html());
			$("#mod_phone").val($(this).parent().parent().find(".span6").html());
			
			$("#new_btn").on("click","#addr_id",function(){
				mod_addr.parent().parent().find(".span1").html($("#mode_form .province option:selected").text());
				mod_addr.parent().parent().find(".span2").html($("#mode_form .p_city option:selected").text());
				mod_addr.parent().parent().find(".span3").html($("#mode_form .p_area option:selected").text());
				mod_addr.parent().parent().find(".span4").html($("#mode_txt_detail_addr").val());
				mod_addr.parent().parent().find(".span5").html($("#mode_guy").val());
				mod_addr.parent().parent().find(".span6").html($("#mod_phone").val());
			});
		});	
	});
	
//===================================================================
		var sum_subtotal = 0;
		$(".subtotal").each(function(){
			var subtotal = parseFloat($(".subtotal").html().substring(1));
			sum_subtotal+=subtotal;
			$("#act_addr").html($("#default_addr").html());
			$("#p_table").on("click","input[type='radio']",function(){
				$("#act_addr").html($(this).parent().parent().next("td").html());
			});
		});
		$("#act_pay").html("¥"+sum_subtotal);
});