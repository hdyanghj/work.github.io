// 导航
$(function(){
    // nav收缩展开
    $('.nav-list>a').on('click',function(){
        if (!$('.nav').hasClass('nav-mini')) {
            if ($(this).next().css('display') == "none") {
                //展开未展开
                $('.nav-list').children('ul').slideUp(300);
                $(this).next('ul').slideDown(300);
                $(this).parent('li').addClass('nav-show').siblings('li').removeClass('nav-show');
            }else{
                //收缩已展开
                $(this).next('ul').slideUp(300);
                $('.nav-list.nav-show').removeClass('nav-show');
            }
        }
    });
    //点击按钮显示隐藏导航
    $('#navBtnIcon').on('click',function(){
        if (!$('.nav_cont').hasClass('nav-show')) {
            $('.nav_cont').addClass('nav-show');
            $('.nav_cont').removeClass('nav-hide');
            $('#hideNavCont').addClass('nav-show');
            $('#hideNavCont').removeClass('nav-hide');
            $('.nav_btn_icon').addClass('cur');

        }else{
            $('.nav_cont').addClass('nav-hide');
            $('.nav_cont').removeClass('nav-show');
            $('#hideNavCont').addClass('nav-hide');
            $('#hideNavCont').removeClass('nav-show');
            $('.nav_btn_icon').removeClass('cur');

        }
    });
     //点击导航外空白区域隐藏导航
    $('#hideNavCont').on('click',function(){
    	$('.nav_cont').addClass('nav-hide');
        $('.nav_cont').removeClass('nav-show');
        $('#hideNavCont').addClass('nav-hide');
        $('#hideNavCont').removeClass('nav-show');
    });
});
var panDuan=function(){
	$("html").css("font-size", document.documentElement.clientWidth / 375 * 312.5 + "%");
}
$(window).resize(function() {
    panDuan()
});
panDuan();