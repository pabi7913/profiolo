// 設置每次重整從頭開始（動畫的頭）
$("html, body").animate({ scrollTop: 0 }, "slow");

// 開頭動畫:淡出
// $(".opening").fadeOut(5000);


// header
$('header>.s0>.logo>a>img').mouseenter(function () {
    {
        $(this).addClass('animate__animated animate__pulse').addClass('infinite');
    }
}).mouseleave(function () {
    {
        $(this).removeClass('animate__animated animate__pulse');
    }
})

// nav設置滑鼠碰到會rubberBand
$('nav>ul>a>li').mouseenter(function () {
    {
        $(this).addClass('animate__animated animate__rubberBand').addClass('infinite').css('color', 'rgb(195, 110, 130)');
    }
}).mouseleave(function () {
    {
        $(this).removeClass('animate__animated animate__rubberBand').css('color', '#555');
    }
})

// icon設置滑鼠碰到會heartBeat
$('div>a>i.fab').mouseenter(function () {
    {
        $(this).addClass('animate__animated animate__heartBeat').addClass('infinite').css('color', 'rgb(195, 110, 130)');
    }
}).mouseleave(function () {
    {
        $(this).removeClass('animate__animated animate__heartBeat').css('color', '#555');
    }
})

// s1輪播牆
let a = $('.s1>.banner>.img-group>img')
a.mouseenter(function () {
    let A = $('.s1>.banner>.img-group')
    let aa = $(this).index();
    let aw = $(this).width()
    let b = aw - aw * (aa + 1)
    A.addClass('paused').css('transform', 'translateX(' + b + 'px)');
})

$(this).mouseleave(function () {
    $('.s1>.banner>.img-group').removeClass('paused');
})
// 點點觸發換頁
let c = $('.s1>.banner>ul>li')
c.mouseenter(function () {
    $(this).addClass('animate__animated animate__heartBeat').addClass('infinite');

    let cc = $(this).index()
    console.log($(this).index())
    let A = $('.s1>.banner>.img-group')
    let aw = $('.s1>.banner>.img-group>img').width()
    let d = aw - aw * (cc + 1)
    console.log('d', d);

    A.css('transform', 'translateX(' + d + 'px)')
        .css('animation-name', 'carousel_dont_move')

})

c.mouseleave(function () {
    $(this).removeClass('animate__animated animate__heartBeat')
    let A = $('.s1>.banner>.img-group')
    A.removeAttr("style")
})
// 手機版
let ai = $('.s1>.banner-iphone>.img-group>img')
ai.mouseenter(function () {
    let Ai = $('.s1>.banner-iphone>.img-group')
    let aai = $(this).index();
    let awi = $(this).width()
    let bi = awi - awi * (aai + 1)
    Ai.addClass('paused').css('transform', 'translateX(' + bi + 'px)');
})

$(this).mouseleave(function () {
    $('.s1>.banner-iphone>.img-group').removeClass('paused');
})

let ci = $('.s1>.banner-iphone>ul>li')
ci.mouseenter(function () {
    $(this).addClass('animate__animated animate__heartBeat').addClass('infinite');

    let cci = $(this).index()
    console.log($(this).index())
    let Ai = $('.s1>.banner-iphone>.img-group')
    let awi = $('.s1>.banner-iphone>.img-group>img').width()
    let di = awi - awi * (cci + 1)
    console.log('d', di);

    Ai.css('transform', 'translateX(' + di + 'px)').css('animation-name', 'carousel_dont_move')

})

ci.mouseleave(function () {
    $(this).removeClass('animate__animated animate__heartBeat')
    let A = $('.s1>.banner-iphone>.img-group')
    A.removeAttr("style")
})


// s2滑到時再出現，小圖示動
let s2_top = $('.s2').length > 0 && $('.s2').offset().top;
// console.log('s2高度', s2_top)

let window_height = $(window).height();
// console.log('螢幕高', window_height)
// console.log('s2的真實高度', s2_top - window_height)

let window_height_part_3in2 = $(window).height() / 10 * 9;
// console.log('視窗的3分之2', window_height_part_3in2)

// window_height等於整個螢幕高
// 當滾輪滾到(window_height_part_3in2)超過螢幕的3分之2時，.s2出現
$(window).scroll(function () {
    let scroll_top = $(this).scrollTop();
    console.log('目前捲軸高度位置', scroll_top)
    if ((scroll_top) > (s2_top - window_height - window_height_part_3in2)) {
        $('.s2').css('opacity', '1').addClass('animate__animated animate__fadeInUp')
        $('ul>li>div>i').addClass('animate__animated animate__heartBeat').css('animation-iteration-count', 'infinite')
    }
    else {
        $('.s2').css('opacity', '0').removeClass('animate__animated animate__fadeInUp')
    }
})

// .s3
let s3_top = $('.s3').length > 0 &&  $('.s3').offset().top;
console.log('s3高度', s3_top)

$(window).scroll(function () {
    let scroll_top = $(this).scrollTop();
    console.log('目前捲軸高度位置', scroll_top)
    if ((scroll_top) > (s3_top - window_height - window_height_part_3in2)) {
        $('.s3').css('opacity', '1').addClass('animate__animated animate__fadeInUp')
    }
    else {
        $('.s3').css('opacity', '0').removeClass('animate__animated animate__fadeInUp')
    }
})

// 滑鼠移到作品後觸發動畫
$('.s3>ul>li').mouseenter(function () {
    $(this).addClass('animate__animated animate__pulse infinite');
    $(this).find('img').css('opacity', .25);
    $(this).find('.title').css('opacity', 1);
}).mouseleave(function () {
    $(this).removeClass('animate__animated animate__pulse');
    $(this).find('img').css('opacity', 1);
    $(this).find('.title').css('opacity', 0);
});

    // s4
    let s4_top = $('.s4').length > 0 && $('.s4').offset().top;
    console.log('s4高度', s4_top)


    // if ($(window).width() < 760){}

    $(window).scroll(function () {
        let scroll_top = $(this).scrollTop();
        console.log('s4高度', s4_top)
        console.log('目前s4捲軸高度位置', scroll_top)
        if ((scroll_top) > (s4_top - window_height - window_height_part_3in2)) {
            $('.s4').css('opacity', '1').addClass('animate__animated animate__fadeInUp')
        }
        else {
            $('.s4').css('opacity', '0').removeClass('animate__animated animate__fadeInUp');
        }
    })

    // 滑鼠移到blog-照片後觸發動畫
    // 桌機+ipad:flip 手機:pulse(基偶數倒圓角相反)

    // 基數
$('.s4>ul>li>img:even').mouseenter(function () {
    // 手機:
    if ($(window).width() < 760){
        $(this).addClass('animate__animated animate__pulse infinite').css('border-radius','10rem 0 10rem 0').css('transition','.5s');
    }
    // 桌機+ipad:
    else {$(this).addClass('animate__animated animate__flip');
    }
}).mouseleave(function () {
    if ($(window).width() < 760){
        $(this).removeClass('animate__animated animate__pulse').css('border-radius','0');
    }
    else {$(this).removeClass('animate__animated animate__flip');
    }
});
// 偶數
$('.s4>ul>li>img:odd').mouseenter(function () {
    if ($(window).width() < 760){
        $(this).addClass('animate__animated animate__pulse infinite').css('border-radius','0rem 10rem 0rem 10rem').css('transition','.5s');
    }
    else {$(this).addClass('animate__animated animate__flip');
    }
}).mouseleave(function () {
    // 手機:
    if ($(window).width() < 760){
        $(this).removeClass('animate__animated animate__pulse').css('border-radius','0');
    }
    // 桌機+ipad:
    else {$(this).removeClass('animate__animated animate__flip');
    }
});


// 手機版時換動畫？


// 滑鼠移到more觸發動畫
    $('.s4>ul>li>.button').hover(function () {
        $(this).addClass('animate__animated animate__pulse').addClass('infinite').addClass('time-03s');
    }).mouseleave(function () {
        $(this).removeClass('animate__animated animate__pulse');
    });



    // 內文只顯示58字，其餘省略
    $(function () {
        let len = 58; // 超過50個字以"..."取代
        $(".s4>ul>li>.content").each(function (i) {
            if ($(this).text().length > len) {
                $(this).attr("title", $(this).text());
                let text = $(this).text().substring(0, len - 1) + "...";
                $(this).text(text);
            }
        });
    })

    // footer




    $('footer>.footer-icon>i').addClass('animate__animated animate__fadeOutUp').addClass('infinite').click(function(){
        $("html, body").animate({ scrollTop: 0 }, "slow");
    })
