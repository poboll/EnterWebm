function personal(id){
    $(".personal .personal-left .items").eq(id).addClass("active")
}
$(".pagination .select .select-top").on("click",function(e){
    $(this).siblings(".select-bot").slideToggle();
    e.stopPropagation();
})
$(document).on("click",function(){
	$(".pagination .select .select-bot").slideUp();
})

		Array.prototype.indexOf = function(val) {
			for (var i = 0; i < this.length; i++) {
			if (this[i] == val) return i;
			}
			return -1;
		};
		Array.prototype.remove = function(val) {
			var index = this.indexOf(val);
			if (index > -1) {
			this.splice(index, 1);
			}
		};
       // function clickVideo0(selector){
       //      var video = document.getElementById('audio');
       //      setTimeout(function(){
	      //       selector.click(function(){
	      //           var videoSrc = $(this).attr('data-src');
	      //           var s_html = $(this).html();
	      //           $(".speechocean .speeleft-bot .items1 .t3").removeClass("active");
	      //           $(".speechocean .speeleft-bot .items1 .t0 i").html(s_html);
	      //           $('#audio').attr('src',videoSrc);
	      //           video.play();
	      //           var _index = $(this).index();
	      //           speechoceanplay.slideTo(_index, 1000, false);
	      //           $(this).addClass("active").siblings().removeClass("active");
	      //       })
       //      },50)
       //  }
    function copyText() {
      var text = document.getElementById("text").innerText;
      var input = document.getElementById("input");
      input.value = text; // 修改文本框的内容
      input.select(); // 选中文本
      document.execCommand("copy"); // 执行浏览器复制命令
      console.log("复制成功");
    }

    var titswiper = new Swiper('.speechocean-titswiper .swiper-container',{
            slidesPerView : 4.5,
            breakpoints: { 
                500: { 
                  slidesPerView: 2.8,
                },
                750: {
                  slidesPerView: 3.2,
                }
              }

    })
    function  speechocean(id,idx){
        $(".bocweb-header .bocweb-nav .nav-li").eq(id).find(".nav-top").addClass("active").siblings(".nav-bot").find(".li").eq(idx).addClass("active");
        $(".speechocean .speechocean-right .speechocean-tit .item").eq(idx).addClass("active");
        $(".speechocean .speechocean-right .speechocean-tit .swiper-slide").eq(idx).find(".item").addClass("active");

             titswiper.slideTo(idx, 1000, false);
    }
    function staff(k){
        $(".staff0 .pcbox .items").eq(k).addClass("active");
        $(".staff-swiper .swiper-slide").eq(k).find(".items").addClass("active");
        var titstaff = new Swiper('.staff-swiper .swiper-container',{
            slidesPerView : 4.5,
            breakpoints: { 
                500: { 
                  slidesPerView: 3.2,
                },
                750: {
                  slidesPerView: 3.8,
                }
              }

        })
        titstaff.slideTo(k, 1000, false);

    }

    function img_abox(id){
        $(id).each(function(){
            var src= $(this).attr("src");
            $(this).wrap("<a class='abox' href='###' data-lightbox='roadtrip'></a>");
            $(this).parents("a.abox").attr("href",src)
        })
    }
    // img_abox("img");

        function clickVideo(selector){
            var video = document.getElementById('video');
            selector.on('click',function(){
                var videoSrc = $(this).attr('data-src');
                console.log(videoSrc);

                $('#video').attr('src',videoSrc);
                
                $('.video-fixed').stop().fadeIn();
                video.play();
            })
            $('.video-fixed .cha').on('click',function(){
                $('.video-fixed').stop().fadeOut();
                video.pause();
            })
            $(".video-fixed").on("click",function(){
                $(".video-fixed").fadeOut();
            })
            $(".video-fixed .videoboxs").on("click",function(e){
                e.stopPropagation()
            })
        }

    function onMouseScroll(e){
        var ttop = $(".investment-box").offset().top-160;
        var gtop =  $(document).scrollTop();
        // e.preventDefault();
        var wheel = e.originalEvent.wheelDelta || -e.originalEvent.detail;
        var delta = Math.max(-1, Math.min(1, wheel) );
        var hh = $(".investment-text .item").innerHeight();
        if(delta<0){//向下滚动
            if(ttop<gtop){
                return;
            }else{
                $("html,body").stop().animate({"scrollTop": $(".investment-box").offset().top}, "500");
                return;
            }
        }else{//向上滚动
            if(ttop >= gtop){
                $("html,body").stop().animate({"scrollTop":0}, "500");
                return;
            }else{
                return;
            }
        }    
    }
    function barken(dataid){
        var dataids =$(".flex-left-box").find("a").eq(dataid);
        var arrowW=dataids.innerHeight();
        var arrowT0=dataids.position().top;
        var mt0 =dataids.outerHeight(true) - dataids.outerHeight();
        $(".flex-left-box a").eq(dataid).addClass("active");
        var line = $('.flex-left-box .bar');
        line.stop().animate({
            height: arrowW,
            top: arrowT0+mt0
        });
    }


  function eachs(ele){
    $(ele).each(function(){
    var x=" add"+$(this).index()
    $(this).addClass(x)
    })
  }
  // 添加 类
function is_weixn(ele){
    var ua = navigator.userAgent.toLowerCase();
    var u = navigator.userAgent;
    var device =""; //当前设备信息
    if (u.indexOf('Android') > -1 || u.indexOf('Linux') > -1 ) {//安卓手机
        device = "Android";
        if(ua.match(/MicroMessenger/i)=="micromessenger") {
                $(ele).on("click",function(){
                    alert("请点击右上角“在浏览器中打开”，发送邮件");
                })
            return true;
            } else {
            
            return false;
            }
    } else if (u.indexOf('iPhone') > -1) {//苹果手机
        device = "iPhone";
          
    } else if (u.indexOf('Windows Phone') > -1) {//winphone手机
        device = "WindowsPhone";
    }
}

    function Remove(ele){
     $(ele).contents().filter(function() {
      return this.nodeType === 3;
     }).remove();
    }
    Remove(".pagination,.hbox,.business-03 .business03-ul")
    //去掉inline-block的间距
      // var imgs=$("img");
      // imgs.on("contextmenu",function(){return false;});
      // imgs.on("dragstart",function(){return false;});
      // document.body.onselectstart=document.body.oncontextmenu=function(){return false;};
      // 图片文字禁止
      // 

    // function _width(){
    //     if($(document).innerWidth() <= 1023){
    //         $("div").find("br").hide();
    //     }
    // }
    // _width();
    // $(window).resize(function(){
    //   _width();
    // });
    $(function(){
        function visual_button_scroll_down(){
                $(".idem").each(function(){
                    $(this).on('click',function(){
                        var target = $(this).attr('href');
                        var target_top = $(target).offset().top-64;
                        $('html,body').animate({
                            scrollTop : target_top
                        },1500, 'easeInOutQuad');
                        return false;
                    });
                })
            }
            visual_button_scroll_down();
    })

function scrollAnimation(ele) {
    $(ele).each(function() {
        var _this = $(this);
        if (_this.offset().top > $(window).scrollTop() + $(window).height() || _this.offset().top < $(window).scrollTop() - _this.outerHeight()) {
            // _this.removeClass('animate');
        } else if ($(window).scrollTop() > _this.offset().top - $(window).height() * 0.7) {
            //预先加载图片begin
            var arrayimg2 = [];
                arrayimg2.push(_this.find('img').attr('src'));
            _PreLoadImg(arrayimg2,function(){
                // 执行函数
                _this.addClass('animate');
                // _this.find(".k10 .ul").addClass('animate');
                _this.find(".loading-sw").remove();
            })
            //预先加载图片end
        }
    });
    $(window).scroll(function() {
        $(ele).each(function() {
            var _this = $(this);
            if (_this.offset().top > $(window).scrollTop() + $(window).height() || _this.offset().top < $(window).scrollTop() - _this.outerHeight()) {
                // _this.removeClass('animate');
            } else if ($(window).scrollTop() > _this.offset().top - $(window).height() * 0.7) {
                _this.addClass('animate');
                // _this.find(".k10 .ul").addClass('animate');
                _this.find(".loading-sw").remove();
            }
        });
    });
}
function scrollAnimation2(ele) {
    $(ele).each(function() {
        var _this = $(this);
        if (_this.offset().top > $(window).scrollTop() + $(window).height() || _this.offset().top < $(window).scrollTop() - _this.outerHeight()) {
            // _this.removeClass('animate');
        } else if ($(window).scrollTop()  >=  _this.offset().top - $(window).height() * 0.9) {
            _this.addClass('animate');
            setInterval(function(){
                $("body").addClass("avh0");
            },50)
            // _this.find(".k10 .ul").addClass('animate');
            _this.find(".loading-sw").remove();
        }
    });
    $(window).scroll(function(){
        $(ele).each(function() {
            var _this = $(this);
            if (_this.offset().top > $(window).scrollTop() + $(window).height() || _this.offset().top < $(window).scrollTop() - _this.outerHeight()) {
                // _this.removeClass('animate');
            } else if ($(window).scrollTop() >= _this.offset().top - $(window).height() * 0.9) {
                // console.log($(window).scrollTop() ,_this.offset().top - $(window).height() * 0.8)
                _this.addClass('animate');
                // _this.find(".k10 .ul").addClass('animate');
                _this.find(".loading-sw").remove();
            }
        });
    });
}

scrollAnimation2($('.secwen'));
scrollAnimation2($('.secwen-q'));



$(window).scroll(function() {
        var top = ($(window).scrollTop() / 3);
        $(".sy-con-banner").css("background-position-y");
        $(".sy-con-banner").css({'background-position-y': top,'background-size':"cover"});
});



