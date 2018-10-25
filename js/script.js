function randomMovement(IdRef) {
    var positionH = $(window).height() - $(IdRef).height();
    var positionW = $(window).width() - $(IdRef).width();
    var time = Math.floor(((Math.random() * 3) + 2) * 1000);
    
    $(IdRef).animate({left: Math.floor(Math.random() * positionW), top: Math.floor(Math.random() * positionH)}, time, function () {
        randomMovement(IdRef);
    });
}
randomMovement("#fish1Id");
randomMovement("#fish2Id");


$(document).click(function (e) {
    if(e.target.id==="fish1Id") {
        $("#fish1Id").stop().animate({
        height: 400
        , width: 400
    }).delay(1000).animate({
        height: 250
        , width: 250
 }); randomMovement("#fish1Id");
    }
    else if(e.target.id === "bubble1Id"){
        $("#bubble1Id").stop();
        $("#bubble1Id").fadeOut("slow");
        bubblesMovement("#bubble1Id");
    }
    else if(e.target.id === "bubble2Id"){
        $("#bubble2Id").stop();
        $("#bubble2Id").fadeOut("slow");
        bubblesMovement("#bubble2Id");
    }
    else if(e.target.id === "bubble3Id"){
        $("#bubble3Id").stop();
        $("#bubble3Id").fadeOut("slow");
        bubblesMovement("#bubble3Id");
    }
    else{
        $("#fish1Id").stop().animate({
        left: e.pageX - 120, top: e.pageY - 120
 });$(this).stop(); randomMovement("#fish1Id");
    }
});
$("#fish2Id").mouseover(function () {
    var w = $(window).width() - 50;
    var h = $(window).height() - 50;
    $("#fish2Id").stop().animate({
        left: Math.random() * w
        , top: Math.random() * h
    }); randomMovement(this);
});

function bubblesMovement(IdRef) {
    var positionH2 = $(window).height();
    var positionW2 = $(window).width();
    var time = Math.floor((Math.random() * 4 + 5) * 1000);
    
    $(IdRef).offset({top: positionH2, left: Math.floor(Math.random() * positionW2) - 100});
    $(IdRef).fadeIn();
    $(IdRef).animate({top: -100}, time, function () { bubblesMovement(IdRef)});
}

bubblesMovement("#bubble1Id");
bubblesMovement("#bubble2Id");
bubblesMovement("#bubble3Id");

