$(document).ready(function(){
    //jqueryの呼び方
});

$(function(){
    // 省略記法
});


$(function(){
    $("#btn").mousedown(function(){
        $("h1").text("諦めたら");
        $("h1").css("color", "ff0000");
    });
    $("#btn").mouseup(function(){
        $("h1").text("試合終了だよ");
    });
})

$(function(){
    $("#btn").click(function(){
        $("h1").text("N高のみなさん、こんにちは!");
    });
    $("p").text("こんにちは、N高の皆さん");
});

$(function(){
    $("#logo").text("うまく動いていますでしょうか");
});

$(function(){
    $(".icon").text("Hello World!!!");
});

$(function(){
    $(div, p, span).text("これからもきっと大丈夫");
});

$(function(){
    $("#btn").click(function(){
      $("h1").css("color", "ff0000");
    });
  });
  


