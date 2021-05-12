$(function(){
  $("#btn").click(function(){
    $("h1")
      .text("ようこそ、N高のみなさん")
      .css("color","red");
  })
})

$(function(){
  let scroll = 0;
  $(window).scroll(function(){
    scroll = $(this).scrollTop();
    $("#scroll-position").text(scroll);
  });
});

$(function(){
  $("#btn").click(function(){
    $("h1").css("color", "ff0000");
  });
});
