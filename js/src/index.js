/**
 * Created by Administrator on 2016/4/28 0028.
 */
var $navbarOut = $(".navbar_out");
$navbarOut.find('.navbar_con').hide();
$navbarOut.find('h3').click(function () {
	var $tipsThis = $(".tips_icon",this);
	var next = $(this).nextAll();
	$tipsThis.toggleClass("tips_active");
	next.slideToggle('fast');
	$('.navbar_con').not(next).slideUp('fast');
	$(".bd_img").find(".tips_icon").not($tipsThis).removeClass("tips_active");
	return false;
});

$(".result-list").hover(function(){
	$(this).toggleClass("result-bd");
});

$(".link-del").click(function(){
	$(".del_alert").fadeIn();
});

$(".del").click(function(){
	$(".add_user_alert").fadeOut();
});

$(".cencle").click(function(){
	$(".del_alert").fadeOut();
})