$(function(){ //HTMLちゃんと読み込んでから実行するよ
    $(".programming >.contents").hide();
    $(".english >.contents").hide();


    $(".programming > h2").on("mouseover",function(){
        $(".programming >.contents").slideDown();
    
    });

});

$(window).on("scroll",function(){
    //Englishの画面最上部からの距離を取得
    let english = $(".english > h2").offset().top;
    //offsetとは隙間のこと 上からQ11までの距離

    //画面の高さ
    let wh = $(window).height();

    if(english <= $(window).scrollTop()+ wh){
        $(".english >.contents").fadeIn(5000);//フェードインする

    }
    $("#toTop").on("click",function(){
        $("body,html").animate({scrollTop: 0},500);///0.5秒かけてシューっとトップに戻る
        //＄()は両方に適応するよ   //{}の中はcssの書き方と一緒
    });
    });