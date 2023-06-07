$(function(){
    //메뉴
    $(".main>li").hover(function(){
        $(this).find(".sub").stop().slideDown()
    },function(){
        $(".sub").stop().slideUp()
    })


    //슬라이드

    setInterval(function(){
        $(".move").animate({top:"-600px"},500,function(){
            $(".move").append($(".move li").eq(0));
            $(".move").css({top:0});
        })
    },2500)


    //팝업
    $(".click").click(function(){
        $(".pop_bg,.popup").show()
    })
    $(".close").click(function(){
        $(".pop_bg,.popup").hide()
    })
})//jq