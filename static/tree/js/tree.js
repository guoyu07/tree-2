/**
 * Created by albert on 15-11-29.
 */

$(function () {

    //$('.menu-top').css(
    //    "height",($(window).height()*0.2).toString()
    //);
    //alert("test")
    $(".tree-img").fadeIn();
    $(".bless-tucao").fadeIn();
    var windowheight = ($(window).height()-$('.menu-top').height());
    $('.container').css(
        "height",(windowheight*0.9).toString()
    );

    $('.footer').css(
        "height",(windowheight*0.1).toString()
    )
    //$('.bless-tocao').css(
    //    "top",(windowheight*0.8).toString()
    //)
    //积分按钮


    //排行按钮


    //添加朋友按钮
    $("#add_friend").fadeIn(2000)
        .on('tap', function () {

        })

    //浇水按钮
    $(".water-flower").fadeIn(2500)
        .on('tap', function () {
            $(".list-contain").hide();
            $(".tree-img").fadeIn();
            $(".bless-tucao").fadeIn();
        });

    //历史按钮
    $(".history").fadeIn(3000)
        .on('tap', function () {
            //$.ajax({
            //    type:'POST',
            //    //TODO 请求服务器的数据
            //})
            $(".tree-img").hide();
            $(".bless-tucao").hide();
            $(".list-contain").fadeIn();
        });

    //心愿按钮
    $(".willing").fadeIn(3500)
        .on('tap', function () {
            $.ajax({
                type:'POST',
            })
        })
        //.ajax({
        //    type:'POST',
        //});

    //祝福按钮
    $(".bless").on('tap', function () {
        $(".weui_dialog_hd").html('<p>这是祝福</p>');
        $("#dialog1").show();
        $("#dialog1").find('.weui_btn_dialog').on('tap', function(){
            $("#dialog1").hide();
        })
    })

    //吐槽按钮
    $(".tucao").on('tap', function () {
        $(".weui_dialog_hd").html('<p>这是吐槽</p>');
        $("#dialog1").show();
        $("#dialog1").find('.weui_btn_dialog').on('tap', function(){
            $("#dialog1").hide();
        })
    })
})
