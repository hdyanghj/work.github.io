    wow = new WOW({
    　　animateClass: 'animated',
    });
    wow.init();

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
                //使网页不可滚动
                $('html,body').addClass('ovfHiden');

            }else{
                $('.nav_cont').addClass('nav-hide');
                $('.nav_cont').removeClass('nav-show');
                $('#hideNavCont').addClass('nav-hide');
                $('#hideNavCont').removeClass('nav-show');
                $('.nav_btn_icon').removeClass('cur');
                //使网页恢复可滚
                $('html,body').removeClass('ovfHiden');

            }
        });
         //点击导航外空白区域隐藏导航
        $('#hideNavCont').on('click',function(){
        	$('.nav_cont').addClass('nav-hide');
            $('.nav_cont').removeClass('nav-show');
            $('#hideNavCont').addClass('nav-hide');
            $('#hideNavCont').removeClass('nav-show');
            $('.nav_btn_icon').removeClass('cur');
            //使网页恢复可滚
            $('html,body').removeClass('ovfHiden');
        });
        // 区块链
        $('.zhankai').on('click',function(){
            if (!$('.hideLi').hasClass('zhankai-show')) {
                $('.hideLi').addClass('zhankai-show');
                $('.hideLi').removeClass('zhankai-hide');
                $('.zhankai i').addClass('biticon-shouqi');
                $('.zhankai i').removeClass('biticon-zhankai');

            }else{
                $('.hideLi').addClass('zhankai-hide');
                $('.hideLi').removeClass('zhankai-show');
                $('.zhankai i').addClass('biticon-zhankai');
                $('.zhankai i').removeClass('biticon-shouqi');

            }
        });
        // APP
        $('#moreBtnt').on('click',function(){
            if (!$('.moretag').hasClass('zhankai-show')) {
                $('.moretag').addClass('zhankai-show');
                $('.moretag').removeClass('zhankai-hide');
                $('#moretagBg').addClass('zhankai-show');
                $('#moretagBg').removeClass('zhankai-hide');

            }else{
                $('.moretag').addClass('zhankai-hide');
                $('.moretag').removeClass('zhankai-show');
                $('#moretagBg').addClass('zhankai-hide');
                $('#moretagBg').removeClass('zhankai-show');
            }
        });
        $('#moretagBg').on('click',function(){
            $('.moretag').addClass('zhankai-hide');
            $('.moretag').removeClass('zhankai-show');
            $('#moretagBg').addClass('zhankai-hide');
            $('#moretagBg').removeClass('zhankai-show');
        });
    });

    var panDuan=function(){
    	$("html").css("font-size", document.documentElement.clientWidth / 375 * 312.5 + "%");
    }
    $(window).resize(function() {
        panDuan()
    });
    panDuan();
    // 焦点图
    var swiper = new Swiper('#bannerSwiper .swiper-container', {
        autoplay: {
            delay: 3000,
            stopOnLastSlide: false,
            disableOnInteraction: true,
        },
        loop : true,
        pagination: {
            el: '.swiper-pagination',
        }
    });
    // 首页焦点图
    var homeswiper = new Swiper('#homeBanner .swiper-container', {
        autoplay: {
            delay: 3000,
            stopOnLastSlide: false,
            disableOnInteraction: true,
        },
        speed: 600,
        parallax: true,

        loop : true,
        pagination: {
            el: '.swiper-pagination',
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
          }
    });
    // tab切换
    $(function(){
        $("#jishuTab").find(".jishubox:first").show(); 
        $("#jiShu a").on("mouseover",function() {
            var index=$(this).index();
            $(this).parent().next().find(".jishubox").hide().eq(index).show(); 
            $(this).addClass("jishu_hover").siblings().removeClass("jishu_hover");
        })
    });
